const loadingMiddleware = ({dispatch}) => {
  return next => action => {
    const {meta, payload} = action
    if (!meta || !meta.hasOwnProperty('loading')) {
      return next(action)
    }
    if(meta.loading){
      dispatch({type: 'LOADING', payload })
    }
    else{
      dispatch({type: 'LOADED', payload })
    }

    return next(action)
  }
}

export default loadingMiddleware