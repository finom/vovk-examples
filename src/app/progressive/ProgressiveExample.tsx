'use client';
import { use, Suspense, useMemo } from 'react';
import { progressive } from 'vovk';
import { ProgressiveRPC } from 'vovk-client';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Users = ({ usersPromise }: { usersPromise: Promise<{ id: number; name: string }[]> }) => {
  const users = use(usersPromise);
  return (
    <>
      {users.map((user) => (
        <ul key={user.id}>
          <li>{user.name}</li>
        </ul>
      ))}
    </>
  );
};

const Tasks = ({ tasksPromise }: { tasksPromise: Promise<{ id: number; title: string; completed: boolean }[]> }) => {
  const tasks = use(tasksPromise);
  return (
    <>
      {tasks.map((task) => (
        <ul key={task.id}>
          <li>
            {task.title} {task.completed ? '✅' : ''}
          </li>
        </ul>
      ))}
    </>
  );
};

export default function ProgressiveExample() {
  const { users: usersPromise, tasks: tasksPromise } = useMemo(
    () => progressive(ProgressiveRPC.streamProgressiveResponse),
    []
  );

  return (
    <>
      <h2>Users</h2>
      <Suspense fallback={<ListSkeleton />}>
        <Users usersPromise={usersPromise} />
      </Suspense>

      <h2>Tasks</h2>
      <Suspense fallback={<ListSkeleton />}>
        <Tasks tasksPromise={tasksPromise} />
      </Suspense>
    </>
  );
}

const ListSkeleton = () => (
  <ul>
    {Array(5)
      .fill(0)
      .map((_, index) => (
        <li key={index}>
          <Skeleton width={150} />
        </li>
      ))}
  </ul>
);
