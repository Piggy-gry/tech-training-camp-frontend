import React, {useEffect, useState} from "react"
import _ from "lodash";
import {UnControlled as CodeMirror} from 'react-codemirror2'
import './index.css'
import 'codemirror/lib/codemirror.css';
import 'codemirror/lib/codemirror.js';
import 'codemirror/mode/markdown/markdown'

const marked = require("marked");

function MarkdownEditor() {
    const [text, setText] = useState("");

    const codeMirrorOptions = {
        mode: 'markdown',
        lineNumbers: true,
    };

    useEffect((() => {
        console.log(text)
        if (text) {
            let elements = document.getElementsByTagName('code');
            for (let i = 0; i < elements.length; i++) {
                const parent = elements[i].parentElement;
                if (!parent) {
                    continue;
                }
                parent.className ="code-wrapper";
            }
        }
    }), [text])


    return (
        <div className="md-editor">
            <header className="toolbar">
                header
            </header>

            <main>
                <div className="left">
                    <CodeMirror className="input-area"
                                onChange={_.debounce((editor: any, data: any, value: any) => {
                                    // @ts-ignore
                                    document.getElementById('right').innerHTML =
                                        marked(value);
                                    setText(value)
                                }, 300)}
                                value={""}
                                options={codeMirrorOptions}
                                editorDidMount={(editor) => editor.setSize("100%", "100%")}
                    />
                </div>
                <div className="right" id="right">
                    {/*{marked(text)}*/}
                    {/*<Right rawContent={text}/>*/}
                </div>
            </main>
        </div>
    )
}

export default MarkdownEditor;
