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
        onlySilent: onlySilent,
        showLoading: !done && !onlySilent
      };
    default:
      return state;
  }
};

exports.default = loadingReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkaW5nUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJsb2FkZXJOYW1lIiwiYWN0aW9uIiwibWV0YSIsImxvYWRlciIsImNvcHlMb2FkZXIiLCJleGlzdGluZ0xvYWRlciIsImluY3IiLCJtZXNzYWdlIiwicGVuZGluZyIsImdldE1lc3NhZ2UiLCJwYXlsb2FkIiwic2lsZW50IiwibG9hZGluZ1JlZHVjZXIiLCJzdGF0ZSIsImRvbmUiLCJsb2FkZXJzIiwib25seVNpbGVudCIsInR5cGUiLCJ1cGRhdGVkTG9hZGVyIiwiT2JqZWN0IiwiYXNzaWduIiwidmFsdWVzIiwiZXZlcnkiLCJsIiwic3RvcExvYWRpbmciLCJtZXNzYWdlcyIsIm1hcCIsImZpbHRlciIsImxlbmd0aCIsInNob3dMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQU1BLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxNQUFELEVBQVk7QUFDN0IsU0FBT0EsT0FBT0MsSUFBUCxDQUFZQyxNQUFaLElBQXNCLFNBQTdCO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNQyxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0QsTUFBRCxFQUFTRSxjQUFULEVBQXNDO0FBQUEsTUFBYkMsSUFBYSx1RUFBTixDQUFNOztBQUN2RCw2QkFDR0gsTUFESCxFQUNZLEVBQUVJLFNBQVNGLGVBQWVFLE9BQTFCLEVBQW1DQyxTQUFTSCxlQUFlRyxPQUFmLEdBQXlCRixJQUFyRSxFQURaO0FBR0QsQ0FKRDs7QUFNQSxJQUFNRyxhQUFhLFNBQWJBLFVBQWEsQ0FBQ1IsTUFBRCxFQUFZO0FBQzdCLE1BQUdBLE9BQU9TLE9BQVYsRUFBa0I7QUFDaEIsUUFBR1QsT0FBT1MsT0FBUCxDQUFlQyxNQUFsQixFQUF5QjtBQUN2QixhQUFPLElBQVA7QUFDRDtBQUNELFFBQUdWLE9BQU9TLE9BQVAsQ0FBZUgsT0FBbEIsRUFBMEI7QUFDeEIsYUFBT04sT0FBT1MsT0FBUCxDQUFlSCxPQUF0QjtBQUNEO0FBQ0Y7O0FBRUQsU0FB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Q0MsQ0FBRDtBQUFBLGVBQU9BLEVBQUVaLE1BQVQ7QUFBQSxPQUE3QixDQUFiO0FBQ0EsYUFBTztBQUNMSCx3QkFESztBQUVMTSxrQkFGSztBQUdMQyx3QkFISztBQUlMUix3QkFKSztBQUtMUyw4QkFMSztBQU1MYSxxQkFBYSxDQUFDZixJQUFELElBQVMsQ0FBQ0U7QUFObEIsT0FBUDtBQVFGO0FBQ0UsYUFBT0gsS0FBUDtBQWxESjtBQW9ERCxDQXRFRDs7a0JBd0VlRCxjIiwiZmlsZSI6ImxvYWRpbmdSZWR1Y2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9hZGVyTmFtZSA9IChhY3Rpb24pID0+IHtcbiAgcmV0dXJuIGFjdGlvbi5tZXRhLmxvYWRlciB8fCAnZGVmYXVsdCc7XG59XG5cbmNvbnN0IGNvcHlMb2FkZXIgPSAobG9hZGVyLCBleGlzdGluZ0xvYWRlciwgaW5jciA9IDEpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBbbG9hZGVyXTogeyBtZXNzYWdlOiBleGlzdGluZ0xvYWRlci5tZXNzYWdlLCBwZW5kaW5nOiBleGlzdGluZ0xvYWRlci5wZW5kaW5nICsgaW5jciB9XG4gIH1cbn1cblxuY29uc3QgZ2V0TWVzc2FnZSA9IChhY3Rpb24pID0+IHtcbiAgaWYoYWN0aW9uLnBheWxvYWQpe1xuICAgIGlmKGFjdGlvbi5wYXlsb2FkLnNpbGVudCl7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYoYWN0aW9uLnBheWxvYWQubWVzc2FnZSl7XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQubWVzc2FnZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYWN0aW9uLm1ldGEubWVzc2FnZTtcbn1cbmNvbnN0IGxvYWRpbmdSZWR1Y2VyID0gKHN0YXRlID0ge1xuICBwZW5kaW5nOiAwLFxuICBkb25lOiB0cnVlLFxuICBsb2FkZXJzOiB7fSxcbiAgbWVzc2FnZTogbnVsbCxcbiAgb25seVNpbGVudDogdHJ1ZVxufSwgYWN0aW9uKSA9PiB7XG4gIGlmKGFjdGlvbi50eXBlICE9ICdMT0FESU5HJyAmJiBhY3Rpb24udHlwZSAhPSAnTE9BREVEJyl7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgY29uc3QgbG9hZGVyICAgICAgICAgPSBsb2FkZXJOYW1lKGFjdGlvbik7XG4gIGxldCAgIGxvYWRlcnMgICAgICAgID0gc3RhdGUubG9hZGVycztcbiAgY29uc3QgZXhpc3RpbmdMb2FkZXIgPSBsb2FkZXJzW2xvYWRlcl07XG4gIGxldCAgIHVwZGF0ZWRMb2FkZXIgID0gIG51bGw7XG4gIGxldCAgIG1lc3NhZ2UgPSBnZXRNZXNzYWdlKGFjdGlvbik7XG4gIGNvbnN0IHNpbGVudCAgPSBhY3Rpb24ucGF5bG9hZCA/IGFjdGlvbi5wYXlsb2FkLnNpbGVudCA6IGZhbHNlO1xuICBsZXQgICBvbmx5U2lsZW50ID0gc3RhdGUub25seVNpbGVudDtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0xPQURJTkcnOlxuICAgICAgaWYoZXhpc3RpbmdMb2FkZXIpe1xuICAgICAgICB1cGRhdGVkTG9hZGVyID0gY29weUxvYWRlcihsb2FkZXIsIGV4aXN0aW5nTG9hZGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVwZGF0ZWRMb2FkZXIgPSB7XG4gICAgICAgICAgW2xvYWRlcl06IHsgbWVzc2FnZSwgcGVuZGluZzogMSwgc2lsZW50IH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsb2FkZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgbG9hZGVycywgdXBkYXRlZExvYWRlcilcbiAgICAgIG9ubHlTaWxlbnQgPSBPYmplY3QudmFsdWVzKGxvYWRlcnMpLmV2ZXJ5KChsKSA9PiBsLnNpbGVudClcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBlbmRpbmc6IHN0YXRlLnBlbmRpbmcgKyAxLFxuICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgbG9hZGVycyxcbiAgICAgICAgbWVzc2FnZTogc3RhdGUubWVzc2FnZSB8fCBtZXNzYWdlLFxuICAgICAgICBvbmx5U2lsZW50XG4gICAgICB9XG4gICAgY2FzZSAnTE9BREVEJzpcbiAgICAgIGxldCBwZW5kaW5nICAgID0gc3RhdGUucGVuZGluZztcblxuXG4gICAgICBsZXQgdXBkYXRlZExvYWRlciA9IHt9XG5cbiAgICAgIGlmKGV4aXN0aW5nTG9hZGVyKXtcbiAgICAgICAgaWYoZXhpc3RpbmdMb2FkZXIucGVuZGluZyA+IDEgJiYgIWFjdGlvbi5tZXRhLnN0b3BMb2FkaW5nKXtcbiAgICAgICAgICBwZW5kaW5nLS07XG4gICAgICAgICAgdXBkYXRlZExvYWRlciA9IGNvcHlMb2FkZXIobG9hZGVyLCBleGlzdGluZ0xvYWRlciwgLTEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBlbmRpbmcgPS0gZXhpc3RpbmdMb2FkZXIucGVuZGluZ1xuICAgICAgICAgIGRlbGV0ZSBsb2FkZXJzW2xvYWRlcl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHBlbmRpbmcgPSBwZW5kaW5nID4gLTEgPyBwZW5kaW5nIDogMDtcblxuICAgICAgY29uc3QgZG9uZSA9IHBlbmRpbmcgPT09IDA7XG4gICAgICBsb2FkZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgbG9hZGVycywgdXBkYXRlZExvYWRlcilcbiAgICAgIGNvbnN0IG1lc3NhZ2VzID0gT2JqZWN0LnZhbHVlcyhsb2FkZXJzKS5tYXAoKGwpID0+IGwubWVzc2FnZSkuZmlsdGVyKCgpID0+IHRydWUpXG4gICAgICBtZXNzYWdlID0gbWVzc2FnZXMubGVuZ3RoID4gMCAmJiAhIW1lc3NhZ2VzWzBdXG4gICAgICBvbmx5U2lsZW50ID0gT2JqZWN0LnZhbHVlcyhsb2FkZXJzKS5ldmVyeSgobCkgPT4gbC5zaWxlbnQpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwZW5kaW5nLFxuICAgICAgICBkb25lLFxuICAgICAgICBsb2FkZXJzLFxuICAgICAgICBtZXNzYWdlLFxuICAgICAgICBvbmx5U2lsZW50LFxuICAgICAgICBzaG93TG9hZGluZzogIWRvbmUgJiYgIW9ubHlTaWxlbnRcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZGluZ1JlZHVjZXIiXX0=