const span =document.querySelector('#d-day span');
const input = document.querySelector('#d-day input')

function diff(date1,date2,operator){
  let timeDiff;
  let dDay;
  timeDiff = date1-date2;
  dDay = timeDiff / 1000 / 60 / 60 / 24;
  dDay = Math.floor(dDay);
  span.innerText = `${operator}${dDay}`;
}

function getDday(event)
{
  event.preventDefault();const inputYear = document.querySelector('#year');
  const inputMonth = document.querySelector('#month');
  const inputDate = document.querySelector('#date');
  
  const year = Number(inputYear.value);
  const month = Number(inputMonth.value)-1;
  const date = Number(inputDate.value);
  
  const userDate = new Date(year, month, date);
  const nowDate = Date.now();
  
  if(userDate>=nowDate){
    diff(userDate,nowDate,'-');
  } else if(userDate<nowDate){
    diff(nowDate,userDate,'+');
  }
}

window.addEventListener("submit",getDday);

