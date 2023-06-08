import { observer } from "mobx-react-lite";
import React from "react";
import DefaultStore from "../../Store/Default";
import SynthPlugin from "../SynthPlugin/SynthPlugin";
import './InteractivePlugin.scss'

const InteractivePlugin = observer(() => {
    if (DefaultStore.getHeaderSwitch()) {
        return (<div id="interactivePlugin" className="activ">
            <SynthPlugin/>
        </div>)
    }
    return (
        <div id="interactivePlugin">
        </div>
    )
})

export default InteractivePlugin;