 const cryptoSchema = require('../models/schema'); 
const { CustomError, handleError } = require('../errorHandler/errorHandler'); // Ensure correct casing for CustomError

const getStats = async (req, res) => {
  const { coin } = req.query;

  if (!coin) {
    return handleError(new CustomError('Please provide the name of the coin'), res); // Pass res here
  }

  const normalizedCoin = coin.trim().toLowerCase();

  try {
    const latestData = await cryptoSchema.findOne({ coinId: normalizedCoin }).sort({ timestamp: -1 });

    if (!latestData) {
      return handleError(new CustomError(`No data found for the coin: ${normalizedCoin}`, 404), res); // Pass res here
    }

    res.json({
      price: latestData.price,
      marketCap: latestData.marketCap,
      '24hChange': latestData.change24h,
    });
  } catch (error) {
    handleError(new CustomError('Server error while fetching crypto stats', 500), res); // Pass res here
  }
};

module.exports = getStats;
