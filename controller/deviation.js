const cryptoSchema = require('../models/schema') ; 
const { CustomError, handleError } = require('../errorHandler/errorHandler');

const getDeviation = async (req, res) => {
  const { coin } = req.query;
    
  
  if (!coin) {
    return handleError(new CustomError('add crypto name into query .', 400), res);
  }

  const normalizedCoin = String(coin).trim().toLowerCase();

  try {
    const result = await cryptoSchema.find({ coinId: normalizedCoin }).sort({ timestamp: -1 }).limit(100);
    
    if (result.length === 0) {
      return handleError(new CustomError(`No data found for the crypto: ${normalizedCoin}`, 404), res);
    }

    const values = result.map(record => record.price);
    const mean = values.reduce((acc, value) => acc + value, 0) / values.length;
    const variance = values.reduce((acc, value) => acc + Math.pow(value - mean, 2), 0) / values.length;
    const standardDeviation = Math.sqrt(variance);

    res.json({ deviation: parseFloat(standardDeviation.toFixed(2)) });
  } catch (error) {
    handleError(new CustomError('Server error while calculating standard deviation', 500), res);
  }
};

module.exports = getDeviation;
