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

const firstDate = new Date('2025-05-04T05:26:00');
const lastDate = new Date('2026-04-23T12:30:45');


convertML(firstDate,lastDate)


function countdown(target){

    const interval = setInterval(()=> {

        let current = new Date()

        const remaining = convertML(current,target)

        day.textContent = remaining.days
    
        hour.textContent = remaining.hours
    
        minute.textContent = remaining.minutes
    
        second.textContent = remaining.seconds


        if(target.getTime() - current.getTime() <= 0){
            clearInterval(interval)

            day.textContent = '0'

            hour.textContent = '0'

            minute.textContent = '0'

            second.textContent = '0'
        }

    },1000)
}


countdown(lastDate)