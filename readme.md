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