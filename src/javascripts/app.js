import Nav from "./nav";
import Accordion from "./accordion";
import Carousel from "./carousel";
import ModalManager from "./modalManager";
import LangSelector from "./langSelector";

window.app = {};
app.modalManager = new ModalManager();

app.nav = new Nav(app.modalManager);
app.langSelector = new LangSelector(app.modalManager);

app.carousels = [];
Carousel.setup(app.carousels);

app.accordion = new Accordion();