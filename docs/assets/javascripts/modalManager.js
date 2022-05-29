export default class ModalManager {
  constructor() {
    // Holds a callback for closing the current modal
    this.currentModal = null;
    // Holds the current event to allow closing modals when clicking anywhere on the page
    this.currentEvent = null;

    window.addEventListener("keydown", (event) => {
      if (event.key == 'Escape') {
        this.close();
      }
    })

    document.addEventListener('click', (event) => {
      if (this.currentEvent !== event) {
        this.close();
      }
      this.currentEvent = null;
    })
  }

  opened(event, closeCallback) {
    this.currentEvent = event;
    this.close();
    this.currentModal = closeCallback;
  }

  close() {
    if (this.currentModal) {
      this.currentModal();
      this.currentModal = null;
    }
  }
}