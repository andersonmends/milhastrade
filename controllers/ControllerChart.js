import ChartModel from '../models/ChartModel';

class ChartController {

    static async renderChart(req, res){
        const data = await ChartModel.getCryptoData();
        const labels = Object.keys(data.bpi);
        const values = Object.values(data.bpi);

        res.render("chart", {labels, values});

    }
}

module.exports = ChartController;