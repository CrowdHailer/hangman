function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

export default function Page () {
  var state = null;
  var $contents = null;
  this.render = function (newState) {
    // Optionally could pass just updates to the state; state = Object.assign(state, newState)
    state = newState;
    if ($contents) {
      $contents.innerHTML = state;
    }
  };
  var page = this;
  ready(function () {
    $contents = document.getElementById('contents');
    $contents.addEventListener('click', function (e) {
      page.actionCallback(e)
    });
  });
}
