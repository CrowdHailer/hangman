import Shouter from './shouter';
import * as ports from './ports'
console.log(ports);

export default function Hangman (config, services) {
  // Optionally have the App as a set of command handlers
  console.log('starting hangman with config', config);
  this.getService = function (name) {
    var port = ports[name];
    var service = services[name];
    return service;
  };
  this.getShouter = function () {
    return this.getService('shouter');
  };

  var view = this.getService('view');

  this.setState = function (newState) {
    view.render(newState);
  };
}

Hangman.prototype.sayhi = function () {
  var alerter = this.getShouter();
  alerter.shout('hawow');
};
