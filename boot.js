import Hangman from './hangman/index'

var config = window.document.currentScript.dataset;
config = Object.assign({}, config);

import ClassyAlerter from './services/shouter/ClassyAlerter'
import StatelessAlerter from './services/shouter/StatelessAlerter'

// var services = {shouter: new ClassyAlerter()};
var services = {shouter: StatelessAlerter};

var hangman = new Hangman(config, services);
export default hangman

hangman.sayhi();
hangman.sayhi();
