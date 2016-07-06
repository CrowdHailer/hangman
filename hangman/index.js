import Shouter from './shouter';
import * as ports from './ports'
console.log(ports);

export default function Hangman (config, services) {
  console.log('starting hangman with config', config);
  this.getService = function (name) {
    var port = ports[name];
    console.log(port);
    var service = services[name];
    console.log(port.isPrototypeOf(service));
    console.log(service.isAbstract());
    console.log(port.isAbstract());
    return service;
  };
  this.getShouter = function () {
    return this.getService('shouter');
  };
}

Hangman.prototype.sayhi = function () {
  var alerter = this.getShouter();
  alerter.shout('hawow');
};
