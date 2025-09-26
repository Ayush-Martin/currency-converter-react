import React, { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
  dark = false, // allow light/dark toggle
}) => {
  const currencyId = useId();

  return (
    <div
      className={`flex items-end justify-between gap-3 p-4 rounded-xl border shadow-sm ${
        dark
          ? "bg-gray-800 border-gray-700 text-gray-100"
          : "bg-white border-gray-200 text-gray-900"
      } ${className}`}
    >
      {/* Left Side: Amount */}
      <div className="w-1/2">
        <label
          htmlFor={currencyId}
          className={`block mb-2 text-xs font-semibold uppercase tracking-wide ${
            dark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {label}
        </label>
        <input
          type="number"
          id={currencyId}
          value={amount}
          placeholder="0.00"
          disabled={amountDisabled}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          className={`w-full rounded-lg px-3 py-2 text-sm font-medium outline-none transition ${
            dark
              ? "bg-gray-900 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500"
              : "bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-400"
          }`}
        />
      </div>

      {/* Right Side: Currency Dropdown */}
      <div className="w-1/2 text-right">
        <label
          className={`block mb-2 text-xs font-semibold uppercase tracking-wide ${
            dark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Currency
        </label>
        <select
          value={selectedCurrency}
          disabled={currencyDisabled}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className={`w-full rounded-lg px-3 py-2 text-sm font-medium cursor-pointer outline-none transition ${
            dark
              ? "bg-gray-900 text-white focus:ring-2 focus:ring-indigo-500"
              : "bg-gray-50 text-gray-900 focus:ring-2 focus:ring-indigo-400"
          }`}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
