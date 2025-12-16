
export const api = {
  key: "a708ddc30316af0d0af72a550772595e",
 baseForecast: "https://api.openweathermap.org/data/2.5/forecast",
  baseCurrent: "https://api.openweathermap.org/data/2.5/weather",
  baseFind: "https://api.openweathermap.org/data/2.5/find",

    getByCoords(lat, lon) {
    return `${this.baseForecast}?lat=${lat}&lon=${lon}&appid=${this.key}&units=metric`;
  },

  getCurrentByCity(city) {
    return `${this.baseCurrent}?q=${city}&appid=${this.key}&units=metric`;
  },

  getByCity(city) {
    return `${this.baseForecast}?q=${city}&appid=${this.key}&units=metric`;
  },

  getNearbyCities(lat, lon, count = 5) {
    return `${this.baseFind}?lat=${lat}&lon=${lon}&cnt=${count}&appid=${this.key}&units=metric`;
  }
}