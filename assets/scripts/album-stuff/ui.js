'use strict';

// const showCommentsTemplate = require('../templates/comment-listing.handlebars');
const showAlbumsTemplate = require('../templates/album-listing.handlebars');

const showAlbums = function (data) {
  // selects the content element and appends new HTML into i

console.log(data);

// showBooksHTML is a string of HTML that is made up
// of the template showBooksTemplate and the data.albums objects
let showAlbumsHtml = showAlbumsTemplate({ albums: data.albums });
// selects the content element and appends new HTML into it
$('.content').empty();
$('.content').append(showAlbumsHtml).hide().fadeIn();
$("#content").on("click", ".del-album", function (e) {
  e.preventDefault();
  let albumDescription = $(e.target).parent().parent().parent();
  albumDescription.fadeOut();
  });
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

const onPostSuccess = function () {
  $(".show-all-albums").click();
  $('.create-album-modal').modal('hide');

};

const onError = function () {

};

const onUpdateSuccess = function () {
  $(".show-all-albums").click();
};



module.exports = {
  showAlbum,
  showAlbums,
  onError,
  onPatchSuccess,
  onPostSuccess,
  showSuccess,
  onShowError,
  onUpdateSuccess
};
