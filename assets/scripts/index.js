'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const handlers = require('./auth/events');
const albumEvents = require('./album-stuff/events');



$(() => {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

$(document).ready(handlers.addHandlers);

$(() => {
  $('.albums').on('submit', albumEvents.onShowAlbum);
  $('.delete-album').on('submit', albumEvents.onDeleteAlbum)
  $('.create-album').on('submit', albumEvents.onCreateAlbum);
});
