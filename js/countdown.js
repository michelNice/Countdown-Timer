/*
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


function convertML(dataOne,dataTwo){

    const diffData = Math.abs(dataTwo.getTime() - dataOne.getTime())

    let days, hours, minutes,seconds;

    days = Math.floor(diffData / (1000 * 60 * 60 * 24));
    hours = Math.floor((diffData % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    minutes = Math.floor((diffData % (1000 * 60 * 60)) / (1000 * 60));
    seconds =  Math.floor((diffData % (1000 * 60)) / 1000);

    return{

        days,
        hours,
        minutes,
        seconds
    }
    
}

const firstDate = new Date('2025-05-01T05:26:00');
const lastDate = new Date('2026-04-23T12:30:45');

convertML(firstDate,lastDate)


function countdown(target){

    const invilid = setInterval(()=> {

        let current = new Date()

        const remaining = convertML(target,current)
    
        day.textContent = remaining.days
    
        hour.textContent = remaining.hours
    
        minute.textContent = remaining.minutes
    
        second.textContent = remaining.seconds


        if(remaining.days <= 0 && remaining.hours <= 0 && remaining.minutes <= 0  && remaining.seconds <= 0){
            clearInterval(invilid)

        }

    },1000)
}


countdown(lastDate)