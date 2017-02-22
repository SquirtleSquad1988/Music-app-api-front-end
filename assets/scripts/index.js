'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const handlers = require('./auth/events');
const albumEvents = require('./album-stuff/events');
const commentEvents = require('./comments/events');



$(() => {
  setAPIOrigin(location, config);
  $('#change-password-dropdown').hide();
  $('#exit').hide();
  $('.create-new-album').hide();
});

require('./example');

$(document).ready(handlers.addHandlers);

$(() => {
  $(".hide-album-comments").hide();
  $('#exit').on('click', function () {
    $('#sign-out').submit();
  });
  $("#content").on("click", ".edit-album", function (e) {
    let where = $(e.target).parent().parent().find('.update-album');
    where.toggleClass('hide');
  });
  $("#content").on("click", ".comment-album", function (e) {
    let where = $(e.target).parent().parent().find('.create-comment');
    where.toggleClass('hide');
  });
  $("#content").on("click", ".hide-album-comments", function () {
    let current = $(this).data('id');
    $(".display-comments[data-id='" + current +"']").empty();
    $(".hide-album-comments[data-id='" + current +"']").hide();
    $(".show-album-comments[data-id='" + current +"']").show();
  });
});

$(() => {
  $('.albums').on('submit', albumEvents.onShowAlbum);
  $('.create-album').on('submit', albumEvents.onCreateAlbum);
  $('.update-album').on('submit', albumEvents.onUpdateAlbum);
  $("#content").on("click", ".del-album", albumEvents.onDeleteAlbum);
  $("#content").on("submit", ".update-album", albumEvents.onUpdateAlbum);
  $('.create-comment').on('submit', commentEvents.onCreateComment);
  $('#content').on('submit', '.create-comment', commentEvents.onCreateComment);
  $('#content').on('submit', '.comments', albumEvents.onShowAlbumComments);
});
