export default store => next => action => {
  if (action.type != 'PROMISE') {
    return next(action)
  }
  const [startActionType, successActionType, failureActionType] = action.actions

  let startAction = {
    type: startActionType
  }

  store.dispatch(startAction)

  action.promise.then(
    function (data) {
      store.dispatch({
        type: successActionType,
        data: data
      })
    },
    function (error) {
      store.dispatch({
        type: failureActionType,
        error: error
      })
    })
}
