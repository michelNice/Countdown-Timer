const day = document.querySelector('.day')
const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')

function diffMS(dateOne,dateTwo){ 

  const diff =  Math.abs(dateTwo.getTime() - dateOne.getTime());

  let days,hours,minutes,seconds;

  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  seconds =  Math.floor((diff % (1000 * 60)) / 1000);
  console.log(days)

  return {
     days,
     hours,
     minutes,
     seconds
  }

}
const firstDate = new Date('2025-04-30T10:00:00');
const lastDate = new Date('2026-04-23T12:30:45');


const result =  diffMS(firstDate,lastDate)



//nao consigo pensa em nada
function countdown(targetDate){


  const intervaled = setInterval(()=> {

    const currurent = new Date();

    const remaining = diffMS(currurent,targetDate)

    day.textContent = remaining.days
    hour.textContent = remaining.hours
    minute.textContent = remaining.minutes
    second.textContent = remaining.seconds
    
    count--
     if(remaining.days <= 0 && remaining.hours <= 0 && remaining.minutes <= 0 && remaining.seconds <= 0){

      clearInterval(intervaled)
     }
  },1000)
}

countdown(lastDate)

















