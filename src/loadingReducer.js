const loadingReducer = (state = {
  pending: 0,
  done: true,
  messages: {}
}, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        pending: state.pending + 1,
        done: false,
        messages: Object.assign({}, messages, action.payload ? action.payload.message : null)
      }
    case 'LOADED':
      const pending = state.pending > 0 ? state.pending - 1 : 0

      const messages = state.messages;

      if(action.payload){
        delete messages[action.payload.tag]
      }

      return {
        pending,
        done: pending === 0 ? true : false,
        messages: Object.assign({}, messages)
      }
    default:
      return state
  }
}

export default loadingReducer