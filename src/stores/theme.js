// stores/theme.js
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => {
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
    return getPersistedState('theme', systemPreference)
  },

  actions: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
      setPersistedState(this.theme)
    }
  }
})

function getPersistedState(key, defaultValue) {
  const persistedValue = localStorage.getItem(key)
  return persistedValue !== null ? persistedValue : defaultValue
}

function setPersistedState(value) {
  localStorage.setItem('theme', value)
}
