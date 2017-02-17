'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const store = require('../store');
const getFormFields = require('../../../lib/get-form-fields');

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked

const onCreateAlbum = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createAlbum(data)
  .then((response) => {
    store.album = response.album;
    ui.onPostSuccess(response.album);
  });
};
//
// const onGetBooks = function (event) {
//   event.preventDefault();
//   let albumId = $('#album-id').val();
//
//   if (bookId.length === 0){
//       booksApi.index()
//         .then(booksUi.onSuccess)
//         .catch(booksUi.onError);
//   } else {
//     booksApi.show(bookId)
//       .then(booksUi.onSuccess)
//       .catch(booksUi.onError);
//   }
//
// };
//
//
//
// const onDeleteBook = function(event){
//   event.preventDefault();
//   // let bookId = $('#delete-book-id').val();
//   // multiple ways to do everything.
//   // However prefer this way.
//
//   let data = getFormFields(event.target);
//   booksApi.destroy(data.book.id)
//     .then(booksUi.onDeleteSuccess)
//     .catch(booksUi.onError);
// };
//
// const onUpdateBook = function(event){
//   event.preventDefault();
//
//   let data = getFormFields(event.target);
//   booksApi.update(data)
//     .then(booksUi.onUpdateSuccess)
//     .catch(booksUi.onError);
// };

module.exports = {
  // onGetBooks,
  // onDeleteBook,
  // onUpdateBook,
  onCreateAlbum
};
