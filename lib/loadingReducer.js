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
    message: null
  };
  var action = arguments[1];

  if (action.type != 'LOADING' && action.type != 'LOADED') {
    return state;
  }

  var loader = loaderName(action);
  var loaders = state.loaders;
  var existingLoader = loaders[loader];
  var updatedLoader = null;
  var message = action.payload && action.payload.message || action.meta.message;
  switch (action.type) {
    case 'LOADING':

      if (existingLoader) {
        _updatedLoader = copyLoader(loader, existingLoader);
      } else {
        _updatedLoader = _defineProperty({}, loader, { message: message, pending: 1 });
      }

      loaders = Object.assign({}, loaders, _updatedLoader);
      return {
        pending: state.pending + 1,
        done: false,
        loaders: loaders,
        message: state.message || message
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
      message = messages.length > 0 && messages[0];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkaW5nUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJsb2FkZXJOYW1lIiwiYWN0aW9uIiwibWV0YSIsImxvYWRlciIsImNvcHlMb2FkZXIiLCJleGlzdGluZ0xvYWRlciIsImluY3IiLCJtZXNzYWdlIiwicGVuZGluZyIsImxvYWRpbmdSZWR1Y2VyIiwic3RhdGUiLCJkb25lIiwibG9hZGVycyIsInR5cGUiLCJ1cGRhdGVkTG9hZGVyIiwicGF5bG9hZCIsIk9iamVjdCIsImFzc2lnbiIsInN0b3BMb2FkaW5nIiwibWVzc2FnZXMiLCJlbnRyaWVzIiwibWFwIiwibCIsImZpbHRlciIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxJQUFNQSxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsTUFBRCxFQUFZO0FBQzdCLFNBQU9BLE9BQU9DLElBQVAsQ0FBWUMsTUFBWixJQUFzQixTQUE3QjtBQUNELENBRkQ7O0FBSUEsSUFBTUMsYUFBYSxTQUFiQSxVQUFhLENBQUNELE1BQUQsRUFBU0UsY0FBVCxFQUFzQztBQUFBLE1BQWJDLElBQWEsdUVBQU4sQ0FBTTs7QUFDdkQsNkJBQ0dILE1BREgsRUFDWSxFQUFFSSxTQUFTRixlQUFlRSxPQUExQixFQUFtQ0MsU0FBU0gsZUFBZUcsT0FBZixHQUF5QkYsSUFBckUsRUFEWjtBQUdELENBSkQ7QUFLQSxJQUFNRyxpQkFBaUIsU0FBakJBLGNBQWlCLEdBS1Q7QUFBQSxNQUxVQyxLQUtWLHVFQUxrQjtBQUM5QkYsYUFBUyxDQURxQjtBQUU5QkcsVUFBTSxJQUZ3QjtBQUc5QkMsYUFBUyxFQUhxQjtBQUk5QkwsYUFBUztBQUpxQixHQUtsQjtBQUFBLE1BQVhOLE1BQVc7O0FBQ1osTUFBR0EsT0FBT1ksSUFBUCxJQUFlLFNBQWYsSUFBNEJaLE9BQU9ZLElBQVAsSUFBZSxRQUE5QyxFQUF1RDtBQUNyRCxXQUFPSCxLQUFQO0FBQ0Q7O0FBRUQsTUFBTVAsU0FBaUJILFdBQVdDLE1BQVgsQ0FBdkI7QUFDQSxNQUFNVyxVQUFpQkYsTUFBTUUsT0FBN0I7QUFDQSxNQUFNUCxpQkFBaUJPLFFBQVFULE1BQVIsQ0FBdkI7QUFDQSxNQUFNVyxnQkFBa0IsSUFBeEI7QUFDQSxNQUFNUCxVQUFXTixPQUFPYyxPQUFQLElBQWtCZCxPQUFPYyxPQUFQLENBQWVSLE9BQWxDLElBQStDTixPQUFPQyxJQUFQLENBQVlLLE9BQTNFO0FBQ0EsVUFBUU4sT0FBT1ksSUFBZjtBQUNFLFNBQUssU0FBTDs7QUFHRSxVQUFHUixjQUFILEVBQWtCO0FBQ2hCUyx5QkFBZ0JWLFdBQVdELE1BQVgsRUFBbUJFLGNBQW5CLENBQWhCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xTLDZDQUNHWCxNQURILEVBQ1ksRUFBRUksZ0JBQUYsRUFBV0MsU0FBUyxDQUFwQixFQURaO0FBR0Q7O0FBRURJLGdCQUFVSSxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkwsT0FBbEIsRUFBMkJFLGNBQTNCLENBQVY7QUFDQSxhQUFPO0FBQ0xOLGlCQUFTRSxNQUFNRixPQUFOLEdBQWdCLENBRHBCO0FBRUxHLGNBQU0sS0FGRDtBQUdMQyx3QkFISztBQUlMTCxpQkFBU0csTUFBTUgsT0FBTixJQUFpQkE7QUFKckIsT0FBUDtBQU1GLFNBQUssUUFBTDtBQUNFLFVBQUlDLFVBQWFFLE1BQU1GLE9BQXZCOztBQUdBLFVBQUlNLGlCQUFnQixFQUFwQjs7QUFFQSxVQUFHVCxjQUFILEVBQWtCO0FBQ2hCLFlBQUdBLGVBQWVHLE9BQWYsR0FBeUIsQ0FBekIsSUFBOEIsQ0FBQ1AsT0FBT0MsSUFBUCxDQUFZZ0IsV0FBOUMsRUFBMEQ7QUFDeERWO0FBQ0FNLDJCQUFnQlYsV0FBV0QsTUFBWCxFQUFtQkUsY0FBbkIsRUFBbUMsQ0FBQyxDQUFwQyxDQUFoQjtBQUNELFNBSEQsTUFHTztBQUNMRyxvQkFBUyxDQUFFSCxlQUFlRyxPQUExQjtBQUNBLGlCQUFPSSxRQUFRVCxNQUFSLENBQVA7QUFDRDtBQUNGO0FBQ0RLLGdCQUFVQSxVQUFVLENBQUMsQ0FBWCxHQUFlQSxPQUFmLEdBQXlCLENBQW5DOztBQUVBLFVBQU1HLE9BQU9ILFlBQVksQ0FBekI7QUFDQUksZ0JBQVVJLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCTCxPQUFsQixFQUEyQkUsY0FBM0IsQ0FBVjtBQUNBLFVBQU1LLFdBQVdILE9BQU9JLE9BQVAsQ0FBZVIsT0FBZixFQUF3QlMsR0FBeEIsQ0FBNEIsVUFBQ0MsQ0FBRDtBQUFBLGVBQU9BLEVBQUVmLE9BQVQ7QUFBQSxPQUE1QixFQUE4Q2dCLE1BQTlDLENBQXFEO0FBQUEsZUFBTSxJQUFOO0FBQUEsT0FBckQsQ0FBakI7QUFDQWhCLGdCQUFVWSxTQUFTSyxNQUFULEdBQWtCLENBQWxCLElBQXVCTCxTQUFTLENBQVQsQ0FBakM7QUFDQSxhQUFPO0FBQ0xYLHdCQURLO0FBRUxHLGtCQUZLO0FBR0xDLHdCQUhLO0FBSUxMO0FBSkssT0FBUDtBQU1GO0FBQ0UsYUFBT0csS0FBUDtBQS9DSjtBQWlERCxDQWhFRDs7a0JBa0VlRCxjIiwiZmlsZSI6ImxvYWRpbmdSZWR1Y2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9hZGVyTmFtZSA9IChhY3Rpb24pID0+IHtcbiAgcmV0dXJuIGFjdGlvbi5tZXRhLmxvYWRlciB8fCAnZGVmYXVsdCc7XG59XG5cbmNvbnN0IGNvcHlMb2FkZXIgPSAobG9hZGVyLCBleGlzdGluZ0xvYWRlciwgaW5jciA9IDEpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBbbG9hZGVyXTogeyBtZXNzYWdlOiBleGlzdGluZ0xvYWRlci5tZXNzYWdlLCBwZW5kaW5nOiBleGlzdGluZ0xvYWRlci5wZW5kaW5nICsgaW5jciB9XG4gIH1cbn1cbmNvbnN0IGxvYWRpbmdSZWR1Y2VyID0gKHN0YXRlID0ge1xuICBwZW5kaW5nOiAwLFxuICBkb25lOiB0cnVlLFxuICBsb2FkZXJzOiB7fSxcbiAgbWVzc2FnZTogbnVsbFxufSwgYWN0aW9uKSA9PiB7XG4gIGlmKGFjdGlvbi50eXBlICE9ICdMT0FESU5HJyAmJiBhY3Rpb24udHlwZSAhPSAnTE9BREVEJyl7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgY29uc3QgbG9hZGVyICAgICAgICAgPSBsb2FkZXJOYW1lKGFjdGlvbik7XG4gIGxldCAgIGxvYWRlcnMgICAgICAgID0gc3RhdGUubG9hZGVycztcbiAgY29uc3QgZXhpc3RpbmdMb2FkZXIgPSBsb2FkZXJzW2xvYWRlcl07XG4gIGxldCAgIHVwZGF0ZWRMb2FkZXIgID0gIG51bGw7XG4gIGxldCAgIG1lc3NhZ2UgPSAoYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQubWVzc2FnZSApIHx8IGFjdGlvbi5tZXRhLm1lc3NhZ2U7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdMT0FESU5HJzpcblxuXG4gICAgICBpZihleGlzdGluZ0xvYWRlcil7XG4gICAgICAgIHVwZGF0ZWRMb2FkZXIgPSBjb3B5TG9hZGVyKGxvYWRlciwgZXhpc3RpbmdMb2FkZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXBkYXRlZExvYWRlciA9IHtcbiAgICAgICAgICBbbG9hZGVyXTogeyBtZXNzYWdlLCBwZW5kaW5nOiAxIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsb2FkZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgbG9hZGVycywgdXBkYXRlZExvYWRlcilcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBlbmRpbmc6IHN0YXRlLnBlbmRpbmcgKyAxLFxuICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgbG9hZGVycyxcbiAgICAgICAgbWVzc2FnZTogc3RhdGUubWVzc2FnZSB8fCBtZXNzYWdlXG4gICAgICB9XG4gICAgY2FzZSAnTE9BREVEJzpcbiAgICAgIGxldCBwZW5kaW5nICAgID0gc3RhdGUucGVuZGluZztcblxuXG4gICAgICBsZXQgdXBkYXRlZExvYWRlciA9IHt9XG5cbiAgICAgIGlmKGV4aXN0aW5nTG9hZGVyKXtcbiAgICAgICAgaWYoZXhpc3RpbmdMb2FkZXIucGVuZGluZyA+IDEgJiYgIWFjdGlvbi5tZXRhLnN0b3BMb2FkaW5nKXtcbiAgICAgICAgICBwZW5kaW5nLS07XG4gICAgICAgICAgdXBkYXRlZExvYWRlciA9IGNvcHlMb2FkZXIobG9hZGVyLCBleGlzdGluZ0xvYWRlciwgLTEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBlbmRpbmcgPS0gZXhpc3RpbmdMb2FkZXIucGVuZGluZ1xuICAgICAgICAgIGRlbGV0ZSBsb2FkZXJzW2xvYWRlcl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHBlbmRpbmcgPSBwZW5kaW5nID4gLTEgPyBwZW5kaW5nIDogMDtcblxuICAgICAgY29uc3QgZG9uZSA9IHBlbmRpbmcgPT09IDA7XG4gICAgICBsb2FkZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgbG9hZGVycywgdXBkYXRlZExvYWRlcilcbiAgICAgIGNvbnN0IG1lc3NhZ2VzID0gT2JqZWN0LmVudHJpZXMobG9hZGVycykubWFwKChsKSA9PiBsLm1lc3NhZ2UpLmZpbHRlcigoKSA9PiB0cnVlKVxuICAgICAgbWVzc2FnZSA9IG1lc3NhZ2VzLmxlbmd0aCA+IDAgJiYgbWVzc2FnZXNbMF1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBlbmRpbmcsXG4gICAgICAgIGRvbmUsXG4gICAgICAgIGxvYWRlcnMsXG4gICAgICAgIG1lc3NhZ2VcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZGluZ1JlZHVjZXIiXX0=