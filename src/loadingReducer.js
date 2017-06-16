const loaderName = (action) => {
  return action.meta.loader || 'default';
}

const copyLoader = (loader, existingLoader, incr = 1) => {
  return {
    [loader]: { message: existingLoader.message, pending: existingLoader.pending + incr }
  }
}
const loadingReducer = (state = {
  pending: 0,
  done: true,
  loaders: {},
  messages: {}
}, action) => {
  if(action.type != 'LOADING' && action.type != 'LOADED'){
    return state;
  }

  const loader         = loaderName(action);
  let   loaders        = state.loaders;
  const existingLoader = loaders[loader];
  let   updatedLoader  =  null;

  switch (action.type) {
    case 'LOADING':
      const message = (action.payload && action.payload.message ) || action.meta.message;

      if(existingLoader){
        updatedLoader = copyLoader(loader, existingLoader);
      } else {
        updatedLoader = {
          [loader]: { message, pending: 1 }
        }
      }

      loaders = Object.assign({}, loaders, updatedLoader)
      return {
        pending: state.pending + 1,
        done: false,
        loaders
      }
    case 'LOADED':
      const pending  = state.pending > 0 ? state.pending - 1 : 0
      const done     = pending === 0;

      let updatedLoader = {}

      if(existingLoader){
        if(existingLoader.pending > 1){
          updatedLoader = copyLoader(loader, existingLoader, -1);
        } else {
          delete loaders[loader];
        }
      }

      return {
        pending,
        done,
        loaders: Object.assign({}, loaders, updatedLoader)
      }
    default:
      return state
  }
}

export default loadingReducer