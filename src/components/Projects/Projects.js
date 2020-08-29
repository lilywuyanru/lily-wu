import React from 'react';
import './Projects.css';
import { Layout, Typography } from 'antd';


function Projects() {

  return (
    <div className="Projects">
      <Layout>
        <div className="project-title" >
          <Typography.Title id="Projects" code>Projects</Typography.Title>
          <br />
          <Typography.Text id="description" code>projects description placeholder</Typography.Text>
        </ div>
      </Layout>

    </div>
  );
}

export default Projects;


