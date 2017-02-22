'use strict';

const config = require('../config.js');
const store = require('../store.js');

const createAlbum = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/albums',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST',
    data,
  });
};

const showAlbums = function () {
  return $.ajax({
    url: config.apiOrigin + '/albums',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET',
  });
};

const showAlbum = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/albums/' + id,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET',
  });
};

const showAlbumComments = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/albums/' + id + '/comments/',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET',
  });
};

const destroyAlbum = function(id){
  return $.ajax({
    url: config.apiOrigin + '/albums/' + id,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE',
  });
};

const updateAlbum = function(id, data) {
  return $.ajax({
    url: config.apiOrigin + '/albums/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
  },
  data
});
};

module.exports = {
  createAlbum,
  showAlbum,
  showAlbums,
  destroyAlbum,
  updateAlbum,
  showAlbumComments
};
