export default class Accordion {
  constructor() {
    document.querySelectorAll('.accordion-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const classList = btn.querySelector('svg').classList
        classList.toggle('rotate-0')
        classList.toggle('-rotate-180')

        btn.closest('.accordion-element').querySelector('dd').classList.toggle('hidden')
      })
    })
  }
}