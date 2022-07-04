class BlogChangeAPI {

  constructor() {
    this.endpointURL = `${process.env.REACT_APP_API_URL}`;
    this.token =  `${process.env.REACT_APP_TOKEN}`;
  }

  async getCurrentValue(currency) {
    try {
      let response = await fetch(`${this.endpointURL}/exchange/tickers/BTC-${currency}`, {
        method: "GET"
      });

      if (!response.ok) {
        return Promise.reject(`Error ${response.status} : ${response.statusText} in fetch ${this.endpointURL}/get-users`);
      }

      response = await response.json();
      return response;
    } catch (error) {
      return error;
    }
  }
}

const blockChangeApi = new BlogChangeAPI();

export default blockChangeApi;

