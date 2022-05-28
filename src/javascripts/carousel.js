export default class Carousel {
  static setup(array) {
    document.querySelectorAll('[data-carousel]').forEach(carousel => {
      array.push(new Carousel(carousel));
    })
  }

  constructor(carousel) {
    this.carousel = carousel;

    this.slideCount = this.getSlides().length;
    this.showSlide(0);
    this.setupSlideNavButtons();
    this.setupSideButtons();
  }

  getSlides() {
    return this.carousel.querySelectorAll('[data-carousel-item]');
  }
  
  getSlideNavButtons() {
    return this.carousel.querySelectorAll('[data-carousel-slide-to]');
  }

  getNextButton() {
    return this.carousel.querySelector('[data-carousel-next]');
  }

  getPrevButton() {
    return this.carousel.querySelector('[data-carousel-prev]');
  }

  setupSlideNavButtons() {
    const slideNavButtons = this.getSlideNavButtons();

    slideNavButtons.forEach(slideNavButton => {
      slideNavButton.addEventListener('click', () => {
        this.showSlide(slideNavButton.dataset.carouselSlideTo);
      })
    })
  }

  setupSideButtons() {
    this.getNextButton().addEventListener('click', () => {
      const nextSlide = (this.selectedSlide + 1) % this.slideCount;
      this.showSlide(nextSlide);
    })

    this.getPrevButton().addEventListener('click', () => {
      const prevSlide = (this.selectedSlide - 1 + this.slideCount) % this.slideCount;
      this.showSlide(prevSlide);
    })
  }

  showSlide(index) {
    this.selectedSlide = index;

    const slides = this.getSlides();
    slides.forEach(item => item.classList.add('hidden'));
    slides[index].classList.remove('hidden');

    const slideNavButtons = this.getSlideNavButtons();
    slideNavButtons.forEach(button => {
      button.classList.remove('bg-white');
      button.classList.add('bg-white/50');
      button.classList.add('hover:bg-white');
    })

    const button = slideNavButtons[index];
    button.classList.add('bg-white');
    button.classList.remove('bg-white/50');
    button.classList.remove('hover:bg-white');
  }
}