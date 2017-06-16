'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var loadingMiddleware = function loadingMiddleware(_ref) {
  var dispatch = _ref.dispatch;

  return function (next) {
    return function (action) {
      var meta = action.meta,
          payload = action.payload;

      if (!meta || !meta.hasOwnProperty('loading')) {
        return next(action);
      }

      var loading = meta.loading;

      delete meta.loading;

      if (loading) {
        dispatch({ type: 'LOADING', payload: payload, meta: meta });
      } else {
        dispatch({ type: 'LOADED', payload: payload, meta: meta });
      }

      return next(action);
    };
  };
};

exports.default = loadingMiddleware;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkaW5nTWlkZGxld2FyZS5qcyJdLCJuYW1lcyI6WyJsb2FkaW5nTWlkZGxld2FyZSIsImRpc3BhdGNoIiwibWV0YSIsImFjdGlvbiIsInBheWxvYWQiLCJoYXNPd25Qcm9wZXJ0eSIsIm5leHQiLCJsb2FkaW5nIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxvQkFBb0IsU0FBcEJBLGlCQUFvQixPQUFnQjtBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYzs7QUFDeEMsU0FBTztBQUFBLFdBQVEsa0JBQVU7QUFBQSxVQUNoQkMsSUFEZ0IsR0FDQ0MsTUFERCxDQUNoQkQsSUFEZ0I7QUFBQSxVQUNWRSxPQURVLEdBQ0NELE1BREQsQ0FDVkMsT0FEVTs7QUFFdkIsVUFBSSxDQUFDRixJQUFELElBQVMsQ0FBQ0EsS0FBS0csY0FBTCxDQUFvQixTQUFwQixDQUFkLEVBQThDO0FBQzVDLGVBQU9DLEtBQUtILE1BQUwsQ0FBUDtBQUNEOztBQUVELFVBQU1JLFVBQVVMLEtBQUtLLE9BQXJCOztBQUVBLGFBQU9MLEtBQUtLLE9BQVo7O0FBRUEsVUFBR0EsT0FBSCxFQUFXO0FBQ1ROLGlCQUFTLEVBQUNPLE1BQU0sU0FBUCxFQUFrQkosZ0JBQWxCLEVBQTJCRixVQUEzQixFQUFUO0FBQ0QsT0FGRCxNQUdJO0FBQ0ZELGlCQUFTLEVBQUNPLE1BQU0sUUFBUCxFQUFpQkosZ0JBQWpCLEVBQTBCRixVQUExQixFQUFUO0FBQ0Q7O0FBRUQsYUFBT0ksS0FBS0gsTUFBTCxDQUFQO0FBQ0QsS0FsQk07QUFBQSxHQUFQO0FBbUJELENBcEJEOztrQkFzQmVILGlCIiwiZmlsZSI6ImxvYWRpbmdNaWRkbGV3YXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9hZGluZ01pZGRsZXdhcmUgPSAoe2Rpc3BhdGNofSkgPT4ge1xuICByZXR1cm4gbmV4dCA9PiBhY3Rpb24gPT4ge1xuICAgIGNvbnN0IHttZXRhLCBwYXlsb2FkfSA9IGFjdGlvblxuICAgIGlmICghbWV0YSB8fCAhbWV0YS5oYXNPd25Qcm9wZXJ0eSgnbG9hZGluZycpKSB7XG4gICAgICByZXR1cm4gbmV4dChhY3Rpb24pXG4gICAgfVxuXG4gICAgY29uc3QgbG9hZGluZyA9IG1ldGEubG9hZGluZ1xuXG4gICAgZGVsZXRlIG1ldGEubG9hZGluZztcblxuICAgIGlmKGxvYWRpbmcpe1xuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdMT0FESU5HJywgcGF5bG9hZCwgbWV0YSB9KVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdMT0FERUQnLCBwYXlsb2FkLCBtZXRhIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQoYWN0aW9uKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRpbmdNaWRkbGV3YXJlIl19