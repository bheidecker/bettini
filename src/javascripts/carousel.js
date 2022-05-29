export default class Carousel {
  static setup(array, breakpoint) {
    document.querySelectorAll('[data-carousel]').forEach(carousel => {
      array.push(new Carousel(carousel, breakpoint));
    })
  }

  constructor(carousel, breakpoint) {
    this.carousel = carousel;
    this.breakpoint = breakpoint;

    this.slideCount = this.getSlides().length;
    this.showSlide(0);
    this.setupSlideNavButtons();
    this.setupSideButtons();
    this.setMinHeight();
    window.addEventListener('resize', () => this.setMinHeight());
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

  setMinHeight() {
    const slides = this.getSlides();
    if (this.breakpoint.get() !== 'sm') {
      slides.forEach(item => item.querySelector('[data-carousel-text-container]').style.removeProperty('min-height'));
      return;
    }

    // Small screen size
    let maxHeight = 0;
    slides.forEach((item, index) => {
      item.classList.remove('hidden')
      maxHeight = Math.max(maxHeight, item.querySelector('[data-carousel-text-container] div').offsetHeight)
      if (index !== this.selectedSlide) {
        item.classList.add('hidden')
      }
    });
    slides.forEach(item => item.querySelector('[data-carousel-text-container]').style.minHeight = `${maxHeight}px`)
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