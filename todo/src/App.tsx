import React from 'react';
import { HeaderContainer } from './shared/HeaderContainer/HeaderContainer';
import { Layout } from './shared/Layout/Layout';
import { TaskInputContainer } from './shared/TaskInputContainer/TaskInputContainer';
import { TaskListContainer } from './shared/TaskListContainer/TaskListContainer';

function App() {
  return (
    <Layout>
      <HeaderContainer />
      <TaskInputContainer />
      <TaskListContainer />
    </Layout>
  );
}

export default App;
