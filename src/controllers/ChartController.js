const ChartModel = require('../models/ChartModel');


class ChartController {

    static getChartData = () => {
        const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];
        const values = [10, 15, 8, 20, 18, 25];
        return { labels, values };
      };

    static async renderChart(req, res){
        const {labels, values} = this.getChartData();
        res.render("Chart", {labels, values});

    }
}

module.exports = ChartController;