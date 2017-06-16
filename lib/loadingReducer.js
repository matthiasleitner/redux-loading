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
      var message = action.payload.message || action.meta.message;

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
      var pending = state.pending > 0 ? state.pending - 1 : 0;
      var done = pending === 0;

      var _updatedLoader = {};

      if (existingLoader) {
        if (existingLoader.pending > 1) {
          _updatedLoader = copyLoader(loader, existingLoader, -1);
        } else {
          delete loaders[loader];
        }
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkaW5nUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJsb2FkZXJOYW1lIiwiYWN0aW9uIiwibWV0YSIsImxvYWRlciIsImNvcHlMb2FkZXIiLCJleGlzdGluZ0xvYWRlciIsImluY3IiLCJtZXNzYWdlIiwicGVuZGluZyIsImxvYWRpbmdSZWR1Y2VyIiwic3RhdGUiLCJkb25lIiwibG9hZGVycyIsIm1lc3NhZ2VzIiwidHlwZSIsInVwZGF0ZWRMb2FkZXIiLCJwYXlsb2FkIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQU1BLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxNQUFELEVBQVk7QUFDN0IsU0FBT0EsT0FBT0MsSUFBUCxDQUFZQyxNQUFaLElBQXNCLFNBQTdCO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNQyxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0QsTUFBRCxFQUFTRSxjQUFULEVBQXNDO0FBQUEsTUFBYkMsSUFBYSx1RUFBTixDQUFNOztBQUN2RCw2QkFDR0gsTUFESCxFQUNZLEVBQUVJLFNBQVNGLGVBQWVFLE9BQTFCLEVBQW1DQyxTQUFTSCxlQUFlRyxPQUFmLEdBQXlCRixJQUFyRSxFQURaO0FBR0QsQ0FKRDtBQUtBLElBQU1HLGlCQUFpQixTQUFqQkEsY0FBaUIsR0FLVDtBQUFBLE1BTFVDLEtBS1YsdUVBTGtCO0FBQzlCRixhQUFTLENBRHFCO0FBRTlCRyxVQUFNLElBRndCO0FBRzlCQyxhQUFTLEVBSHFCO0FBSTlCQyxjQUFVO0FBSm9CLEdBS2xCO0FBQUEsTUFBWFosTUFBVzs7QUFDWixNQUFHQSxPQUFPYSxJQUFQLElBQWUsU0FBZixJQUE0QmIsT0FBT2EsSUFBUCxJQUFlLFFBQTlDLEVBQXVEO0FBQ3JELFdBQU9KLEtBQVA7QUFDRDs7QUFFRCxNQUFNUCxTQUFpQkgsV0FBV0MsTUFBWCxDQUF2QjtBQUNBLE1BQU1XLFVBQWlCRixNQUFNRSxPQUE3QjtBQUNBLE1BQU1QLGlCQUFpQk8sUUFBUVQsTUFBUixDQUF2QjtBQUNBLE1BQU1ZLGdCQUFrQixJQUF4Qjs7QUFFQSxVQUFRZCxPQUFPYSxJQUFmO0FBQ0UsU0FBSyxTQUFMO0FBQ0UsVUFBTVAsVUFBWU4sT0FBT2UsT0FBUCxDQUFlVCxPQUFmLElBQTBCTixPQUFPQyxJQUFQLENBQVlLLE9BQXhEOztBQUVBLFVBQUdGLGNBQUgsRUFBa0I7QUFDaEJVLHlCQUFnQlgsV0FBV0QsTUFBWCxFQUFtQkUsY0FBbkIsQ0FBaEI7QUFDRCxPQUZELE1BRU87QUFDTFUsNkNBQ0daLE1BREgsRUFDWSxFQUFFSSxnQkFBRixFQUFXQyxTQUFTLENBQXBCLEVBRFo7QUFHRDs7QUFFREksZ0JBQVVLLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCTixPQUFsQixFQUEyQkcsY0FBM0IsQ0FBVjtBQUNBLGFBQU87QUFDTFAsaUJBQVNFLE1BQU1GLE9BQU4sR0FBZ0IsQ0FEcEI7QUFFTEcsY0FBTSxLQUZEO0FBR0xDO0FBSEssT0FBUDtBQUtGLFNBQUssUUFBTDtBQUNFLFVBQU1KLFVBQVdFLE1BQU1GLE9BQU4sR0FBZ0IsQ0FBaEIsR0FBb0JFLE1BQU1GLE9BQU4sR0FBZ0IsQ0FBcEMsR0FBd0MsQ0FBekQ7QUFDQSxVQUFNRyxPQUFXSCxZQUFZLENBQTdCOztBQUVBLFVBQUlPLGlCQUFnQixFQUFwQjs7QUFFQSxVQUFHVixjQUFILEVBQWtCO0FBQ2hCLFlBQUdBLGVBQWVHLE9BQWYsR0FBeUIsQ0FBNUIsRUFBOEI7QUFDNUJPLDJCQUFnQlgsV0FBV0QsTUFBWCxFQUFtQkUsY0FBbkIsRUFBbUMsQ0FBQyxDQUFwQyxDQUFoQjtBQUNELFNBRkQsTUFFTztBQUNMLGlCQUFPTyxRQUFRVCxNQUFSLENBQVA7QUFDRDtBQUNGOztBQUVELGFBQU87QUFDTEssd0JBREs7QUFFTEcsa0JBRks7QUFHTEMsaUJBQVNLLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCTixPQUFsQixFQUEyQkcsY0FBM0I7QUFISixPQUFQO0FBS0Y7QUFDRSxhQUFPTCxLQUFQO0FBdENKO0FBd0NELENBdkREOztrQkF5RGVELGMiLCJmaWxlIjoibG9hZGluZ1JlZHVjZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsb2FkZXJOYW1lID0gKGFjdGlvbikgPT4ge1xuICByZXR1cm4gYWN0aW9uLm1ldGEubG9hZGVyIHx8ICdkZWZhdWx0Jztcbn1cblxuY29uc3QgY29weUxvYWRlciA9IChsb2FkZXIsIGV4aXN0aW5nTG9hZGVyLCBpbmNyID0gMSkgPT4ge1xuICByZXR1cm4ge1xuICAgIFtsb2FkZXJdOiB7IG1lc3NhZ2U6IGV4aXN0aW5nTG9hZGVyLm1lc3NhZ2UsIHBlbmRpbmc6IGV4aXN0aW5nTG9hZGVyLnBlbmRpbmcgKyBpbmNyIH1cbiAgfVxufVxuY29uc3QgbG9hZGluZ1JlZHVjZXIgPSAoc3RhdGUgPSB7XG4gIHBlbmRpbmc6IDAsXG4gIGRvbmU6IHRydWUsXG4gIGxvYWRlcnM6IHt9LFxuICBtZXNzYWdlczoge31cbn0sIGFjdGlvbikgPT4ge1xuICBpZihhY3Rpb24udHlwZSAhPSAnTE9BRElORycgJiYgYWN0aW9uLnR5cGUgIT0gJ0xPQURFRCcpe1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGNvbnN0IGxvYWRlciAgICAgICAgID0gbG9hZGVyTmFtZShhY3Rpb24pO1xuICBsZXQgICBsb2FkZXJzICAgICAgICA9IHN0YXRlLmxvYWRlcnM7XG4gIGNvbnN0IGV4aXN0aW5nTG9hZGVyID0gbG9hZGVyc1tsb2FkZXJdO1xuICBsZXQgICB1cGRhdGVkTG9hZGVyICA9ICBudWxsO1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdMT0FESU5HJzpcbiAgICAgIGNvbnN0IG1lc3NhZ2UgICA9IGFjdGlvbi5wYXlsb2FkLm1lc3NhZ2UgfHwgYWN0aW9uLm1ldGEubWVzc2FnZTtcblxuICAgICAgaWYoZXhpc3RpbmdMb2FkZXIpe1xuICAgICAgICB1cGRhdGVkTG9hZGVyID0gY29weUxvYWRlcihsb2FkZXIsIGV4aXN0aW5nTG9hZGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVwZGF0ZWRMb2FkZXIgPSB7XG4gICAgICAgICAgW2xvYWRlcl06IHsgbWVzc2FnZSwgcGVuZGluZzogMSB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbG9hZGVycyA9IE9iamVjdC5hc3NpZ24oe30sIGxvYWRlcnMsIHVwZGF0ZWRMb2FkZXIpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwZW5kaW5nOiBzdGF0ZS5wZW5kaW5nICsgMSxcbiAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgIGxvYWRlcnNcbiAgICAgIH1cbiAgICBjYXNlICdMT0FERUQnOlxuICAgICAgY29uc3QgcGVuZGluZyAgPSBzdGF0ZS5wZW5kaW5nID4gMCA/IHN0YXRlLnBlbmRpbmcgLSAxIDogMFxuICAgICAgY29uc3QgZG9uZSAgICAgPSBwZW5kaW5nID09PSAwO1xuXG4gICAgICBsZXQgdXBkYXRlZExvYWRlciA9IHt9XG5cbiAgICAgIGlmKGV4aXN0aW5nTG9hZGVyKXtcbiAgICAgICAgaWYoZXhpc3RpbmdMb2FkZXIucGVuZGluZyA+IDEpe1xuICAgICAgICAgIHVwZGF0ZWRMb2FkZXIgPSBjb3B5TG9hZGVyKGxvYWRlciwgZXhpc3RpbmdMb2FkZXIsIC0xKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgbG9hZGVyc1tsb2FkZXJdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBlbmRpbmcsXG4gICAgICAgIGRvbmUsXG4gICAgICAgIGxvYWRlcnM6IE9iamVjdC5hc3NpZ24oe30sIGxvYWRlcnMsIHVwZGF0ZWRMb2FkZXIpXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRpbmdSZWR1Y2VyIl19