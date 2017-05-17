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

      var messages = state.messages;

      if (action.payload) {
        delete messages[action.payload.tag];
      }

      return {
        pending: pending,
        done: pending === 0 ? true : false,
        messages: Object.assign({}, messages)
      };
    default:
      return state;
  }
};

exports.default = loadingReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkaW5nUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJsb2FkaW5nUmVkdWNlciIsInN0YXRlIiwicGVuZGluZyIsImRvbmUiLCJtZXNzYWdlcyIsImFjdGlvbiIsInR5cGUiLCJPYmplY3QiLCJhc3NpZ24iLCJwYXlsb2FkIiwibWVzc2FnZSIsInRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxpQkFBaUIsU0FBakJBLGNBQWlCLEdBSVQ7QUFBQSxNQUpVQyxLQUlWLHVFQUprQjtBQUM5QkMsYUFBUyxDQURxQjtBQUU5QkMsVUFBTSxJQUZ3QjtBQUc5QkMsY0FBVTtBQUhvQixHQUlsQjtBQUFBLE1BQVhDLE1BQVc7O0FBQ1osVUFBUUEsT0FBT0MsSUFBZjtBQUNFLFNBQUssU0FBTDtBQUNFLGFBQU87QUFDTEosaUJBQVNELE1BQU1DLE9BQU4sR0FBZ0IsQ0FEcEI7QUFFTEMsY0FBTSxLQUZEO0FBR0xDLGtCQUFVRyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkosUUFBbEIsRUFBNEJDLE9BQU9JLE9BQVAsR0FBaUJKLE9BQU9JLE9BQVAsQ0FBZUMsT0FBaEMsR0FBMEMsSUFBdEU7QUFITCxPQUFQO0FBS0YsU0FBSyxRQUFMO0FBQ0UsVUFBTVIsVUFBVUQsTUFBTUMsT0FBTixHQUFnQixDQUFoQixHQUFvQkQsTUFBTUMsT0FBTixHQUFnQixDQUFwQyxHQUF3QyxDQUF4RDs7QUFFQSxVQUFNRSxXQUFXSCxNQUFNRyxRQUF2Qjs7QUFFQSxVQUFHQyxPQUFPSSxPQUFWLEVBQWtCO0FBQ2hCLGVBQU9MLFNBQVNDLE9BQU9JLE9BQVAsQ0FBZUUsR0FBeEIsQ0FBUDtBQUNEOztBQUVELGFBQU87QUFDTFQsd0JBREs7QUFFTEMsY0FBTUQsWUFBWSxDQUFaLEdBQWdCLElBQWhCLEdBQXVCLEtBRnhCO0FBR0xFLGtCQUFVRyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkosUUFBbEI7QUFITCxPQUFQO0FBS0Y7QUFDRSxhQUFPSCxLQUFQO0FBdEJKO0FBd0JELENBN0JEOztrQkErQmVELGMiLCJmaWxlIjoibG9hZGluZ1JlZHVjZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsb2FkaW5nUmVkdWNlciA9IChzdGF0ZSA9IHtcbiAgcGVuZGluZzogMCxcbiAgZG9uZTogdHJ1ZSxcbiAgbWVzc2FnZXM6IHt9XG59LCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0xPQURJTkcnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGVuZGluZzogc3RhdGUucGVuZGluZyArIDEsXG4gICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlczogT2JqZWN0LmFzc2lnbih7fSwgbWVzc2FnZXMsIGFjdGlvbi5wYXlsb2FkID8gYWN0aW9uLnBheWxvYWQubWVzc2FnZSA6IG51bGwpXG4gICAgICB9XG4gICAgY2FzZSAnTE9BREVEJzpcbiAgICAgIGNvbnN0IHBlbmRpbmcgPSBzdGF0ZS5wZW5kaW5nID4gMCA/IHN0YXRlLnBlbmRpbmcgLSAxIDogMFxuXG4gICAgICBjb25zdCBtZXNzYWdlcyA9IHN0YXRlLm1lc3NhZ2VzO1xuXG4gICAgICBpZihhY3Rpb24ucGF5bG9hZCl7XG4gICAgICAgIGRlbGV0ZSBtZXNzYWdlc1thY3Rpb24ucGF5bG9hZC50YWddXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBlbmRpbmcsXG4gICAgICAgIGRvbmU6IHBlbmRpbmcgPT09IDAgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2VzOiBPYmplY3QuYXNzaWduKHt9LCBtZXNzYWdlcylcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZGluZ1JlZHVjZXIiXX0=