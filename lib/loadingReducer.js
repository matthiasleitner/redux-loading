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
    messages: {}
  };
  var action = arguments[1];

  if (action.type != 'LOADING' && action.type != 'LOADED') {
    return state;
  }

  var loader = loaderName(action);
  var loaders = state.loaders;
  var existingLoader = loaders[loader];
  var updatedLoader = null;

  switch (action.type) {
    case 'LOADING':
      var message = action.payload && action.payload.message || action.meta.message;

      if (existingLoader) {
        _updatedLoader = copyLoader(loader, existingLoader);
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
          _updatedLoader = copyLoader(loader, existingLoader, -1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkaW5nUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJsb2FkZXJOYW1lIiwiYWN0aW9uIiwibWV0YSIsImxvYWRlciIsImNvcHlMb2FkZXIiLCJleGlzdGluZ0xvYWRlciIsImluY3IiLCJtZXNzYWdlIiwicGVuZGluZyIsImxvYWRpbmdSZWR1Y2VyIiwic3RhdGUiLCJkb25lIiwibG9hZGVycyIsIm1lc3NhZ2VzIiwidHlwZSIsInVwZGF0ZWRMb2FkZXIiLCJwYXlsb2FkIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQU1BLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxNQUFELEVBQVk7QUFDN0IsU0FBT0EsT0FBT0MsSUFBUCxDQUFZQyxNQUFaLElBQXNCLFNBQTdCO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNQyxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0QsTUFBRCxFQUFTRSxjQUFULEVBQXNDO0FBQUEsTUFBYkMsSUFBYSx1RUFBTixDQUFNOztBQUN2RCw2QkFDR0gsTUFESCxFQUNZLEVBQUVJLFNBQVNGLGVBQWVFLE9BQTFCLEVBQW1DQyxTQUFTSCxlQUFlRyxPQUFmLEdBQXlCRixJQUFyRSxFQURaO0FBR0QsQ0FKRDtBQUtBLElBQU1HLGlCQUFpQixTQUFqQkEsY0FBaUIsR0FLVDtBQUFBLE1BTFVDLEtBS1YsdUVBTGtCO0FBQzlCRixhQUFTLENBRHFCO0FBRTlCRyxVQUFNLElBRndCO0FBRzlCQyxhQUFTLEVBSHFCO0FBSTlCQyxjQUFVO0FBSm9CLEdBS2xCO0FBQUEsTUFBWFosTUFBVzs7QUFDWixNQUFHQSxPQUFPYSxJQUFQLElBQWUsU0FBZixJQUE0QmIsT0FBT2EsSUFBUCxJQUFlLFFBQTlDLEVBQXVEO0FBQ3JELFdBQU9KLEtBQVA7QUFDRDs7QUFFRCxNQUFNUCxTQUFpQkgsV0FBV0MsTUFBWCxDQUF2QjtBQUNBLE1BQU1XLFVBQWlCRixNQUFNRSxPQUE3QjtBQUNBLE1BQU1QLGlCQUFpQk8sUUFBUVQsTUFBUixDQUF2QjtBQUNBLE1BQU1ZLGdCQUFrQixJQUF4Qjs7QUFFQSxVQUFRZCxPQUFPYSxJQUFmO0FBQ0UsU0FBSyxTQUFMO0FBQ0UsVUFBTVAsVUFBV04sT0FBT2UsT0FBUCxJQUFrQmYsT0FBT2UsT0FBUCxDQUFlVCxPQUFsQyxJQUErQ04sT0FBT0MsSUFBUCxDQUFZSyxPQUEzRTs7QUFFQSxVQUFHRixjQUFILEVBQWtCO0FBQ2hCVSx5QkFBZ0JYLFdBQVdELE1BQVgsRUFBbUJFLGNBQW5CLENBQWhCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xVLDZDQUNHWixNQURILEVBQ1ksRUFBRUksZ0JBQUYsRUFBV0MsU0FBUyxDQUFwQixFQURaO0FBR0Q7O0FBRURJLGdCQUFVSyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQk4sT0FBbEIsRUFBMkJHLGNBQTNCLENBQVY7QUFDQSxhQUFPO0FBQ0xQLGlCQUFTRSxNQUFNRixPQUFOLEdBQWdCLENBRHBCO0FBRUxHLGNBQU0sS0FGRDtBQUdMQztBQUhLLE9BQVA7QUFLRixTQUFLLFFBQUw7QUFDRSxVQUFNSixVQUFXRSxNQUFNRixPQUFOLEdBQWdCLENBQWhCLEdBQW9CRSxNQUFNRixPQUFOLEdBQWdCLENBQXBDLEdBQXdDLENBQXpEO0FBQ0EsVUFBTUcsT0FBV0gsWUFBWSxDQUE3Qjs7QUFFQSxVQUFJTyxpQkFBZ0IsRUFBcEI7O0FBRUEsVUFBR1YsY0FBSCxFQUFrQjtBQUNoQixZQUFHQSxlQUFlRyxPQUFmLEdBQXlCLENBQTVCLEVBQThCO0FBQzVCTywyQkFBZ0JYLFdBQVdELE1BQVgsRUFBbUJFLGNBQW5CLEVBQW1DLENBQUMsQ0FBcEMsQ0FBaEI7QUFDRCxTQUZELE1BRU87QUFDTCxpQkFBT08sUUFBUVQsTUFBUixDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPO0FBQ0xLLHdCQURLO0FBRUxHLGtCQUZLO0FBR0xDLGlCQUFTSyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQk4sT0FBbEIsRUFBMkJHLGNBQTNCO0FBSEosT0FBUDtBQUtGO0FBQ0UsYUFBT0wsS0FBUDtBQXRDSjtBQXdDRCxDQXZERDs7a0JBeURlRCxjIiwiZmlsZSI6ImxvYWRpbmdSZWR1Y2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9hZGVyTmFtZSA9IChhY3Rpb24pID0+IHtcbiAgcmV0dXJuIGFjdGlvbi5tZXRhLmxvYWRlciB8fCAnZGVmYXVsdCc7XG59XG5cbmNvbnN0IGNvcHlMb2FkZXIgPSAobG9hZGVyLCBleGlzdGluZ0xvYWRlciwgaW5jciA9IDEpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBbbG9hZGVyXTogeyBtZXNzYWdlOiBleGlzdGluZ0xvYWRlci5tZXNzYWdlLCBwZW5kaW5nOiBleGlzdGluZ0xvYWRlci5wZW5kaW5nICsgaW5jciB9XG4gIH1cbn1cbmNvbnN0IGxvYWRpbmdSZWR1Y2VyID0gKHN0YXRlID0ge1xuICBwZW5kaW5nOiAwLFxuICBkb25lOiB0cnVlLFxuICBsb2FkZXJzOiB7fSxcbiAgbWVzc2FnZXM6IHt9XG59LCBhY3Rpb24pID0+IHtcbiAgaWYoYWN0aW9uLnR5cGUgIT0gJ0xPQURJTkcnICYmIGFjdGlvbi50eXBlICE9ICdMT0FERUQnKXtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBjb25zdCBsb2FkZXIgICAgICAgICA9IGxvYWRlck5hbWUoYWN0aW9uKTtcbiAgbGV0ICAgbG9hZGVycyAgICAgICAgPSBzdGF0ZS5sb2FkZXJzO1xuICBjb25zdCBleGlzdGluZ0xvYWRlciA9IGxvYWRlcnNbbG9hZGVyXTtcbiAgbGV0ICAgdXBkYXRlZExvYWRlciAgPSAgbnVsbDtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnTE9BRElORyc6XG4gICAgICBjb25zdCBtZXNzYWdlID0gKGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLm1lc3NhZ2UgKSB8fCBhY3Rpb24ubWV0YS5tZXNzYWdlO1xuXG4gICAgICBpZihleGlzdGluZ0xvYWRlcil7XG4gICAgICAgIHVwZGF0ZWRMb2FkZXIgPSBjb3B5TG9hZGVyKGxvYWRlciwgZXhpc3RpbmdMb2FkZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXBkYXRlZExvYWRlciA9IHtcbiAgICAgICAgICBbbG9hZGVyXTogeyBtZXNzYWdlLCBwZW5kaW5nOiAxIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsb2FkZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgbG9hZGVycywgdXBkYXRlZExvYWRlcilcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBlbmRpbmc6IHN0YXRlLnBlbmRpbmcgKyAxLFxuICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgbG9hZGVyc1xuICAgICAgfVxuICAgIGNhc2UgJ0xPQURFRCc6XG4gICAgICBjb25zdCBwZW5kaW5nICA9IHN0YXRlLnBlbmRpbmcgPiAwID8gc3RhdGUucGVuZGluZyAtIDEgOiAwXG4gICAgICBjb25zdCBkb25lICAgICA9IHBlbmRpbmcgPT09IDA7XG5cbiAgICAgIGxldCB1cGRhdGVkTG9hZGVyID0ge31cblxuICAgICAgaWYoZXhpc3RpbmdMb2FkZXIpe1xuICAgICAgICBpZihleGlzdGluZ0xvYWRlci5wZW5kaW5nID4gMSl7XG4gICAgICAgICAgdXBkYXRlZExvYWRlciA9IGNvcHlMb2FkZXIobG9hZGVyLCBleGlzdGluZ0xvYWRlciwgLTEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBsb2FkZXJzW2xvYWRlcl07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGVuZGluZyxcbiAgICAgICAgZG9uZSxcbiAgICAgICAgbG9hZGVyczogT2JqZWN0LmFzc2lnbih7fSwgbG9hZGVycywgdXBkYXRlZExvYWRlcilcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZGluZ1JlZHVjZXIiXX0=