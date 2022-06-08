import Nav from "./nav";
import Accordion from "./accordion";
import Carousel from "./carousel";
import ModalManager from "./modalManager";
import LangSelector from "./langSelector";
import LangRedirect from "./langRedirect";
import Breakpoint from "./breakpoint";
import AnonymousAnalytics from "./anonymousAnalytics";

window.app = {};
app.breakpoint = new Breakpoint();
app.modalManager = new ModalManager();
app.langRedirect = new LangRedirect(['de', 'en']);

app.nav = new Nav(app.modalManager);
app.langSelector = new LangSelector(app.modalManager, app.langRedirect);

app.carousels = [];
Carousel.setup(app.carousels, app.breakpoint);

app.accordion = new Accordion();
app.anonymousAnalytics = new AnonymousAnalytics(app.langRedirect);
