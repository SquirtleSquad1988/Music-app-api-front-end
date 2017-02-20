'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const store = require('../store');
const getFormFields = require('../../../lib/get-form-fields');

const onCreateAlbum = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createAlbum(data)
  .then((response) => {
    store.album = response.album;
    ui.onPostSuccess(response.album);
  });
};

const onShowAlbum = function (event) {
  event.preventDefault();
  let albumId = $('#album-id').val();
  if (albumId.length === 0) {
    api.showAlbums()
    .then(ui.showAlbums)
    .catch(ui.onShowError);
  } else {
    api.showAlbum(albumId)
    .then(ui.showAlbum)
    .catch(ui.onShowError);
  }
};

const onDeleteAlbum = function(event){
  event.preventDefault();
  // let bookId = $('#delete-book-id').val();
  // multiple ways to do everything.
  // However prefer this way.
  api.destroyAlbum(+$(this).data('id'))
    .then(ui.onDeleteSuccess)
    .catch(ui.onError);
};

const onUpdateAlbum = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updateAlbum(data.album.id, data)
    .then(ui.onUpdateSuccess)
    .catch(ui.onError);
};

module.exports = {
  onUpdateAlbum,
  onCreateAlbum,
  onShowAlbum,
  onDeleteAlbum
};
