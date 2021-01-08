const api = require('./api')
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')

const onSignUp = function(event) {
  event.preventDefault()
  const form = event.target
  console.log(event.target)
  console.log('Hi')
  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function(event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccuess)
    .catch(ui.onSignInFailure)
}

const onSignOut = function(event) {
  event.preventDefault(

    api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
  )
}

const onChangePassword = function(event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.chnagePassowrd(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)

}

module.export = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}
