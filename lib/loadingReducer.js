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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkaW5nUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJsb2FkZXJOYW1lIiwiYWN0aW9uIiwibWV0YSIsImxvYWRlciIsImNvcHlMb2FkZXIiLCJleGlzdGluZ0xvYWRlciIsImluY3IiLCJtZXNzYWdlIiwicGVuZGluZyIsImdldE1lc3NhZ2UiLCJwYXlsb2FkIiwic2lsZW50IiwibG9hZGluZ1JlZHVjZXIiLCJzdGF0ZSIsImRvbmUiLCJsb2FkZXJzIiwidHlwZSIsInVwZGF0ZWRMb2FkZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJzdG9wTG9hZGluZyIsIm1lc3NhZ2VzIiwiZW50cmllcyIsIm1hcCIsImwiLCJmaWx0ZXIiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBTUEsYUFBYSxTQUFiQSxVQUFhLENBQUNDLE1BQUQsRUFBWTtBQUM3QixTQUFPQSxPQUFPQyxJQUFQLENBQVlDLE1BQVosSUFBc0IsU0FBN0I7QUFDRCxDQUZEOztBQUlBLElBQU1DLGFBQWEsU0FBYkEsVUFBYSxDQUFDRCxNQUFELEVBQVNFLGNBQVQsRUFBc0M7QUFBQSxNQUFiQyxJQUFhLHVFQUFOLENBQU07O0FBQ3ZELDZCQUNHSCxNQURILEVBQ1ksRUFBRUksU0FBU0YsZUFBZUUsT0FBMUIsRUFBbUNDLFNBQVNILGVBQWVHLE9BQWYsR0FBeUJGLElBQXJFLEVBRFo7QUFHRCxDQUpEOztBQU1BLElBQU1HLGFBQWEsU0FBYkEsVUFBYSxDQUFDUixNQUFELEVBQVk7QUFDN0IsTUFBR0EsT0FBT1MsT0FBVixFQUFrQjtBQUNoQixRQUFHVCxPQUFPUyxPQUFQLENBQWVDLE1BQWxCLEVBQXlCO0FBQ3ZCLGFBQU8sSUFBUDtBQUNEO0FBQ0QsUUFBR1YsT0FBT1MsT0FBUCxDQUFlSCxPQUFsQixFQUEwQjtBQUN4QixhQUFPTixPQUFPUyxPQUFQLENBQWVILE9BQXRCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPTixPQUFPQyxJQUFQLENBQVlLLE9BQW5CO0FBQ0QsQ0FYRDtBQVlBLElBQU1LLGlCQUFpQixTQUFqQkEsY0FBaUIsR0FLVDtBQUFBLE1BTFVDLEtBS1YsdUVBTGtCO0FBQzlCTCxhQUFTLENBRHFCO0FBRTlCTSxVQUFNLElBRndCO0FBRzlCQyxhQUFTLEVBSHFCO0FBSTlCUixhQUFTO0FBSnFCLEdBS2xCO0FBQUEsTUFBWE4sTUFBVzs7QUFDWixNQUFHQSxPQUFPZSxJQUFQLElBQWUsU0FBZixJQUE0QmYsT0FBT2UsSUFBUCxJQUFlLFFBQTlDLEVBQXVEO0FBQ3JELFdBQU9ILEtBQVA7QUFDRDs7QUFFRCxNQUFNVixTQUFpQkgsV0FBV0MsTUFBWCxDQUF2QjtBQUNBLE1BQU1jLFVBQWlCRixNQUFNRSxPQUE3QjtBQUNBLE1BQU1WLGlCQUFpQlUsUUFBUVosTUFBUixDQUF2QjtBQUNBLE1BQU1jLGdCQUFrQixJQUF4QjtBQUNBLE1BQU1WLFVBQVVFLFdBQVdSLE1BQVgsQ0FBaEI7QUFDQSxNQUFNVSxTQUFVVixPQUFPUyxPQUFQLEdBQWlCVCxPQUFPUyxPQUFQLENBQWVDLE1BQWhDLEdBQXlDLEtBQXpEOztBQUVBLFVBQVFWLE9BQU9lLElBQWY7QUFDRSxTQUFLLFNBQUw7QUFDRSxVQUFHWCxjQUFILEVBQWtCO0FBQ2hCWSx5QkFBZ0JiLFdBQVdELE1BQVgsRUFBbUJFLGNBQW5CLENBQWhCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xZLDZDQUNHZCxNQURILEVBQ1ksRUFBRUksZ0JBQUYsRUFBV0MsU0FBUyxDQUFwQixFQUF1QkcsY0FBdkIsRUFEWjtBQUdEOztBQUVESSxnQkFBVUcsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JKLE9BQWxCLEVBQTJCRSxjQUEzQixDQUFWO0FBQ0EsYUFBTztBQUNMVCxpQkFBU0ssTUFBTUwsT0FBTixHQUFnQixDQURwQjtBQUVMTSxjQUFNLEtBRkQ7QUFHTEMsd0JBSEs7QUFJTFIsaUJBQVNNLE1BQU1OLE9BQU4sSUFBaUJBO0FBSnJCLE9BQVA7QUFNRixTQUFLLFFBQUw7QUFDRSxVQUFJQyxVQUFhSyxNQUFNTCxPQUF2Qjs7QUFHQSxVQUFJUyxpQkFBZ0IsRUFBcEI7O0FBRUEsVUFBR1osY0FBSCxFQUFrQjtBQUNoQixZQUFHQSxlQUFlRyxPQUFmLEdBQXlCLENBQXpCLElBQThCLENBQUNQLE9BQU9DLElBQVAsQ0FBWWtCLFdBQTlDLEVBQTBEO0FBQ3hEWjtBQUNBUywyQkFBZ0JiLFdBQVdELE1BQVgsRUFBbUJFLGNBQW5CLEVBQW1DLENBQUMsQ0FBcEMsQ0FBaEI7QUFDRCxTQUhELE1BR087QUFDTEcsb0JBQVMsQ0FBRUgsZUFBZUcsT0FBMUI7QUFDQSxpQkFBT08sUUFBUVosTUFBUixDQUFQO0FBQ0Q7QUFDRjtBQUNESyxnQkFBVUEsVUFBVSxDQUFDLENBQVgsR0FBZUEsT0FBZixHQUF5QixDQUFuQzs7QUFFQSxVQUFNTSxPQUFPTixZQUFZLENBQXpCO0FBQ0FPLGdCQUFVRyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkosT0FBbEIsRUFBMkJFLGNBQTNCLENBQVY7QUFDQSxVQUFNSSxXQUFXSCxPQUFPSSxPQUFQLENBQWVQLE9BQWYsRUFBd0JRLEdBQXhCLENBQTRCLFVBQUNDLENBQUQ7QUFBQSxlQUFPQSxFQUFFakIsT0FBVDtBQUFBLE9BQTVCLEVBQThDa0IsTUFBOUMsQ0FBcUQ7QUFBQSxlQUFNLElBQU47QUFBQSxPQUFyRCxDQUFqQjtBQUNBbEIsZ0JBQVVjLFNBQVNLLE1BQVQsR0FBa0IsQ0FBbEIsSUFBdUIsQ0FBQyxDQUFDTCxTQUFTLENBQVQsQ0FBbkM7QUFDQSxhQUFPO0FBQ0xiLHdCQURLO0FBRUxNLGtCQUZLO0FBR0xDLHdCQUhLO0FBSUxSO0FBSkssT0FBUDtBQU1GO0FBQ0UsYUFBT00sS0FBUDtBQTdDSjtBQStDRCxDQWhFRDs7a0JBa0VlRCxjIiwiZmlsZSI6ImxvYWRpbmdSZWR1Y2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9hZGVyTmFtZSA9IChhY3Rpb24pID0+IHtcbiAgcmV0dXJuIGFjdGlvbi5tZXRhLmxvYWRlciB8fCAnZGVmYXVsdCc7XG59XG5cbmNvbnN0IGNvcHlMb2FkZXIgPSAobG9hZGVyLCBleGlzdGluZ0xvYWRlciwgaW5jciA9IDEpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBbbG9hZGVyXTogeyBtZXNzYWdlOiBleGlzdGluZ0xvYWRlci5tZXNzYWdlLCBwZW5kaW5nOiBleGlzdGluZ0xvYWRlci5wZW5kaW5nICsgaW5jciB9XG4gIH1cbn1cblxuY29uc3QgZ2V0TWVzc2FnZSA9IChhY3Rpb24pID0+IHtcbiAgaWYoYWN0aW9uLnBheWxvYWQpe1xuICAgIGlmKGFjdGlvbi5wYXlsb2FkLnNpbGVudCl7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYoYWN0aW9uLnBheWxvYWQubWVzc2FnZSl7XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQubWVzc2FnZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYWN0aW9uLm1ldGEubWVzc2FnZTtcbn1cbmNvbnN0IGxvYWRpbmdSZWR1Y2VyID0gKHN0YXRlID0ge1xuICBwZW5kaW5nOiAwLFxuICBkb25lOiB0cnVlLFxuICBsb2FkZXJzOiB7fSxcbiAgbWVzc2FnZTogbnVsbFxufSwgYWN0aW9uKSA9PiB7XG4gIGlmKGFjdGlvbi50eXBlICE9ICdMT0FESU5HJyAmJiBhY3Rpb24udHlwZSAhPSAnTE9BREVEJyl7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgY29uc3QgbG9hZGVyICAgICAgICAgPSBsb2FkZXJOYW1lKGFjdGlvbik7XG4gIGxldCAgIGxvYWRlcnMgICAgICAgID0gc3RhdGUubG9hZGVycztcbiAgY29uc3QgZXhpc3RpbmdMb2FkZXIgPSBsb2FkZXJzW2xvYWRlcl07XG4gIGxldCAgIHVwZGF0ZWRMb2FkZXIgID0gIG51bGw7XG4gIGxldCAgIG1lc3NhZ2UgPSBnZXRNZXNzYWdlKGFjdGlvbik7XG4gIGNvbnN0IHNpbGVudCAgPSBhY3Rpb24ucGF5bG9hZCA/IGFjdGlvbi5wYXlsb2FkLnNpbGVudCA6IGZhbHNlO1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdMT0FESU5HJzpcbiAgICAgIGlmKGV4aXN0aW5nTG9hZGVyKXtcbiAgICAgICAgdXBkYXRlZExvYWRlciA9IGNvcHlMb2FkZXIobG9hZGVyLCBleGlzdGluZ0xvYWRlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cGRhdGVkTG9hZGVyID0ge1xuICAgICAgICAgIFtsb2FkZXJdOiB7IG1lc3NhZ2UsIHBlbmRpbmc6IDEsIHNpbGVudCB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbG9hZGVycyA9IE9iamVjdC5hc3NpZ24oe30sIGxvYWRlcnMsIHVwZGF0ZWRMb2FkZXIpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwZW5kaW5nOiBzdGF0ZS5wZW5kaW5nICsgMSxcbiAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgIGxvYWRlcnMsXG4gICAgICAgIG1lc3NhZ2U6IHN0YXRlLm1lc3NhZ2UgfHwgbWVzc2FnZVxuICAgICAgfVxuICAgIGNhc2UgJ0xPQURFRCc6XG4gICAgICBsZXQgcGVuZGluZyAgICA9IHN0YXRlLnBlbmRpbmc7XG5cblxuICAgICAgbGV0IHVwZGF0ZWRMb2FkZXIgPSB7fVxuXG4gICAgICBpZihleGlzdGluZ0xvYWRlcil7XG4gICAgICAgIGlmKGV4aXN0aW5nTG9hZGVyLnBlbmRpbmcgPiAxICYmICFhY3Rpb24ubWV0YS5zdG9wTG9hZGluZyl7XG4gICAgICAgICAgcGVuZGluZy0tO1xuICAgICAgICAgIHVwZGF0ZWRMb2FkZXIgPSBjb3B5TG9hZGVyKGxvYWRlciwgZXhpc3RpbmdMb2FkZXIsIC0xKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwZW5kaW5nID0tIGV4aXN0aW5nTG9hZGVyLnBlbmRpbmdcbiAgICAgICAgICBkZWxldGUgbG9hZGVyc1tsb2FkZXJdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwZW5kaW5nID0gcGVuZGluZyA+IC0xID8gcGVuZGluZyA6IDA7XG5cbiAgICAgIGNvbnN0IGRvbmUgPSBwZW5kaW5nID09PSAwO1xuICAgICAgbG9hZGVycyA9IE9iamVjdC5hc3NpZ24oe30sIGxvYWRlcnMsIHVwZGF0ZWRMb2FkZXIpXG4gICAgICBjb25zdCBtZXNzYWdlcyA9IE9iamVjdC5lbnRyaWVzKGxvYWRlcnMpLm1hcCgobCkgPT4gbC5tZXNzYWdlKS5maWx0ZXIoKCkgPT4gdHJ1ZSlcbiAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlcy5sZW5ndGggPiAwICYmICEhbWVzc2FnZXNbMF1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBlbmRpbmcsXG4gICAgICAgIGRvbmUsXG4gICAgICAgIGxvYWRlcnMsXG4gICAgICAgIG1lc3NhZ2VcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZGluZ1JlZHVjZXIiXX0=