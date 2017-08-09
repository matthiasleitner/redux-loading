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
  if (action.payload && action.payload.message) {
    return action.payload.message;
  }

  return action.meta.message;
};

var getShowloading = function getShowloading(loaders) {
  return Object.values(loaders).some(function (l) {
    return l.global;
  });
};

var loadingReducer = function loadingReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    pending: 0,
    done: true,
    loaders: {},
    message: null,
    showLoading: false
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

  var globalLoading = action.payload ? action.payload.global : !!action.meta.global;

  switch (action.type) {
    case 'LOADING':
      if (existingLoader) {
        _updatedLoader = copyLoader(loader, existingLoader);
      } else {
        _updatedLoader = _defineProperty({}, loader, { message: message, pending: 1, globalLoading: globalLoading });
      }

      loaders = Object.assign({}, loaders, _updatedLoader);

      return {
        pending: state.pending + 1,
        done: false,
        loaders: loaders,
        message: state.message || message,
        showLoading: getShowloading(loaders)
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

      var messages = Object.values(loaders).map(function (l) {
        return l.message;
      }).filter(function () {
        return true;
      });
      message = messages.length > 0 && !!messages[0];

      return {
        pending: pending,
        done: done,
        loaders: loaders,
        message: message,
        showLoading: getShowloading(loaders)
      };
    default:
      return state;
  }
};

exports.default = loadingReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkaW5nUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJsb2FkZXJOYW1lIiwiYWN0aW9uIiwibWV0YSIsImxvYWRlciIsImNvcHlMb2FkZXIiLCJleGlzdGluZ0xvYWRlciIsImluY3IiLCJtZXNzYWdlIiwicGVuZGluZyIsImdldE1lc3NhZ2UiLCJwYXlsb2FkIiwiZ2V0U2hvd2xvYWRpbmciLCJsb2FkZXJzIiwiT2JqZWN0IiwidmFsdWVzIiwic29tZSIsImwiLCJnbG9iYWwiLCJsb2FkaW5nUmVkdWNlciIsInN0YXRlIiwiZG9uZSIsInNob3dMb2FkaW5nIiwidHlwZSIsInVwZGF0ZWRMb2FkZXIiLCJnbG9iYWxMb2FkaW5nIiwiYXNzaWduIiwic3RvcExvYWRpbmciLCJtZXNzYWdlcyIsIm1hcCIsImZpbHRlciIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxJQUFNQSxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsTUFBRCxFQUFZO0FBQzdCLFNBQU9BLE9BQU9DLElBQVAsQ0FBWUMsTUFBWixJQUFzQixTQUE3QjtBQUNELENBRkQ7O0FBSUEsSUFBTUMsYUFBYSxTQUFiQSxVQUFhLENBQUNELE1BQUQsRUFBU0UsY0FBVCxFQUFzQztBQUFBLE1BQWJDLElBQWEsdUVBQU4sQ0FBTTs7QUFDdkQsNkJBQ0dILE1BREgsRUFDWSxFQUFFSSxTQUFTRixlQUFlRSxPQUExQixFQUFtQ0MsU0FBU0gsZUFBZUcsT0FBZixHQUF5QkYsSUFBckUsRUFEWjtBQUdELENBSkQ7O0FBTUEsSUFBTUcsYUFBYSxTQUFiQSxVQUFhLENBQUNSLE1BQUQsRUFBWTtBQUM3QixNQUFHQSxPQUFPUyxPQUFQLElBQWtCVCxPQUFPUyxPQUFQLENBQWVILE9BQXBDLEVBQTRDO0FBQzFDLFdBQU9OLE9BQU9TLE9BQVAsQ0FBZUgsT0FBdEI7QUFDRDs7QUFFRCxTQUFPTixPQUFPQyxJQUFQLENBQVlLLE9BQW5CO0FBQ0QsQ0FORDs7QUFRQSxJQUFNSSxpQkFBaUIsU0FB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bkIsd0JBREs7QUFFTFksa0JBRks7QUFHTFIsd0JBSEs7QUFJTEwsd0JBSks7QUFLTGMscUJBQWFWLGVBQWVDLE9BQWY7QUFMUixPQUFQO0FBT0Y7QUFDRSxhQUFPTyxLQUFQO0FBbERKO0FBb0RELENBeEVEOztrQkEwRWVELGMiLCJmaWxlIjoibG9hZGluZ1JlZHVjZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsb2FkZXJOYW1lID0gKGFjdGlvbikgPT4ge1xuICByZXR1cm4gYWN0aW9uLm1ldGEubG9hZGVyIHx8ICdkZWZhdWx0Jztcbn1cblxuY29uc3QgY29weUxvYWRlciA9IChsb2FkZXIsIGV4aXN0aW5nTG9hZGVyLCBpbmNyID0gMSkgPT4ge1xuICByZXR1cm4ge1xuICAgIFtsb2FkZXJdOiB7IG1lc3NhZ2U6IGV4aXN0aW5nTG9hZGVyLm1lc3NhZ2UsIHBlbmRpbmc6IGV4aXN0aW5nTG9hZGVyLnBlbmRpbmcgKyBpbmNyIH1cbiAgfVxufVxuXG5jb25zdCBnZXRNZXNzYWdlID0gKGFjdGlvbikgPT4ge1xuICBpZihhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5tZXNzYWdlKXtcbiAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQubWVzc2FnZTtcbiAgfVxuXG4gIHJldHVybiBhY3Rpb24ubWV0YS5tZXNzYWdlO1xufVxuXG5jb25zdCBnZXRTaG93bG9hZGluZyA9IChsb2FkZXJzKSA9PiB7XG4gIHJldHVybiBPYmplY3QudmFsdWVzKGxvYWRlcnMpLnNvbWUoKGwpID0+IGwuZ2xvYmFsKVxufVxuXG5jb25zdCBsb2FkaW5nUmVkdWNlciA9IChzdGF0ZSA9IHtcbiAgcGVuZGluZzogMCxcbiAgZG9uZTogdHJ1ZSxcbiAgbG9hZGVyczoge30sXG4gIG1lc3NhZ2U6IG51bGwsXG4gIHNob3dMb2FkaW5nOiBmYWxzZSxcbn0sIGFjdGlvbikgPT4ge1xuXG4gIGlmKGFjdGlvbi50eXBlICE9ICdMT0FESU5HJyAmJiBhY3Rpb24udHlwZSAhPSAnTE9BREVEJyl7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgY29uc3QgbG9hZGVyICAgICAgICAgPSBsb2FkZXJOYW1lKGFjdGlvbik7XG4gIGxldCAgIGxvYWRlcnMgICAgICAgID0gc3RhdGUubG9hZGVycztcbiAgY29uc3QgZXhpc3RpbmdMb2FkZXIgPSBsb2FkZXJzW2xvYWRlcl07XG4gIGxldCAgIHVwZGF0ZWRMb2FkZXIgID0gIG51bGw7XG4gIGxldCAgIG1lc3NhZ2UgPSBnZXRNZXNzYWdlKGFjdGlvbik7XG5cbiAgY29uc3QgZ2xvYmFsTG9hZGluZyA9IGFjdGlvbi5wYXlsb2FkID8gYWN0aW9uLnBheWxvYWQuZ2xvYmFsIDogISFhY3Rpb24ubWV0YS5nbG9iYWw7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0xPQURJTkcnOlxuICAgICAgaWYoZXhpc3RpbmdMb2FkZXIpe1xuICAgICAgICB1cGRhdGVkTG9hZGVyID0gY29weUxvYWRlcihsb2FkZXIsIGV4aXN0aW5nTG9hZGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVwZGF0ZWRMb2FkZXIgPSB7XG4gICAgICAgICAgW2xvYWRlcl06IHsgbWVzc2FnZSwgcGVuZGluZzogMSwgZ2xvYmFsTG9hZGluZyB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbG9hZGVycyA9IE9iamVjdC5hc3NpZ24oe30sIGxvYWRlcnMsIHVwZGF0ZWRMb2FkZXIpXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBlbmRpbmc6IHN0YXRlLnBlbmRpbmcgKyAxLFxuICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgbG9hZGVycyxcbiAgICAgICAgbWVzc2FnZTogc3RhdGUubWVzc2FnZSB8fCBtZXNzYWdlLFxuICAgICAgICBzaG93TG9hZGluZzogZ2V0U2hvd2xvYWRpbmcobG9hZGVycylcbiAgICAgIH1cbiAgICBjYXNlICdMT0FERUQnOlxuICAgICAgbGV0IHBlbmRpbmcgICAgPSBzdGF0ZS5wZW5kaW5nO1xuXG4gICAgICBsZXQgdXBkYXRlZExvYWRlciA9IHt9XG5cbiAgICAgIGlmKGV4aXN0aW5nTG9hZGVyKXtcbiAgICAgICAgaWYoZXhpc3RpbmdMb2FkZXIucGVuZGluZyA+IDEgJiYgIWFjdGlvbi5tZXRhLnN0b3BMb2FkaW5nKXtcbiAgICAgICAgICBwZW5kaW5nLS07XG4gICAgICAgICAgdXBkYXRlZExvYWRlciA9IGNvcHlMb2FkZXIobG9hZGVyLCBleGlzdGluZ0xvYWRlciwgLTEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBlbmRpbmcgPS0gZXhpc3RpbmdMb2FkZXIucGVuZGluZ1xuICAgICAgICAgIGRlbGV0ZSBsb2FkZXJzW2xvYWRlcl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHBlbmRpbmcgPSBwZW5kaW5nID4gLTEgPyBwZW5kaW5nIDogMDtcblxuICAgICAgY29uc3QgZG9uZSA9IHBlbmRpbmcgPT09IDA7XG5cbiAgICAgIGxvYWRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBsb2FkZXJzLCB1cGRhdGVkTG9hZGVyKVxuXG4gICAgICBjb25zdCBtZXNzYWdlcyA9IE9iamVjdC52YWx1ZXMobG9hZGVycykubWFwKChsKSA9PiBsLm1lc3NhZ2UpLmZpbHRlcigoKSA9PiB0cnVlKVxuICAgICAgbWVzc2FnZSA9IG1lc3NhZ2VzLmxlbmd0aCA+IDAgJiYgISFtZXNzYWdlc1swXVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwZW5kaW5nLFxuICAgICAgICBkb25lLFxuICAgICAgICBsb2FkZXJzLFxuICAgICAgICBtZXNzYWdlLFxuICAgICAgICBzaG93TG9hZGluZzogZ2V0U2hvd2xvYWRpbmcobG9hZGVycylcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZGluZ1JlZHVjZXIiXX0=