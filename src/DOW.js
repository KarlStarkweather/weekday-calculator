export default function Day(dateString) {
  // expect standard format like "12/15/2021"
  let year, month, day;
  let dArray = dateString.split("/");
  dArray.forEach(function(element) {
    element = parseInt(element);
  });
  dArray[0] --;
  year = dArray[2];
  month = dArray[0];
  day = dArray[1];
  const inputtedDate = new Date(year,month,day);
  return inputtedDate;
}