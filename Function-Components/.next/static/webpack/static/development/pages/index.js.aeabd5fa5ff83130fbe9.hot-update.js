webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducer */ "./reducer.ts");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _component_TasksList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/TasksList */ "./component/TasksList.tsx");
var _jsxFileName = "/Volumes/Lost-Found/Udemy/TS Dmytro/Function-Components/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var store = Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"]);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Hello World"), __jsx(_component_TasksList__WEBPACK_IMPORTED_MODULE_4__["ConnectedTasksList"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
}); // import React from 'react';
// interface Task {
//   title: string;
// }
// interface TasksListProps {
//   initialTasks: Task[];
// }
// interface TasksListState {
//   tasks: Task[];
// }
// class TasksList extends React.Component<TasksListProps, TasksListState> {
//   constructor(props: TasksListProps) {
//     super(props);
//     this.state = {
//       tasks: props.initialTasks
//     };
//     this.onAddNewTaskClick = this.onAddNewTaskClick.bind(this);
//   }
//   onAddNewTaskClick() {
//     this.setState({
//       tasks: [...this.state.tasks, { title: 'New task title' }]
//     });
//   }
//   render() {
//     const { tasks } = this.state;
//     return (
//       <ul>
//         {tasks.map((task, i) => {
//           return <li key={i}>{task.title}</li>;
//         })}
//         <button onClick={this.onAddNewTaskClick}>Add New Task</button>
//       </ul>
//     );
//   }
// }
// const tasks = [{ title: 'Task one' }, { title: 'task two' }];
// export default () => (
//   <div>
//     <TasksList initialTasks={tasks} />
//   </div>
// );

/***/ })

})
//# sourceMappingURL=index.js.aeabd5fa5ff83130fbe9.hot-update.js.map