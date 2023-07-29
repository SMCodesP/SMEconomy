/* eslint-disable no-restricted-properties */
/* eslint-disable no-bitwise */
export default function formatNumber(num: number, digits: number = 2) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "Q" },
    { value: 1e18, symbol: "QQ" },
    { value: 1e21, symbol: "S" },
    { value: 1e24, symbol: "SS" },
    { value: 1e27, symbol: "O" },
    { value: 1e30, symbol: "N" },
    { value: 1e33, symbol: "D" },
    { value: 1e36, symbol: "UN" },
    { value: 1e39, symbol: "DD" },
    { value: 1e42, symbol: "TD" },
    { value: 1e45, symbol: "QD" },
    { value: 1e48, symbol: "QQD" },
    { value: 1e51, symbol: "SD" },
    { value: 1e54, symbol: "SSD" },
    { value: 1e57, symbol: "OD" },
    { value: 1e60, symbol: "ND" },
    { value: 1e63, symbol: "V" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + " " + item.symbol
    : "0";
}
