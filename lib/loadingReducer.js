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
      var messages = loaders.map(function (l) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkaW5nUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJsb2FkZXJOYW1lIiwiYWN0aW9uIiwibWV0YSIsImxvYWRlciIsImNvcHlMb2FkZXIiLCJleGlzdGluZ0xvYWRlciIsImluY3IiLCJtZXNzYWdlIiwicGVuZGluZyIsImxvYWRpbmdSZWR1Y2VyIiwic3RhdGUiLCJkb25lIiwibG9hZGVycyIsInR5cGUiLCJ1cGRhdGVkTG9hZGVyIiwicGF5bG9hZCIsIk9iamVjdCIsImFzc2lnbiIsInN0b3BMb2FkaW5nIiwibWVzc2FnZXMiLCJtYXAiLCJsIiwiZmlsdGVyIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQU1BLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxNQUFELEVBQVk7QUFDN0IsU0FBT0EsT0FBT0MsSUFBUCxDQUFZQyxNQUFaLElBQXNCLFNBQTdCO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNQyxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0QsTUFBRCxFQUFTRSxjQUFULEVBQXNDO0FBQUEsTUFBYkMsSUFBYSx1RUFBTixDQUFNOztBQUN2RCw2QkFDR0gsTUFESCxFQUNZLEVBQUVJLFNBQVNGLGVBQWVFLE9BQTFCLEVBQW1DQyxTQUFTSCxlQUFlRyxPQUFmLEdBQXlCRixJQUFyRSxFQURaO0FBR0QsQ0FKRDtBQUtBLElBQU1HLGlCQUFpQixTQUFqQkEsY0FBaUIsR0FLVDtBQUFBLE1BTFVDLEtBS1YsdUVBTGtCO0FBQzlCRixhQUFTLENBRHFCO0FBRTlCRyxVQUFNLElBRndCO0FBRzlCQyxhQUFTLEVBSHFCO0FBSTlCTCxhQUFTO0FBSnFCLEdBS2xCO0FBQUEsTUFBWE4sTUFBVzs7QUFDWixNQUFHQSxPQUFPWSxJQUFQLElBQWUsU0FBZixJQUE0QlosT0FBT1ksSUFBUCxJQUFlLFFBQTlDLEVBQXVEO0FBQ3JELFdBQU9ILEtBQVA7QUFDRDs7QUFFRCxNQUFNUCxTQUFpQkgsV0FBV0MsTUFBWCxDQUF2QjtBQUNBLE1BQU1XLFVBQWlCRixNQUFNRSxPQUE3QjtBQUNBLE1BQU1QLGlCQUFpQk8sUUFBUVQsTUFBUixDQUF2QjtBQUNBLE1BQU1XLGdCQUFrQixJQUF4QjtBQUNBLE1BQU1QLFVBQVdOLE9BQU9jLE9BQVAsSUFBa0JkLE9BQU9jLE9BQVAsQ0FBZVIsT0FBbEMsSUFBK0NOLE9BQU9DLElBQVAsQ0FBWUssT0FBM0U7QUFDQSxVQUFRTixPQUFPWSxJQUFmO0FBQ0UsU0FBSyxTQUFMOztBQUdFLFVBQUdSLGNBQUgsRUFBa0I7QUFDaEJTLHlCQUFnQlYsV0FBV0QsTUFBWCxFQUFtQkUsY0FBbkIsQ0FBaEI7QUFDRCxPQUZELE1BRU87QUFDTFMsNkNBQ0dYLE1BREgsRUFDWSxFQUFFSSxnQkFBRixFQUFXQyxTQUFTLENBQXBCLEVBRFo7QUFHRDs7QUFFREksZ0JBQVVJLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCTCxPQUFsQixFQUEyQkUsY0FBM0IsQ0FBVjtBQUNBLGFBQU87QUFDTE4saUJBQVNFLE1BQU1GLE9BQU4sR0FBZ0IsQ0FEcEI7QUFFTEcsY0FBTSxLQUZEO0FBR0xDLHdCQUhLO0FBSUxMLGlCQUFTRyxNQUFNSCxPQUFOLElBQWlCQTtBQUpyQixPQUFQO0FBTUYsU0FBSyxRQUFMO0FBQ0UsVUFBSUMsVUFBYUUsTUFBTUYsT0FBdkI7O0FBR0EsVUFBSU0saUJBQWdCLEVBQXBCOztBQUVBLFVBQUdULGNBQUgsRUFBa0I7QUFDaEIsWUFBR0EsZUFBZUcsT0FBZixHQUF5QixDQUF6QixJQUE4QixDQUFDUCxPQUFPQyxJQUFQLENBQVlnQixXQUE5QyxFQUEwRDtBQUN4RFY7QUFDQU0sMkJBQWdCVixXQUFXRCxNQUFYLEVBQW1CRSxjQUFuQixFQUFtQyxDQUFDLENBQXBDLENBQWhCO0FBQ0QsU0FIRCxNQUdPO0FBQ0xHLG9CQUFTLENBQUVILGVBQWVHLE9BQTFCO0FBQ0EsaUJBQU9JLFFBQVFULE1BQVIsQ0FBUDtBQUNEO0FBQ0Y7QUFDREssZ0JBQVVBLFVBQVUsQ0FBQyxDQUFYLEdBQWVBLE9BQWYsR0FBeUIsQ0FBbkM7O0FBRUEsVUFBTUcsT0FBT0gsWUFBWSxDQUF6QjtBQUNBSSxnQkFBVUksT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JMLE9BQWxCLEVBQTJCRSxjQUEzQixDQUFWO0FBQ0EsVUFBTUssV0FBV1AsUUFBUVEsR0FBUixDQUFZLFVBQUNDLENBQUQ7QUFBQSxlQUFPQSxFQUFFZCxPQUFUO0FBQUEsT0FBWixFQUE4QmUsTUFBOUIsQ0FBcUM7QUFBQSxlQUFNLElBQU47QUFBQSxPQUFyQyxDQUFqQjtBQUNBZixnQkFBVVksU0FBU0ksTUFBVCxHQUFrQixDQUFsQixJQUF1QkosU0FBUyxDQUFULENBQWpDO0FBQ0EsYUFBTztBQUNMWCx3QkFESztBQUVMRyxrQkFGSztBQUdMQyx3QkFISztBQUlMTDtBQUpLLE9BQVA7QUFNRjtBQUNFLGFBQU9HLEtBQVA7QUEvQ0o7QUFpREQsQ0FoRUQ7O2tCQWtFZUQsYyIsImZpbGUiOiJsb2FkaW5nUmVkdWNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxvYWRlck5hbWUgPSAoYWN0aW9uKSA9PiB7XG4gIHJldHVybiBhY3Rpb24ubWV0YS5sb2FkZXIgfHwgJ2RlZmF1bHQnO1xufVxuXG5jb25zdCBjb3B5TG9hZGVyID0gKGxvYWRlciwgZXhpc3RpbmdMb2FkZXIsIGluY3IgPSAxKSA9PiB7XG4gIHJldHVybiB7XG4gICAgW2xvYWRlcl06IHsgbWVzc2FnZTogZXhpc3RpbmdMb2FkZXIubWVzc2FnZSwgcGVuZGluZzogZXhpc3RpbmdMb2FkZXIucGVuZGluZyArIGluY3IgfVxuICB9XG59XG5jb25zdCBsb2FkaW5nUmVkdWNlciA9IChzdGF0ZSA9IHtcbiAgcGVuZGluZzogMCxcbiAgZG9uZTogdHJ1ZSxcbiAgbG9hZGVyczoge30sXG4gIG1lc3NhZ2U6IG51bGxcbn0sIGFjdGlvbikgPT4ge1xuICBpZihhY3Rpb24udHlwZSAhPSAnTE9BRElORycgJiYgYWN0aW9uLnR5cGUgIT0gJ0xPQURFRCcpe1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGNvbnN0IGxvYWRlciAgICAgICAgID0gbG9hZGVyTmFtZShhY3Rpb24pO1xuICBsZXQgICBsb2FkZXJzICAgICAgICA9IHN0YXRlLmxvYWRlcnM7XG4gIGNvbnN0IGV4aXN0aW5nTG9hZGVyID0gbG9hZGVyc1tsb2FkZXJdO1xuICBsZXQgICB1cGRhdGVkTG9hZGVyICA9ICBudWxsO1xuICBsZXQgICBtZXNzYWdlID0gKGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLm1lc3NhZ2UgKSB8fCBhY3Rpb24ubWV0YS5tZXNzYWdlO1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnTE9BRElORyc6XG5cblxuICAgICAgaWYoZXhpc3RpbmdMb2FkZXIpe1xuICAgICAgICB1cGRhdGVkTG9hZGVyID0gY29weUxvYWRlcihsb2FkZXIsIGV4aXN0aW5nTG9hZGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVwZGF0ZWRMb2FkZXIgPSB7XG4gICAgICAgICAgW2xvYWRlcl06IHsgbWVzc2FnZSwgcGVuZGluZzogMSB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbG9hZGVycyA9IE9iamVjdC5hc3NpZ24oe30sIGxvYWRlcnMsIHVwZGF0ZWRMb2FkZXIpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwZW5kaW5nOiBzdGF0ZS5wZW5kaW5nICsgMSxcbiAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgIGxvYWRlcnMsXG4gICAgICAgIG1lc3NhZ2U6IHN0YXRlLm1lc3NhZ2UgfHwgbWVzc2FnZVxuICAgICAgfVxuICAgIGNhc2UgJ0xPQURFRCc6XG4gICAgICBsZXQgcGVuZGluZyAgICA9IHN0YXRlLnBlbmRpbmc7XG5cblxuICAgICAgbGV0IHVwZGF0ZWRMb2FkZXIgPSB7fVxuXG4gICAgICBpZihleGlzdGluZ0xvYWRlcil7XG4gICAgICAgIGlmKGV4aXN0aW5nTG9hZGVyLnBlbmRpbmcgPiAxICYmICFhY3Rpb24ubWV0YS5zdG9wTG9hZGluZyl7XG4gICAgICAgICAgcGVuZGluZy0tO1xuICAgICAgICAgIHVwZGF0ZWRMb2FkZXIgPSBjb3B5TG9hZGVyKGxvYWRlciwgZXhpc3RpbmdMb2FkZXIsIC0xKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwZW5kaW5nID0tIGV4aXN0aW5nTG9hZGVyLnBlbmRpbmdcbiAgICAgICAgICBkZWxldGUgbG9hZGVyc1tsb2FkZXJdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwZW5kaW5nID0gcGVuZGluZyA+IC0xID8gcGVuZGluZyA6IDA7XG5cbiAgICAgIGNvbnN0IGRvbmUgPSBwZW5kaW5nID09PSAwO1xuICAgICAgbG9hZGVycyA9IE9iamVjdC5hc3NpZ24oe30sIGxvYWRlcnMsIHVwZGF0ZWRMb2FkZXIpXG4gICAgICBjb25zdCBtZXNzYWdlcyA9IGxvYWRlcnMubWFwKChsKSA9PiBsLm1lc3NhZ2UpLmZpbHRlcigoKSA9PiB0cnVlKVxuICAgICAgbWVzc2FnZSA9IG1lc3NhZ2VzLmxlbmd0aCA+IDAgJiYgbWVzc2FnZXNbMF1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBlbmRpbmcsXG4gICAgICAgIGRvbmUsXG4gICAgICAgIGxvYWRlcnMsXG4gICAgICAgIG1lc3NhZ2VcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZGluZ1JlZHVjZXIiXX0=