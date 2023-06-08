import React from "react";
import './Index.css'
import SynthPlugin from "../../Components/SynthPlugin/SynthPlugin";
import InteractivePlugin from "../../Components/InteractivePlugin/InteractivePlugin";
import Download from "../../Components/Download/Download";
import AboutPlugin from "../../Components/AboutPlugin/AboutPlugin";
import {Space} from 'antd'
import FunctionsInfo from "../../Components/FunctionsInfo/FunctionsInfo";
import Subscribe from "../../Components/Subscribe/Subscribe";
import Donate from "../../Components/Donate/Donate";
import DefaultStore from "../../Store/Default";
function Index(){
    DefaultStore.setSelectedPage("index")
    return (
        <div id="index">
            <InteractivePlugin/>
            <SynthPlugin/>
            <Space> </Space>
            <Download/>
            <Space> </Space>
            <AboutPlugin></AboutPlugin>
            <Space></Space>
            <FunctionsInfo></FunctionsInfo>
            <Space></Space>
            <Download></Download>
            <Space></Space>
            <Subscribe></Subscribe>
            <Space></Space>
            <Donate></Donate>
            <Space></Space>
        </div>

    )
}

export default Index;