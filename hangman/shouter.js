var Shouter = {
  shout: function () {
    throw new Error('Not Implemented');
  },
  isAbstract: function () {
    return this === Shouter;
  }
};

export default Shouter
