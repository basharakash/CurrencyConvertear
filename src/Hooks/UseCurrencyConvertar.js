import { useEffect, useState } from "react";
import React from "react";

const UseCurrencyConvertar = (currency) => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch(
            `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        )
            .then((res) => res.json())
            .then((res) => setData(res[currency]));
    }, [data, currency]);
    return data;
};

export default UseCurrencyConvertar;
