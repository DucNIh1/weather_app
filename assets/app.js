const search = document.querySelector(".search");

function changeInfor(data) {
  const city = document.querySelector(".city");
  const country = document.querySelector(".country");
  const value = document.querySelector(".temperature .value");
  const time = document.querySelector(".time");
  const sortDesc = document.querySelector(".sort-desc");
  const visibility = document.querySelector(".visibility span");
  const wind = document.querySelector(".wind span");
  const sun = document.querySelector(".sun span");
  const content = document.querySelector(".content");

  if (data.cod == 200) {
    city.innerText = data.name;
    country.innerText = data.sys.country;
    let temperature = Math.round(data.main.temp - 273.15);
    value.innerText = temperature;
    sortDesc.innerText = data.weather[0].main;
    wind.innerText = data.wind.speed + " m/s";
    time.innerText = new Date().toLocaleString("vi");
    visibility.innerText = data.visibility + " m";
    sun.innerText = data.main.humidity + " %";
    content.style.display = "block";
    temperature >= 18
      ? (document.body.className = "hot")
      : (document.body.className = "cold");
  } else {
    content.style.display = "none";
  }
}
search.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    getData(e.target.value);
  }
});

async function getData(address) {
  const codApi = `https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=cb8d857e9528680474d1a7a90b239fba`;
  let res = await fetch(codApi);
  let data = await res.json();
  changeInfor(data);
}

getData("ha noi");
