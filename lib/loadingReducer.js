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

var getMessage = function getMessage(action) {
  if (action.payload) {
    if (action.payload.silent) {
      return null;
    }
    if (action.payload.message) {
      return action.payload.message;
    }
  }

  return action.meta.message;
};
var loadingReducer = function loadingReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    pending: 0,
    done: true,
    loaders: {},
    message: null,
    onlySilent: true
  };
  var action = arguments[1];

  if (action.type != 'LOADING' && action.type != 'LOADED') {
    return state;
  }

  var loader = loaderName(action);
  var loaders = state.loaders;
  var existingLoader = loaders[loader];
  var updatedLoader = null;
  var message = getMessage(action);
  var silent = action.payload ? action.payload.silent : false;
  var onlySilent = state.onlySilent;
  switch (action.type) {
    case 'LOADING':
      if (existingLoader) {
        _updatedLoader = copyLoader(loader, existingLoader);
      } else {
        _updatedLoader = _defineProperty({}, loader, { message: message, pending: 1, silent: silent });
      }

      loaders = Object.assign({}, loaders, _updatedLoader);
      onlySilent = Object.entries(loaders).every(function (l) {
        return l.silent;
      });
      return {
        pending: state.pending + 1,
        done: false,
        loaders: loaders,
        message: state.message || message,
        onlySilent: onlySilent
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
      loaders = Object.assign({}, loaders, _updatedLoader);
      var messages = Object.entries(loaders).map(function (l) {
        return l.message;
      }).filter(function () {
        return true;
      });
      message = messages.length > 0 && !!messages[0];
      onlySilent = Object.entries(loaders).every(function (l) {
        return l.silent;
      });
      return {
        pending: pending,
        done: done,
        loaders: loaders,
        message: message,
        onlySilent: onlySilent
      };
    default:
      return state;
  }
};

exports.default = loadingReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkaW5nUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJsb2FkZXJOYW1lIiwiYWN0aW9uIiwibWV0YSIsImxvYWRlciIsImNvcHlMb2FkZXIiLCJleGlzdGluZ0xvYWRlciIsImluY3IiLCJtZXNzYWdlIiwicGVuZGluZyIsImdldE1lc3NhZ2UiLCJwYXlsb2FkIiwic2lsZW50IiwibG9hZGluZ1JlZHVjZXIiLCJzdGF0ZSIsImRvbmUiLCJsb2FkZXJzIiwib25seVNpbGVudCIsInR5cGUiLCJ1cGRhdGVkTG9hZGVyIiwiT2JqZWN0IiwiYXNzaWduIiwiZW50cmllcyIsImV2ZXJ5IiwibCIsInN0b3BMb2FkaW5nIiwibWVzc2FnZXMiLCJtYXAiLCJmaWx0ZXIiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBTUEsYUFBYSxTQUFiQSxVQUFhLENBQUNDLE1BQUQsRUFBWTtBQUM3QixTQUFPQSxPQUFPQyxJQUFQLENBQVlDLE1BQVosSUFBc0IsU0FBN0I7QUFDRCxDQUZEOztBQUlBLElBQU1DLGFBQWEsU0FBYkEsVUFBYSxDQUFDRCxNQUFELEVBQVNFLGNBQVQsRUFBc0M7QUFBQSxNQUFiQyxJQUFhLHVFQUFOLENBQU07O0FBQ3ZELDZCQUNHSCxNQURILEVBQ1ksRUFBRUksU0FBU0YsZUFBZUUsT0FBMUIsRUFBbUNDLFNBQVNILGVBQWVHLE9BQWYsR0FBeUJGLElBQXJFLEVBRFo7QUFHRCxDQUpEOztBQU1BLElBQU1HLGFBQWEsU0FBYkEsVUFBYSxDQUFDUixNQUFELEVBQVk7QUFDN0IsTUFBR0EsT0FBT1MsT0FBVixFQUFrQjtBQUNoQixRQUFHVCxPQUFPUyxPQUFQLENBQWVDLE1BQWxCLEVBQXlCO0FBQ3ZCLGFBQU8sSUFBUDtBQUNEO0FBQ0QsUUFBR1YsT0FBT1MsT0FBUCxDQUFlSCxPQUFsQixFQUEwQjtBQUN4QixhQUFPTixPQUFPUyxPQUFQLENBQWVILE9BQXRCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPTixPQUFPQyxJQUFQ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ZUFBT0EsRUFBRVosTUFBVDtBQUFBLE9BQTlCLENBQWI7QUFDQSxhQUFPO0FBQ0xILHdCQURLO0FBRUxNLGtCQUZLO0FBR0xDLHdCQUhLO0FBSUxSLHdCQUpLO0FBS0xTO0FBTEssT0FBUDtBQU9GO0FBQ0UsYUFBT0gsS0FBUDtBQWpESjtBQW1ERCxDQXJFRDs7a0JBdUVlRCxjIiwiZmlsZSI6ImxvYWRpbmdSZWR1Y2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9hZGVyTmFtZSA9IChhY3Rpb24pID0+IHtcbiAgcmV0dXJuIGFjdGlvbi5tZXRhLmxvYWRlciB8fCAnZGVmYXVsdCc7XG59XG5cbmNvbnN0IGNvcHlMb2FkZXIgPSAobG9hZGVyLCBleGlzdGluZ0xvYWRlciwgaW5jciA9IDEpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBbbG9hZGVyXTogeyBtZXNzYWdlOiBleGlzdGluZ0xvYWRlci5tZXNzYWdlLCBwZW5kaW5nOiBleGlzdGluZ0xvYWRlci5wZW5kaW5nICsgaW5jciB9XG4gIH1cbn1cblxuY29uc3QgZ2V0TWVzc2FnZSA9IChhY3Rpb24pID0+IHtcbiAgaWYoYWN0aW9uLnBheWxvYWQpe1xuICAgIGlmKGFjdGlvbi5wYXlsb2FkLnNpbGVudCl7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYoYWN0aW9uLnBheWxvYWQubWVzc2FnZSl7XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQubWVzc2FnZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYWN0aW9uLm1ldGEubWVzc2FnZTtcbn1cbmNvbnN0IGxvYWRpbmdSZWR1Y2VyID0gKHN0YXRlID0ge1xuICBwZW5kaW5nOiAwLFxuICBkb25lOiB0cnVlLFxuICBsb2FkZXJzOiB7fSxcbiAgbWVzc2FnZTogbnVsbCxcbiAgb25seVNpbGVudDogdHJ1ZVxufSwgYWN0aW9uKSA9PiB7XG4gIGlmKGFjdGlvbi50eXBlICE9ICdMT0FESU5HJyAmJiBhY3Rpb24udHlwZSAhPSAnTE9BREVEJyl7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgY29uc3QgbG9hZGVyICAgICAgICAgPSBsb2FkZXJOYW1lKGFjdGlvbik7XG4gIGxldCAgIGxvYWRlcnMgICAgICAgID0gc3RhdGUubG9hZGVycztcbiAgY29uc3QgZXhpc3RpbmdMb2FkZXIgPSBsb2FkZXJzW2xvYWRlcl07XG4gIGxldCAgIHVwZGF0ZWRMb2FkZXIgID0gIG51bGw7XG4gIGxldCAgIG1lc3NhZ2UgPSBnZXRNZXNzYWdlKGFjdGlvbik7XG4gIGNvbnN0IHNpbGVudCAgPSBhY3Rpb24ucGF5bG9hZCA/IGFjdGlvbi5wYXlsb2FkLnNpbGVudCA6IGZhbHNlO1xuICBsZXQgICBvbmx5U2lsZW50ID0gc3RhdGUub25seVNpbGVudDtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0xPQURJTkcnOlxuICAgICAgaWYoZXhpc3RpbmdMb2FkZXIpe1xuICAgICAgICB1cGRhdGVkTG9hZGVyID0gY29weUxvYWRlcihsb2FkZXIsIGV4aXN0aW5nTG9hZGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVwZGF0ZWRMb2FkZXIgPSB7XG4gICAgICAgICAgW2xvYWRlcl06IHsgbWVzc2FnZSwgcGVuZGluZzogMSwgc2lsZW50IH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsb2FkZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgbG9hZGVycywgdXBkYXRlZExvYWRlcilcbiAgICAgIG9ubHlTaWxlbnQgPSBPYmplY3QuZW50cmllcyhsb2FkZXJzKS5ldmVyeSgobCkgPT4gbC5zaWxlbnQpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwZW5kaW5nOiBzdGF0ZS5wZW5kaW5nICsgMSxcbiAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgIGxvYWRlcnMsXG4gICAgICAgIG1lc3NhZ2U6IHN0YXRlLm1lc3NhZ2UgfHwgbWVzc2FnZSxcbiAgICAgICAgb25seVNpbGVudFxuICAgICAgfVxuICAgIGNhc2UgJ0xPQURFRCc6XG4gICAgICBsZXQgcGVuZGluZyAgICA9IHN0YXRlLnBlbmRpbmc7XG5cblxuICAgICAgbGV0IHVwZGF0ZWRMb2FkZXIgPSB7fVxuXG4gICAgICBpZihleGlzdGluZ0xvYWRlcil7XG4gICAgICAgIGlmKGV4aXN0aW5nTG9hZGVyLnBlbmRpbmcgPiAxICYmICFhY3Rpb24ubWV0YS5zdG9wTG9hZGluZyl7XG4gICAgICAgICAgcGVuZGluZy0tO1xuICAgICAgICAgIHVwZGF0ZWRMb2FkZXIgPSBjb3B5TG9hZGVyKGxvYWRlciwgZXhpc3RpbmdMb2FkZXIsIC0xKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwZW5kaW5nID0tIGV4aXN0aW5nTG9hZGVyLnBlbmRpbmdcbiAgICAgICAgICBkZWxldGUgbG9hZGVyc1tsb2FkZXJdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwZW5kaW5nID0gcGVuZGluZyA+IC0xID8gcGVuZGluZyA6IDA7XG5cbiAgICAgIGNvbnN0IGRvbmUgPSBwZW5kaW5nID09PSAwO1xuICAgICAgbG9hZGVycyA9IE9iamVjdC5hc3NpZ24oe30sIGxvYWRlcnMsIHVwZGF0ZWRMb2FkZXIpXG4gICAgICBjb25zdCBtZXNzYWdlcyA9IE9iamVjdC5lbnRyaWVzKGxvYWRlcnMpLm1hcCgobCkgPT4gbC5tZXNzYWdlKS5maWx0ZXIoKCkgPT4gdHJ1ZSlcbiAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlcy5sZW5ndGggPiAwICYmICEhbWVzc2FnZXNbMF1cbiAgICAgIG9ubHlTaWxlbnQgPSBPYmplY3QuZW50cmllcyhsb2FkZXJzKS5ldmVyeSgobCkgPT4gbC5zaWxlbnQpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwZW5kaW5nLFxuICAgICAgICBkb25lLFxuICAgICAgICBsb2FkZXJzLFxuICAgICAgICBtZXNzYWdlLFxuICAgICAgICBvbmx5U2lsZW50XG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRpbmdSZWR1Y2VyIl19