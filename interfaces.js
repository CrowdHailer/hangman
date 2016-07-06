// ui needs to understand app api

function UIDOM (document, window) {
  var app = appSpec;
  this.connect = function (a) {
    app = a;
  };

  document.onLocationChange(function (url) {
    app.mergeState(partialState);
  });
}

function App (state, adapters) {
  state = Object.assign({}, defaultState, state);
  var ui = adapters.ui;
  ui.connect(this);

  var http = adapter.http;

  this.doStuff = function () {
    ui.render(someState);
  };

  this.fetchStuff = function () {
    http.get(request, failRequest(id), succedRequest(id));
  };

  // use facade pattern with something like
  Object.assign(this, {functionallity: function () {}});

}

var ui = new UIDOM(document, window);
var app = new App({}, {ui: ui});

// testing
var uiFake = {
  connect: function (_app) {
    // ignore it
  },
  render: function (state) {
    this.state = state;
  }
};

// Given app = new App(state, services)

// When app.doSomething

// Then var state = ui.getLastRenderState()

///////////////////////////////////////

// Needs a ui with all the call backs for testing
// Pluses app defines view interface
function App (state, adapters) {
  state = mergeState(defaultState, state);
  var ui = adapters.ui;

  // could call this on set location and pass an obj representing url
  ui.onSetState = function (state) {
    // from url change
    state = mergeState(defaultState, state);
  };

  ui.onPickName(function (name) {
    http.get(name, failRequest, succedRequest);
  });
}

////////////////////////////////////////////////

app = new App(state, adapters);

var ui = new UIDOM(app, document, window);

// could have multiple ui's monitoring state.
app.observe(function (state) {
  ui.render(state);
});

////////////////////////////////

// Requires abstract Class whereas all others were interfaces
// Aims to make UI immutable but it wasnt to start with
function App (state, adapters) {
  var ui = new adapters.UI(this);
  this.doStuff = function () {
    ui.render(newState);
  };

  this.fetchStuff = function () {
    http.get(thing, callback);
  };
}

//////////////////////////////

// maybe some issues in passing request id to uplink
var view = new View($root, window);
var uplink = new Uplink(config, window);
var app = new App(state, {view: view});
var controller = new Controller($root, app);
var controller = new Controller(uplink, app);
