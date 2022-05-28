export default class LangSelector {
  constructor(modalManager, langRedirect) {
    const target = document.getElementById('lang-selector-menu');

    document.getElementById('lang-selector-open-btn')?.addEventListener('click', (event) => {
      if (target.classList.contains('hidden')) {
        target.classList.remove('hidden');

        modalManager.opened(event, () => {
          target.classList.add('hidden');
        })
      } else {
        modalManager.close();
      }
    })

    target?.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        langRedirect.setLanguageInStore(link.dataset.lang)
      })
    })
  }
}