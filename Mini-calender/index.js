//select all elements using id
const calMonth = document.getElementById("cal-month")
const calDay = document.getElementById("cal-day")
const calDate = document.getElementById("cal-date")
const calYear = document.getElementById("cal-year")

//get full date in newDate method
const time = new Date();
const Year = time.getFullYear()
const Month = time.toLocaleString('en',{month : 'long'})
const Datee = time.toLocaleDateString('en',{weekday : 'long'})
const Daye = time.toLocaleDateString('en', { day: 'numeric' });

//tamil Month and Date
// const Month = time.toLocaleString('ta',{month : 'long'})
// const Datee = time.toLocaleDateString('ta',{weekday : 'long'})

calMonth.innerText = `${Month}`
calDate.innerText = `${Daye}`
calDay.innerText = `${Datee}`
calYear.innerText =`${Year}`