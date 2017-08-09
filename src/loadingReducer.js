const loaderName = (action) => {
  return action.meta.loader || 'default';
}

const copyLoader = (loader, existingLoader, incr = 1) => {
  return {
    [loader]: { message: existingLoader.message, pending: existingLoader.pending + incr }
  }
}

const getMessage = (action) => {
  if(action.payload && action.payload.message){
    return action.payload.message;
  }

  return action.meta.message;
}

const getShowloading = (loaders) => {
  return Object.values(loaders).some((l) => l.globalLoading)
}

const loadingReducer = (state = {
  pending: 0,
  done: true,
  loaders: {},
  message: null,
  showLoading: false,
}, action) => {

  if(action.type != 'LOADING' && action.type != 'LOADED'){
    return state;
  }

  const loader         = loaderName(action);
  let   loaders        = state.loaders;
  const existingLoader = loaders[loader];
  let   updatedLoader  =  null;
  let   message = getMessage(action);

  const globalLoading = (action.payload && action.payload.global) || !!action.meta.global;

  switch (action.type) {
    case 'LOADING':
      if(existingLoader){
        updatedLoader = copyLoader(loader, existingLoader);
      } else {
        updatedLoader = {
          [loader]: { message, pending: 1, globalLoading }
        }
      }

      loaders = Object.assign({}, loaders, updatedLoader)

      return {
        pending: state.pending + 1,
        done: false,
        loaders,
        message: state.message || message,
        showLoading: getShowloading(loaders)
      }
    case 'LOADED':
      let pending    = state.pending;

      let updatedLoader = {}

      if(existingLoader){
        if(existingLoader.pending > 1 && !action.meta.stopLoading){
          pending--;
          updatedLoader = copyLoader(loader, existingLoader, -1);
        } else {
          pending =- existingLoader.pending
          delete loaders[loader];
        }
      }
      pending = pending > -1 ? pending : 0;

      const done = pending === 0;

      loaders = Object.assign({}, loaders, updatedLoader)

      const messages = Object.values(loaders).map((l) => l.message).filter(() => true)
      message = messages.length > 0 && !!messages[0]

      return {
        pending,
        done,
        loaders,
        message,
        showLoading: getShowloading(loaders)
      }
    default:
      return state
  }
}

export default loadingReducer