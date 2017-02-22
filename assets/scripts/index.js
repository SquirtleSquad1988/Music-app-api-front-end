'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const handlers = require('./auth/events');
const albumEvents = require('./album-stuff/events');
const commentEvents = require('./comments/events');



$(() => {
  setAPIOrigin(location, config);
});

require('./example');

$(document).ready(handlers.addHandlers);

$(() => {
  $('.exit').on('click', function () {
    $('#sign-out').submit();
  });
  $("#content").on("click", ".edit-album", function (e) {
    let where = $(e.target).parent().parent().find('.update-album');
    where.toggleClass('hide');
    console.log(where);
  });
  $("#content").on("click", ".comment-album", function (e) {
    let where = $(e.target).parent().parent().find('.create-comment');
    console.log(where);
    where.toggleClass('hide');
  });

});

$(() => {
  $('.albums').on('submit', albumEvents.onShowAlbum);
  $('.create-album').on('submit', albumEvents.onCreateAlbum);
  $('.update-album').on('submit', albumEvents.onUpdateAlbum);
  $("#content").on("click", ".del-album", albumEvents.onDeleteAlbum);
  $("#content").on("submit", ".update-album", albumEvents.onUpdateAlbum);
  $('.create-comment').on('submit', commentEvents.onCreateComment);
  // $('.comments').on('submit', commentEvents.onShowComment);
  $('#content').on('submit', '.create-comment', commentEvents.onCreateComment);
  $('#content').on('submit', '.comments', albumEvents.onShowAlbumComments);
});
