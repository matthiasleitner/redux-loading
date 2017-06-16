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

      meta.loading = null;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkaW5nTWlkZGxld2FyZS5qcyJdLCJuYW1lcyI6WyJsb2FkaW5nTWlkZGxld2FyZSIsImRpc3BhdGNoIiwibWV0YSIsImFjdGlvbiIsInBheWxvYWQiLCJoYXNPd25Qcm9wZXJ0eSIsIm5leHQiLCJsb2FkaW5nIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxvQkFBb0IsU0FBcEJBLGlCQUFvQixPQUFnQjtBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYzs7QUFDeEMsU0FBTztBQUFBLFdBQVEsa0JBQVU7QUFBQSxVQUNoQkMsSUFEZ0IsR0FDQ0MsTUFERCxDQUNoQkQsSUFEZ0I7QUFBQSxVQUNWRSxPQURVLEdBQ0NELE1BREQsQ0FDVkMsT0FEVTs7QUFFdkIsVUFBSSxDQUFDRixJQUFELElBQVMsQ0FBQ0EsS0FBS0csY0FBTCxDQUFvQixTQUFwQixDQUFkLEVBQThDO0FBQzVDLGVBQU9DLEtBQUtILE1BQUwsQ0FBUDtBQUNEOztBQUVELFVBQU1JLFVBQVVMLEtBQUtLLE9BQXJCOztBQUVBTCxXQUFLSyxPQUFMLEdBQWUsSUFBZjs7QUFFQSxVQUFHQSxPQUFILEVBQVc7QUFDVE4saUJBQVMsRUFBQ08sTUFBTSxTQUFQLEVBQWtCSixnQkFBbEIsRUFBMkJGLFVBQTNCLEVBQVQ7QUFDRCxPQUZELE1BR0k7QUFDRkQsaUJBQVMsRUFBQ08sTUFBTSxRQUFQLEVBQWlCSixnQkFBakIsRUFBMEJGLFVBQTFCLEVBQVQ7QUFDRDs7QUFFRCxhQUFPSSxLQUFLSCxNQUFMLENBQVA7QUFDRCxLQWxCTTtBQUFBLEdBQVA7QUFtQkQsQ0FwQkQ7O2tCQXNCZUgsaUIiLCJmaWxlIjoibG9hZGluZ01pZGRsZXdhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsb2FkaW5nTWlkZGxld2FyZSA9ICh7ZGlzcGF0Y2h9KSA9PiB7XG4gIHJldHVybiBuZXh0ID0+IGFjdGlvbiA9PiB7XG4gICAgY29uc3Qge21ldGEsIHBheWxvYWR9ID0gYWN0aW9uXG4gICAgaWYgKCFtZXRhIHx8ICFtZXRhLmhhc093blByb3BlcnR5KCdsb2FkaW5nJykpIHtcbiAgICAgIHJldHVybiBuZXh0KGFjdGlvbilcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkaW5nID0gbWV0YS5sb2FkaW5nXG5cbiAgICBtZXRhLmxvYWRpbmcgPSBudWxsO1xuXG4gICAgaWYobG9hZGluZyl7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0xPQURJTkcnLCBwYXlsb2FkLCBtZXRhIH0pXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0xPQURFRCcsIHBheWxvYWQsIG1ldGEgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dChhY3Rpb24pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZGluZ01pZGRsZXdhcmUiXX0=