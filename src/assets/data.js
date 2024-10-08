import axios from 'axios';
import * as Realm from "realm-web";

// const jsonString = require("./channel-messages.json");


// Array com objetos que tem a chave "name" igual a "HM"
// // let hmData = "";jsonString.filter(obj => obj.name === "HM");
// // console.log(hmData);
// // Array com objetos que tem a chave "name" igual a "Max"
// // const maxData = jsonString.filter(obj => obj.name === "Max");

let hmData ="";
let maxData="";

let authToken = ""
const authTokenRefresh = process.env.REACT_APP_AUTH_TOKEN_REFRESH
const realmAppId = process.env.REACT_APP_REALM_APP_ID

//aqui serve para fazer a autenticação anonima no mongodb, nesse caso será gerado um token toda vez no acesso

await axios.post(`https://sa-east-1.aws.realm.mongodb.com/api/client/v2.0/app/${realmAppId}/auth/providers/anon-user/login`, {}, {
    
})
    .then(response => {
        // A resposta já está em formato JSON
        const data = response.data;
        authToken = response.data.access_token;
        // Aqui você pode acessar os dados retornados
        console.log(data);
    })
    .catch(error => {
        // Trate o erro, se necessário
        console.error(error);
    });

// aqui ele pega um token gerado para acessar o api do mongo, o problema é que tem está atualizando o tempo do token gerado

// await axios.post('https://sa-east-1.aws.realm.mongodb.com/api/client/v2.0/auth/session', {}, {
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${authTokenRefresh}`
//     }
// })
//     .then(response => {
//         // A resposta já está em formato JSON
//         authToken = response.data.access_token;
       
//     })
//     .catch(error => {
//         // Trate o erro, se necessário
// //        console.error(error);
//     });



await axios.post(`https://sa-east-1.aws.data.mongodb-api.com/app/${realmAppId}/endpoint/data/v1/action/find`, {
    "collection": "t", //mudei os dados depois de um tempo para pegar atualizado, mas pelo jeito bugou tudo, então acaba sendo melhor usar a base de backup "t" até pq HM deu merda

// Select Cotação HM

    "database": "cotacao",
    "dataSource": "sa-east-1-cluster",
    "filter": {
        "name": "HM"
    },
    "sort": {
        "date": -1
    }
}, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
    }
})
    .then(function (response) {
        hmData = response.data.documents;
    })
    .catch(function (error) {
        console.log(error);
    });


await axios.post(`https://sa-east-1.aws.data.mongodb-api.com/app/${realmAppId}/endpoint/data/v1/action/find`, {
    "collection": "t",

// Select Cotação Max

    "database": "cotacao",
    "dataSource": "sa-east-1-cluster",
    "filter": {
        "name": "Max"
    },
    "sort": {
        "date": -1
    }
}, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
    }
})
    .then(function (response) {
        maxData = response.data.documents;
    })
    .catch(function (error) {
        console.log(error);
    });


// var data = JSON.stringify({
//     "collection": "t",
//     "database": "cotacao",
//     "dataSource": "sa-east-1-cluster",
//     "filter": {
//         "name": "Max"
//     },
//     "sort": {
//         "date": -1
//     }
// });

// var config = {
//     method: 'post',
//     url: 'https://sa-east-1.aws.data.mongodb-api.com/app/data-oxpgb/endpoint/data/v1/action/find',
//     headers: {
//         'Content-Type': 'application/json',
//         // 'Access-Control-Request-Headers': '*',
//         'Authorization': `Bearer ${authToken}`,
//         // 'api-key': 'gere nova API KEY', 
//     },
//     data: data
// };

// await axios(config)
//     .then(function (response) {
//         // console.log(JSON.stringify(response.data));
//         maxData = response.data.documents;
//     })
//     .catch(function (error) {
//         console.log(error);
//     });


// const REALM_APP_ID = "data-oxpgb";
// const app = new Realm.App({ id: REALM_APP_ID });

// export async function fetchData(nameCia) {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const credentials = Realm.Credentials.anonymous();
//             const user = await app.logIn(credentials);

//             const mongodb = user.mongoClient("sa-east-1-cluster");
//             const collection = mongodb.db("cotacao").collection("list");
//             const query = [
//                 {
//                     $match: { name: nameCia }
//                 },
//                 {
//                     $sort: { date: -1 }
//                 }
//             ];

//             const result = await collection.aggregate(query);
//             console.log("Logged in with anonymous id:", user.id);
//             resolve(result);
//         } catch (error) {
//             console.error("Error:", error);
//             reject(error);
//         }
//     });
// }

// fetchData("HM")
//     .then(result => {
//         hmData = result;
//         console.log(result);
//     })
//     .catch(error => {
//         // Trate o erro, se necessário
//         console.error(error);
//     });

// fetchData("Max")
//     .then(result => {
//         maxData = result;
//         // console.log(result);
//     })
//     .catch(error => {
//         // Trate o erro, se necessário
//         console.error(error);
//     });

// console.log(hmData);
// console.log(maxData);

export { hmData, maxData };

