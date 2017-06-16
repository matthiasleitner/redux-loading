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
    onlySilent: true,
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
        onlySilent: onlySilent,
        showLoading: !done && !onlySilent
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
        onlySilent: onlySilent,
        showLoading: !done && !onlySilent
      };
    default:
      return state;
  }
};

exports.default = loadingReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkaW5nUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJsb2FkZXJOYW1lIiwiYWN0aW9uIiwibWV0YSIsImxvYWRlciIsImNvcHlMb2FkZXIiLCJleGlzdGluZ0xvYWRlciIsImluY3IiLCJtZXNzYWdlIiwicGVuZGluZyIsImdldE1lc3NhZ2UiLCJwYXlsb2FkIiwic2lsZW50IiwibG9hZGluZ1JlZHVjZXIiLCJzdGF0ZSIsImRvbmUiLCJsb2FkZXJzIiwib25seVNpbGVudCIsInNob3dMb2FkaW5nIiwidHlwZSIsInVwZGF0ZWRMb2FkZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJ2YWx1ZXMiLCJldmVyeSIsImwiLCJzdG9wTG9hZGluZyIsIm1lc3NhZ2VzIiwibWFwIiwiZmlsdGVyIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQU1BLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxNQUFELEVBQVk7QUFDN0IsU0FBT0EsT0FBT0MsSUFBUCxDQUFZQyxNQUFaLElBQXNCLFNBQTdCO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNQyxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0QsTUFBRCxFQUFTRSxjQUFULEVBQXNDO0FBQUEsTUFBYkMsSUFBYSx1RUFBTixDQUFNOztBQUN2RCw2QkFDR0gsTUFESCxFQUNZLEVBQUVJLFNBQVNGLGVBQWVFLE9BQTFCLEVBQW1DQyxTQUFTSCxlQUFlRyxPQUFmLEdBQXlCRixJQUFyRSxFQURaO0FBR0QsQ0FKRDs7QUFNQSxJQUFNRyxhQUFhLFNBQWJBLFVBQWEsQ0FBQ1IsTUFBRCxFQUFZO0FBQzdCLE1BQUdBLE9BQU9TLE9BQVYsRUFBa0I7QUFDaEIsUUFBR1QsT0FBT1MsT0FBUCxDQUFlQyxNQUFsQixFQUF5QjtBQUN2QixhQUFPLElBQVA7QUFDRDtBQUNELFFBQUdWLE9BQU9TLE9BQVAsQ0FBZUgsT0FBbEIsRUFBMEI7QUFDeEIsYUFBT04sT0FBT1MsT0FBUCxDQUFlSCxPQUF0QjtBQUNEO0FBQ0Y7O0FBRUQsU0FB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Q0FBbkM7QUFDQVYsbUJBQWFJLE9BQU9FLE1BQVAsQ0FBY1AsT0FBZCxFQUF1QlEsS0FBdkIsQ0FBNkIsVUFBQ0MsQ0FBRDtBQUFBLGVBQU9BLEVBQUViLE1BQVQ7QUFBQSxPQUE3QixDQUFiO0FBQ0EsYUFBTztBQUNMSCx3QkFESztBQUVMTSxrQkFGSztBQUdMQyx3QkFISztBQUlMUix3QkFKSztBQUtMUyw4QkFMSztBQU1MQyxxQkFBYSxDQUFDSCxJQUFELElBQVMsQ0FBQ0U7QUFObEIsT0FBUDtBQVFGO0FBQ0UsYUFBT0gsS0FBUDtBQW5ESjtBQXFERCxDQXhFRDs7a0JBMEVlRCxjIiwiZmlsZSI6ImxvYWRpbmdSZWR1Y2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9hZGVyTmFtZSA9IChhY3Rpb24pID0+IHtcbiAgcmV0dXJuIGFjdGlvbi5tZXRhLmxvYWRlciB8fCAnZGVmYXVsdCc7XG59XG5cbmNvbnN0IGNvcHlMb2FkZXIgPSAobG9hZGVyLCBleGlzdGluZ0xvYWRlciwgaW5jciA9IDEpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBbbG9hZGVyXTogeyBtZXNzYWdlOiBleGlzdGluZ0xvYWRlci5tZXNzYWdlLCBwZW5kaW5nOiBleGlzdGluZ0xvYWRlci5wZW5kaW5nICsgaW5jciB9XG4gIH1cbn1cblxuY29uc3QgZ2V0TWVzc2FnZSA9IChhY3Rpb24pID0+IHtcbiAgaWYoYWN0aW9uLnBheWxvYWQpe1xuICAgIGlmKGFjdGlvbi5wYXlsb2FkLnNpbGVudCl7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYoYWN0aW9uLnBheWxvYWQubWVzc2FnZSl7XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQubWVzc2FnZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYWN0aW9uLm1ldGEubWVzc2FnZTtcbn1cbmNvbnN0IGxvYWRpbmdSZWR1Y2VyID0gKHN0YXRlID0ge1xuICBwZW5kaW5nOiAwLFxuICBkb25lOiB0cnVlLFxuICBsb2FkZXJzOiB7fSxcbiAgbWVzc2FnZTogbnVsbCxcbiAgb25seVNpbGVudDogdHJ1ZSxcbiAgc2hvd0xvYWRpbmc6IGZhbHNlLFxufSwgYWN0aW9uKSA9PiB7XG4gIGlmKGFjdGlvbi50eXBlICE9ICdMT0FESU5HJyAmJiBhY3Rpb24udHlwZSAhPSAnTE9BREVEJyl7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgY29uc3QgbG9hZGVyICAgICAgICAgPSBsb2FkZXJOYW1lKGFjdGlvbik7XG4gIGxldCAgIGxvYWRlcnMgICAgICAgID0gc3RhdGUubG9hZGVycztcbiAgY29uc3QgZXhpc3RpbmdMb2FkZXIgPSBsb2FkZXJzW2xvYWRlcl07XG4gIGxldCAgIHVwZGF0ZWRMb2FkZXIgID0gIG51bGw7XG4gIGxldCAgIG1lc3NhZ2UgPSBnZXRNZXNzYWdlKGFjdGlvbik7XG4gIGNvbnN0IHNpbGVudCAgPSBhY3Rpb24ucGF5bG9hZCA/IGFjdGlvbi5wYXlsb2FkLnNpbGVudCA6IGZhbHNlO1xuICBsZXQgICBvbmx5U2lsZW50ID0gc3RhdGUub25seVNpbGVudDtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0xPQURJTkcnOlxuICAgICAgaWYoZXhpc3RpbmdMb2FkZXIpe1xuICAgICAgICB1cGRhdGVkTG9hZGVyID0gY29weUxvYWRlcihsb2FkZXIsIGV4aXN0aW5nTG9hZGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVwZGF0ZWRMb2FkZXIgPSB7XG4gICAgICAgICAgW2xvYWRlcl06IHsgbWVzc2FnZSwgcGVuZGluZzogMSwgc2lsZW50IH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsb2FkZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgbG9hZGVycywgdXBkYXRlZExvYWRlcilcbiAgICAgIG9ubHlTaWxlbnQgPSBPYmplY3QudmFsdWVzKGxvYWRlcnMpLmV2ZXJ5KChsKSA9PiBsLnNpbGVudClcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBlbmRpbmc6IHN0YXRlLnBlbmRpbmcgKyAxLFxuICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgbG9hZGVycyxcbiAgICAgICAgbWVzc2FnZTogc3RhdGUubWVzc2FnZSB8fCBtZXNzYWdlLFxuICAgICAgICBvbmx5U2lsZW50LFxuICAgICAgICBzaG93TG9hZGluZzogIWRvbmUgJiYgIW9ubHlTaWxlbnRcbiAgICAgIH1cbiAgICBjYXNlICdMT0FERUQnOlxuICAgICAgbGV0IHBlbmRpbmcgICAgPSBzdGF0ZS5wZW5kaW5nO1xuXG5cbiAgICAgIGxldCB1cGRhdGVkTG9hZGVyID0ge31cblxuICAgICAgaWYoZXhpc3RpbmdMb2FkZXIpe1xuICAgICAgICBpZihleGlzdGluZ0xvYWRlci5wZW5kaW5nID4gMSAmJiAhYWN0aW9uLm1ldGEuc3RvcExvYWRpbmcpe1xuICAgICAgICAgIHBlbmRpbmctLTtcbiAgICAgICAgICB1cGRhdGVkTG9hZGVyID0gY29weUxvYWRlcihsb2FkZXIsIGV4aXN0aW5nTG9hZGVyLCAtMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGVuZGluZyA9LSBleGlzdGluZ0xvYWRlci5wZW5kaW5nXG4gICAgICAgICAgZGVsZXRlIGxvYWRlcnNbbG9hZGVyXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcGVuZGluZyA9IHBlbmRpbmcgPiAtMSA/IHBlbmRpbmcgOiAwO1xuXG4gICAgICBjb25zdCBkb25lID0gcGVuZGluZyA9PT0gMDtcbiAgICAgIGxvYWRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBsb2FkZXJzLCB1cGRhdGVkTG9hZGVyKVxuICAgICAgY29uc3QgbWVzc2FnZXMgPSBPYmplY3QudmFsdWVzKGxvYWRlcnMpLm1hcCgobCkgPT4gbC5tZXNzYWdlKS5maWx0ZXIoKCkgPT4gdHJ1ZSlcbiAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlcy5sZW5ndGggPiAwICYmICEhbWVzc2FnZXNbMF1cbiAgICAgIG9ubHlTaWxlbnQgPSBPYmplY3QudmFsdWVzKGxvYWRlcnMpLmV2ZXJ5KChsKSA9PiBsLnNpbGVudClcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBlbmRpbmcsXG4gICAgICAgIGRvbmUsXG4gICAgICAgIGxvYWRlcnMsXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIG9ubHlTaWxlbnQsXG4gICAgICAgIHNob3dMb2FkaW5nOiAhZG9uZSAmJiAhb25seVNpbGVudFxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkaW5nUmVkdWNlciJdfQ==