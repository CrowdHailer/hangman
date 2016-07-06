import * as ports from 'ports';

var defaultState = {}

function Hangman (state, adapters) {
  App.call(this, Object.assign({}, defaultState, state), adapters);
}

Hangman.prototype = Object.create(App.prototype);
Hangman.prototype.constructor = Hangman;


///////////////////////////////

function setupServices(ports, adapters) {
  var target = Object.assign({}, ports);
  for (var key in adapters) {
    if (Object.prototype.hasOwnProperty.call(adapters, key)) {
      var port = target[key];
      var adapter = adapters[key];
      if (port.isPrototypeOf(adapter)) {
        target[key] = adapter;
      } else {
        throw new Error('Bad implementation');
      }
    }
  }
  return target;
}

var handles = {
  doStuff: function (state, event, services) {
    //
    return state;
  }
};

function Hangman (state, adapters) {
  var service = setupServices(ports, adapters);
  var ui = services.ui;

  // Why not freeze it
  state = Object.assign({}, defaultState, state);

  var facade = {};
  for (var key in handles) {
    if (handles.hasOwnProperty(key)) {
      facade[key] = function (arg) {
        state = handles[key](state, arg);
        ui.render(state);
      };
    }
  }
}

function wireUpHandlers (app, handlers) {
  for (var key in handles) {
    if (handles.hasOwnProperty(key)) {
      app[key] = function (arg) {
        var state = handles[key](app.state, arg, app.services);
        Object.freeze(state);
        app.state = state;
        ui.render(state);
      };
    }
  }
}

var handlers = {
  startListening: function(state, {}, services) {
    services.sse.connect(this) // Not pure handlers to connect to services!!
    // To fix this probably needs proper IO monads returned too complex by half.
  }
}

function Hangman (config, adapters) {
  var services = setupServices(ports, adapters);
  var state = Object.assign({}, defaultState, config);
  var app = {state: state};
  wireUpHandlers(app, handlers);
  return app;
}
