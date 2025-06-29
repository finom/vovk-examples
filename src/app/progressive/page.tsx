import { Suspense } from 'react';
import { progressive } from 'vovk';
import { ProgressiveRPC } from 'vovk-client';

export default async function ProgressivePage() {
  const { users: usersPromise, tasks: tasksPromise } = progressive(ProgressiveRPC.streamProgressiveResponse);

  return (
    <div>
      <h1>Progressive Response Example</h1>

      <h2>Users</h2>
      <Suspense fallback={<div>Loading users...</div>}>
        {usersPromise.then((users) => {
          return (
            <ul>
              {users.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          );
        })}
      </Suspense>

      <h2>Tasks</h2>
      <Suspense fallback={<div>Loading tasks...</div>}>
        {tasksPromise.then((tasks) => {
          return (
            <ul>
              {tasks.map((task) => (
                <li key={task.id}>{task.title}</li>
              ))}
            </ul>
          );
        })}
      </Suspense>
    </div>
  );
}
