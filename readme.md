# Koinx Backend Assignment

This is the backend assignment for Koinx, which provides cryptocurrency statistics and deviation data using the CoinGecko API.

## Requirements

- Node.js (v14 or higher)
- MongoDB

## Setup

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd koinx-backend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a [.env](http://_vscodecontentref_/1) file in the root directory and add the following environment variables:
    ```env
    PORT=4000
    COINGECKO_API_KEY=YOUR_API_KEY
    MONGO_URI=YOUR_MONGO_URI
    ```

4. Start the MongoDB server if it's not already running.

## Running the Project

To start the project, run:
```sh
npm run dev  
```


## API Structure
 ### Localhost API Endpoints
 ` GET ` - Fetch Cryptocurrency Statistics
URL: http://localhost:PORT_NO/api/v1/stats?coin=<coin_name>

**Production URL:**  https://koinx-5d6u.onrender.com/api/v1/stats?coin=<coin_name>

 ## Description:
Fetch the current cryptocurrency statistics for the given coin.

**Example Request:**


``` 
GET https://koinx-5d6u.onrender.com/api/v1/stats?coin=bitcoin

```
**Response:**

```
{
	price: 40000,
	marketCap: 800000000,
	"24hChange": 3.4
}
```
`` GET`` - Fetch Cryptocurrency Deviation
URL: http://localhost:PORT_NO/api/v1/deviation?coin=<coin_name>

**Production URL:** https://koinx-5d6u.onrender.com/api/v1/deviation?coin=<coin_name>

## Description:
Fetch the deviation of cryptocurrency price over the past 24 hours compared to the average price.

**Example Request:**

```
GET https://koinx-5d6u.onrender.com/api/v1/deviation?coin=bitcoin
```
**Response:**

 ```
{
	deviation: 4082.48
}
```


