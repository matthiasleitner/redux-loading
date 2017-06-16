'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var loaderName = function loaderName(action) {
  return action.meta.loader || 'default';
};

var copyLoader = function copyLoader(loader, existingLoader) {
  var incr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  return _defineProperty({}, loader, { message: existingLoader.message, pending: existingLoader.pending + incr });
};
var loadingReducer = function loadingReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    pending: 0,
    done: true,
    loaders: {},
    messages: {}
  };
  var action = arguments[1];

  if (action.type != 'LOADING' && action.type != 'LOADED') {
    return state;
  }

  var loader = loaderName(action);
  var loaders = state.loaders;
  var existingLoader = loaders[loader];
  var updatedLoader = null;

  switch (action.type) {
    case 'LOADING':
      var message = action.payload && action.payload.message || action.meta.message;

      if (existingLoader) {
        _updatedLoader = copyLoader(loader, existingLoader);
      } else {
        _updatedLoader = _defineProperty({}, loader, { message: message, pending: 1 });
      }

      loaders = Object.assign({}, loaders, _updatedLoader);
      return {
        pending: state.pending + 1,
        done: false,
        loaders: loaders
      };
    case 'LOADED':
      var pending = state.pending;

      var _updatedLoader = {};

      if (existingLoader) {
        if (existingLoader.pending > 1 && !action.meta.stopLoading) {
          pending--;
          _updatedLoader = copyLoader(loader, existingLoader, -1);
        } else {
          pending = -existingLoader.pending;
          delete loaders[loader];
        }
      }
      pending = pending > -1 ? pending : 0;

      var done = pending === 0;
      return {
        pending: pending,
        done: done,
        loaders: Object.assign({}, loaders, _updatedLoader)
      };
    default:
      return state;
  }
};

exports.default = loadingReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkaW5nUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJsb2FkZXJOYW1lIiwiYWN0aW9uIiwibWV0YSIsImxvYWRlciIsImNvcHlMb2FkZXIiLCJleGlzdGluZ0xvYWRlciIsImluY3IiLCJtZXNzYWdlIiwicGVuZGluZyIsImxvYWRpbmdSZWR1Y2VyIiwic3RhdGUiLCJkb25lIiwibG9hZGVycyIsIm1lc3NhZ2VzIiwidHlwZSIsInVwZGF0ZWRMb2FkZXIiLCJwYXlsb2FkIiwiT2JqZWN0IiwiYXNzaWduIiwic3RvcExvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBTUEsYUFBYSxTQUFiQSxVQUFhLENBQUNDLE1BQUQsRUFBWTtBQUM3QixTQUFPQSxPQUFPQyxJQUFQLENBQVlDLE1BQVosSUFBc0IsU0FBN0I7QUFDRCxDQUZEOztBQUlBLElBQU1DLGFBQWEsU0FBYkEsVUFBYSxDQUFDRCxNQUFELEVBQVNFLGNBQVQsRUFBc0M7QUFBQSxNQUFiQyxJQUFhLHVFQUFOLENBQU07O0FBQ3ZELDZCQUNHSCxNQURILEVBQ1ksRUFBRUksU0FBU0YsZUFBZUUsT0FBMUIsRUFBbUNDLFNBQVNILGVBQWVHLE9BQWYsR0FBeUJGLElBQXJFLEVBRFo7QUFHRCxDQUpEO0FBS0EsSUFBTUcsaUJBQWlCLFNBQWpCQSxjQUFpQixHQUtUO0FBQUEsTUFMVUMsS0FLVix1RUFMa0I7QUFDOUJGLGFBQVMsQ0FEcUI7QUFFOUJHLFVBQU0sSUFGd0I7QUFHOUJDLGFBQVMsRUFIcUI7QUFJOUJDLGNBQVU7QUFKb0IsR0FLbEI7QUFBQSxNQUFYWixNQUFXOztBQUNaLE1BQUdBLE9BQU9hLElBQVAsSUFBZSxTQUFmLElBQTRCYixPQUFPYSxJQUFQLElBQWUsUUFBOUMsRUFBdUQ7QUFDckQsV0FBT0osS0FBUDtBQUNEOztBQUVELE1BQU1QLFNBQWlCSCxXQUFXQyxNQUFYLENBQXZCO0FBQ0EsTUFBTVcsVUFBaUJGLE1BQU1FLE9BQTdCO0FBQ0EsTUFBTVAsaUJBQWlCTyxRQUFRVCxNQUFSLENBQXZCO0FBQ0EsTUFBTVksZ0JBQWtCLElBQXhCOztBQUVBLFVBQVFkLE9BQU9hLElBQWY7QUFDRSxTQUFLLFNBQUw7QUFDRSxVQUFNUCxVQUFXTixPQUFPZSxPQUFQLElBQWtCZixPQUFPZSxPQUFQLENBQWVULE9BQWxDLElBQStDTixPQUFPQyxJQUFQLENBQVlLLE9BQTNFOztBQUVBLFVBQUdGLGNBQUgsRUFBa0I7QUFDaEJVLHlCQUFnQlgsV0FBV0QsTUFBWCxFQUFtQkUsY0FBbkIsQ0FBaEI7QUFDRCxPQUZELE1BRU87QUFDTFUsNkNBQ0daLE1BREgsRUFDWSxFQUFFSSxnQkFBRixFQUFXQyxTQUFTLENBQXBCLEVBRFo7QUFHRDs7QUFFREksZ0JBQVVLLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCTixPQUFsQixFQUEyQkcsY0FBM0IsQ0FBVjtBQUNBLGFBQU87QUFDTFAsaUJBQVNFLE1BQU1GLE9BQU4sR0FBZ0IsQ0FEcEI7QUFFTEcsY0FBTSxLQUZEO0FBR0xDO0FBSEssT0FBUDtBQUtGLFNBQUssUUFBTDtBQUNFLFVBQUlKLFVBQWFFLE1BQU1GLE9BQXZCOztBQUdBLFVBQUlPLGlCQUFnQixFQUFwQjs7QUFFQSxVQUFHVixjQUFILEVBQWtCO0FBQ2hCLFlBQUdBLGVBQWVHLE9BQWYsR0FBeUIsQ0FBekIsSUFBOEIsQ0FBQ1AsT0FBT0MsSUFBUCxDQUFZaUIsV0FBOUMsRUFBMEQ7QUFDeERYO0FBQ0FPLDJCQUFnQlgsV0FBV0QsTUFBWCxFQUFtQkUsY0FBbkIsRUFBbUMsQ0FBQyxDQUFwQyxDQUFoQjtBQUNELFNBSEQsTUFHTztBQUNMRyxvQkFBUyxDQUFFSCxlQUFlRyxPQUExQjtBQUNBLGlCQUFPSSxRQUFRVCxNQUFSLENBQVA7QUFDRDtBQUNGO0FBQ0RLLGdCQUFVQSxVQUFVLENBQUMsQ0FBWCxHQUFlQSxPQUFmLEdBQXlCLENBQW5DOztBQUVBLFVBQU1HLE9BQU9ILFlBQVksQ0FBekI7QUFDQSxhQUFPO0FBQ0xBLHdCQURLO0FBRUxHLGtCQUZLO0FBR0xDLGlCQUFTSyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQk4sT0FBbEIsRUFBMkJHLGNBQTNCO0FBSEosT0FBUDtBQUtGO0FBQ0UsYUFBT0wsS0FBUDtBQTFDSjtBQTRDRCxDQTNERDs7a0JBNkRlRCxjIiwiZmlsZSI6ImxvYWRpbmdSZWR1Y2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9hZGVyTmFtZSA9IChhY3Rpb24pID0+IHtcbiAgcmV0dXJuIGFjdGlvbi5tZXRhLmxvYWRlciB8fCAnZGVmYXVsdCc7XG59XG5cbmNvbnN0IGNvcHlMb2FkZXIgPSAobG9hZGVyLCBleGlzdGluZ0xvYWRlciwgaW5jciA9IDEpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBbbG9hZGVyXTogeyBtZXNzYWdlOiBleGlzdGluZ0xvYWRlci5tZXNzYWdlLCBwZW5kaW5nOiBleGlzdGluZ0xvYWRlci5wZW5kaW5nICsgaW5jciB9XG4gIH1cbn1cbmNvbnN0IGxvYWRpbmdSZWR1Y2VyID0gKHN0YXRlID0ge1xuICBwZW5kaW5nOiAwLFxuICBkb25lOiB0cnVlLFxuICBsb2FkZXJzOiB7fSxcbiAgbWVzc2FnZXM6IHt9XG59LCBhY3Rpb24pID0+IHtcbiAgaWYoYWN0aW9uLnR5cGUgIT0gJ0xPQURJTkcnICYmIGFjdGlvbi50eXBlICE9ICdMT0FERUQnKXtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBjb25zdCBsb2FkZXIgICAgICAgICA9IGxvYWRlck5hbWUoYWN0aW9uKTtcbiAgbGV0ICAgbG9hZGVycyAgICAgICAgPSBzdGF0ZS5sb2FkZXJzO1xuICBjb25zdCBleGlzdGluZ0xvYWRlciA9IGxvYWRlcnNbbG9hZGVyXTtcbiAgbGV0ICAgdXBkYXRlZExvYWRlciAgPSAgbnVsbDtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnTE9BRElORyc6XG4gICAgICBjb25zdCBtZXNzYWdlID0gKGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLm1lc3NhZ2UgKSB8fCBhY3Rpb24ubWV0YS5tZXNzYWdlO1xuXG4gICAgICBpZihleGlzdGluZ0xvYWRlcil7XG4gICAgICAgIHVwZGF0ZWRMb2FkZXIgPSBjb3B5TG9hZGVyKGxvYWRlciwgZXhpc3RpbmdMb2FkZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXBkYXRlZExvYWRlciA9IHtcbiAgICAgICAgICBbbG9hZGVyXTogeyBtZXNzYWdlLCBwZW5kaW5nOiAxIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsb2FkZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgbG9hZGVycywgdXBkYXRlZExvYWRlcilcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBlbmRpbmc6IHN0YXRlLnBlbmRpbmcgKyAxLFxuICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgbG9hZGVyc1xuICAgICAgfVxuICAgIGNhc2UgJ0xPQURFRCc6XG4gICAgICBsZXQgcGVuZGluZyAgICA9IHN0YXRlLnBlbmRpbmc7XG5cblxuICAgICAgbGV0IHVwZGF0ZWRMb2FkZXIgPSB7fVxuXG4gICAgICBpZihleGlzdGluZ0xvYWRlcil7XG4gICAgICAgIGlmKGV4aXN0aW5nTG9hZGVyLnBlbmRpbmcgPiAxICYmICFhY3Rpb24ubWV0YS5zdG9wTG9hZGluZyl7XG4gICAgICAgICAgcGVuZGluZy0tO1xuICAgICAgICAgIHVwZGF0ZWRMb2FkZXIgPSBjb3B5TG9hZGVyKGxvYWRlciwgZXhpc3RpbmdMb2FkZXIsIC0xKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwZW5kaW5nID0tIGV4aXN0aW5nTG9hZGVyLnBlbmRpbmdcbiAgICAgICAgICBkZWxldGUgbG9hZGVyc1tsb2FkZXJdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwZW5kaW5nID0gcGVuZGluZyA+IC0xID8gcGVuZGluZyA6IDA7XG5cbiAgICAgIGNvbnN0IGRvbmUgPSBwZW5kaW5nID09PSAwO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGVuZGluZyxcbiAgICAgICAgZG9uZSxcbiAgICAgICAgbG9hZGVyczogT2JqZWN0LmFzc2lnbih7fSwgbG9hZGVycywgdXBkYXRlZExvYWRlcilcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZGluZ1JlZHVjZXIiXX0=