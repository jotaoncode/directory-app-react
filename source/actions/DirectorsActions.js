var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {

  addDirectorToCollection: function (director) {
    var action = {
      type: 'add_director_to_collection',
      director: director
    };

    AppDispatcher.dispatch(action);
  },

  removeDirectorFromCollection: function (directorId) {
    var action = {
      type: 'remove_director_from_collection',
      directorId: directorId
    };

    AppDispatcher.dispatch(action);
  },

  removeAllDirectorFromCollection: function () {
    var action = {
      type: 'remove_all_director_from_collection'
    };

    AppDispatcher.dispatch(action);
  },

  setCollectionName: function (collectionName) {
    var action = {
      type: 'set_collection_name',
      collectionName: collectionName
    };

    AppDispatcher.dispatch(action);
  }
};
