export default class PickTestimonial {
  // @param testimonials [Array<Object>] where each object has the keys: name, content, weight
  constructor(testimonials) {
    const target = document.getElementById('recent-testimonial-section');
    if (target && testimonials && testimonials.length > 0) {
      this.pick();
      if (this.name && this.content) {
        target.querySelector('#recent-testimonial-text').innerHTML = this.content;
        target.querySelector('#recent-testimonial-name').innerHTML = `-- ${this.name}`;
        target.classList.remove('hidden');
      }
    }
  }

  pick() {
    const dupArr = this.buildArray(testimonials);
    const index = this.daysSinceEpoch() % dupArr.length;

    const picked = dupArr[index] ?? {};
    this.name = picked.name;
    this.content = picked.content;

    // For debug
    // this._dupArray = dupArr;
    // this._index = index;
  }

  // https://stackoverflow.com/questions/12739171/javascript-epoch-time-in-days
  daysSinceEpoch() {
    return Math.floor(new Date() / 8.64e7);
  }

  // Returns an array that has duplicate testimonial by weight
  buildArray(testimonialsWithWeights) {
    if (!testimonialsWithWeights || testimonialsWithWeights.length === 0) {
      return [];
    }

    const arr = [];
    testimonialsWithWeights.forEach(testimonial => {
      [...Array(testimonial.weight).keys()].forEach(() => arr.push(testimonial))
    })

    const randomizer = this.mulberry32(0);
    this.shuffleArray(arr, randomizer);

    return arr;
  }

  // Durstenfeld Shuffle
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffleArray(array, randomizer) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(randomizer() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Random generator with seed
  // https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
  mulberry32(a) {
    return function() {
      let t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
  }
}