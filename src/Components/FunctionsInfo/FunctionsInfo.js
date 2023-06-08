import React from "react";
import "./FunctionsInfo.scss";
import { observer } from "mobx-react-lite";
import FunctionsInfoStore from "../../Store/FunctionsInfoStore";
import { Button } from "antd";
import FunctionInfo from "../FunctionInfo/FunctionInfo";
const FunctionsInfo = observer(() => {
  if (FunctionsInfoStore.functionsInfo.length > 0) {
    const functions = FunctionsInfoStore.functionsInfo.map((item, index) => {
      return (
        <Button className="functionsButton"
          key={item.buttonText + index}
          size="large"
          type="primary"
          onClick={() => {
            FunctionsInfoStore.setSelectedFunction(index);
          }}
        >
          {item.buttonText}
        </Button>
      );
    });
    return (
      <div id="functionsInfo">
        <div className="header">FUNCTIONS</div>
        <div className="functionsSection">
          <div className="functionsList">
            {functions}
          </div>
          <FunctionInfo></FunctionInfo>
        </div>
      </div>
    );
  }
});

export default FunctionsInfo;
