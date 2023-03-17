const axios = require('axios');

class ChartModel{

    static async getCryptoData(){
        try {
            const response = await axios.get('https://api.coindesk.com/v1/bpi/historical/close.json');
            const data = response.data;
            return data;
        } catch (error) {
            console.error(error);
        }
    }
}

