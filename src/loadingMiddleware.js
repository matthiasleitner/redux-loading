const loadingMiddleware = ({dispatch}) => {
  return next => action => {
    const {meta, payload} = action
    if (!meta || !meta.hasOwnProperty('loading')) {
      return next(action)
    }

    const loading = meta.loading

    meta.loading = null;

    if(loading){
      dispatch({type: 'LOADING', payload, meta })
    }
    else{
      dispatch({type: 'LOADED', payload, meta })
    }

    return next(action)
  }
}

export default loadingMiddleware