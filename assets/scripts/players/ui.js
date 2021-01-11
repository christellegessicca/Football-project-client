'use strict'
const store = require('./../store')

const onCreateSuccess = function (response) {
  $('#message').text('Player created Successful!')
  $('form').trigger(reset)
  $('on-auth').show()
}

const onCreateFailure = function (error) {
  $('#message').text('Create failed' + error.responseJSON.message)
  $('.authenticated').show()
}

const onDestroySuccuess = function (response) {
  $('#message').text('Deleted Successful!')
  store.user = response.user
  $('form').trigger('reset')
  $('.authenticated').show()
}

const onDestroyFailure = function (error) {
  $('#message').text('Please try deleting again!' + error.responseJSON.message)

}

const onIndexSuccess = function (response) {
  $('message').text('Index')
  $('form').trigger('reset')
}

const onIndexFailure = function (error) {
  store.user = null
  $('message').text('Index not a success!')
  $('form').trigger('reset')
  $('.unauthenticated').show()
  $('.authenticated').hide()
}
const onUpdateSuccess = function (response) {
  $('message').text('Update was a success')
  $('form').trigger('reset')
}
const onUpdateFailure = function (error){
  $('#message').text('Update Failed' + error.responseJSON.message)
}

module.exports = {
  onCreateFailure,
  onCreateSuccess,
  onDestroySuccuess,
  onDestroySuccuess,
  onIndexFailure,
  onIndexSuccess,
  onUpdateSuccess,
  onUpdateFailure
}
