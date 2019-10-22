import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      currencyData: null
    },
    mounted() {
      this.getCurrency();
    },
    computed: {
      euroToPound: function() {
        return Math.round((this.EUR * this.GBP) * 100) / 100;
      },
      poundToEuro: function() {
        return Math.round((this.GBP * this.EUR) * 100) / 100;
      }
    },
    methods: {
      getCurrency: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.currencyData = data.rates)
      }
    }
  })
})


// Math.round(num * 100) / 100
