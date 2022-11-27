export const milisecondsToMinutes = (value) => {
  const d = new Date(0);
  const f = new Intl.DateTimeFormat("default", {
    minute: "numeric",
    second: "numeric",
    fractionalSecondDigits: 3,
  });

  d.setMilliseconds(value);

  return f.format(d);
};
