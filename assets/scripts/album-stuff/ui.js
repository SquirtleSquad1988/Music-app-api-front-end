'use strict';


const showAlbums = function (data) {

};

const showAlbum = function (data) {
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
