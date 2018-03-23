import axios from "axios";

const api = {
  getArticles: function (topic, startYear, endYear) {

  const key = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931"

  const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
        key  + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";
        console.log(url);
        return axios.get(url);
  }
};

export default api;
