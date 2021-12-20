export default function Day(dateString) {
  // expect standard format like "12/15/2021"
  let dateArray = dateString.split("/");
  this.year = parseInt(dateArray[2]);
  this.month = parseInt(dateArray[0]);
  this.day = parseInt(dateArray[1]);
};

Day.prototype.createDate = function() {
  let testMonth = this.month - 1;
  let targetDate = new Date(this.year, testMonth,this.day);
  return targetDate;
}

Day.prototype.DOW = function() {
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weekDays[this.createDate().getDay()];
};



