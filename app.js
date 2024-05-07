const buscaIcon = document.querySelector("#buscaIcon");

buscaIcon.addEventListener("click", () => {
  const apiKey = "73f7e679be122083cbb04095cd84a11b";

  const country = "BR";

  const city = document.getElementById("busca");

  const cidade = city.value;

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cidade},${country}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      // Verifica se a requisição foi bem-sucedida
      if (!response.ok) {
        throw new Error("Não foi possível obter a previsão do tempo.");
      }
      return response.json();
    })
    .then((data) => {
      // Extraindo os dados relevantes
      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;

      // Exibindo os resultados
      Show(weatherDescription, cidade, temperature, humidity, windSpeed);

      console.log(`Condição do tempo: ${weatherDescription}`);
    })
    .catch((error) => {
      console.error(error);
    });
});

//mostras na tela
function Show(i, c, t, h, w) {

  switch (i) {
    case "clear sky":
      i = "/img/sol.png";
      info = "Céu limpo, sem nuvens visíveis";
      break;
    case "few clouds":
      i = "/img/nuvens_sem_sol.png";
      info = "Poucas nuvens no céu";
      break;
    case "scattered clouds":
      i = "/img/sol.png";
      info = "Nuvens dispersas pelo céu, não cobrindo toda a área";
      break;
    case "broken clouds":
      i = "/img/sol.png";
      info = " Nuvens que cobrem uma parte significativa do céu";
      break;
    case "overcast clouds":
      i = "/img/nublado.png";
      info = "Céu completamente coberto por nuvens, sem visibilidade do sol";
      break;
    case "mist":
      i = "/img/climate-change.png";
      info = "Condições de neblina com uma visibilidade limitada";
      break;
    case "fog":
      i = "/img/climate-change.png";
      info = "Nevoeiro denso com visibilidade muito limitada";
      break;
    case "light rain":
      i = "/img/chuva.png";
      info = "Chuva leve, geralmente não muito intensa.";
      break;
    case "moderate rain":
      i = "/img/chuva.png";
      info = " Chuva moderada, com uma intensidade maior que a chuva leve.";
      break;
    case "heavy rain":
      i = "/img/storm (1).png";
      info = "Chuva intensa e forte";
      break;
    case "drizzle":
      i = "/img/climate-change.png";
      info = " Chuvisco, gotículas de água muito pequenas que caem da atmosfera";
      break;
    case "thunderstorm":
      i = "/img/storm.png";
      info = "Tempestade com trovões e relâmpagos.";
      break;
    case "snow":
      i = "/img/climate-change.png";
      info = "Neve caindo do céu";
      break;
    case "sleet":
      i = "/img/climate-change.png";
      info = "Chuva congelante, uma mistura de chuva e neve.";
      break;
    case "hail":
      i = "/img/climate-change.png";
      info = "Granizo, pedras de gelo caindo do céu";
      break;
    
  }

  const card = document.querySelector(".card");
  card.innerHTML = `
    <div class="item1">
    <p>${c}</p>
    
  
    <img src="${i}" alt="${i}">
    <span class="info">${info}</span>
    
    </div>
    <div class="temp">Temperatura: ${t}°C</div>
    <div class="umi">Umidade: ${h}%</div>
    <div class="vento">Vel do vento: ${w} m/s</div>
    
    
    
    `;
}
