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
      var onlySilent = Object.entries(loaders).every(function (l) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkaW5nUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJsb2FkZXJOYW1lIiwiYWN0aW9uIiwibWV0YSIsImxvYWRlciIsImNvcHlMb2FkZXIiLCJleGlzdGluZ0xvYWRlciIsImluY3IiLCJtZXNzYWdlIiwicGVuZGluZyIsImdldE1lc3NhZ2UiLCJwYXlsb2FkIiwic2lsZW50IiwibG9hZGluZ1JlZHVjZXIiLCJzdGF0ZSIsImRvbmUiLCJsb2FkZXJzIiwib25seVNpbGVudCIsInR5cGUiLCJ1cGRhdGVkTG9hZGVyIiwiT2JqZWN0IiwiYXNzaWduIiwiZW50cmllcyIsImV2ZXJ5IiwibCIsInN0b3BMb2FkaW5nIiwibWVzc2FnZXMiLCJtYXAiLCJmaWx0ZXIiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBTUEsYUFBYSxTQUFiQSxVQUFhLENBQUNDLE1BQUQsRUFBWTtBQUM3QixTQUFPQSxPQUFPQyxJQUFQLENBQVlDLE1BQVosSUFBc0IsU0FBN0I7QUFDRCxDQUZEOztBQUlBLElBQU1DLGFBQWEsU0FBYkEsVUFBYSxDQUFDRCxNQUFELEVBQVNFLGNBQVQsRUFBc0M7QUFBQSxNQUFiQyxJQUFhLHVFQUFOLENBQU07O0FBQ3ZELDZCQUNHSCxNQURILEVBQ1ksRUFBRUksU0FBU0YsZUFBZUUsT0FBMUIsRUFBbUNDLFNBQVNILGVBQWVHLE9BQWYsR0FBeUJGLElBQXJFLEVBRFo7QUFHRCxDQUpEOztBQU1BLElBQU1HLGFBQWEsU0FBYkEsVUFBYSxDQUFDUixNQUFELEVBQVk7QUFDN0IsTUFBR0EsT0FBT1MsT0FBVixFQUFrQjtBQUNoQixRQUFHVCxPQUFPUyxPQUFQLENBQWVDLE1BQWxCLEVBQXlCO0FBQ3ZCLGFBQU8sSUFBUDtBQUNEO0FBQ0QsUUFBR1YsT0FBT1MsT0FBUCxDQUFlSCxPQUFsQixFQUEwQjtBQUN4QixhQUFPTixPQUFPUyxPQUFQLENBQWVILE9BQXRCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPTixPQUFPQyxJQUFQ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REQsQ0FuRUQ7O2tCQXFFZUQsYyIsImZpbGUiOiJsb2FkaW5nUmVkdWNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxvYWRlck5hbWUgPSAoYWN0aW9uKSA9PiB7XG4gIHJldHVybiBhY3Rpb24ubWV0YS5sb2FkZXIgfHwgJ2RlZmF1bHQnO1xufVxuXG5jb25zdCBjb3B5TG9hZGVyID0gKGxvYWRlciwgZXhpc3RpbmdMb2FkZXIsIGluY3IgPSAxKSA9PiB7XG4gIHJldHVybiB7XG4gICAgW2xvYWRlcl06IHsgbWVzc2FnZTogZXhpc3RpbmdMb2FkZXIubWVzc2FnZSwgcGVuZGluZzogZXhpc3RpbmdMb2FkZXIucGVuZGluZyArIGluY3IgfVxuICB9XG59XG5cbmNvbnN0IGdldE1lc3NhZ2UgPSAoYWN0aW9uKSA9PiB7XG4gIGlmKGFjdGlvbi5wYXlsb2FkKXtcbiAgICBpZihhY3Rpb24ucGF5bG9hZC5zaWxlbnQpe1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmKGFjdGlvbi5wYXlsb2FkLm1lc3NhZ2Upe1xuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkLm1lc3NhZ2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFjdGlvbi5tZXRhLm1lc3NhZ2U7XG59XG5jb25zdCBsb2FkaW5nUmVkdWNlciA9IChzdGF0ZSA9IHtcbiAgcGVuZGluZzogMCxcbiAgZG9uZTogdHJ1ZSxcbiAgbG9hZGVyczoge30sXG4gIG1lc3NhZ2U6IG51bGwsXG4gIG9ubHlTaWxlbnQ6IHRydWVcbn0sIGFjdGlvbikgPT4ge1xuICBpZihhY3Rpb24udHlwZSAhPSAnTE9BRElORycgJiYgYWN0aW9uLnR5cGUgIT0gJ0xPQURFRCcpe1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGNvbnN0IGxvYWRlciAgICAgICAgID0gbG9hZGVyTmFtZShhY3Rpb24pO1xuICBsZXQgICBsb2FkZXJzICAgICAgICA9IHN0YXRlLmxvYWRlcnM7XG4gIGNvbnN0IGV4aXN0aW5nTG9hZGVyID0gbG9hZGVyc1tsb2FkZXJdO1xuICBsZXQgICB1cGRhdGVkTG9hZGVyICA9ICBudWxsO1xuICBsZXQgICBtZXNzYWdlID0gZ2V0TWVzc2FnZShhY3Rpb24pO1xuICBjb25zdCBzaWxlbnQgID0gYWN0aW9uLnBheWxvYWQgPyBhY3Rpb24ucGF5bG9hZC5zaWxlbnQgOiBmYWxzZTtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnTE9BRElORyc6XG4gICAgICBpZihleGlzdGluZ0xvYWRlcil7XG4gICAgICAgIHVwZGF0ZWRMb2FkZXIgPSBjb3B5TG9hZGVyKGxvYWRlciwgZXhpc3RpbmdMb2FkZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXBkYXRlZExvYWRlciA9IHtcbiAgICAgICAgICBbbG9hZGVyXTogeyBtZXNzYWdlLCBwZW5kaW5nOiAxLCBzaWxlbnQgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxvYWRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBsb2FkZXJzLCB1cGRhdGVkTG9hZGVyKVxuICAgICAgY29uc3Qgb25seVNpbGVudCA9IE9iamVjdC5lbnRyaWVzKGxvYWRlcnMpLmV2ZXJ5KChsKSA9PiBsLnNpbGVudClcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBlbmRpbmc6IHN0YXRlLnBlbmRpbmcgKyAxLFxuICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgbG9hZGVycyxcbiAgICAgICAgbWVzc2FnZTogc3RhdGUubWVzc2FnZSB8fCBtZXNzYWdlLFxuICAgICAgICBvbmx5U2lsZW50XG4gICAgICB9XG4gICAgY2FzZSAnTE9BREVEJzpcbiAgICAgIGxldCBwZW5kaW5nICAgID0gc3RhdGUucGVuZGluZztcblxuXG4gICAgICBsZXQgdXBkYXRlZExvYWRlciA9IHt9XG5cbiAgICAgIGlmKGV4aXN0aW5nTG9hZGVyKXtcbiAgICAgICAgaWYoZXhpc3RpbmdMb2FkZXIucGVuZGluZyA+IDEgJiYgIWFjdGlvbi5tZXRhLnN0b3BMb2FkaW5nKXtcbiAgICAgICAgICBwZW5kaW5nLS07XG4gICAgICAgICAgdXBkYXRlZExvYWRlciA9IGNvcHlMb2FkZXIobG9hZGVyLCBleGlzdGluZ0xvYWRlciwgLTEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBlbmRpbmcgPS0gZXhpc3RpbmdMb2FkZXIucGVuZGluZ1xuICAgICAgICAgIGRlbGV0ZSBsb2FkZXJzW2xvYWRlcl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHBlbmRpbmcgPSBwZW5kaW5nID4gLTEgPyBwZW5kaW5nIDogMDtcblxuICAgICAgY29uc3QgZG9uZSA9IHBlbmRpbmcgPT09IDA7XG4gICAgICBsb2FkZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgbG9hZGVycywgdXBkYXRlZExvYWRlcilcbiAgICAgIGNvbnN0IG1lc3NhZ2VzID0gT2JqZWN0LmVudHJpZXMobG9hZGVycykubWFwKChsKSA9PiBsLm1lc3NhZ2UpLmZpbHRlcigoKSA9PiB0cnVlKVxuICAgICAgbWVzc2FnZSA9IG1lc3NhZ2VzLmxlbmd0aCA+IDAgJiYgISFtZXNzYWdlc1swXVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGVuZGluZyxcbiAgICAgICAgZG9uZSxcbiAgICAgICAgbG9hZGVycyxcbiAgICAgICAgbWVzc2FnZVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkaW5nUmVkdWNlciJdfQ==