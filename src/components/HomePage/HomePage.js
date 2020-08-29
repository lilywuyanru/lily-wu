import React from 'react';
import { Avatar, Layout, Typography, Divider } from 'antd';
import './HomePage.css';
import profilePhoto from './avatar.jpeg';
import Typing from 'react-typing-animation';

function HomePage() {
  const AnimatedTypingComponent = (
    <Typing speed={100} loop={true}>
      <Typography.Title id="welcome" code>Welcome</Typography.Title>
      <Typing.Reset delay={1000} />
    </Typing>
  );

  return (

    <div className="HomePage">
      <Layout>
        <Layout.Header className="header" >
          {/* <Avatar shape="circle"  src={profilePhoto} /> */}
          {AnimatedTypingComponent}
        </Layout.Header>
        <Layout.Content className="content" >
          <Typography.Title id="title" code>Hey! I’m Lily 👋</Typography.Title>
          <br />
          <Typography.Text id="description" code>description placeholder</Typography.Text>
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default HomePage;


