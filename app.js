//Grab day of the week from local computer
let date = new Date();
let dayOfWeekNumber = date.getDay();
let nameOfDay;
let quote;

switch(dayOfWeekNumber){
    case 0: 
        nameOfDay = 'Sunday';
        quote = 'Time to Chillax!';
        break;
    case 1:
        nameOfDay = 'Monday';
        quote = 'Monday Morning Blues!';
        break;
    case 2:
        nameOfDay = 'Tuesday';
        quote = 'Taco Time!';
        break;
    case 3:
        nameOfDay = 'Wednesday';
        quote = 'Two more days to the Weekend!';
        break;
    case 4:
        nameOfDay = 'Thursday';
        quote = 'The Weekend is almost here...';
        break;
    case 5:
        nameOfDay = 'Friday';
        quote = 'Weekend is here!';
        break;
    case 6:
        nameOfDay = 'Saturday';
        quote = 'Time to Party!';
        break;

}
//Display the day of the week
let weekdayDiv = document.getElementById('weekday').innerHTML = `${nameOfDay}`;

//Display quote
let quoteDiv = document.getElementById('phrase').innerHTML = `${quote}`

function msg(){
    alert("Hey there, Im Totoro!");
    alert("Nice to meet you! :)");
}
