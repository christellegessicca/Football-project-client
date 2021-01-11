const api = require('./api')
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')

const onCreate = function(event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onDestroy = function(event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.destroy(data)
    .then(ui.onDestroySuccuess)
    .catch(ui.onDestroyFailure)
}

const onIndex = function(event) {
  event.preventDefault(
    api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
  )
}

const onUpdate = function(event) {
  event.preventDefault()
  const form = event.target
  const updatedData = getFormFields(form)
  api.update(updatedData)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)

}

module.export = {
  onCreate,
  onDestroy,
  onIndex,
  onUpdate
}
