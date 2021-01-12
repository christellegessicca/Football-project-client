'use strict'
const store = require('./../store')

const onCreateSuccess = function (response) {
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

const onDestroyFailure = function () {
  $('#message').text('Please try deleting again!')

}

const onIndexSuccess = function (response) {
for(let i = 0; i < response.players.length; i++) {
  const playerHTML = `
  <h4>Player name : ${response.players[i].playerName}</h4>
  <h6>Player ID: ${response.players[i]._id}</h6>
  <h6>Player team : ${response.players[i].team}</h6>
  <h6>Player position :  ${response.players[i].position}</h6>
`
  $('#display-player').append(playerHTML)
}
  $('#message').text('Got index')

}

const onIndexFailure = function (error) {
  // store.user = null
  $('#message').text('Index not a success!')
  $('form').trigger('reset')
}

const onUpdateSuccess = function (response) {

  $('message').text('Update was a success')
  $('form').trigger('reset')
  $('.authenticated').show()
}
const onUpdateFailure = function (){
  $('#message').text('Update Failed')
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
