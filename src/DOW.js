export default function Day(dateString) {
  // expect standard format like "12/15/2021"
  let dArray = dateString.split("/");
  
  this.year = parseInt(dArray[2]);
  console.log(this.year);
  this.month = parseInt(dArray[0]);
  this.day = parseInt(dArray[1]);
};

Day.prototype.createDate = function() {
  let testMonth = this.month - 1;
  let targetDate = new Date(this.year, testMonth,this.day);
  return targetDate;
}

Day.prototype.DOW = function() {
  const weekDays = [
    [0,"Sunday"],
    [1,"Monday"],
    [2,"Tuesday"],
    [3,"Wednesay"],
    [4,"Thursday"],
    [5,"Friday"],
    [6,"Saturday"],
  ];
  
  return weekDays[this.createDate().getDay()][1];
};



