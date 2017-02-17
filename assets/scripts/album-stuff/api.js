'use strict';

const config = require('../config.js');
const store = require('../store.js');

const createAlbum = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/albums',
    // headers: {
    //   Authorization: `Token token=${store.user.token}`
    // },
    method: 'POST',
    data,
  });
};

module.exports = {
  createAlbum
};
