const dDayNum =document.querySelector('#d-day span');
const inputYear = document.querySelector('#year');
const inputMonth = document.querySelector('#month');
const inputDate = document.querySelector('#date');

function dDayCalculator(date1,date2,operator){
  const timeDiff = date1-date2;
  const dDay = Math.floor(timeDiff / 1000 / 60 / 60 / 24);

  dDayNum.innerText = `${operator}${dDay}`;
}

function getDday(event)
{
  event.preventDefault();  
  const year = Number(inputYear.value);
  const month = Number(inputMonth.value)-1;
  const date = Number(inputDate.value);
  
  const userDate = new Date(year, month, date);
  const nowDate = Date.now();
  
  if(userDate>=nowDate){
    dDayCalculator(userDate,nowDate,'-');
  } else if(userDate<nowDate){
    dDayCalculator(nowDate,userDate,'+');
  }
}

window.addEventListener("submit",getDday);

