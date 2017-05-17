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
        dispatch({ type: 'LOADING', payload: payload });
      } else {
        dispatch({ type: 'LOADED', payload: payload });
      }

      return next(action);
    };
  };
};

exports.default = loadingMiddleware;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkaW5nTWlkZGxld2FyZS5qcyJdLCJuYW1lcyI6WyJsb2FkaW5nTWlkZGxld2FyZSIsImRpc3BhdGNoIiwibWV0YSIsImFjdGlvbiIsInBheWxvYWQiLCJoYXNPd25Qcm9wZXJ0eSIsIm5leHQiLCJsb2FkaW5nIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxvQkFBb0IsU0FBcEJBLGlCQUFvQixPQUFnQjtBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYzs7QUFDeEMsU0FBTztBQUFBLFdBQVEsa0JBQVU7QUFBQSxVQUNoQkMsSUFEZ0IsR0FDQ0MsTUFERCxDQUNoQkQsSUFEZ0I7QUFBQSxVQUNWRSxPQURVLEdBQ0NELE1BREQsQ0FDVkMsT0FEVTs7QUFFdkIsVUFBSSxDQUFDRixJQUFELElBQVMsQ0FBQ0EsS0FBS0csY0FBTCxDQUFvQixTQUFwQixDQUFkLEVBQThDO0FBQzVDLGVBQU9DLEtBQUtILE1BQUwsQ0FBUDtBQUNEO0FBQ0QsVUFBR0QsS0FBS0ssT0FBUixFQUFnQjtBQUNkTixpQkFBUyxFQUFDTyxNQUFNLFNBQVAsRUFBa0JKLGdCQUFsQixFQUFUO0FBQ0QsT0FGRCxNQUdJO0FBQ0ZILGlCQUFTLEVBQUNPLE1BQU0sUUFBUCxFQUFpQkosZ0JBQWpCLEVBQVQ7QUFDRDs7QUFFRCxhQUFPRSxLQUFLSCxNQUFMLENBQVA7QUFDRCxLQWJNO0FBQUEsR0FBUDtBQWNELENBZkQ7O2tCQWlCZUgsaUIiLCJmaWxlIjoibG9hZGluZ01pZGRsZXdhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsb2FkaW5nTWlkZGxld2FyZSA9ICh7ZGlzcGF0Y2h9KSA9PiB7XG4gIHJldHVybiBuZXh0ID0+IGFjdGlvbiA9PiB7XG4gICAgY29uc3Qge21ldGEsIHBheWxvYWR9ID0gYWN0aW9uXG4gICAgaWYgKCFtZXRhIHx8ICFtZXRhLmhhc093blByb3BlcnR5KCdsb2FkaW5nJykpIHtcbiAgICAgIHJldHVybiBuZXh0KGFjdGlvbilcbiAgICB9XG4gICAgaWYobWV0YS5sb2FkaW5nKXtcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnTE9BRElORycsIHBheWxvYWQgfSlcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnTE9BREVEJywgcGF5bG9hZCB9KVxuICAgIH1cblxuICAgIHJldHVybiBuZXh0KGFjdGlvbilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkaW5nTWlkZGxld2FyZSJdfQ==