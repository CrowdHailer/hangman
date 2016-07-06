import Hangman from './hangman/index'

var config = window.document.currentScript.dataset;
config = Object.assign({}, config);

import ClassyAlerter from './services/shouter/ClassyAlerter'
import StatelessAlerter from './services/shouter/StatelessAlerter'
import Page from './services/view/Page'


// var services = {shouter: new ClassyAlerter()};
var page = new Page()
var services = {
  shouter: StatelessAlerter,
  view: page
};

var hangman = new Hangman(config, services);

page.actionCallback = function () {
  hangman.setState('newew');
};
export default hangman
