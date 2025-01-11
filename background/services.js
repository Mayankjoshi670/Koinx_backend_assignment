 const axios = require('axios');
const Crypto  = require('../models/schema');
const {CustomError , handleError} = require('../errorHandler/errorHandler') ; 

const service = async () => {
  try {
    const apiResponse = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd',
        ids: 'bitcoin,ethereum,matic-network',
        x_cg_demo_api_key: process.env.COINGECKO_API_KEY,
      },
    });

    const response_data = apiResponse.data;

    for (const coin of response_data) {
      console.log(`Fetched data for ${coin.id}:`, {
        price: coin.current_price,
        marketCap: coin.market_cap,
        change24h: coin.price_change_percentage_24h,
      });

      const cryptoDocument = new Crypto({
        coinId: coin.id,
        price: coin.current_price,
        marketCap: coin.market_cap,
        change24h: coin.price_change_percentage_24h,
      });

      await cryptoDocument.save();
    }
  } catch (error) {
    if (error.response) { 
      handleError(
        new CustomError(`Failed to fetch data from CoinGecko: ${error.response.data.message}`, error.response.status),
        console
      );
    } else { 
      handleError(new CustomError('Error fetching or saving crypto data', 500), console);
    }
  }
};

module.exports = service;