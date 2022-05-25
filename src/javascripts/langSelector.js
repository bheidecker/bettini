export default class LangSelector {
  constructor(modalManager) {

    const target = document.getElementById('lang-selector-menu');

    document.getElementById('lang-selector-open-btn').addEventListener('click', (event) => {
      if (target.classList.contains('hidden')) {
        target.classList.remove('hidden');

        modalManager.opened(event, () => {
          target.classList.add('hidden');
        })
      } else {
        modalManager.close();
      }
    })

  }
}