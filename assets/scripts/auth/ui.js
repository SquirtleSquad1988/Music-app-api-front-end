'use strict';



const signInSuccess = () => {
  $('.log').text('Click New Game to Begin');
  $('.new').show();
  $('.credential-status').text('Click New Game to Begin');
  $('#sign-in-dropdown').hide();
  $('#sign-up-dropdown').hide();
  $('#exit').show();
  $('#change-password-dropdown').show();
  $('.sign-in-modal').modal('hide');
  $(".show-all-albums").click();
};

const signInFailure = () => {
    $('.log').text('Please enter a valid username and password');
    $('.credential-status').text('Please enter a valid username and password');
};

const signUpSuccess = () => {
    $('.log').text('Welcome! Please Sign In!');
    $('.credential-status').text('Welcome! Please Sign In!');
    $('.sign-up-modal').modal('hide');
};

const signUpFailure = () => {
    $('.log').text('Please enter a valid username (e.g. name@name) and password (must be 4 or more characters)');
    $('.credential-status').text('Please enter a valid username (e.g. name@name) and password (must be 4 or more characters)');
};

const changePasswordSuccess = () => {
  $('.log').text('Password Successfully Changed');
  $('.credential-status').text('Password Successfully Changed');
  $('.change-password-modal').modal('hide');
};

const passwordChangeFailure = () => {
    $('.log').text('Please Try Again');
    $('.credential-status').text('Please Try Again');
};

const signOutSuccess = () => {
  $('.log').text('Successfully Signed Out. Sign In to Play Again!');
  $('.credential-status').text('Please Sign In or Sign Up!');
  $('.content').fadeOut();
  $('#change-password-dropdown').hide();
  $('#exit').hide();
  $('#sign-in-dropdown').show();
  $('#sign-up-dropdown').show();
};

module.exports = {
  changePasswordSuccess,
  signInSuccess,
  signUpFailure,
  signInFailure,
  passwordChangeFailure,
  signOutSuccess,
  signUpSuccess,
};
