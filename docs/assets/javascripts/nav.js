export default class Nav {
  constructor(modalManager) {
    const target = document.getElementById('nav-mobile-target');

    document.getElementById('nav-mobile-open-btn')?.addEventListener('click', (event) => {
      target.classList.remove('hidden')
      modalManager.opened(event, () => {
        target.classList.add('hidden');
      })
    })
  }
}