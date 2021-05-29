<template>
  <div class="whether">
    <main>
      <div class="seach-box">
        <input
          type="text"
          placeholder="Search..."
          v-model="query"
          @keyup.enter="fetchWeather"
        />
      </div>

      <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
        <div class="location-box">
          <div class="location">
            {{ weather.name }}, {{ weather.sys.country }}
          </div>
          <div class="date">Monday, 20 January 2020</div>
        </div>
        <div>
          <h1>Test git</h1>
        </div>
        <div class="weather-box">
          <div class="temp">{{ Math.round(weather.main.temp) }}.C</div>
          <div class="weather">{{ weather.weather[0].main }}</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "whether",
  data: function() {
    return {
      api_key: "59c598d52f9207cdca9a7e3faa9d9e0d",
      url_base: "https://api.openweathermap.org/data/2.5/",
      query: "",
      weather: {},
    };
  },
  methods: {
    fetchWeather() {
      fetch(
        `${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`
      )
        .then((res) => {
          return res.json();
        })
        .then(this.setResult);
    },
    setResult(results) {
      this.weather = results;
    },
  },
  components: {},
};
</script>

<style>
.search-box {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
}
</style>
