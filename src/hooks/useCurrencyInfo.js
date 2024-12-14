import { useState, useEffect } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchCurrency = async () => {
      const res = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
      );

      const json = await res.json();
      setData(json[currency]);
    };
    fetchCurrency();
  }, [currency]);

  return [data, Object.keys(data)];
};

export default useCurrencyInfo;
