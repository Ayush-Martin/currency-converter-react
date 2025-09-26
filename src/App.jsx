import React, { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./components";

const App = () => {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const [currencyInfo, options] = useCurrencyInfo(from);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
      <div className="w-full max-w-md p-6 mx-2 bg-gray-900 rounded-2xl shadow-2xl border border-gray-700">
        <h1 className="mb-6 text-3xl font-extrabold text-center text-white tracking-wide">
          Currency Converter
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          className="space-y-6"
        >
          {/* From Currency Input */}
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(amt) => setAmount(amt)}
            selectedCurrency={from}
            dark
          />

          {/* Swap Button */}
          <div className="relative flex items-center justify-center">
            <button
              type="button"
              onClick={swap}
              className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 transition transform hover:scale-105"
            >
              Swap
            </button>
          </div>

          {/* To Currency Input */}
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            amountDisabled={true}
            onCurrencyChange={(currency) => setTo(currency)}
            selectedCurrency={to}
            dark
          />

          {/* Convert Button */}
          <button
            type="submit"
            className="w-full px-4 py-3 font-semibold text-white bg-indigo-600 rounded-xl shadow-md hover:bg-indigo-700 transition transform hover:scale-[1.02]"
          >
            Convert {from.toUpperCase()} → {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
