'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var loadingReducer = function loadingReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    pending: 0,
    done: true,
    messages: {}
  };
  var action = arguments[1];

  switch (action.type) {
    case 'LOADING':
      return {
        pending: state.pending + 1,
        done: false,
        messages: Object.assign({}, messages, action.payload ? action.payload.message : null)
      };
    case 'LOADED':
      var pending = state.pending > 0 ? state.pending - 1 : 0;
      var done = pending === 0 ? true : false;
      var messages = state.messages;

      if (action.payload) {
        delete messages[action.payload.tag];
      }

      return {
        pending: pending,
        done: done,
        messages: Object.assign({}, messages)
      };
    default:
      return state;
  }
};

exports.default = loadingReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkaW5nUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJsb2FkaW5nUmVkdWNlciIsInN0YXRlIiwicGVuZGluZyIsImRvbmUiLCJtZXNzYWdlcyIsImFjdGlvbiIsInR5cGUiLCJPYmplY3QiLCJhc3NpZ24iLCJwYXlsb2FkIiwibWVzc2FnZSIsInRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxpQkFBaUIsU0FBakJBLGNBQWlCLEdBSVQ7QUFBQSxNQUpVQyxLQUlWLHVFQUprQjtBQUM5QkMsYUFBUyxDQURxQjtBQUU5QkMsVUFBTSxJQUZ3QjtBQUc5QkMsY0FBVTtBQUhvQixHQUlsQjtBQUFBLE1BQVhDLE1BQVc7O0FBQ1osVUFBUUEsT0FBT0MsSUFBZjtBQUNFLFNBQUssU0FBTDtBQUNFLGFBQU87QUFDTEosaUJBQVNELE1BQU1DLE9BQU4sR0FBZ0IsQ0FEcEI7QUFFTEMsY0FBTSxLQUZEO0FBR0xDLGtCQUFVRyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkosUUFBbEIsRUFBNEJDLE9BQU9JLE9BQVAsR0FBaUJKLE9BQU9JLE9BQVAsQ0FBZUMsT0FBaEMsR0FBMEMsSUFBdEU7QUFITCxPQUFQO0FBS0YsU0FBSyxRQUFMO0FBQ0UsVUFBTVIsVUFBVUQsTUFBTUMsT0FBTixHQUFnQixDQUFoQixHQUFvQkQsTUFBTUMsT0FBTixHQUFnQixDQUFwQyxHQUF3QyxDQUF4RDtBQUNBLFVBQU1DLE9BQU9ELFlBQVksQ0FBWixHQUFnQixJQUFoQixHQUF1QixLQUFwQztBQUNBLFVBQU1FLFdBQVdILE1BQU1HLFFBQXZCOztBQUVBLFVBQUdDLE9BQU9JLE9BQVYsRUFBa0I7QUFDaEIsZUFBT0wsU0FBU0MsT0FBT0ksT0FBUCxDQUFlRSxHQUF4QixDQUFQO0FBQ0Q7O0FBRUQsYUFBTztBQUNMVCx3QkFESztBQUVMQyxrQkFGSztBQUdMQyxrQkFBVUcsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JKLFFBQWxCO0FBSEwsT0FBUDtBQUtGO0FBQ0UsYUFBT0gsS0FBUDtBQXRCSjtBQXdCRCxDQTdCRDs7a0JBK0JlRCxjIiwiZmlsZSI6ImxvYWRpbmdSZWR1Y2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9hZGluZ1JlZHVjZXIgPSAoc3RhdGUgPSB7XG4gIHBlbmRpbmc6IDAsXG4gIGRvbmU6IHRydWUsXG4gIG1lc3NhZ2VzOiB7fVxufSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdMT0FESU5HJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBlbmRpbmc6IHN0YXRlLnBlbmRpbmcgKyAxLFxuICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZXM6IE9iamVjdC5hc3NpZ24oe30sIG1lc3NhZ2VzLCBhY3Rpb24ucGF5bG9hZCA/IGFjdGlvbi5wYXlsb2FkLm1lc3NhZ2UgOiBudWxsKVxuICAgICAgfVxuICAgIGNhc2UgJ0xPQURFRCc6XG4gICAgICBjb25zdCBwZW5kaW5nID0gc3RhdGUucGVuZGluZyA+IDAgPyBzdGF0ZS5wZW5kaW5nIC0gMSA6IDBcbiAgICAgIGNvbnN0IGRvbmUgPSBwZW5kaW5nID09PSAwID8gdHJ1ZSA6IGZhbHNlXG4gICAgICBjb25zdCBtZXNzYWdlcyA9IHN0YXRlLm1lc3NhZ2VzO1xuXG4gICAgICBpZihhY3Rpb24ucGF5bG9hZCl7XG4gICAgICAgIGRlbGV0ZSBtZXNzYWdlc1thY3Rpb24ucGF5bG9hZC50YWddXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBlbmRpbmcsXG4gICAgICAgIGRvbmUsXG4gICAgICAgIG1lc3NhZ2VzOiBPYmplY3QuYXNzaWduKHt9LCBtZXNzYWdlcylcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZGluZ1JlZHVjZXIiXX0=