import React from "react";
import './FunctionInfo.scss'
import { observer } from "mobx-react-lite";
import FunctionsInfoStore from "../../Store/FunctionsInfoStore";
import ReactPlayer from "react-player";
const FunctionInfo = observer(() => {
    console.log(FunctionsInfoStore.selectedFunction)
    let fun = FunctionsInfoStore.getSelectedFunctionInfo()
    if (fun !== undefined) {
        if (fun.type === "video") {
            return (
                <div className="functionInfo">
                    <div className="header">
                        WHATCH IT!
                    </div>
                    <div className="context" >
                        <ReactPlayer url={fun.url} width="100%" height="100%"
                        />
                    </div>
                </div>
            )
        }
        return (
            <div className="functionInfo">
                <div className="header">
                    WHATCH IT!
                </div>

                <div className="context" dangerouslySetInnerHTML={{ __html: fun.context }}>
                </div>
            </div>
        )
    }
    return (
        <div className="functionInfo">
            <div className="context">
                Наверное стоит общее видео о плагине приделать или общее описание если не выбрана функция
            </div>
        </div>
    )
})

export default FunctionInfo