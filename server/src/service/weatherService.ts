import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  lat: number;
  lon: number;
}

// TODO: Define a class for the Weather object
class Weather {
  tempF: number;
  humidity: number;
  windSpeed: number;
  icon: string;
  date?: string;
  city?: string;
  iconDescription?: string;

  constructor(){
    this.tempF = 0;
    this.humidity = 0;
    this.windSpeed = 0;
    this.icon = '';
    this.date = '';
    this.city = '';
    this.iconDescription = '';
  }
}

// TODO: Complete the WeatherService class
class WeatherService {

  // TODO: Define the baseURL, API key, and city name properties
  baseURL: string; 
  weatherApi: string; 
  cityName: string; 

  constructor() {
    this.baseURL = process.env.API_BASE_URL || '';
    this.weatherApi = process.env.API_KEY || '';
    this.cityName = ''; // This will be set when you create an instance of the class
}

  // TODO: Create fetchLocationData method
  private async fetchLocationData(query: string) {

  }

  // TODO: Create destructureLocationData method
  private destructureLocationData(locationData: Coordinates): Coordinates {
    
    return { lat: 0, lon: 0 };
  }

  // TODO: Create buildGeocodeQuery method
  private buildGeocodeQuery(): string {

    return '';
  }

  // TODO: Create buildWeatherQuery method
  private buildWeatherQuery(coordinates: Coordinates): string {

    return '';
  }

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
