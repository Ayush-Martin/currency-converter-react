import React, { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./components";

const App = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const [currencyInfo, options] = useCurrencyInfo(from);
  // const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="flex flex-wrap items-center justify-center w-full h-screen">
      <div className="w-full">
        <div className="w-full max-w-md p-5 mx-auto border rounded-lg bg-white/30 backdrop-blur-sm border-gray-60">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                onClick={() => swap()}
                className="absolute px-2 text-white -translate-x-1/2 -translate-y-1/2 bg-blue-500 border-2 border-white rounded-md left-1/2 py-0.5"
              >
                swap
              </button>
            </div>
            <div className="w-full mb-1">
              <InputBox
                label="to"
                amount={convertedAmount}
                currencyOptions={options}
                amountDisabled={true}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 text-white bg-blue-600 rounded-lg"
            >
              convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
