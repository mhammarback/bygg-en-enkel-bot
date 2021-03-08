
const isItSaturdayToday = (date) => {
  const newDate = new Date(date)

  let weekDay = new Array(7)
  weekDay[0] = "sunday"
  weekDay[1] = "monday"
  weekDay[2] = "tuesday"
  weekDay[3] = "wednesday"
  weekDay[4] = "thursday"
  weekDay[5] = "friday"
  weekDay[6] = "saturday"

  let day = weekDay[newDate.getDay()]

  if (newDate.getDay() === 6) {
    document.querySelector("#greeting").innerHTML = "Yay it's finally Saturday!"
    return true
  } 
  else if (newDate.getDay() === 5) {
    document.querySelector("#greeting").innerHTML = "Friday vibes!"
    return false
  }
  else if (newDate.getDay() === 0) {
    document.querySelector("#greeting").innerHTML = " Slow sundays are the best"
    return false
  }
  else {
    document.querySelector("#greeting").innerHTML = "Today it's "+ day +"!"
    return false
  }
}

const daysUntil = (date) => {
  const newDate = new Date(date)
  const saturday = 6
  const remainigDays = saturday - newDate.getDay();

  return remainigDays
}

export {
  isItSaturdayToday,
  daysUntil
}


/*
const isItSaturdayToday = (date) => {
  if (date === 0) {
    return true;
  } else {
    return false;
  }  
} 

const daysUntil = (date) => {
  if (date !== 0) {
    return date.getDay() -2 ;
  } else {
    return 0;
  } 
}
*/
