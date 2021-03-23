import React, {useEffect, useState} from "react"
import _ from "lodash";
import {ToolsBar} from "./toolsBar"
import {UnControlled as CodeMirror} from 'react-codemirror2'
import './index.css'
import 'codemirror/lib/codemirror.css';
import 'codemirror/lib/codemirror.js';
import 'codemirror/mode/markdown/markdown';

const marked = require("marked");

function MarkdownEditor() {
    const [text, setText] = useState(sessionStorage.getItem('mdText') || "");
    const [cmEditor, setCmEditor] = useState();

    const codeMirrorOptions = {
        mode: 'markdown',
        lineNumbers: true,
    };

    const reStyleNodes = (nodes: string) => {
        const ele = document.createElement('div');
        ele.innerHTML = nodes;

        if (text) {
            let elements = ele.getElementsByTagName('code');
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                const parent = element.parentElement;
                if (parent) {
                    if (parent.childNodes.length >= 2) {
                        element.className = "inline-code-wrapper";
                    } else {
                        parent.className = "code-wrapper";
                    }
                }
            }
            return ele.innerHTML;
        }

        return '';
    }

    const readFile = (files: any) => {
        let file = files.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt) {
            // @ts-ignore
            cmEditor.setValue(String(evt.target?.result));
            setText((text) => String(evt.target?.result) || text)
        }
    }
    useEffect(() => {
        sessionStorage.setItem('mdText', text);
        const right = document.getElementById('right');

        if (text && right) {
            right.innerHTML = reStyleNodes(marked(text));
        }
    }, [text])

    return (
        <div className="md-editor">
            <header className="toolbar">
                <ToolsBar cm={cmEditor} cmText={text} uploadFile={readFile}/>
            </header>

            <main>
                <div className="left">
                    <CodeMirror className="input-area"
                                onChange={_.debounce((editor: any, data: any, value: any) => {
                                    setText(value)
                                }, 100)}
                                options={codeMirrorOptions}
                                editorDidMount={(editor) => {
                                    editor.setValue(text);
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
