import Hangman from './hangman/index'

var config = window.document.currentScript.dataset;
config = Object.assign({}, config);

import ClassyAlerter from './services/shouter/ClassyAlerter'
import StatelessAlerter from './services/shouter/StatelessAlerter'
import Page from './services/view/Page'


// var services = {shouter: new ClassyAlerter()};
var services = {
  shouter: StatelessAlerter,
  view: new Page()
};

var hangman = new Hangman(config, services);
export default hangman
