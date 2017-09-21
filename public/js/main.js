

Vue.component('perro', {
  props: ['nombre_perro', 'edad'],
  template: '<h3>Necesita más perro, en conctreto, uno que se llame {{ nombre_perro }} de {{edad}} años</h3>'
})


// Vue app
var app = new Vue({
  el: '#app',
  data: {
    message: 'yehaaaaa'
  }
})