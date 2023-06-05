import configparser
import json
import os
from datetime import datetime, timedelta
import re
# from pymongo.mongo_client import MongoClient
# from pymongo.server_api import ServerApi
# from mongoengine import *
# from motor import *
from telethon import TelegramClient
from telethon.errors import SessionPasswordNeededError
from telethon.tl.functions.messages import GetHistoryRequest
from telethon.tl.types import PeerChannel
from telethon.sessions import StringSession
from os.path import join
from http.server import BaseHTTPRequestHandler

# extract messages from telegram channel from date X


# some functions to parse json date
class DateTimeEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, datetime):
            return o.isoformat()

        if isinstance(o, bytes):
            return list(o)

        return json.JSONEncoder.default(self, o)


# Reading Configs
config = configparser.ConfigParser()
config.read("config.ini")

# Setting configuration values
api_id = config['Telegram']['api_id'] 
# api_id = os.environ.get('api_id') 
api_hash = config['Telegram']['api_hash'] 
# api_hash = os.environ.get('api_hash') 

api_hash = str(api_hash)

phone = config['Telegram']['phone'] #os.environ.get('phone')
# phone = os.environ.get('phone')
username = config['Telegram']['username'] #os.environ.get('username')
# username = os.environ.get('username')
url = config['Telegram']['url'] #os.environ.get('channel_url')
# url = os.environ.get('channel_url')

session_string = config['Telegram']['session_string'] #os.environ.get('session_string')
# session_string = os.environ.get('session_string')
# Create the client and connect
client = TelegramClient(StringSession(session_string), api_id, api_hash)

async def main(phone):
    await client.start()
    print("Client Created")
    #print(client.session.save())
    # Ensure you're authorized
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

    # replace with your desired date, for all messages set data before telegram channel
    start_date = datetime(2023, 6, 2, 0, 0)  
    

    offset_id = 0
    limit = 100
    all_messages = []
    total_messages = 0
    total_count_limit = 0

    while True:
        print("Current Offset ID is:", offset_id, "; Total Messages:", total_messages)
        history = await client(GetHistoryRequest(
            peer=my_channel,
            offset_id=offset_id,
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
        current_company = None
        message_dict = {}
        
        # Filtering messages to get only those that match the date criteria
        for message in messages:
            if message.date.date() >= start_date.date():
                message.message = re.sub(r"de .*? até /n", "", str(message.message))
                message.message = re.findall(r"(Hot|Max|SMILES|AZUL|LATAM|[0-9]+,[0-9]+)", message.message)

                for item in message.message:
                    if item == "Max":
                        if message_dict is not None:
                            all_messages.append(message_dict)

                        message_dict = {
                            "date": message.date.isoformat(),
                            "name": "Max",
                            "Latam": None,
                            "Gol": None,
                            "Azul": None
                        }
                        current_company = "Max"

                    elif item == "Hot":
                        if message_dict is not None:
                            all_messages.append(message_dict)

                        message_dict = {
                            "date": message.date.isoformat(),
                            "name": "Hot",
                            "Latam": None,
                            "Gol": None,
                            "Azul": None
                        }
                        current_company = "Gol"

                    else:
                        try:
                            value = float(item.replace(',', '.'))
                            message_dict[current_company] = value
                        except ValueError:
                            pass

                if message_dict is not None:
                    all_messages.append(message_dict)
                    message_dict = None

            else:
                break
       

        

        offset_id = messages[-1].id
        total_messages = len(all_messages)
        
        if total_count_limit != 0 and total_messages >= total_count_limit:
            break
        
    # ready_data.reverse() ##to reverse data extract order

    with open('../src/assets/channel-messages-add.json', 'w') as outfile:
        json.dump(all_messages, outfile, cls=DateTimeEncoder)

with client:
    client.loop.run_until_complete(main(phone))