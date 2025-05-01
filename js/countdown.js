/*const day = document.querySelector('.day')
const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')

function ConvertML(dataOne,dataTwo){

  const diffData = Math.abs(dataTwo.getTime() - dataOne.getTime());

  let days,hours, minutes,seconds;

  days = Math.floor(diffData / (1000 * 60 * 60 * 24));
  hours = Math.floor((diffData % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutes = Math.floor((diffData % (1000 * 60 * 60)) / (1000 * 60));
  seconds =  Math.floor((diffData % (1000 * 60)) / 1000);


  console.log(days,hours,minutes,seconds)

  return{
    days,
    hours,
    minutes,
    seconds
  }
}

const firstDate = new Date('2025-05-01T05:26:00');
const lastDate = new Date('2026-04-23T12:30:45');

const result = ConvertML(new Date(firstDate), new Date(lastDate))


function countdown(targetDate){

  const intervaled = setInterval(()=> {

    const currurent = new Date()

    const remaining = ConvertML(currurent,targetDate)

    day.textContent = remaining.days

    hour.textContent = remaining.hours

    minute.textContent = remaining.minutes

    second.textContent = remaining.seconds

    if(remaining.days <= 0 && remaining.hours <= 0 && remaining.minutes <= 0 && remaining.seconds <= 0){

      clearInterval(intervaled)
    }
  },1000)
}


countdown(lastDate)

*/



const day = document.querySelector('.day')
const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')


function convertMl(dataOne, dateTwo){

 ///why this line doesn't work, that was support to?
 const diffDate = Math.abs(dateTwo.getTime() - dataOne.getTime())

  let days, hours,minutes,seconds;

   days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
   hours = Math.floor((diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   minutes = Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60));
   seconds = Math.floor((diffDate % (1000 * 60)) / 1000);

   console.log(days,hours,minutes,seconds)


   return {
    days,
    hours,
    minutes,
    seconds
   }

}
const firstDate = ('2025-05-01T05:48:00');
const lastDate = ('2026-04-23T12:30:45');


const result = convertMl(new Date(firstDate), new Date(lastDate))

function countdown(target){


  const interved = setInterval(()=> {

    let current = new Date()

  const remaning = convertMl(current,target)

    day.textContent = remaning.days
    hour.textContent = remaning.hours
    minute.textContent = remaning.minutes
    second.textContent = remaning.seconds

    if(remaning.days <= 0 && remaning.hours <= 0 && remaning.minutes <= 0 && remaning.seconds <= 0 ){

      clearInterval(interved)

    }
  },1000)


}


countdown(new Date(lastDate))














