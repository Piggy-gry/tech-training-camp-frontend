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

    const imageRoot = './icon/tools/'
    const tools = [
        {
            imgTitle: '一级标题',
            imgSrc: `${imageRoot}/title1.svg`,
            onClick: () => CmTools.handleTitle(cm, 1),
        },
        {
            imgTitle: '二级标题',
            imgSrc: `${imageRoot}/title2.svg`,
            onClick: () => CmTools.handleTitle(cm, 2),
        },
        {
            imgTitle: '三级标题',
            imgSrc: `${imageRoot}/title3.svg`,
            onClick: () => CmTools.handleTitle(cm, 3),
        },
        {
            imgTitle: '四级标题',
            imgSrc: `${imageRoot}/title4.svg`,
            onClick: () => CmTools.handleTitle(cm, 4),
        },
        {
            imgTitle: '五级标题',
            imgSrc: `${imageRoot}/title5.svg`,
            onClick: () => CmTools.handleTitle(cm, 5),
        },
        {
            imgTitle: '六级标题',
            imgSrc: `${imageRoot}/title6.svg`,
            onClick: () => CmTools.handleTitle(cm, 6),
        },
        {
            imgTitle: '无序列表',
            imgSrc: `${imageRoot}/unordered-list.svg`,
            onClick: () => CmTools.handleUnorderedList(cm, '- ')
        },
        {
            imgTitle: '有序列表',
            imgSrc: `${imageRoot}/ordered-list.svg`,
            onClick: () => CmTools.handleOrderList(cm)
        },
        {
            imgTitle: '加粗',
            imgSrc: `${imageRoot}/bold.svg`,
            onClick: () => CmTools.handleTextStyle(cm, '**'),
        },
        {
            imgTitle: '斜体',
            imgSrc: `${imageRoot}/italic.svg`,
            onClick: () => CmTools.handleTextStyle(cm, '*'),
        },
        {
            imgTitle: '删除线',
            imgSrc: `${imageRoot}/delete.svg`,
            onClick: () => CmTools.handleTextStyle(cm, '~~'),
        },
        {
            imgTitle: '代码',
            imgSrc: `${imageRoot}/code.svg`,
            onClick: () => CmTools.handleTextStyle(cm, '`'),
        },
        {
            imgTitle: '链接',
            imgSrc: `${imageRoot}/link.svg`,
            onClick: () => CmTools.handleLink(cm, false),
        },
        {
            imgTitle: '图片',
            imgSrc: `${imageRoot}/image.svg`,
            onClick: () => CmTools.handleLink(cm, true),
        },
        {
            imgTitle: '分隔线',
            imgSrc: `${imageRoot}/line.svg`,
            onClick: () => CmTools.handleLine(cm)
        },
        {
            imgTitle: '引用',
            imgSrc: `${imageRoot}/quote.svg`,
            onClick: () => CmTools.handleUnorderedList(cm, '> ')
        }
    ];


    return (
        <div ref={ref} className="tools">
            {
                tools.map(tool => {
                    return (
                        <button className="tool-btn" onClick={tool.onClick}>
                            <img src={tool.imgSrc} alt=" " title={tool.imgTitle} style={{width: '100%'}}/>
                        </button>
                    )
                })
            }
        </div>
    )
}


const _ToolsBar = React.forwardRef(
    ToolsBar,
)
export { _ToolsBar as ToolsBar }
