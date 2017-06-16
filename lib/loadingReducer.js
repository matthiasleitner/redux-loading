'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var loaderName = function loaderName(action) {
  return action.meta.loader || 'default';
};

var copyLoader = function copyLoader(existingLoader) {
  var incr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

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

  var loader = loaderName(action);
  var loaders = state.loaders;
  var existingLoader = loaders[loader];
  var updatedLoader = null;

  switch (action.type) {
    case 'LOADING':
      var message = action.payload.message || action.meta.message;

      if (existingLoader) {
        _updatedLoader = copyLoader(existingLoader);
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
          _updatedLoader = copyLoader(existingLoader, -1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkaW5nUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJsb2FkZXJOYW1lIiwiYWN0aW9uIiwibWV0YSIsImxvYWRlciIsImNvcHlMb2FkZXIiLCJleGlzdGluZ0xvYWRlciIsImluY3IiLCJtZXNzYWdlIiwicGVuZGluZyIsImxvYWRpbmdSZWR1Y2VyIiwic3RhdGUiLCJkb25lIiwibG9hZGVycyIsIm1lc3NhZ2VzIiwidXBkYXRlZExvYWRlciIsInR5cGUiLCJwYXlsb2FkIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQU1BLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxNQUFELEVBQVk7QUFDN0IsU0FBT0EsT0FBT0MsSUFBUCxDQUFZQyxNQUFaLElBQXNCLFNBQTdCO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNQyxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsY0FBRCxFQUE4QjtBQUFBLE1BQWJDLElBQWEsdUVBQU4sQ0FBTTs7QUFDL0MsNkJBQ0dILE1BREgsRUFDWSxFQUFFSSxTQUFTRixlQUFlRSxPQUExQixFQUFtQ0MsU0FBU0gsZUFBZUcsT0FBZixHQUF5QkYsSUFBckUsRUFEWjtBQUdELENBSkQ7QUFLQSxJQUFNRyxpQkFBaUIsU0FBakJBLGNBQWlCLEdBS1Q7QUFBQSxNQUxVQyxLQUtWLHVFQUxrQjtBQUM5QkYsYUFBUyxDQURxQjtBQUU5QkcsVUFBTSxJQUZ3QjtBQUc5QkMsYUFBUyxFQUhxQjtBQUk5QkMsY0FBVTtBQUpvQixHQUtsQjtBQUFBLE1BQVhaLE1BQVc7O0FBQ1osTUFBTUUsU0FBaUJILFdBQVdDLE1BQVgsQ0FBdkI7QUFDQSxNQUFNVyxVQUFpQkYsTUFBTUUsT0FBN0I7QUFDQSxNQUFNUCxpQkFBaUJPLFFBQVFULE1BQVIsQ0FBdkI7QUFDQSxNQUFNVyxnQkFBa0IsSUFBeEI7O0FBRUEsVUFBUWIsT0FBT2MsSUFBZjtBQUNFLFNBQUssU0FBTDtBQUNFLFVBQU1SLFVBQVlOLE9BQU9lLE9BQVAsQ0FBZVQsT0FBZixJQUEwQk4sT0FBT0MsSUFBUCxDQUFZSyxPQUF4RDs7QUFFQSxVQUFHRixjQUFILEVBQWtCO0FBQ2hCUyx5QkFBZ0JWLFdBQVdDLGNBQVgsQ0FBaEI7QUFDRCxPQUZELE1BRU87QUFDTFMsNkNBQ0dYLE1BREgsRUFDWSxFQUFFSSxnQkFBRixFQUFXQyxTQUFTLENBQXBCLEVBRFo7QUFHRDs7QUFFREksZ0JBQVVLLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCTixPQUFsQixFQUEyQkUsY0FBM0IsQ0FBVjtBQUNBLGFBQU87QUFDTE4saUJBQVNFLE1BQU1GLE9BQU4sR0FBZ0IsQ0FEcEI7QUFFTEcsY0FBTSxLQUZEO0FBR0xDO0FBSEssT0FBUDtBQUtGLFNBQUssUUFBTDtBQUNFLFVBQU1KLFVBQVdFLE1BQU1GLE9BQU4sR0FBZ0IsQ0FBaEIsR0FBb0JFLE1BQU1GLE9BQU4sR0FBZ0IsQ0FBcEMsR0FBd0MsQ0FBekQ7QUFDQSxVQUFNRyxPQUFXSCxZQUFZLENBQTdCOztBQUVBLFVBQUlNLGlCQUFnQixFQUFwQjs7QUFFQSxVQUFHVCxjQUFILEVBQWtCO0FBQ2hCLFlBQUdBLGVBQWVHLE9BQWYsR0FBeUIsQ0FBNUIsRUFBOEI7QUFDNUJNLDJCQUFnQlYsV0FBV0MsY0FBWCxFQUEyQixDQUFDLENBQTVCLENBQWhCO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsaUJBQU9PLFFBQVFULE1BQVIsQ0FBUDtBQUNEO0FBQ0Y7O0FBRUQsYUFBTztBQUNMSyx3QkFESztBQUVMRyxrQkFGSztBQUdMQyxpQkFBU0ssT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JOLE9BQWxCLEVBQTJCRSxjQUEzQjtBQUhKLE9BQVA7QUFLRjtBQUNFLGFBQU9KLEtBQVA7QUF0Q0o7QUF3Q0QsQ0FuREQ7O2tCQXFEZUQsYyIsImZpbGUiOiJsb2FkaW5nUmVkdWNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxvYWRlck5hbWUgPSAoYWN0aW9uKSA9PiB7XG4gIHJldHVybiBhY3Rpb24ubWV0YS5sb2FkZXIgfHwgJ2RlZmF1bHQnO1xufVxuXG5jb25zdCBjb3B5TG9hZGVyID0gKGV4aXN0aW5nTG9hZGVyLCBpbmNyID0gMSkgPT4ge1xuICByZXR1cm4ge1xuICAgIFtsb2FkZXJdOiB7IG1lc3NhZ2U6IGV4aXN0aW5nTG9hZGVyLm1lc3NhZ2UsIHBlbmRpbmc6IGV4aXN0aW5nTG9hZGVyLnBlbmRpbmcgKyBpbmNyIH1cbiAgfVxufVxuY29uc3QgbG9hZGluZ1JlZHVjZXIgPSAoc3RhdGUgPSB7XG4gIHBlbmRpbmc6IDAsXG4gIGRvbmU6IHRydWUsXG4gIGxvYWRlcnM6IHt9LFxuICBtZXNzYWdlczoge31cbn0sIGFjdGlvbikgPT4ge1xuICBjb25zdCBsb2FkZXIgICAgICAgICA9IGxvYWRlck5hbWUoYWN0aW9uKTtcbiAgbGV0ICAgbG9hZGVycyAgICAgICAgPSBzdGF0ZS5sb2FkZXJzO1xuICBjb25zdCBleGlzdGluZ0xvYWRlciA9IGxvYWRlcnNbbG9hZGVyXTtcbiAgbGV0ICAgdXBkYXRlZExvYWRlciAgPSAgbnVsbDtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnTE9BRElORyc6XG4gICAgICBjb25zdCBtZXNzYWdlICAgPSBhY3Rpb24ucGF5bG9hZC5tZXNzYWdlIHx8IGFjdGlvbi5tZXRhLm1lc3NhZ2U7XG5cbiAgICAgIGlmKGV4aXN0aW5nTG9hZGVyKXtcbiAgICAgICAgdXBkYXRlZExvYWRlciA9IGNvcHlMb2FkZXIoZXhpc3RpbmdMb2FkZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXBkYXRlZExvYWRlciA9IHtcbiAgICAgICAgICBbbG9hZGVyXTogeyBtZXNzYWdlLCBwZW5kaW5nOiAxIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsb2FkZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgbG9hZGVycywgdXBkYXRlZExvYWRlcilcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBlbmRpbmc6IHN0YXRlLnBlbmRpbmcgKyAxLFxuICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgbG9hZGVyc1xuICAgICAgfVxuICAgIGNhc2UgJ0xPQURFRCc6XG4gICAgICBjb25zdCBwZW5kaW5nICA9IHN0YXRlLnBlbmRpbmcgPiAwID8gc3RhdGUucGVuZGluZyAtIDEgOiAwXG4gICAgICBjb25zdCBkb25lICAgICA9IHBlbmRpbmcgPT09IDA7XG5cbiAgICAgIGxldCB1cGRhdGVkTG9hZGVyID0ge31cblxuICAgICAgaWYoZXhpc3RpbmdMb2FkZXIpe1xuICAgICAgICBpZihleGlzdGluZ0xvYWRlci5wZW5kaW5nID4gMSl7XG4gICAgICAgICAgdXBkYXRlZExvYWRlciA9IGNvcHlMb2FkZXIoZXhpc3RpbmdMb2FkZXIsIC0xKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgbG9hZGVyc1tsb2FkZXJdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBlbmRpbmcsXG4gICAgICAgIGRvbmUsXG4gICAgICAgIGxvYWRlcnM6IE9iamVjdC5hc3NpZ24oe30sIGxvYWRlcnMsIHVwZGF0ZWRMb2FkZXIpXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRpbmdSZWR1Y2VyIl19