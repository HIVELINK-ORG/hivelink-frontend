import React from 'react';
import { Layout } from 'antd';
import './App.css';

const App = (): JSX.Element => {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <Header style={{ background: '#fff' }}>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default App;
