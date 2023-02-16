const apiKey = "5f81365ae536b7da813d034c891315db";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";

$(document).ready(function () {
  // Declare the units variable outside of the toggleUnit function
  let units = "metric";

  // Call the updateWeather function with the current units when the page loads
  updateWeather(units);

  // Attach an event listener to the toggle button to switch between metric and imperial units
  $("#option1").on("click", function () {
    units = "imperial";
    updateWeather(units);
  });

  $("#option2").on("click", function () {
    units = "metric";
    updateWeather(units);
  });

  function updateWeather(units) {
    // Get the user's location
    navigator.geolocation.getCurrentPosition(function (position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;

      // Make the API call to get the weather information
      $.ajax({
        url: weatherUrl + "?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey + `&units=${units}`,
        success: function (result) {
          console.log(result);

          // Update the weather information on the page
          $("#city").html(result.name);
          $("#weather-icon").attr("src", "http://openweathermap.org/img/w/" + result.weather[0].icon + ".png");
          if (units === "imperial") {
            $("#temperature").html("Temperature: " + result.main.temp + "&#8457;");
          } else {
            $("#temperature").html("Temperature: " + result.main.temp + "&#8451;");
          }
          $("#latitude").html("Latitude: " + latitude);
          $("#longitude").html("Longitude: " + longitude);

          // Use Moment.js to format the date
          let date = moment().format("MMMM Do YYYY, h:mm:ss a");
          $("#date").html("Today's date: " + date);
        },
        error: function () {
          // If there is an error with the API call, display an error message
          $("#city").html("Unable to retrieve weather information");
        },
      });
    });
  }
});


    var environment = "P"; // Sets environment to Testing or Production
    var forceHour = 11; // for testing forces the time to what is contained in the variable
    // var planner_storage = []
    const day = moment().format('ddd');
    var WeekPlan ={Mon:[1,2,3],Tue:[4,5,6],Wed:[7,8,9],Thu:[10,11,12],Fri:[13,14,15],Sat:[],Sun:[]}; //Fictitious data
    var Token = {Day:"Mon",Today:0,Selection:0}
    Token.Day = day;
    switch(day){
        case 'Mon':
            Token.Today = 1;
            Token.Selected = 1;
            break;
        case 'Tue':
            Token.Today = 2;
            Token.Selected = 2;
            break;
        case 'Wed':
            Token.Today = 3;
            Token.Selected = 3;
            break;
        case 'Thu':
            Token.Today = 4;
            Token.Selected = 4;
            break;
        case 'Fri':
            Token.Today = 5;
            Token.Selected = 6;
            break;
        default:
            break
    };

    // Set Environment Test / Production Variables. 
    if (environment ==="T") {
        var currentHour = forceHour;
        Token.Day = 'Wed';
        console.log("Current Hour: "+currentHour);
    } else {
        var currentHour = moment().format('H'); // Get the Current Hour
        console.log("Current Hour: "+currentHour);
    };

function setFutureAttributes(){
    textarea9El.attr ('class','col-md-10 textarea future');
    textarea10El.attr ('class','col-md-10 textarea future');
    textarea11El.attr ('class','col-md-10 textarea future');
    textarea12El.attr ('class','col-md-10 textarea future');
    textarea13El.attr ('class','col-md-10 textarea future');
    textarea14El.attr ('class','col-md-10 textarea future');
    textarea15El.attr ('class','col-md-10 textarea future');
    textarea16El.attr ('class','col-md-10 textarea future');
    textarea17El.attr ('class','col-md-10 textarea future');
}
function setPastAttributes(){
    textarea9El.attr ('class','col-md-10 textarea past');
    textarea10El.attr ('class','col-md-10 textarea past');
    textarea11El.attr ('class','col-md-10 textarea past');
    textarea12El.attr ('class','col-md-10 textarea past');
    textarea13El.attr ('class','col-md-10 textarea past');
    textarea14El.attr ('class','col-md-10 textarea past');
    textarea15El.attr ('class','col-md-10 textarea past');
    textarea16El.attr ('class','col-md-10 textarea past');
    textarea17El.attr ('class','col-md-10 textarea past');        
}



function setAttributes(hour){
    var attributes =['col-md-10 textarea present','col-md-10 textarea future','col-md-10 textarea past']; 
   if (Token.Selected > Token.Today){
        setFutureAttributes();

    } else if (Token.Selected < Token.Today){
        setPastAttributes();
    } else{
        for(i=9;i <18;i++){
            switch (i) {
                case 9:
                    if (i == hour){
                        textarea9El.attr ('class',attributes[0]);    
                    }else if(i > hour){
                        textarea9El.attr ('class',attributes[1]);
                    }else{
                        textarea9El.attr ('class',attributes[2]);
                    }
                    break; 
                case 10:
                    if (i == hour){
                        textarea10El.attr ('class',attributes[0]);    
                    }else if(i > hour){
                        textarea10El.attr ('class',attributes[1]);
                    }else{
                        textarea10El.attr ('class',attributes[2]);
                    }
                    break;
                case 11:
                    if (i == hour){
                        textarea11El.attr ('class',attributes[0]);    
                    }else if(i > hour){
                        textarea11El.attr ('class',attributes[1]);
                    }else{
                        textarea11El.attr ('class',attributes[2]);
                    }
                    break
                case 12:
                    if (i == hour){
                        textarea12El.attr ('class',attributes[0]);    
                    }else if(i > hour){
                        textarea12El.attr ('class',attributes[1]);
                    }else{
                        textarea12El.attr ('class',attributes[2]);
                    }
                    break
                case 13:
                    if (i == hour){
                        textarea13El.attr ('class',attributes[0]);    
                    }else if(i > hour){
                        textarea13El.attr ('class',attributes[1]);
                    }else{
                        textarea13El.attr ('class',attributes[2]);
                    }
                    break
                case 14:
                    if (i == hour){
                        textarea14El.attr ('class',attributes[0]);    
                    }else if(i > hour){
                        textarea14El.attr ('class',attributes[1]);
                    }else{
                        textarea14El.attr ('class',attributes[2]);
                    }                break
                case 15:
                    if (i == hour){
                        textarea15El.attr ('class',attributes[0]);    
                    }else if(i > hour){
                        textarea15El.attr ('class',attributes[1]);
                    }else{
                        textarea15El.attr ('class',attributes[2]);
                    }
                    break
                case 16:
                    if (i == hour){
                        textarea16El.attr ('class',attributes[0]);    
                    }else if(i > hour){
                        textarea16El.attr ('class',attributes[1]);
                    }else{
                        textarea16El.attr ('class',attributes[2]);
                    }
                case 17:
                    if (i == hour){
                        textarea17El.attr ('class',attributes[0]);    
                    }else if(i > hour){
                        textarea17El.attr ('class',attributes[1]);
                    }else{
                        textarea17El.attr ('class',attributes[2]);
                    }
                    break;
                default:

                    break
                }      
            }
        }
};

function get_local_storage(){
    var prevStorage = localStorage.getItem("Planner");
    if (prevStorage != null){
        Planner = JSON.parse(prevStorage);
        getdayArray=Planner[Token.Day];
        console.log(WeekPlan.Mon);

        text9El.val(getdayArray[0]);
        text10El.val(getdayArray[1]);
        text11El.val(getdayArray[2]);
        text12El.val(getdayArray[3]);
        text13El.val(getdayArray[4]);
        text14El.val(getdayArray[5]);
        text15El.val(getdayArray[6]);
        text16El.val(getdayArray[7]);
        text17El.val(getdayArray[8]);
    }
};
function set_local_storage(){
    setDayArray = WeekPlan[Token.Day];

    setDayArray[0] = text9El.val();
    setDayArray[1] = text10El.val();
    setDayArray[2] = text11El.val();
    setDayArray[3] = text12El.val();
    setDayArray[4] = text13El.val();
    setDayArray[5] = text14El.val();
    setDayArray[6] = text15El.val();
    setDayArray[7] = text16El.val();
    setDayArray[8] = text17El.val();
    
    //WeekPlan[Token.Day] = setDayArray
    // store updated planner details
    localStorage.setItem("Planner", JSON.stringify(WeekPlan));
};

// Add the Current Time and Date to the Page.
    var currentDayEl = $('#currentDay'); // Access the CurrentDay ID 

    // I have added this IF statement, if the time is > 5pm it displays a message "We are now Planning for Tommorow Now!" in addition to the CURRENT time and Date. OTHERWISE it is between 9am - 5pm and displays JUST the Time and Date.
    var textarea9El =  $('#9');  // Access 9  am
    var textarea10El = $('#10'); // Access 10 am
    var textarea11El = $('#11'); // Access 11 am
    var textarea12El = $('#12'); // Access 12 am
    var textarea13El = $('#13'); // Access 1  pm
    var textarea14El = $('#14'); // Access 2  pm
    var textarea15El = $('#15'); // Access 3  pm
    var textarea16El = $('#16'); // Access 4  pm
    var textarea17El = $('#17'); // Access 5  pm



    if (currentHour > 17 || currentHour < 9) {
        currentDayEl.text ("We are now forward Planning! Current Date & Time: "+moment().format('LLLL')); // Targets the CurrentDay Element and replaces the Text with the Time and Date in the format Day, Month Date, Year Time (AM/PM)
        if (environment="T") {console.log("Not Between 9am - 5pm e.g. NEXT DAY")}; 
        setFutureAttributes();
        
    } else if (currentHour > 17 || currentHour < 9){
        currentDayEl.text ("We are now amending old Planning! Current Date & Time: "+moment().format('LLLL')); // Targets the CurrentDay Element and replaces the Text with the Time and Date in the format Day, Month Date, Year Time (AM/PM)
        if (environment="T") {console.log("Not Between 9am - 5pm e.g. NEXT DAY")}; 
        setPastAttributes();

    } else {
        currentDayEl.text (moment().format('LLLL')); // Targets the CurrentDay Element and replaces the Text with the Time and Date in the format Day, Month Date, Year Time (AM/PM)
        if (environment="T") {console.log("9am")};
            setAttributes(currentHour);  
    };

// Access the Text for each Time Slot
    var text9El =  $('#t9');  // Access 9  am
    var text10El = $('#t10'); // Access 10 am
    var text11El = $('#t11'); // Access 11 am
    var text12El = $('#t12'); // Access 12 am
    var text13El = $('#t13'); // Access 1  pm
    var text14El = $('#t14'); // Access 2  pm
    var text15El = $('#t15'); // Access 3  pm
    var text16El = $('#t16'); // Access 4  pm
    var text17El = $('#t17'); // Access 5  pm

// Get stored text from local storage and display
get_local_storage();

//Save all planned activities to local storage
var saveDayButton = document.querySelector("#saveAll");
saveDayButton.addEventListener("click",function(event) {
    event.preventDefault(); // Prevent default behaviour
    
    //Only set storage if it is a working day
    if (Token.Day != "Sat" || Token.Day != "Sun"){
        set_local_storage();
    }else{
        console.log("Sorry, can't log data for Saturday or Sunday")
    }
});
// Adding Reset Functionality
var resetDayButton = document.querySelector("#reset");
resetDayButton.addEventListener("click", function(event) {
    event.preventDefault();
    setDayArray = WeekPlan[Token.Day];

    for (i=0; i < 9; i++){
        setDayArray[i]='';
    }
    localStorage.setItem("Planner", JSON.stringify(WeekPlan));
    get_local_storage()
});
// Set the day to Monday and load data
var mondayButton = document.querySelector("#monday");
mondayButton.addEventListener("click", function(event) {
    event.preventDefault();
    Token.Day = 'Mon';
    Token.Selected = 1;
    get_local_storage()
    if (Token.Selected > Token.Today){
        setFutureAttributes();
    } else if (Token.Selected < Token.Today){
        setPastAttributes();
    } else {
        setAttributes(currentHour);
    }

});
// Set the day to Tuesday and load data
var tuesdayButton = document.querySelector("#tuesday");
tuesdayButton.addEventListener("click", function(event) {
    event.preventDefault();
    Token.Day = 'Tue';
    Token.Selected = 2;
    get_local_storage()
    if (Token.Selected > Token.Today){
        setFutureAttributes();
    } else if (Token.Selected < Token.Today){
        setPastAttributes();
    } else {
        setAttributes(currentHour);
    }
});
// Set the day to Monday and load data
var wednesdayButton = document.querySelector("#wednesday");
wednesdayButton.addEventListener("click", function(event) {
    event.preventDefault();
    Token.Day = 'Wed';
    Token.Selected = 3;
    get_local_storage()
    
    if (Token.Selected > Token.Today){
        setFutureAttributes();
    } else if (Token.Selected < Token.Today){
        setPastAttributes();
    } else {
        setAttributes(currentHour);
    }
});
// Set the day to Monday and load data
var thursdayButton = document.querySelector("#thursday");
thursdayButton.addEventListener("click", function(event) {
    event.preventDefault();
    Token.Day = 'Thu';
    Token.Selected = 4;
    get_local_storage()
    
    if (Token.Selected > Token.Today){
        setFutureAttributes();
    } else if (Token.Selected < Token.Today){
        setPastAttributes();
    } else {
        setAttributes(currentHour);
    }
});
// Set the day to Monday and load data
var fridayButton = document.querySelector("#friday");
fridayButton.addEventListener("click", function(event) {
    event.preventDefault();
    Token.Day = 'Fri';
    Token.Selected = 5;
    get_local_storage()
    
    if (Token.Selected > Token.Today){
        setFutureAttributes();
    } else if (Token.Selected < Token.Today){
        setPastAttributes();
    } else {
        setAttributes(currentHour);
    }
});
