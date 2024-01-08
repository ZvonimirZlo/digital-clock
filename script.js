const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("time-options");

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const formattedDate = `${day}-${month}-${year}`;
currentDateParagraph.textContent = formattedDate;

//changes the date format
dateOptionsSelectElement.addEventListener("change", () => {
        switch (dateOptionsSelectElement.value) {
         case "yyyy-mm-dd":
            currentDateParagraph.textContent = formattedDate
                .split("-")
                .reverse()
                .join("-");
            break;
         case "mm-dd-yyyy":
            currentDateParagraph.textContent = `${month}-${day}-${year}`;
            break;
        default : currentDateParagraph.textContent = formattedDate;
    }
});

//clock
const getTime = () =>  {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let ms = today.getMilliseconds()
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = `${h} : ${m} : ${s} : ${ms}`;
    setTimeout(getTime, 10);
  }
  
  //adds 0 if the number is less than 10
  const checkTime = (i) => {
    if (i < 10) {
      i = "0" + i};
    return i;
  };