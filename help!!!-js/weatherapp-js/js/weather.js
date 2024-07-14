 


//https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API key}

const city = document.getElementById("input-location").value
const city_header = document.getElementById("city-name")
const temphtml = document.getElementById("temp")
const desp = document.getElementById("weather-description")

 document.getElementById("input-location").addEventListener("focusout", (event) => {
   

    const api_key = "0cb53082bfa3a4e32caad58c5ea0e271";
    event.preventDefault
    console.log("focus-out triggered: " + city)

    
    
   let data =  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric&mode=json`)
   .then(response => {
      //console.log(response.json());
      
      if(response.ok){



      }

      
      
      
    })
    .catch(err => {
      alert(err);
    });


   //jsonArea.innerHTML = '<p>' + JSON.parse(data[0]) + '</p>'
    })
    
    

   
