'use strict'
const store = require('./../store')

const onCreateSuccess = function (response) {
  console.log('made it to create success')
  $('#message').text('Player created Successful!')
  // $('on-auth').show()
  $('.authenticated').show()
  store.player = response.player
  $('form').trigger('reset')
}

const onCreateFailure = function () {
  $('#message').text('Create failed')
  $('.authenticated').show()
}

const onDestroySuccess = function (response) {
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
  $('.authenticated').show()
}
const onUpdateFailure = function (error){
  $('#message').text('Update Failed' + error.responseJSON.message)
  $('.authenticated').show()
}

module.exports = {
  onCreateFailure,
  onCreateSuccess,
  onDestroySuccess,
  onDestroyFailure,
  onIndexFailure,
  onIndexSuccess,
  onUpdateSuccess,
  onUpdateFailure
}
