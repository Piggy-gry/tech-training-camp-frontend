# 在线简易Markdown编辑器

### 主要特性

- 支持“标准”Markdown / CommonMark和Github风格的语法，也可变身为代码编辑器；
- 支持Markdown文件上传下载；
- 支持外部链接、特殊符号；
- 支持识别和解析HTML标签；

# Heading 1 link [Heading link](https://github.com/Piggy-gry/tech-training-camp-frontend)
## Heading 2 link [Heading link](https://github.com/Piggy-gry/tech-training-camp-frontend)
### Heading 3 link [Heading link](https://github.com/Piggy-gry/tech-training-camp-frontend)
#### Heading 4 link [Heading link](https://github.com/Piggy-gry/tech-training-camp-frontend) Heading link [Heading link](https://github.com/Piggy-gry/tech-training-camp-frontend)
##### Heading 5 link [Heading link](https://github.com/Piggy-gry/tech-training-camp-frontend)
###### Heading 6 link [Heading link](https://github.com/Piggy-gry/tech-training-camp-frontend)

~~删除线~~ <s>删除线（开启识别HTML标签时）</s>
*斜体字*      _斜体字_
**粗体**  __粗体__
***粗斜体*** ___粗斜体___

上标：X<sub>2</sub>，下标：O<sup>2</sup>

**缩写(同HTML的abbr标签)**

> 即更长的单词或短语的缩写形式，前提是开启识别HTML标签时，已默认开启

The <abbr title="Hyper Text Markup Language">HTML</abbr> specification is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.

### 引用 Blockquotes

> 引用文本 Blockquotes

引用的行内混合 Blockquotes
                    
> 引用：如果想要插入空白换行`即<br />标签`，在插入处先键入两个以上的空格然后回车即可，[普通链接](https://github.com/Piggy-gry/tech-training-camp-frontend)。

### 锚点与链接 Links

[普通链接](https://github.com/Piggy-gry/tech-training-camp-frontend)

直接链接：<https://github.com/Piggy-gry/tech-training-camp-frontend>

#### 行内代码 Inline code

执行命令：`npm install marked`

#### JS代码　

```javascript
function test(){
	console.log("Hello world!");
}
 
(function(){
    var box = function(){
        return box.fn.init();
    };
})();

var testBox = box();
testBox.add("jQuery").remove("jQuery");
```

#### HTML代码 HTML codes

```html
<!DOCTYPE html>
<html>
    <head>
        <mate charest="utf-8" />
        <title>Hello world!</title>
    </head>
    <body>
        <h1>Hello world!</h1>
    </body>
</html>
```

### 图片 Images

Image:

![](https://pandao.github.io/editor.md/examples/images/4.jpg)

> Follow your heart.

![](https://pandao.github.io/editor.md/examples/images/8.jpg)

> 图为：厦门白城沙滩

图片加链接 (Image + Link)：

[![](https://pandao.github.io/editor.md/examples/images/7.jpg)](https://pandao.github.io/editor.md/examples/images/7.jpg "李健首张专辑《似水流年》封面")

> 图为：李健首张专辑《似水流年》封面

----

### 列表 Lists

#### 无序列表（减号）Unordered Lists (-)

- 列表一
- 列表二
- 列表三
  
#### 无序列表（星号）Unordered Lists (*)

* 列表一
* 列表二
* 列表三

#### 无序列表（加号和嵌套）Unordered Lists (+)

+ 列表一
+ 列表二
    + 列表二-1
    + 列表二-2
    + 列表二-3
+ 列表三
    * 列表一
    * 列表二
    * 列表三

#### 有序列表 Ordered Lists (-)

1. 第一行
2. 第二行
3. 第三行

#### GFM task list

- [x] GFM task list 1
- [x] GFM task list 2
- [ ] GFM task list 3
    - [ ] GFM task list 3-1
    - [ ] GFM task list 3-2
    - [ ] GFM task list 3-3
- [ ] GFM task list 4
    - [ ] GFM task list 4-1
    - [ ] GFM task list 4-2
              
----

### 绘制表格 Tables

| 项目   |  价格 | 数量 |
| ------ | ----: | :--: |
| 计算机 | $1600 |  5   |
| 手机   |   $12 |  12  |
| 管线   |    $1 | 234  |

| First Header | Second Header |
| ------------ | ------------- |
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |

| First Header | Second Header |
| ------------ | ------------- |
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |

| Function name | Description                |
| ------------- | -------------------------- |
| `help()`      | Display the help window.   |
| `destroy()`   | **Destroy your computer!** |

| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ | :-------------: | ------------: |
| col 3 is      | some wordy text |         $1600 |
| col 2 is      |    centered     |           $12 |
| zebra stripes |    are neat     |            $1 |

| Item     | Value |
| -------- | ----: |
| Computer | $1600 |
| Phone    |   $12 |
| Pipe     |    $1 |

----

#### 特殊符号 HTML Entities Codes

&copy; &  &uml; &trade; &iexcl; &pound;
&amp; &lt; &gt; &yen; &euro; &reg; &plusmn; &para; &sect; &brvbar; &macr; &laquo; &middot; 

X&sup2; Y&sup3; &frac34; &frac14;  &times;  &divide;   &raquo;

18&ordm;C  &quot;  &apos;


#### GFM task lists & Emoji & fontAwesome icon emoji & editormd logo emoji :editormd-logo-5x:

- [x] :smiley: @mentions, :smiley: #refs, [links](), **formatting**, and <del>tags</del> supported :editormd-logo:;
- [x] list syntax required (any unordered or ordered list supported) :editormd-logo-3x:;
- [x] [ ] :smiley: this is a complete item :smiley:;
- [ ] []this is an incomplete item [test link](#) :fa-star: @pandao; 
- [ ] [ ]this is an incomplete item :fa-star: :fa-gear:;
    - [ ] :smiley: this is an incomplete item [test link](#) :fa-star: :fa-gear:;
    - [ ] :smiley: this is  :fa-star: :fa-gear: an incomplete item [test link](#);


### 
