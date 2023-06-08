import React from 'react';
import './Download.scss';
import { observer } from 'mobx-react-lite';
import { Button, Divider } from 'antd';
import defaultStore from '../../Store/Default';

const Download = observer(() => {
  return (
    <div className="downloadBtn">
      <Divider className="downloadDivider">
        <Button
          className="download"
          type="primary"
          ghost
          href="https://drive.google.com/file/d/1_x3HPDfw8dg2PxO4hS4oKetGPxwr_oqN/view?usp=drive_link"
        >
          DOWNLOAD
        </Button>
      </Divider>
    </div>
  );
});
export default Download;
