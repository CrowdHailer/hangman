import Shouter from '../../hangman/shouter';

export default Object.assign(Object.create(Shouter), {
  shout: function(x){
    window.alert(x);
  }
});
