export default class Carousel {
  static setup(array, breakpoint) {
    document.querySelectorAll('[data-carousel]').forEach(carousel => {
      array.push(new Carousel(carousel, breakpoint));
    })
  }

  constructor(carousel, breakpoint) {
    this.carousel = carousel;
    this.breakpoint = breakpoint;

    window.amit = carousel;

    this.slideCount = this.getSlides().length;
    this.showSlide(0);
    this.setupSlideNavButtons();
    this.setupSideButtons();
    this.setupYoutubePlayback();
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
        this.showSlide(parseInt(slideNavButton.dataset.carouselSlideTo));
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

  hideUIWhilePlayingVideo(videoContainer) {
    this.carousel.querySelectorAll('[data-carousel-text-container]').forEach(x => x.classList.remove('md:inline'));
    this.carousel.querySelectorAll('[data-carousel-text-container]').forEach(x => x.classList.add('hidden'));
    this.carousel.querySelector('.carousel-nav-direct').classList.remove('md:block');
    this.carousel.querySelectorAll('.carousel-nav-button').forEach(x => x.classList.add('hidden'));
    videoContainer.querySelector('.play-video-btn').classList.add('hidden');
  }

  showUIWhilePlayingVideo(videoContainer) {
    this.carousel.querySelectorAll('[data-carousel-text-container]').forEach(x => x.classList.add('md:inline'));
    this.carousel.querySelectorAll('[data-carousel-text-container]').forEach(x => x.classList.remove('hidden'));
    this.carousel.querySelector('.carousel-nav-direct').classList.add('md:block');
    this.carousel.querySelectorAll('.carousel-nav-button').forEach(x => x.classList.remove('hidden'));
    videoContainer.querySelector('.play-video-btn').classList.remove('hidden');
  }

  setupYoutubePlayback() {
    this.carousel.querySelectorAll('.youtube-thumbnail-container').forEach(container => {
      let pauseTime = null;
      const videoId = container.dataset.videoId;
      const startTime = container.dataset.start;

      container.querySelector('.play-video-btn').addEventListener('click', event => {
        if (this.breakpoint.get() !== 'sm') {
          event.preventDefault();
          this.hideUIWhilePlayingVideo(container);

          const iframe = document.createElement('iframe');
          iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?start=${pauseTime || startTime}&autoplay=1;modestbranding=1&rel=0&enablejsapi=1`);
          iframe.setAttribute('frameborder', '0');
          iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
          iframe.setAttribute('allowfullscreen', '');
          iframe.classList.add('w-full', 'h-full', 'absolute', 'top-0', 'left-0');
          iframe.addEventListener('load', () => {
            const player = new YT.Player(iframe, {
              events: {
                'onStateChange': (event) => {
                  if(event.data === YT.PlayerState.PAUSED) {
                    pauseTime = Math.floor(player.getCurrentTime());
                    setTimeout(() => {
                      // If we're still paused after 100ms, end the presentation
                      if (event.target.getPlayerState() === YT.PlayerState.PAUSED) {
                        this.showUIWhilePlayingVideo(container);
                        iframe.remove();
                      }
                    }, 250)
                  }

                  if(event.data === YT.PlayerState.ENDED) {
                    pauseTime = null;
                    this.showUIWhilePlayingVideo(container);
                    iframe.remove();
                  }
                }
              }
            });
          });
          container.appendChild(iframe);
        }
      });
    });
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