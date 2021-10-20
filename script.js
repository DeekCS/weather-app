const wrapper = document.querySelector('.wrapper');
inputPart= wrapper.querySelector('.input-part');
infoTxt = inputPart.querySelector('.info-txt');
inputField = inputPart.querySelector('input');
locationBtn = inputPart.querySelector('button');
let apiKey;
let api;

inputField.addEventListener('keyup', e=>{
    if(e.key == 'Enter' && inputField.value != ''){
        requestApi(inputField.value);
        }
    }
)

locationBtn.addEventListener('click', ()=>{
    if(navigator.geolocation){ //check if browser supports geolocation
        navigator.geolocation.getCurrentPosition(onSuccess, onError);    
    }else
    {
        alert('Geolocation is not supported by your browser');
    }
});

async function onSuccess(position){
    console.log(position);
    const {latitude, longitude} = position.coords; //get latitude and longitude from position object and assign to variables
    apiKey = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=134551223438cbdf20ce7ccd23fe0f52`;
    fetchWeather();
}
function onError(error){
   infoTxt.innerText = error.message;
   infoTxt.classList.add('error');
}

async function fetchWeather(){
    infoTxt.innerText = 'Getting weather details...';
    infoTxt.classList.add('pending');
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=134551223438cbdf20ce7ccd23fe0f52`);
    infoTxt.innerText='Something went wrong';
    infoTxt.classList.replace('pending','error');
}


async function requestApi(city){
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=134551223438cbdf20ce7ccd23fe0f52`);
    infoTxt.innerText = 'Getting weather details...';
    infoTxt.classList.add('pending');
    let data = await api.json();
    console.log(data);
}

