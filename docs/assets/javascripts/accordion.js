export default class Accordion {
  constructor() {
    document.querySelectorAll('.accordion-element dt').forEach(row => {
      row.addEventListener('click', () => {
        const classList = row.querySelector('svg').classList
        classList.toggle('rotate-0')
        classList.toggle('-rotate-180')

        row.closest('.accordion-element').querySelector('dd').classList.toggle('hidden')
      })
    })
  }
}