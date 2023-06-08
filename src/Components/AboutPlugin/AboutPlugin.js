import React from 'react';
import './AboutPlugin.scss';
import { QuestionCircleOutlined } from '@ant-design/icons';

function AboutPlugin() {
  return (
    <div className="aboutPlugin">
      <div className="header">
        ABOUT PLUGIN <QuestionCircleOutlined style={{ fontSize: '24px' }} />
      </div>
      <div className="context">
        Lorem ipsum dolor sit amet consectetur. Nibh et sit pellentesque
        aliquam. Ullamcorper purus fringilla commodo elit quisque. Sed non
        tellus elit erat scelerisque. Donec cum aliquam quisque nibh purus
        aliquam auctor.
      </div>
    </div>
  );
}

export default AboutPlugin;
