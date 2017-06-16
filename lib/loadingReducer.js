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
      return {
        pending: pending,
        done: done,
        loaders: loaders,
        message: message
      };
    default:
      return state;
  }
};

exports.default = loadingReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkaW5nUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJsb2FkZXJOYW1lIiwiYWN0aW9uIiwibWV0YSIsImxvYWRlciIsImNvcHlMb2FkZXIiLCJleGlzdGluZ0xvYWRlciIsImluY3IiLCJtZXNzYWdlIiwicGVuZGluZyIsImdldE1lc3NhZ2UiLCJwYXlsb2FkIiwic2lsZW50IiwibG9hZGluZ1JlZHVjZXIiLCJzdGF0ZSIsImRvbmUiLCJsb2FkZXJzIiwib25seVNpbGVudCIsInR5cGUiLCJ1cGRhdGVkTG9hZGVyIiwiT2JqZWN0IiwiYXNzaWduIiwiZW50cmllcyIsImV2ZXJ5IiwibCIsInN0b3BMb2FkaW5nIiwibWVzc2FnZXMiLCJtYXAiLCJmaWx0ZXIiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBTUEsYUFBYSxTQUFiQSxVQUFhLENBQUNDLE1BQUQsRUFBWTtBQUM3QixTQUFPQSxPQUFPQyxJQUFQLENBQVlDLE1BQVosSUFBc0IsU0FBN0I7QUFDRCxDQUZEOztBQUlBLElBQU1DLGFBQWEsU0FBYkEsVUFBYSxDQUFDRCxNQUFELEVBQVNFLGNBQVQsRUFBc0M7QUFBQSxNQUFiQyxJQUFhLHVFQUFOLENBQU07O0FBQ3ZELDZCQUNHSCxNQURILEVBQ1ksRUFBRUksU0FBU0YsZUFBZUUsT0FBMUIsRUFBbUNDLFNBQVNILGVBQWVHLE9BQWYsR0FBeUJGLElBQXJFLEVBRFo7QUFHRCxDQUpEOztBQU1BLElBQU1HLGFBQWEsU0FBYkEsVUFBYSxDQUFDUixNQUFELEVBQVk7QUFDN0IsTUFBR0EsT0FBT1MsT0FBVixFQUFrQjtBQUNoQixRQUFHVCxPQUFPUyxPQUFQLENBQWVDLE1BQWxCLEVBQXlCO0FBQ3ZCLGFBQU8sSUFBUDtBQUNEO0FBQ0QsUUFBR1YsT0FBT1MsT0FBUCxDQUFlSCxPQUFsQixFQUEwQjtBQUN4QixhQUFPTixPQUFPUyxPQUFQLENBQWVILE9BQXRCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPTixPQUFPQyxJQUFQ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bkVEOztrQkFxRWVELGMiLCJmaWxlIjoibG9hZGluZ1JlZHVjZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsb2FkZXJOYW1lID0gKGFjdGlvbikgPT4ge1xuICByZXR1cm4gYWN0aW9uLm1ldGEubG9hZGVyIHx8ICdkZWZhdWx0Jztcbn1cblxuY29uc3QgY29weUxvYWRlciA9IChsb2FkZXIsIGV4aXN0aW5nTG9hZGVyLCBpbmNyID0gMSkgPT4ge1xuICByZXR1cm4ge1xuICAgIFtsb2FkZXJdOiB7IG1lc3NhZ2U6IGV4aXN0aW5nTG9hZGVyLm1lc3NhZ2UsIHBlbmRpbmc6IGV4aXN0aW5nTG9hZGVyLnBlbmRpbmcgKyBpbmNyIH1cbiAgfVxufVxuXG5jb25zdCBnZXRNZXNzYWdlID0gKGFjdGlvbikgPT4ge1xuICBpZihhY3Rpb24ucGF5bG9hZCl7XG4gICAgaWYoYWN0aW9uLnBheWxvYWQuc2lsZW50KXtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZihhY3Rpb24ucGF5bG9hZC5tZXNzYWdlKXtcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC5tZXNzYWdlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhY3Rpb24ubWV0YS5tZXNzYWdlO1xufVxuY29uc3QgbG9hZGluZ1JlZHVjZXIgPSAoc3RhdGUgPSB7XG4gIHBlbmRpbmc6IDAsXG4gIGRvbmU6IHRydWUsXG4gIGxvYWRlcnM6IHt9LFxuICBtZXNzYWdlOiBudWxsLFxuICBvbmx5U2lsZW50OiB0cnVlXG59LCBhY3Rpb24pID0+IHtcbiAgaWYoYWN0aW9uLnR5cGUgIT0gJ0xPQURJTkcnICYmIGFjdGlvbi50eXBlICE9ICdMT0FERUQnKXtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBjb25zdCBsb2FkZXIgICAgICAgICA9IGxvYWRlck5hbWUoYWN0aW9uKTtcbiAgbGV0ICAgbG9hZGVycyAgICAgICAgPSBzdGF0ZS5sb2FkZXJzO1xuICBjb25zdCBleGlzdGluZ0xvYWRlciA9IGxvYWRlcnNbbG9hZGVyXTtcbiAgbGV0ICAgdXBkYXRlZExvYWRlciAgPSAgbnVsbDtcbiAgbGV0ICAgbWVzc2FnZSA9IGdldE1lc3NhZ2UoYWN0aW9uKTtcbiAgY29uc3Qgc2lsZW50ICA9IGFjdGlvbi5wYXlsb2FkID8gYWN0aW9uLnBheWxvYWQuc2lsZW50IDogZmFsc2U7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0xPQURJTkcnOlxuICAgICAgaWYoZXhpc3RpbmdMb2FkZXIpe1xuICAgICAgICB1cGRhdGVkTG9hZGVyID0gY29weUxvYWRlcihsb2FkZXIsIGV4aXN0aW5nTG9hZGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVwZGF0ZWRMb2FkZXIgPSB7XG4gICAgICAgICAgW2xvYWRlcl06IHsgbWVzc2FnZSwgcGVuZGluZzogMSwgc2lsZW50IH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsb2FkZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgbG9hZGVycywgdXBkYXRlZExvYWRlcilcbiAgICAgIG9ubHlTaWxlbnQgPSBPYmplY3QuZW50cmllcyhsb2FkZXJzKS5ldmVyeSgobCkgPT4gbC5zaWxlbnQpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwZW5kaW5nOiBzdGF0ZS5wZW5kaW5nICsgMSxcbiAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgIGxvYWRlcnMsXG4gICAgICAgIG1lc3NhZ2U6IHN0YXRlLm1lc3NhZ2UgfHwgbWVzc2FnZSxcbiAgICAgICAgb25seVNpbGVudFxuICAgICAgfVxuICAgIGNhc2UgJ0xPQURFRCc6XG4gICAgICBsZXQgcGVuZGluZyAgICA9IHN0YXRlLnBlbmRpbmc7XG5cblxuICAgICAgbGV0IHVwZGF0ZWRMb2FkZXIgPSB7fVxuXG4gICAgICBpZihleGlzdGluZ0xvYWRlcil7XG4gICAgICAgIGlmKGV4aXN0aW5nTG9hZGVyLnBlbmRpbmcgPiAxICYmICFhY3Rpb24ubWV0YS5zdG9wTG9hZGluZyl7XG4gICAgICAgICAgcGVuZGluZy0tO1xuICAgICAgICAgIHVwZGF0ZWRMb2FkZXIgPSBjb3B5TG9hZGVyKGxvYWRlciwgZXhpc3RpbmdMb2FkZXIsIC0xKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwZW5kaW5nID0tIGV4aXN0aW5nTG9hZGVyLnBlbmRpbmdcbiAgICAgICAgICBkZWxldGUgbG9hZGVyc1tsb2FkZXJdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwZW5kaW5nID0gcGVuZGluZyA+IC0xID8gcGVuZGluZyA6IDA7XG5cbiAgICAgIGNvbnN0IGRvbmUgPSBwZW5kaW5nID09PSAwO1xuICAgICAgbG9hZGVycyA9IE9iamVjdC5hc3NpZ24oe30sIGxvYWRlcnMsIHVwZGF0ZWRMb2FkZXIpXG4gICAgICBjb25zdCBtZXNzYWdlcyA9IE9iamVjdC5lbnRyaWVzKGxvYWRlcnMpLm1hcCgobCkgPT4gbC5tZXNzYWdlKS5maWx0ZXIoKCkgPT4gdHJ1ZSlcbiAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlcy5sZW5ndGggPiAwICYmICEhbWVzc2FnZXNbMF1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBlbmRpbmcsXG4gICAgICAgIGRvbmUsXG4gICAgICAgIGxvYWRlcnMsXG4gICAgICAgIG1lc3NhZ2VcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZGluZ1JlZHVjZXIiXX0=