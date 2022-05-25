export default class Specialties {
  constructor() {
    document.querySelectorAll('.specialties-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        window.amit = btn;
        const classList = btn.querySelector('svg').classList
        classList.toggle('rotate-0')
        classList.toggle('-rotate-180')

        btn.closest('.specialty-element').querySelector('dd').classList.toggle('hidden')
      })
    })
  }
}