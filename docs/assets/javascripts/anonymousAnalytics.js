import isbot from 'isbot';
import axios from 'axios';

export default class AnonymousAnalytics {
  constructor(langRedirect, breakpoint) {
    if (langRedirect.willRedirect()) {
      return
    }

    this.breakpoint = breakpoint;
    this.visit();

    document.
      querySelectorAll('a[target=_blank]').
      forEach(elm => elm.addEventListener('click', () => this.link(elm.href)))
  }

  visit() {
    this.call({
      event: 'page_view'
    })
  }

  link(href) {
    this.call({
      event: 'link',
      link: href
    })
  }

  sessionId() {
    let id = sessionStorage.getItem('sessionId');
    if (!id) {
      id = [...Array(32)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
      sessionStorage.setItem('sessionId', id);
    }
    return id;
  }

  call(params) {
    const lang = document.body.dataset.originalLang;

    if (isbot(navigator.userAgent)) {
      params = { bot: navigator.userAgent, ...params }
    }

    const strParams = this.paramsToString({
      session: this.sessionId(),
      lang: lang,
      page: window.location.pathname.replace(new RegExp(`^\/${lang}`), ''),
      breakpoint: this.breakpoint.get(),
      href: window.location.href,
      pathname: window.location.pathname,
      search: window.location.search,
      hash: window.location.hash,
      ...params
    });

    axios.get(`${window.pagerEndpoint}${strParams}`);
  }

  paramsToString(params) {
    let str = '';
    for (const key in params) {
      const symbol = str.length > 0 ? '&' : '?';
      str += `${symbol}${key}=${encodeURIComponent(params[key])}`;
    }
    return str;
  }
}