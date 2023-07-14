export function getFutureDate(numberOfMonths) {
  const today = new Date();
  const futureDate = new Date(
    today.getFullYear(),
    today.getMonth() + numberOfMonths,
    today.getDate()
  );
  const futureMonth = futureDate.toLocaleString("default", { month: "long" });
  const futureYear = futureDate.getFullYear();
  return `${futureMonth} ${futureYear}`;
}
