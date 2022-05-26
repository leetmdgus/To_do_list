const h1 = document.querySelector('#clock h1');
const h2 = document.querySelector('#clock h2');


function getClock()
{
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const currentDate = date.getDate();

  h1.innerText = `${currentYear}-${currentMonth}-${currentDate}`;
  
  const currentHours = String(date.getHours()).padStart(2,"0");
  const currentMinutes = String(date.getMinutes()).padStart(2,"0");
  const currentSeconds = String(date.getSeconds()).padStart(2,"0");
  
  h2.innerText = `${currentHours}:${currentMinutes}:${currentSeconds}`;
}

getClock();
setInterval(getClock, 1000);