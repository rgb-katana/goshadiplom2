import React from 'react';
import './Donate.scss';
import { Button, Space } from 'antd';

function Donate() {
  return (
    <div className="donate">
      <div className="header">DONATE</div>
      <Space>
        <Button
          className="donate-button"
          type="primary"
          ghost
          href="https://www.donationalerts.com/r/hydroshade_plg"
        >
          PUT YOUR MONEY HERE
        </Button>
        <div className="context">
          Lorem ipsum dolor sit amet consectetur. Nibh et sit pellentesque
          aliquam. Ullamcorper purus fringilla commodo elit quisque
        </div>
      </Space>
    </div>
  );
}

export default Donate;
