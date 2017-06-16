const loadingMiddleware = ({dispatch}) => {
  return next => action => {
    const {meta, payload} = action
    if (!meta || !meta.hasOwnProperty('loading')) {
      return next(action)
    }
    if(meta.loading){
      dispatch({type: 'LOADING', payload, meta })
    }
    else{
      dispatch({type: 'LOADED', payload, meta })
    }

    return next(action)
  }
}

export default loadingMiddleware