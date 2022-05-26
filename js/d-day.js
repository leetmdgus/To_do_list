const span =document.querySelector('#d-day span');
const input = document.querySelector('#d-day input')

function getDday(event)
{
  event.preventDefault();
  const wantKnowYear = document.querySelector('#year');
  const wantKnowMonth = document.querySelector('#month');
  const wantKnowDate = document.querySelector('#date');

  const date = new Date();
  const wanKnowDate = new Date(wantKnowYear.value,wantKnowMonth.value,wantKnowDate.value);

  const timeDiff = wantKnowDate.getTime()-date.getTime();

  const dDay = timeDiff/1000/60/60/24;

  span.innerText = dDay;
  console.log(dDay);
  alert(dDay)
}

span.addEventListener("submit",getDday);