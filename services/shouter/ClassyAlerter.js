import Shouter from '../../hangman/shouter';

function ClassyAlerter () {
  var i = 0;
  this.shout = function(x){
    i = i + 1;
    window.alert(x + i);
  };
}

ClassyAlerter.prototype = Object.create(Shouter);
ClassyAlerter.prototype.constructor = ClassyAlerter;

export default ClassyAlerter
