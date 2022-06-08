export default class LangRedirect {
  constructor(languages) {
    this.allLanguages = languages;
    [this.default, ...this.nonDefault] = languages;

    if (!document.body.dataset.hasOwnProperty('skipLangRedirect')) {
      this.ensureCorrectLanguage();
    }
  }

  willRedirect() {
    return !!this.aboutToRedirect;
  }

  ensureCorrectLanguage() {
    let langFromStore = this.getLanguageFromStore();
    if (!langFromStore) {
      const browserLang = this.getLanguageFromBrowser();
      if (this.allLanguages.includes(browserLang)) {
        langFromStore = browserLang;
      } else {
        langFromStore = 'en';
      }
      this.setLanguageInStore(langFromStore);
    }

    this.redirect(langFromStore);
  }

  getLanguageFromUrl() {
    const path = window.location.pathname;

    let foundLang;
    this.nonDefault.forEach(lang => {
      if (path.startsWith(`/${lang}/`)) {
        foundLang = lang;
      }
    })

    return foundLang || this.default;
  }

  getLanguageFromStore() {
    return window.localStorage.getItem('lang');
  }

  getLanguageFromBrowser() {
    return window.navigator.language.slice(0, 2);
  }

  setLanguageInStore(lang) {
    window.localStorage.setItem('lang', lang);
  }

  redirect(lang) {
    const urlLang = this.getLanguageFromUrl();

    // No need to redirect
    if (lang === urlLang) {
      return
    }

    this.aboutToRedirect = true;
    const path = window.location.pathname;
    const pathWithoutLang = path.replace(`/${urlLang}/`, '/');    // when default lang, path is unaffected

    // Redirecting to the default language: remove any non-default language prefix
    if (lang === this.default) {
      const href = `${window.location.origin}${pathWithoutLang}`
      window.location.replace(href);
      return
    }

    // Redirecting to non default language: change language prefix
    const href = `${window.location.origin}/${lang}${pathWithoutLang}`
    window.location.replace(href);
  }
}