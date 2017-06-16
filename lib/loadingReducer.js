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
      onlySilent = Object.values(loaders).every(function (l) {
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
      var messages = Object.values(loaders).map(function (l) {
        return l.message;
      }).filter(function () {
        return true;
      });
      message = messages.length > 0 && !!messages[0];
      onlySilent = Object.values(loaders).every(function (l) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkaW5nUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJsb2FkZXJOYW1lIiwiYWN0aW9uIiwibWV0YSIsImxvYWRlciIsImNvcHlMb2FkZXIiLCJleGlzdGluZ0xvYWRlciIsImluY3IiLCJtZXNzYWdlIiwicGVuZGluZyIsImdldE1lc3NhZ2UiLCJwYXlsb2FkIiwic2lsZW50IiwibG9hZGluZ1JlZHVjZXIiLCJzdGF0ZSIsImRvbmUiLCJsb2FkZXJzIiwib25seVNpbGVudCIsInR5cGUiLCJ1cGRhdGVkTG9hZGVyIiwiT2JqZWN0IiwiYXNzaWduIiwidmFsdWVzIiwiZXZlcnkiLCJsIiwic3RvcExvYWRpbmciLCJtZXNzYWdlcyIsIm1hcCIsImZpbHRlciIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxJQUFNQSxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsTUFBRCxFQUFZO0FBQzdCLFNBQU9BLE9BQU9DLElBQVAsQ0FBWUMsTUFBWixJQUFzQixTQUE3QjtBQUNELENBRkQ7O0FBSUEsSUFBTUMsYUFBYSxTQUFiQSxVQUFhLENBQUNELE1BQUQsRUFBU0UsY0FBVCxFQUFzQztBQUFBLE1BQWJDLElBQWEsdUVBQU4sQ0FBTTs7QUFDdkQsNkJBQ0dILE1BREgsRUFDWSxFQUFFSSxTQUFTRixlQUFlRSxPQUExQixFQUFtQ0MsU0FBU0gsZUFBZUcsT0FBZixHQUF5QkYsSUFBckUsRUFEWjtBQUdELENBSkQ7O0FBTUEsSUFBTUcsYUFBYSxTQUFiQSxVQUFhLENBQUNSLE1BQUQsRUFBWTtBQUM3QixNQUFHQSxPQUFPUyxPQUFWLEVBQWtCO0FBQ2hCLFFBQUdULE9BQU9TLE9BQVAsQ0FBZUMsTUFBbEIsRUFBeUI7QUFDdkIsYUFBTyxJQUFQO0FBQ0Q7QUFDRCxRQUFHVixPQUFPUyxPQUFQLENBQWVILE9BQWxCLEVBQTBCO0FBQ3hCLGFBQU9OLE9BQU9TLE9BQVAsQ0FBZUgsT0FBdEI7QUFDRDtBQUNGOztBQUVELFNBQU9OLE9BQU9DLElBQVAs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QUFPQSxFQUFFWixNQUFUO0FBQUEsT0FBN0IsQ0FBYjtBQUNBLGFBQU87QUFDTEgsd0JBREs7QUFFTE0sa0JBRks7QUFHTEMsd0JBSEs7QUFJTFIsd0JBSks7QUFLTFM7QUFMSyxPQUFQO0FBT0Y7QUFDRSxhQUFPSCxLQUFQO0FBakRKO0FBbURELENBckVEOztrQkF1RWVELGMiLCJmaWxlIjoibG9hZGluZ1JlZHVjZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsb2FkZXJOYW1lID0gKGFjdGlvbikgPT4ge1xuICByZXR1cm4gYWN0aW9uLm1ldGEubG9hZGVyIHx8ICdkZWZhdWx0Jztcbn1cblxuY29uc3QgY29weUxvYWRlciA9IChsb2FkZXIsIGV4aXN0aW5nTG9hZGVyLCBpbmNyID0gMSkgPT4ge1xuICByZXR1cm4ge1xuICAgIFtsb2FkZXJdOiB7IG1lc3NhZ2U6IGV4aXN0aW5nTG9hZGVyLm1lc3NhZ2UsIHBlbmRpbmc6IGV4aXN0aW5nTG9hZGVyLnBlbmRpbmcgKyBpbmNyIH1cbiAgfVxufVxuXG5jb25zdCBnZXRNZXNzYWdlID0gKGFjdGlvbikgPT4ge1xuICBpZihhY3Rpb24ucGF5bG9hZCl7XG4gICAgaWYoYWN0aW9uLnBheWxvYWQuc2lsZW50KXtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZihhY3Rpb24ucGF5bG9hZC5tZXNzYWdlKXtcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC5tZXNzYWdlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhY3Rpb24ubWV0YS5tZXNzYWdlO1xufVxuY29uc3QgbG9hZGluZ1JlZHVjZXIgPSAoc3RhdGUgPSB7XG4gIHBlbmRpbmc6IDAsXG4gIGRvbmU6IHRydWUsXG4gIGxvYWRlcnM6IHt9LFxuICBtZXNzYWdlOiBudWxsLFxuICBvbmx5U2lsZW50OiB0cnVlXG59LCBhY3Rpb24pID0+IHtcbiAgaWYoYWN0aW9uLnR5cGUgIT0gJ0xPQURJTkcnICYmIGFjdGlvbi50eXBlICE9ICdMT0FERUQnKXtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBjb25zdCBsb2FkZXIgICAgICAgICA9IGxvYWRlck5hbWUoYWN0aW9uKTtcbiAgbGV0ICAgbG9hZGVycyAgICAgICAgPSBzdGF0ZS5sb2FkZXJzO1xuICBjb25zdCBleGlzdGluZ0xvYWRlciA9IGxvYWRlcnNbbG9hZGVyXTtcbiAgbGV0ICAgdXBkYXRlZExvYWRlciAgPSAgbnVsbDtcbiAgbGV0ICAgbWVzc2FnZSA9IGdldE1lc3NhZ2UoYWN0aW9uKTtcbiAgY29uc3Qgc2lsZW50ICA9IGFjdGlvbi5wYXlsb2FkID8gYWN0aW9uLnBheWxvYWQuc2lsZW50IDogZmFsc2U7XG4gIGxldCAgIG9ubHlTaWxlbnQgPSBzdGF0ZS5vbmx5U2lsZW50O1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnTE9BRElORyc6XG4gICAgICBpZihleGlzdGluZ0xvYWRlcil7XG4gICAgICAgIHVwZGF0ZWRMb2FkZXIgPSBjb3B5TG9hZGVyKGxvYWRlciwgZXhpc3RpbmdMb2FkZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXBkYXRlZExvYWRlciA9IHtcbiAgICAgICAgICBbbG9hZGVyXTogeyBtZXNzYWdlLCBwZW5kaW5nOiAxLCBzaWxlbnQgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxvYWRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBsb2FkZXJzLCB1cGRhdGVkTG9hZGVyKVxuICAgICAgb25seVNpbGVudCA9IE9iamVjdC52YWx1ZXMobG9hZGVycykuZXZlcnkoKGwpID0+IGwuc2lsZW50KVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGVuZGluZzogc3RhdGUucGVuZGluZyArIDEsXG4gICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICBsb2FkZXJzLFxuICAgICAgICBtZXNzYWdlOiBzdGF0ZS5tZXNzYWdlIHx8IG1lc3NhZ2UsXG4gICAgICAgIG9ubHlTaWxlbnRcbiAgICAgIH1cbiAgICBjYXNlICdMT0FERUQnOlxuICAgICAgbGV0IHBlbmRpbmcgICAgPSBzdGF0ZS5wZW5kaW5nO1xuXG5cbiAgICAgIGxldCB1cGRhdGVkTG9hZGVyID0ge31cblxuICAgICAgaWYoZXhpc3RpbmdMb2FkZXIpe1xuICAgICAgICBpZihleGlzdGluZ0xvYWRlci5wZW5kaW5nID4gMSAmJiAhYWN0aW9uLm1ldGEuc3RvcExvYWRpbmcpe1xuICAgICAgICAgIHBlbmRpbmctLTtcbiAgICAgICAgICB1cGRhdGVkTG9hZGVyID0gY29weUxvYWRlcihsb2FkZXIsIGV4aXN0aW5nTG9hZGVyLCAtMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGVuZGluZyA9LSBleGlzdGluZ0xvYWRlci5wZW5kaW5nXG4gICAgICAgICAgZGVsZXRlIGxvYWRlcnNbbG9hZGVyXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcGVuZGluZyA9IHBlbmRpbmcgPiAtMSA/IHBlbmRpbmcgOiAwO1xuXG4gICAgICBjb25zdCBkb25lID0gcGVuZGluZyA9PT0gMDtcbiAgICAgIGxvYWRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBsb2FkZXJzLCB1cGRhdGVkTG9hZGVyKVxuICAgICAgY29uc3QgbWVzc2FnZXMgPSBPYmplY3QudmFsdWVzKGxvYWRlcnMpLm1hcCgobCkgPT4gbC5tZXNzYWdlKS5maWx0ZXIoKCkgPT4gdHJ1ZSlcbiAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlcy5sZW5ndGggPiAwICYmICEhbWVzc2FnZXNbMF1cbiAgICAgIG9ubHlTaWxlbnQgPSBPYmplY3QudmFsdWVzKGxvYWRlcnMpLmV2ZXJ5KChsKSA9PiBsLnNpbGVudClcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBlbmRpbmcsXG4gICAgICAgIGRvbmUsXG4gICAgICAgIGxvYWRlcnMsXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIG9ubHlTaWxlbnRcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZGluZ1JlZHVjZXIiXX0=