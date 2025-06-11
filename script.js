const apiKey = '7424fe4904582603c09828c7288dde76'; // Your API key

async function getWeather() {
  const city = document.getElementById('cityInput').value;
  if (!city) return alert("Please enter a city name!");

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=7424fe4904582603c09828c7288dde76&units=metric';


  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      document.getElementById('weatherResult').innerHTML = "City not found!";
    } else {
      document.getElementById('weatherResult').innerHTML = `
        <p><strong>Location:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
      `;
    }
  } catch (error) {
    document.getElementById('weatherResult').innerHTML = "Error fetching data!";
  }
}



