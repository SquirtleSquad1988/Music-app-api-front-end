'use strict';

// const showCommentsTemplate = require('../templates/comment-listing.handlebars');
const showAlbumsTemplate = require('../templates/album-listing.handlebars');
const showCommentsTemplate = require('../templates/comment-listing.handlebars');

const showAlbums = function (data) {
  // selects the content element and appends new HTML into i
  // showBooksHTML is a string of HTML that is made up
  // of the template showBooksTemplate and the data.albums objects
  // let showCommentsHtml = showCommentsTemplate({ comments: data.comments });
  let showAlbumsHtml = showAlbumsTemplate({ albums: data.albums });
  // selects the content element and appends new HTML into it
  $('.content').empty();
  $('.content').append(showAlbumsHtml).hide().fadeIn();
  // the function below deletes the album item from the rendered list and
  // only that item. Have to alter DOM traversal if structure of album-item
  // is altered
  $("#content").on("click", ".del-album", function (e) {
    e.preventDefault();
    let albumDescription = $(e.target).parent().parent();
    albumDescription.fadeOut();
    });
  $(".hide-album-comments").hide();

};

const onShowAlbumComments = function (data) {

  let showCommentsHtml = showCommentsTemplate({ comments: data.comments });
  let current = data.comments[0].album_id;
  $(".display-comments[data-id='" + current +"']").empty();
  $(".display-comments[data-id='" + current +"']").append(showCommentsHtml);
  $(".show-album-comments[data-id='" + current +"']").hide();
  $(".hide-album-comments[data-id='" + current +"']").show();
  $('.log').text('');
};

const showAlbum = function (data) {
};

const showSuccess = function () {

};

const onShowError = function () {
  $('.log').text('This album has no comments');
};

const onPostSuccess = function () {
  $(".show-all-albums").click();
  $('.create-album-modal').modal('hide');
  $('.log').text('Successfully Created Album');
  $('.credential-status').empty();
  $('input').val('');
};

const onError = function () {
  $('.log').text('Parameters must be at least 1 character');
};

const onUpdateSuccess = function () {
  $(".show-all-albums").click();
  $('.log').text('Album Successfully Updated');
};

const onDeleteSuccess = function () {
  $('.log').text('Album Successfully Deleted');
};

const onCreateError = function() {
 $('.credential-status').text('Please Try Again: Parameters must contain at least 1 character');
};



module.exports = {
  showAlbum,
  showAlbums,
  onError,
  onPostSuccess,
  showSuccess,
  onShowError,
  onUpdateSuccess,
  onShowAlbumComments,
  onDeleteSuccess,
  onCreateError,
};
