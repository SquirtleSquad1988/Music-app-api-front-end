'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const handlers = require('./auth/events');
const albumEvents = require('./album-stuff/events');



$(() => {
  setAPIOrigin(location, config);
});

require('./example');

$(document).ready(handlers.addHandlers);

$(() => {
  $('.albums').on('submit', albumEvents.onShowAlbum);
  $('.create-album').on('submit', albumEvents.onCreateAlbum);
  $('.update-album').on('submit', albumEvents.onUpdateAlbum);
  $("#content").on("click", ".del-album", albumEvents.onDeleteAlbum);
  $("#content").on("submit", ".update-album", albumEvents.onUpdateAlbum);
  // $("#content").on("click", ".btn", albumEvents.onShowAlbum);
});
