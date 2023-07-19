import './assets/styles/main.sass'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// function addStyleToHead(styleText) {
//   const styleEl = document.createElement('style')
//   styleEl.innerText = styleText
//   document.head.appendChild(styleEl)
// }

// // Загрузка и применение нужного стиля
// function loadThemeStyle() {
//   // Определите логику загрузки нужного стиля, например, на основе сохраненных настроек пользователя или системных настроек
//   const isDarkTheme = localStorage.getItem('vueuse-color-scheme') === 'dark'

//   // Загрузка и применение стиля в зависимости от темы
//   if (isDarkTheme) {
//     import('@/assets/styles/dark.sass').then((module) => {
//       addStyleToHead(module.default)
//     })
//   } else {
//     import('@/assets/styles/light.sass').then((module) => {
//       addStyleToHead(module.default)
//     })
//   }
// }

// // Загрузка стиля перед созданием приложения
// loadThemeStyle()

app.use(createPinia())
app.use(router)
// app.use(ElementPlus)

app.mount('#app')
