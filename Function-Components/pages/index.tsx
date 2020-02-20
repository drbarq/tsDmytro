// interface Task {
//   title: string;
// }

// interface TaskListProps {
//   tasks: Task[];
// }

// const TaskList: React.FunctionComponent<TaskListProps> = ({ tasks }) => {
//   return (
//     <ul>
//       {tasks.map((task, i) => {
//         return <li key={i}>{task.title}</li>;
//       })}
//     </ul>
//   );
// };

// const tasks = [{ title: 'Task One' }, { title: 'Task Two' }];

// export default () => (
//   <div>
//     <TaskList tasks={tasks} />
//   </div>
// );

import React from 'react';

interface Task {
  title: string;
}

interface TasksListProps {
  tasks: Task[];
}

const TasksList: React.FunctionComponent<TasksListProps> = ({
  tasks
}: TasksListProps) => {
  return (
    <ul>
      {tasks.map((task, i) => {
        return <li key={i}>{task.title}</li>;
      })}
    </ul>
  );
};

const tasks = [{ title: 'Task one' }, { title: 'task two' }];

export default () => (
  <div>
    <TasksList tasks={tasks} />
  </div>
);
