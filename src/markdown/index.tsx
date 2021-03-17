import React, {useEffect, useState} from "react"
import _ from "lodash";
import {ToolsBar} from "./toolsBar"
import {UnControlled as CodeMirror} from 'react-codemirror2'
import './index.css'
import 'codemirror/lib/codemirror.css';
import 'codemirror/lib/codemirror.js';
import 'codemirror/mode/markdown/markdown'

const marked = require("marked");

function MarkdownEditor() {
    const [text, setText] = useState(sessionStorage.getItem('mdText') || "");
    const [cmEditor, setCmEditor] = useState({});

    const codeMirrorOptions = {
        mode: 'markdown',
        lineNumbers: true,
    };

    useEffect((() => {
        const ele = document.createElement('div');
        ele.innerHTML = marked(text);
        sessionStorage.setItem('mdText', text);

        if (text) {
            let elements = ele.getElementsByTagName('code');
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                const parent = element.parentElement;
                if (parent) {
                    if (parent.childNodes.length >= 2) {
                        element.className = "code-wrapper";
                    } else {
                        parent.className = "code-wrapper";
                    }
                }
            }
            // @ts-ignore
            document.getElementById('right').innerHTML = ele.innerHTML;
        }
    }), [text])

    return (
        <div className="md-editor">
            <header className="toolbar">
                <ToolsBar cm={cmEditor}/>
            </header>

            <main>
                <div className="left">
                    <CodeMirror className="input-area"
                                onChange={_.debounce((editor: any, data: any, value: any) => {
                                    setText(value)
                                }, 100)}
                                value={text}
                                options={codeMirrorOptions}
                                editorDidMount={(editor) => {
                                    editor.setSize("100%", "100%");
                                    setCmEditor(editor);
                                }}
                    />
                </div>
                <div className="right" id="right" />
            </main>
        </div>
    )
}

export default MarkdownEditor;
