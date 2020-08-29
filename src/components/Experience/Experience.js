import React, { useState } from 'react';
import './Experience.css';
import { Layout, Typography } from 'antd';
import HorizontalTimeline from 'react-horizontal-timeline';

function Experience() {
  // const state = { value: 0, previous: 0 };
  const VALUES = ["2018-09-01", "2019-05-01", "2020-05-01"];
  const [previous, setPrevious] = useState(0);
  const [value, setValue] = useState(0);


  return (
    <div className="Experience">
      <Layout>
        <div className="experience-title" >
          <Typography.Title id="Experiences" code>Experiences</Typography.Title>
          <br />
          <Typography.Text id="description" code>experience description placeholder</Typography.Text>
        </ div>

        <div className="timeline">
          <HorizontalTimeline
            index={value}
            indexClick={(index) => {
              setValue(index)
              setPrevious(value)
            }}
            values={VALUES} />

        </div>
      </Layout>
    </div>
  );
}

export default Experience;


