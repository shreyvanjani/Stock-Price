# Stock Price Tracker

This project is a React application that tracks and displays live stock prices for various companies. It fetches data from Google Finance and updates prices periodically. The project also includes proxy setup to handle CORS issues.

## Features

- Display live stock prices using data fetched from Google Finance.
- Periodically updates stock prices every 10 seconds.
- Shows additional details for each stock on expansion.
- Uses Redux for state management.
- Handles CORS issues with a proxy setup.

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/Stock-Price.git
   cd stock-price-tracker

2. Set up the proxy:
    -Create a setupProxy.js file in the src directory