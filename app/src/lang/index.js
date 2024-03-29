import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang

import enLocale from './en'
import zhLocale from './zh'

Vue.use(VueI18n)
const messages = {
  'en': {
    ...enLocale,
    ...elementEnLocale
  },
  'zh': {
    ...zhLocale,
    ...elementZhLocale
  }
}

export function getLanguage () {
  let mpLanguage = Cookies.get('language') ? Cookies.get('language') : (navigator.language || navigator.browserLanguage).toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (mpLanguage.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'en'
}

const i18n = new VueI18n({
  // set locale
  // options: en | zh | es
  locale: getLanguage(),
  // set locale messages
  messages
})

export default i18n
