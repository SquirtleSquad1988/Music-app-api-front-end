'use strict';

const showComments = function () {
  // this function is defined in album-stuff/ui.js as onShowAlbumComments
};

const onCreateError = function () {
  $('.log').text('Comment must be at least one character');
};

const onPatchSuccess = function () {


};

const onPostSuccess = function () {
  $(".show-all-albums").click();
  $('.log').text('Comment Successfully Created');

};

const onError = function () {

};

const onUpdateSuccess = function () {
  $(".show-all-albums").click();
};



module.exports = {
  showComments,
  onError,
  onPatchSuccess,
  onPostSuccess,
  onCreateError,
  onUpdateSuccess
};
