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
      if (meta.loading) {
        dispatch({ type: 'LOADING', payload: payload, meta: meta });
      } else {
        dispatch({ type: 'LOADED', payload: payload, meta: meta });
      }

      return next(action);
    };
  };
};

exports.default = loadingMiddleware;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkaW5nTWlkZGxld2FyZS5qcyJdLCJuYW1lcyI6WyJsb2FkaW5nTWlkZGxld2FyZSIsImRpc3BhdGNoIiwibWV0YSIsImFjdGlvbiIsInBheWxvYWQiLCJoYXNPd25Qcm9wZXJ0eSIsIm5leHQiLCJsb2FkaW5nIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxvQkFBb0IsU0FBcEJBLGlCQUFvQixPQUFnQjtBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYzs7QUFDeEMsU0FBTztBQUFBLFdBQVEsa0JBQVU7QUFBQSxVQUNoQkMsSUFEZ0IsR0FDQ0MsTUFERCxDQUNoQkQsSUFEZ0I7QUFBQSxVQUNWRSxPQURVLEdBQ0NELE1BREQsQ0FDVkMsT0FEVTs7QUFFdkIsVUFBSSxDQUFDRixJQUFELElBQVMsQ0FBQ0EsS0FBS0csY0FBTCxDQUFvQixTQUFwQixDQUFkLEVBQThDO0FBQzVDLGVBQU9DLEtBQUtILE1BQUwsQ0FBUDtBQUNEO0FBQ0QsVUFBR0QsS0FBS0ssT0FBUixFQUFnQjtBQUNkTixpQkFBUyxFQUFDTyxNQUFNLFNBQVAsRUFBa0JKLGdCQUFsQixFQUEyQkYsVUFBM0IsRUFBVDtBQUNELE9BRkQsTUFHSTtBQUNGRCxpQkFBUyxFQUFDTyxNQUFNLFFBQVAsRUFBaUJKLGdCQUFqQixFQUEwQkYsVUFBMUIsRUFBVDtBQUNEOztBQUVELGFBQU9JLEtBQUtILE1BQUwsQ0FBUDtBQUNELEtBYk07QUFBQSxHQUFQO0FBY0QsQ0FmRDs7a0JBaUJlSCxpQiIsImZpbGUiOiJsb2FkaW5nTWlkZGxld2FyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxvYWRpbmdNaWRkbGV3YXJlID0gKHtkaXNwYXRjaH0pID0+IHtcbiAgcmV0dXJuIG5leHQgPT4gYWN0aW9uID0+IHtcbiAgICBjb25zdCB7bWV0YSwgcGF5bG9hZH0gPSBhY3Rpb25cbiAgICBpZiAoIW1ldGEgfHwgIW1ldGEuaGFzT3duUHJvcGVydHkoJ2xvYWRpbmcnKSkge1xuICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKVxuICAgIH1cbiAgICBpZihtZXRhLmxvYWRpbmcpe1xuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdMT0FESU5HJywgcGF5bG9hZCwgbWV0YSB9KVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdMT0FERUQnLCBwYXlsb2FkLCBtZXRhIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQoYWN0aW9uKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRpbmdNaWRkbGV3YXJlIl19