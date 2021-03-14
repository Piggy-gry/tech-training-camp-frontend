import React from "react"
import './index.css'
import CmTools from "../utils/markdownTools"

type args = {
    cm: any
}

const ToolsBar = (
    props: args,
    ref: React.Ref<HTMLDivElement>,
) => {
    const { cm } = props;

    return (
        <div ref={ref} className="tools">
            <button className="tool-btn" onClick={() => {
                if (cm.somethingSelected()) {
                    CmTools.handleTextStyle(cm, '**')
                } else {
                    // const cursor = cm.getCursor()
                    // const { line: curLine, ch: curPos } = cursor
                }
                cm.focus()


            }}>
                <img src="../resources/01jiacu.svg" alt="加粗"/>
            </button>
        </div>
    )
}


const _ToolsBar = React.forwardRef(
    ToolsBar,
)
export { _ToolsBar as ToolsBar }

