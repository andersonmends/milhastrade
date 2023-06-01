
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import configparser
import json
from datetime import datetime
import re
from pymongo import MongoClient

from telethon import TelegramClient
from telethon.errors import SessionPasswordNeededError
from telethon.tl.functions.messages import GetHistoryRequest
from telethon.tl.types import PeerChannel
from telethon.sessions import StringSession


# Reading Configs
config = configparser.ConfigParser()
config.read("config.ini")

# Setting configuration values
api_id = config['Telegram']['api_id']
api_hash = config['Telegram']['api_hash']
phone = config['Telegram']['phone']
username = config['Telegram']['username']
url = config['Telegram']['url']
session_string = config['Telegram']['session_string']


# Create the client and connect
client = TelegramClient(StringSession(session_string), api_id, api_hash)

async def main(phone):
    await client.start()
    print("Client Created")

    if await client.is_user_authorized() == False:
        await client.send_code_request(phone)
        try:
            await client.sign_in(phone, input('Enter the code: '))
        except SessionPasswordNeededError:
            await client.sign_in(password=input('Password: '))

    me = await client.get_me()

    user_input_channel = url

    if user_input_channel.isdigit():
        entity = PeerChannel(int(user_input_channel))
    else:
        entity = user_input_channel

    my_channel = await client.get_entity(entity)

    start_date = datetime(2023, 5, 23, 0, 0)  

    limit = 100
    all_messages = []
    total_count_limit = 0

    while True:
        history = await client(GetHistoryRequest(
            peer=my_channel,
            offset_id=0,
            offset_date=None,
            add_offset=0,
            limit=limit,
            max_id=0,
            min_id=0,
            hash=0
        ))
        if not history.messages:
            break
        
        messages = history.messages
        
        for message in messages:
            if message.date.date() >= start_date.date():
                message.message = re.sub(r"de .*? até ", "", str(message.message))
                message.message = re.findall(r"(HM|Max|Gol|Azul|[0-9]+,[0-9]+)", message.message)
                message_dict = {'date': message.date, 'message': message.message}
                all_messages.append(message_dict)
            else:
                break
        
        offset_id = messages[-1].id
        
        if total_count_limit != 0 and len(all_messages) >= total_count_limit:
            break

    # Data processing and cleaning

    clean_data = []
    for item in all_messages:
        new_item = {"date": item["date"]}
        message = item["message"]
        i = 0
        while i < len(message):
            name = message[i]
            i += 1
            if name in ["HM", "Max"]:
                new_item["name"] = name
            elif name in ["Gol", "Azul"]:
                data_array = []
                while i < len(message) and not message[i] in ["Gol", "Azul", "HM", "Max"]:
                    data_array.append(float(message[i].replace(",", ".")))
                    i += 1
                new_item[name] = data_array
            else:
                i += 1
        clean_data.append(new_item)

    ready_data = []
    for item in clean_data:
        new_item = {"date": item["date"], "name": item.get("name")}
        for company in ["Gol", "Azul"]:
            values = item.get(company, [])
            if values:
                max_value = max(values)
                new_item[company] = max_value
        ready_data.append(new_item)

    # Saving data to MongoDB Atlas

    # client = MongoClient(mongo_uri)
    
    uri = "mongodb+srv://andersonmends:sephir5684@sa-east-1-cluster.rks3gnd.mongodb.net/?retryWrites=true&w=majority"

    # Create a new client and connect to the server
    clientDB = MongoClient(uri, server_api=ServerApi('1'))

    # Send a ping to confirm a successful connection
    try:
        clientDB.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")
    except Exception as e:
        print(e)


    db = clientDB["cotacao"]
    collection = db["t"]

    collection.insert_many(ready_data)

with client:
    client.loop.run_until_complete(main(phone))
