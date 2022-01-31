/* eslint-disable no-restricted-properties */
/* eslint-disable no-bitwise */
export default (n: number): string => {
  const escalaSingular = [
    '',
    'K',
    'M',
    'B',
    'T',
    'Q',
    'QQ',
    'S',
    'SS',
    'O',
    'N',
    'D',
    'UN',
    'DD',
    'TD',
    'QD',
    'QQD',
    'SD',
    'SSD',
    'OD',
    'ND',
    'V',
  ];

  const number =
    ((Math.log10(n) / 3) | 0) === 0
      ? n
      : Number((n / Math.pow(10, ((Math.log10(n) / 3) | 0) * 3)).toFixed(2));

  if (!escalaSingular[(Math.log10(n) / 3) | 0] && n > 1000) {
    const number_string = n.toLocaleString('fullwide', { useGrouping: false });
    return (
      number_string.substring(
        0,
        number_string.length - (escalaSingular.length * 3 - 3),
      ) + escalaSingular[escalaSingular.length - 1]
    );
  }

  return `${number} ${escalaSingular[(Math.log10(n) / 3) | 0]}`;
};
