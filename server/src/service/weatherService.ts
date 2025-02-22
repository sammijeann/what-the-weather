import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object

// TODO: Define a class for the Weather object

// TODO: Complete the WeatherService class
class WeatherService {

  // TODO: Define the baseURL, API key, and city name properties
  baseURL: string; 
  weatherApi: string; 
  cityName: string; 

  constructor() {
    this.baseURL = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={weatherApi}`;
    this.weatherApi = '7b46fa542a492cddebfdf753a9695a55';
    this.cityName = ''; // This will be set when you create an instance of the class
}

  // TODO: Create fetchLocationData method
  private async fetchLocationData(query: string) {

  }

  // TODO: Create destructureLocationData method
  private destructureLocationData(locationData: Coordinates): Coordinates {}

  // TODO: Create buildGeocodeQuery method
  private buildGeocodeQuery(): string {}

  // TODO: Create buildWeatherQuery method
  private buildWeatherQuery(coordinates: Coordinates): string {}

  // TODO: Create fetchAndDestructureLocationData method
  private async fetchAndDestructureLocationData() {}

  // TODO: Create fetchWeatherData method
  private async fetchWeatherData(coordinates: Coordinates) {}

  // TODO: Build parseCurrentWeather method
  private parseCurrentWeather(response: any) {}

  // TODO: Complete buildForecastArray method
  private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}

  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(city: string) {}
}

export default new WeatherService();
