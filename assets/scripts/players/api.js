'use strict'

const config = require('./../config')

const store = require('./../store')

const create = function (data){
  return $.ajax({
    url: config.apiUrl + '/players',
    method: 'POST',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}


const index = function (data){
  return $.ajax({
    url:config.apiUrl +'/players',
    method: 'GET',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const update = function (data){
  return $.ajax({
    url:config.apiUrl + '/players/' + data.player._id,
    method: 'PATCH',
    data:data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const destroy = function (data){
  return $.ajax({
    url: config.apiUrl + '/players/' + data.player._id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token

    }
  })
}
module.exports = {
  create,
  index,
  update,
  destroy
}
