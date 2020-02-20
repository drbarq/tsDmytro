import { Provider } from 'react-redux';
import { reducer } from '../reducer';
import { createStore } from 'redux';
import { ConnectedTasksList } from '../component/TasksList';

const store = createStore(reducer);

export default () => (
  <Provider store={store}>
    <div>Hello World</div>
    <ConnectedTasksList />
  </Provider>
);

// import React from 'react';

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
