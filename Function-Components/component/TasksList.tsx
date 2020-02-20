import React from 'react';
import { Task } from '../types';
import { connect } from 'react-redux';
import { AppState } from '../reducer';
import { fetchTasks } from '../actions';

interface StateProps {
  tasks: Task[];
}

interface DispatchProps {
  fetchTasks: () => void;
}

interface OwnProps {}

interface AllProps extends StateProps, DispatchProps, OwnProps {}

export class TasksList extends React.Component<AllProps> {
  onClick = () => {
    const { fetchTasks } = this.props;
    fetchTasks();
  };

  render() {
    const { tasks } = this.props;
    return (
      <div>
        <ul>
          {tasks.map((task, i) => {
            return <li key={i}>{task.title}</li>;
          })}
        </ul>
        <button onClick={this.onClick}>Fetch Tasks</button>
      </div>
    );
  }
}

export const ConnectedTasksList = connect<
  StateProps,
  DispatchProps,
  OwnProps,
  AppState
>(
  state => ({
    tasks: state.tasks
  }),
  dispatch => ({
    fetchTasks: () => dispatch(fetchTasks())
  })
)(TasksList);
// export class TasksList extends React.Component<Props> {
//   render() {
//     const { tasks} = this.props

//     <ul>
//       {tasks.map((task, i) => {
//       return <li key={i}>{task.title}</li>
//     })}
//     </ul>
//   }
// }
