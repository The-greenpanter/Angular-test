export interface WeatherData {
    // Define properties to represent relevant weather data from API response
    properties: {
      periods: {
        temperature: {
          value: number[];
        }
      }[];
    };
  }
  