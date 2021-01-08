'use strict'
const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('Sign up Successful!')
  $('form').trigger(reset)

}

const signUpFailure = function (error) {
  $('#message').text('Sign up failed' + error.responseJSON.message)

}

const onSignInSuccess = function (response) {
  $('#message').text('Sign in Successful!')
  store.user = response.user
  $('form').trigger('reset')
  $('.authenticated').show()
  $('.unauthenticated').hide()
}

const onSignInFailure = function (error) {
  $('#message').text('Please trying sigining in again!' + error.responseJSON.message)

}

const onChangePasswordSuccess = function (response) {
  $('message').text('Password change successful!')
  $('form').trigger('reset')
}

const onChangePasswordFailure = function (error) {
  store.user = null
  $('message').text('Sign out was a success!')
  $('form').trigger('reset')
  $('.unauthenticated').show()
  $('.authenticated').hide()
}

const onSignOutFailure = function (error){
  $('#message').text('Sign out Failed' + error.responseJSON.message)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  onSignInFailure,
  onSignInSuccess,
  onChangePasswordFailure,
  onChangePasswordSuccess,
  onSignOutFailure,
  onSignInSuccess
}
