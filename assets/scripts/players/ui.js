'use strict'
const store = require('./../store')

const onCreateSuccess = function (response) {
  $('#message').text('Player created Successful!')
  $('.authenticated').show()
  // the string created for player gets stored
  store.player = response.player
  $('form').trigger('reset')
}

const onCreateFailure = function () {
  $('#message').text('Create failed')
  $('.authenticated').show()
}

const onDestroySuccess = function () {
  $('#message').text('Deleted Successful!')
  $('form').trigger('reset')
  $('.authenticated').show()
}

const onDestroyFailure = function () {
  $('#message').text('Please try deleting again!')
  $('.authenticated').show()
}

const onIndexSuccess = function (response) {
  // this loops through players in the html
  // finds the index of that player and displays the following
const player = response.players
let playersHtml = ''
 player.forEach(players => {
  const playerHTML = (`
  <h4>Player name : ${players.playerName}</h4>
  <h6>Player ID: ${players._id}</h6>
  <h6>Player team : ${players.team}</h6>
  <h6>Player position : ${players.position}</h6>
`
)
// this takes the item and adds it to the end of the list
  playersHtml += playerHTML
})
  $('#message').text('Got index')
  $('#displayplayer').html(playersHtml)
}

const onIndexFailure = function () {
  // store.user = null
  $('#message').text('Index not a success!')
  $('form').trigger('reset')
}

const onUpdateSuccess = function () {
  $('#message').text('Update was a success')
  $('form').trigger('reset')
  $('.authenticated').show()
}

const onUpdateFailure = function () {
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
