import 'flowbite';

import Nav from "./nav";
import Specialties from "./specialties";
import ModalManager from "./modalManager";
import LangSelector from "./langSelector";

window.app = {}
app.modalManager = new ModalManager();

app.nav = new Nav(app.modalManager);
app.langSelector = new LangSelector(app.modalManager);

app.specialties = new Specialties();