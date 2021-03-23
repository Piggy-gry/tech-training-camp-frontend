export const DemoMarkdownText = '# 在线简易Markdown编辑器\n' +
    '\n' +
    '### 主要特性\n' +
    '\n' +
    '- 支持“标准”Markdown / CommonMark和Github风格的语法，也可变身为代码编辑器；\n' +
    '- 支持Markdown文件上传下载；\n' +
    '- 支持外部链接、特殊符号；\n' +
    '- 支持识别和解析HTML标签；\n' +
    '\n' +
    '# Heading 1 link [Heading link](https://github.com/Piggy-gry/tech-training-camp-frontend)\n' +
    '## Heading 2 link [Heading link](https://github.com/Piggy-gry/tech-training-camp-frontend)\n' +
    '### Heading 3 link [Heading link](https://github.com/Piggy-gry/tech-training-camp-frontend)\n' +
    '#### Heading 4 link [Heading link](https://github.com/Piggy-gry/tech-training-camp-frontend) Heading link [Heading link](https://github.com/Piggy-gry/tech-training-camp-frontend)\n' +
    '##### Heading 5 link [Heading link](https://github.com/Piggy-gry/tech-training-camp-frontend)\n' +
    '###### Heading 6 link [Heading link](https://github.com/Piggy-gry/tech-training-camp-frontend)\n' +
    '\n' +
    '~~删除线~~ <s>删除线（开启识别HTML标签时）</s>\n' +
    '*斜体字*      _斜体字_\n' +
    '**粗体**  __粗体__\n' +
    '***粗斜体*** ___粗斜体___\n' +
    '\n' +
    '上标：X<sub>2</sub>，下标：O<sup>2</sup>\n' +
    '\n' +
    '**缩写(同HTML的abbr标签)**\n' +
    '\n' +
    '> 即更长的单词或短语的缩写形式，前提是开启识别HTML标签时，已默认开启\n' +
    '\n' +
    'The <abbr title="Hyper Text Markup Language">HTML</abbr> specification is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.\n' +
    '\n' +
    '### 引用 Blockquotes\n' +
    '\n' +
    '> 引用文本 Blockquotes\n' +
    '\n' +
    '引用的行内混合 Blockquotes\n' +
    '                    \n' +
    '> 引用：如果想要插入空白换行`即<br />标签`，在插入处先键入两个以上的空格然后回车即可，[普通链接](https://github.com/Piggy-gry/tech-training-camp-frontend)。\n' +
    '\n' +
    '### 锚点与链接 Links\n' +
    '\n' +
    '[普通链接](https://github.com/Piggy-gry/tech-training-camp-frontend)\n' +
    '\n' +
    '直接链接：<https://github.com/Piggy-gry/tech-training-camp-frontend>\n' +
    '\n' +
    '#### 行内代码 Inline code\n' +
    '\n' +
    '执行命令：`npm install marked`\n' +
    '\n' +
    '#### JS代码　\n' +
    '\n' +
    '```javascript\n' +
    'function test(){\n' +
    '\tconsole.log("Hello world!");\n' +
    '}\n' +
    ' \n' +
    '(function(){\n' +
    '    var box = function(){\n' +
    '        return box.fn.init();\n' +
    '    };\n' +
    '})();\n' +
    '\n' +
    'var testBox = box();\n' +
    'testBox.add("jQuery").remove("jQuery");\n' +
    '```\n' +
    '\n' +
    '#### HTML代码 HTML codes\n' +
    '\n' +
    '```html\n' +
    '<!DOCTYPE html>\n' +
    '<html>\n' +
    '    <head>\n' +
    '        <mate charest="utf-8" />\n' +
    '        <title>Hello world!</title>\n' +
    '    </head>\n' +
    '    <body>\n' +
    '        <h1>Hello world!</h1>\n' +
    '    </body>\n' +
    '</html>\n' +
    '```\n' +
    '\n' +
    '### 图片 Images\n' +
    '\n' +
    'Image:\n' +
    '\n' +
    '![](https://pandao.github.io/editor.md/examples/images/4.jpg)\n' +
    '\n' +
    '> Follow your heart.\n' +
    '\n' +
    '![](https://pandao.github.io/editor.md/examples/images/8.jpg)\n' +
    '\n' +
    '> 图为：厦门白城沙滩\n' +
    '\n' +
    '图片加链接 (Image + Link)：\n' +
    '\n' +
    '[![](https://pandao.github.io/editor.md/examples/images/7.jpg)](https://pandao.github.io/editor.md/examples/images/7.jpg "李健首张专辑《似水流年》封面")\n' +
    '\n' +
    '> 图为：李健首张专辑《似水流年》封面\n' +
    '\n' +
    '----\n' +
    '\n' +
    '### 列表 Lists\n' +
    '\n' +
    '#### 无序列表（减号）Unordered Lists (-)\n' +
    '\n' +
    '- 列表一\n' +
    '- 列表二\n' +
    '- 列表三\n' +
    '  \n' +
    '#### 无序列表（星号）Unordered Lists (*)\n' +
    '\n' +
    '* 列表一\n' +
    '* 列表二\n' +
    '* 列表三\n' +
    '\n' +
    '#### 无序列表（加号和嵌套）Unordered Lists (+)\n' +
    '\n' +
    '+ 列表一\n' +
    '+ 列表二\n' +
    '    + 列表二-1\n' +
    '    + 列表二-2\n' +
    '    + 列表二-3\n' +
    '+ 列表三\n' +
    '    * 列表一\n' +
    '    * 列表二\n' +
    '    * 列表三\n' +
    '\n' +
    '#### 有序列表 Ordered Lists (-)\n' +
    '\n' +
    '1. 第一行\n' +
    '2. 第二行\n' +
    '3. 第三行\n' +
    '\n' +
    '#### GFM task list\n' +
    '\n' +
    '- [x] GFM task list 1\n' +
    '- [x] GFM task list 2\n' +
    '- [ ] GFM task list 3\n' +
    '    - [ ] GFM task list 3-1\n' +
    '    - [ ] GFM task list 3-2\n' +
    '    - [ ] GFM task list 3-3\n' +
    '- [ ] GFM task list 4\n' +
    '    - [ ] GFM task list 4-1\n' +
    '    - [ ] GFM task list 4-2\n' +
    '              \n' +
    '----\n' +
    '\n' +
    '### 绘制表格 Tables\n' +
    '\n' +
    '| 项目   |  价格 | 数量 |\n' +
    '| ------ | ----: | :--: |\n' +
    '| 计算机 | $1600 |  5   |\n' +
    '| 手机   |   $12 |  12  |\n' +
    '| 管线   |    $1 | 234  |\n' +
    '\n' +
    '| First Header | Second Header |\n' +
    '| ------------ | ------------- |\n' +
    '| Content Cell | Content Cell  |\n' +
    '| Content Cell | Content Cell  |\n' +
    '\n' +
    '| First Header | Second Header |\n' +
    '| ------------ | ------------- |\n' +
    '| Content Cell | Content Cell  |\n' +
    '| Content Cell | Content Cell  |\n' +
    '\n' +
    '| Function name | Description                |\n' +
    '| ------------- | -------------------------- |\n' +
    '| `help()`      | Display the help window.   |\n' +
    '| `destroy()`   | **Destroy your computer!** |\n' +
    '\n' +
    '| Left-Aligned  | Center Aligned  | Right Aligned |\n' +
    '| :------------ | :-------------: | ------------: |\n' +
    '| col 3 is      | some wordy text |         $1600 |\n' +
    '| col 2 is      |    centered     |           $12 |\n' +
    '| zebra stripes |    are neat     |            $1 |\n' +
    '\n' +
    '| Item     | Value |\n' +
    '| -------- | ----: |\n' +
    '| Computer | $1600 |\n' +
    '| Phone    |   $12 |\n' +
    '| Pipe     |    $1 |\n' +
    '\n' +
    '----\n' +
    '\n' +
    '#### 特殊符号 HTML Entities Codes\n' +
    '\n' +
    '&copy; &  &uml; &trade; &iexcl; &pound;\n' +
    '&amp; &lt; &gt; &yen; &euro; &reg; &plusmn; &para; &sect; &brvbar; &macr; &laquo; &middot; \n' +
    '\n' +
    'X&sup2; Y&sup3; &frac34; &frac14;  &times;  &divide;   &raquo;\n' +
    '\n' +
    '18&ordm;C  &quot;  &apos;\n' +
    '\n' +
    '\n' +
    '#### GFM task lists & Emoji & fontAwesome icon emoji & editormd logo emoji :editormd-logo-5x:\n' +
    '\n' +
    '- [x] :smiley: @mentions, :smiley: #refs, [links](), **formatting**, and <del>tags</del> supported :editormd-logo:;\n' +
    '- [x] list syntax required (any unordered or ordered list supported) :editormd-logo-3x:;\n' +
    '- [x] [ ] :smiley: this is a complete item :smiley:;\n' +
    '- [ ] []this is an incomplete item [test link](#) :fa-star: @pandao; \n' +
    '- [ ] [ ]this is an incomplete item :fa-star: :fa-gear:;\n' +
    '    - [ ] :smiley: this is an incomplete item [test link](#) :fa-star: :fa-gear:;\n' +
    '    - [ ] :smiley: this is  :fa-star: :fa-gear: an incomplete item [test link](#);\n' +
    '\n' +
    '\n' +
    '### \n'
