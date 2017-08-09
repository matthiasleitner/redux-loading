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
    return l.globalLoading;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkaW5nUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJsb2FkZXJOYW1lIiwiYWN0aW9uIiwibWV0YSIsImxvYWRlciIsImNvcHlMb2FkZXIiLCJleGlzdGluZ0xvYWRlciIsImluY3IiLCJtZXNzYWdlIiwicGVuZGluZyIsImdldE1lc3NhZ2UiLCJwYXlsb2FkIiwiZ2V0U2hvd2xvYWRpbmciLCJsb2FkZXJzIiwiT2JqZWN0IiwidmFsdWVzIiwic29tZSIsImwiLCJnbG9iYWxMb2FkaW5nIiwibG9hZGluZ1JlZHVjZXIiLCJzdGF0ZSIsImRvbmUiLCJzaG93TG9hZGluZyIsInR5cGUiLCJ1cGRhdGVkTG9hZGVyIiwiZ2xvYmFsIiwiYXNzaWduIiwic3RvcExvYWRpbmciLCJtZXNzYWdlcyIsIm1hcCIsImZpbHRlciIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxJQUFNQSxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsTUFBRCxFQUFZO0FBQzdCLFNBQU9BLE9BQU9DLElBQVAsQ0FBWUMsTUFBWixJQUFzQixTQUE3QjtBQUNELENBRkQ7O0FBSUEsSUFBTUMsYUFBYSxTQUFiQSxVQUFhLENBQUNELE1BQUQsRUFBU0UsY0FBVCxFQUFzQztBQUFBLE1BQWJDLElBQWEsdUVBQU4sQ0FBTTs7QUFDdkQsNkJBQ0dILE1BREgsRUFDWSxFQUFFSSxTQUFTRixlQUFlRSxPQUExQixFQUFtQ0MsU0FBU0gsZUFBZUcsT0FBZixHQUF5QkYsSUFBckUsRUFEWjtBQUdELENBSkQ7O0FBTUEsSUFBTUcsYUFBYSxTQUFiQSxVQUFhLENBQUNSLE1BQUQsRUFBWTtBQUM3QixNQUFHQSxPQUFPUyxPQUFQLElBQWtCVCxPQUFPUyxPQUFQLENBQWVILE9BQXBDLEVBQTRDO0FBQzFDLFdBQU9OLE9BQU9TLE9BQVAsQ0FBZUgsT0FBdEI7QUFDRDs7QUFFRCxTQUFPTixPQUFPQyxJQUFQLENBQVlLLE9BQW5CO0FBQ0QsQ0FORDs7QUFRQSxJQUFNSSxpQkFBaUIsU0FB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bkIsd0JBREs7QUFFTFksa0JBRks7QUFHTFIsd0JBSEs7QUFJTEwsd0JBSks7QUFLTGMscUJBQWFWLGVBQWVDLE9BQWY7QUFMUixPQUFQO0FBT0Y7QUFDRSxhQUFPTyxLQUFQO0FBbERKO0FBb0RELENBeEVEOztrQkEwRWVELGMiLCJmaWxlIjoibG9hZGluZ1JlZHVjZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsb2FkZXJOYW1lID0gKGFjdGlvbikgPT4ge1xuICByZXR1cm4gYWN0aW9uLm1ldGEubG9hZGVyIHx8ICdkZWZhdWx0Jztcbn1cblxuY29uc3QgY29weUxvYWRlciA9IChsb2FkZXIsIGV4aXN0aW5nTG9hZGVyLCBpbmNyID0gMSkgPT4ge1xuICByZXR1cm4ge1xuICAgIFtsb2FkZXJdOiB7IG1lc3NhZ2U6IGV4aXN0aW5nTG9hZGVyLm1lc3NhZ2UsIHBlbmRpbmc6IGV4aXN0aW5nTG9hZGVyLnBlbmRpbmcgKyBpbmNyIH1cbiAgfVxufVxuXG5jb25zdCBnZXRNZXNzYWdlID0gKGFjdGlvbikgPT4ge1xuICBpZihhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5tZXNzYWdlKXtcbiAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQubWVzc2FnZTtcbiAgfVxuXG4gIHJldHVybiBhY3Rpb24ubWV0YS5tZXNzYWdlO1xufVxuXG5jb25zdCBnZXRTaG93bG9hZGluZyA9IChsb2FkZXJzKSA9PiB7XG4gIHJldHVybiBPYmplY3QudmFsdWVzKGxvYWRlcnMpLnNvbWUoKGwpID0+IGwuZ2xvYmFsTG9hZGluZylcbn1cblxuY29uc3QgbG9hZGluZ1JlZHVjZXIgPSAoc3RhdGUgPSB7XG4gIHBlbmRpbmc6IDAsXG4gIGRvbmU6IHRydWUsXG4gIGxvYWRlcnM6IHt9LFxuICBtZXNzYWdlOiBudWxsLFxuICBzaG93TG9hZGluZzogZmFsc2UsXG59LCBhY3Rpb24pID0+IHtcblxuICBpZihhY3Rpb24udHlwZSAhPSAnTE9BRElORycgJiYgYWN0aW9uLnR5cGUgIT0gJ0xPQURFRCcpe1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGNvbnN0IGxvYWRlciAgICAgICAgID0gbG9hZGVyTmFtZShhY3Rpb24pO1xuICBsZXQgICBsb2FkZXJzICAgICAgICA9IHN0YXRlLmxvYWRlcnM7XG4gIGNvbnN0IGV4aXN0aW5nTG9hZGVyID0gbG9hZGVyc1tsb2FkZXJdO1xuICBsZXQgICB1cGRhdGVkTG9hZGVyICA9ICBudWxsO1xuICBsZXQgICBtZXNzYWdlID0gZ2V0TWVzc2FnZShhY3Rpb24pO1xuXG4gIGNvbnN0IGdsb2JhbExvYWRpbmcgPSBhY3Rpb24ucGF5bG9hZCA/IGFjdGlvbi5wYXlsb2FkLmdsb2JhbCA6ICEhYWN0aW9uLm1ldGEuZ2xvYmFsO1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdMT0FESU5HJzpcbiAgICAgIGlmKGV4aXN0aW5nTG9hZGVyKXtcbiAgICAgICAgdXBkYXRlZExvYWRlciA9IGNvcHlMb2FkZXIobG9hZGVyLCBleGlzdGluZ0xvYWRlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cGRhdGVkTG9hZGVyID0ge1xuICAgICAgICAgIFtsb2FkZXJdOiB7IG1lc3NhZ2UsIHBlbmRpbmc6IDEsIGdsb2JhbExvYWRpbmcgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxvYWRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBsb2FkZXJzLCB1cGRhdGVkTG9hZGVyKVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwZW5kaW5nOiBzdGF0ZS5wZW5kaW5nICsgMSxcbiAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgIGxvYWRlcnMsXG4gICAgICAgIG1lc3NhZ2U6IHN0YXRlLm1lc3NhZ2UgfHwgbWVzc2FnZSxcbiAgICAgICAgc2hvd0xvYWRpbmc6IGdldFNob3dsb2FkaW5nKGxvYWRlcnMpXG4gICAgICB9XG4gICAgY2FzZSAnTE9BREVEJzpcbiAgICAgIGxldCBwZW5kaW5nICAgID0gc3RhdGUucGVuZGluZztcblxuICAgICAgbGV0IHVwZGF0ZWRMb2FkZXIgPSB7fVxuXG4gICAgICBpZihleGlzdGluZ0xvYWRlcil7XG4gICAgICAgIGlmKGV4aXN0aW5nTG9hZGVyLnBlbmRpbmcgPiAxICYmICFhY3Rpb24ubWV0YS5zdG9wTG9hZGluZyl7XG4gICAgICAgICAgcGVuZGluZy0tO1xuICAgICAgICAgIHVwZGF0ZWRMb2FkZXIgPSBjb3B5TG9hZGVyKGxvYWRlciwgZXhpc3RpbmdMb2FkZXIsIC0xKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwZW5kaW5nID0tIGV4aXN0aW5nTG9hZGVyLnBlbmRpbmdcbiAgICAgICAgICBkZWxldGUgbG9hZGVyc1tsb2FkZXJdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwZW5kaW5nID0gcGVuZGluZyA+IC0xID8gcGVuZGluZyA6IDA7XG5cbiAgICAgIGNvbnN0IGRvbmUgPSBwZW5kaW5nID09PSAwO1xuXG4gICAgICBsb2FkZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgbG9hZGVycywgdXBkYXRlZExvYWRlcilcblxuICAgICAgY29uc3QgbWVzc2FnZXMgPSBPYmplY3QudmFsdWVzKGxvYWRlcnMpLm1hcCgobCkgPT4gbC5tZXNzYWdlKS5maWx0ZXIoKCkgPT4gdHJ1ZSlcbiAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlcy5sZW5ndGggPiAwICYmICEhbWVzc2FnZXNbMF1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGVuZGluZyxcbiAgICAgICAgZG9uZSxcbiAgICAgICAgbG9hZGVycyxcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgc2hvd0xvYWRpbmc6IGdldFNob3dsb2FkaW5nKGxvYWRlcnMpXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRpbmdSZWR1Y2VyIl19