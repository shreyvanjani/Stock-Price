import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import StockPrice from './components/StockPrice';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <StockPrice sheetId="1WWX7KrUcnqNPxHpnxlIhrVFj3DDrRbsTc-AIDChfdD4" range="Sheet1!A4:M23" />
        </header>
      </div>
    </Provider>
  );
}

export default App;

