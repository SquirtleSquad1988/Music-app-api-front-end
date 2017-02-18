'use strict';

const showAlbumsTemplate = require('../templates/album-listing.handlebars');

const showAlbums = function (data) {
  console.log(data);

// showBooksHTML is a string of HTML that is made up
// of the template showBooksTemplate and the data.books objects
let showAlbumsHtml = showAlbumsTemplate({ albums: data.albums });
// selects the content element and appends new HTML into it
$('.content').append(showAlbumsHtml);
};

const showAlbum = function (data) {
  console.log(data);
};

const showSuccess = function () {

};

const onShowError = function () {
  $('.log').text('Game does not exist');
};

const onPatchSuccess = function () {

};

const onPostSuccess = function (data) {
  $('.winner').text('You are now playing game id: ' + data);

};

const onError = function () {

};



module.exports = {
  showAlbum,
  showAlbums,
  onError,
  onPatchSuccess,
  onPostSuccess,
  showSuccess,
  onShowError
};
