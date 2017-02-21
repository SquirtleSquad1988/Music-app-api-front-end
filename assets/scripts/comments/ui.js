'use strict';

const showCommentsTemplate = require('../templates/comment-listing.handlebars');

const showComments = function (data) {

// showBooksHTML is a string of HTML that is made up
// of the template showBooksTemplate and the data.albums objects
let showCommentsHtml = showCommentsTemplate({ comments: data.comment });
// selects the content element and appends new HTML into it

$('h1').append(showCommentsHtml);
// $("#content").on("click", ".del-album", function (e) {
//   e.preventDefault();
//   let albumDescription = $(e.target).parent().parent();
//   albumDescription.fadeOut();
//   });
};

const showComment = function (data) {
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

};

const onError = function () {

};

const onUpdateSuccess = function () {
  $(".show-all-albums").click();
};



module.exports = {
  showComment,
  showComments,
  onError,
  onPatchSuccess,
  onPostSuccess,
  showSuccess,
  onShowError,
  onUpdateSuccess
};
