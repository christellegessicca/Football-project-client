'use strict'

const config = require('./../config')

const store = require('./../store')

const create = function (data){
  return $.ajax({
    url: config.apiUrl + '/players' + data.player.id,
    method:'POST',
    data: data
  })
}

const destroy = function (data){
  return $.ajax({
    url: config.apiurl + '/players' + data.player.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token

    }
  })
}

const index = function (data){
  return $.ajax({
    url:config.apiUrl +'/players' + data.player.id,
    method: 'PATCH',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const update = function (data){
  return $.ajax({
    url:config.apiUrl + '/players' + data.player.id,
    method: 'POST',
    data:data

  })
}

module.exports = {
  create,
  destroy,
  index,
  update
}
