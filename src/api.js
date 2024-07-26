const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8ab7fd44damsh7c769f619f9eb84p136399jsn457f444a88d9',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL= "'https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";
export const WEATHER_API_KEY = "6b39389eed2e9013f0ec75a3ce52f7b4";

