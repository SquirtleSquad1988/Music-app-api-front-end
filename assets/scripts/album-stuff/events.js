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
    api.showAlbums()
    .then(ui.showAlbums)
    .catch(ui.onShowError);
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
  let info = getFormFields(event.target);
  console.log(+$(this).data('id'));
  api.updateAlbum(+$(this).data('id'), info)
    .then(ui.onUpdateSuccess)
    .catch(ui.onError);

};

module.exports = {
  onUpdateAlbum,
  onCreateAlbum,
  onShowAlbum,
  onDeleteAlbum,
};
