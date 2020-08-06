import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);


// directives
// Vue.directive('rainbow', {
//   bind(element, binding, vnode) {
//     element.style.color = '#' + Math.random().toString().slice(2, 8)
//   }
// });

Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value === "wide") {
      el.style.maxWidth = "1000px";
    } else if (binding.value === "narrow") {
      el.style.maxWidth = "560px";
    };

    if (binding.arg === 'column') {
      el.style.padding = "20px";
      el.style.background ="#ddd"
    }
  }
});

// filters // global
// Vue.filter('to-uppercase', function(value) {
//   return value.toUpperCase();
// });

Vue.filter('snipped', function(value) {
  return value.slice(0, 100) + "...";
});


new Vue({
  el: '#app',
  render: h => h(App)
})
