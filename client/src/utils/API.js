import axios from "axios";

const api = {
  getArticles: function (topic, startYear, endYear) {

  const key = "2fb707bcff61440288915b104ddd63e5"

  const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
        key  + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";
        console.log(url);
        return axios.get(url);
  }
};

export default api;
