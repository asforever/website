const MarkDownHelperText =
 /*   "快捷键 \n" +
    "--------------------------- \n" +
    "撤销：Ctrl + Z \n" +
    "重做：Ctrl + Y \n" +
    "加粗：Ctrl + B \n" +
    "斜体：Ctrl + I \n" +
    "标题：Ctrl + Shift + H \n" +
    "无序列表：Ctrl + Shift + U \n" +
    "有序列表：Ctrl + Shift + O\n" +
    "撤销：Ctrl + Z\n" +
    "检查列表：Ctrl + Shift + C\n" +
    "插入代码：Ctrl + Shift + K\n" +
    "插入链接：Ctrl + Shift + L\n" +
    "插入图片：Ctrl + Shift + G\n" +
    "查找：Command + F\n" +
    "替换：Command + G\n" +
    "标题 \n" +
    "--------------------------- \n" +*/
    "# 1级标题 \n" +
    "## 2级标题 \n" +
    "### 3级标题 \n" +
    "#### 四级标题 \n" +
    "##### 五级标题 \n" +
    "###### 六级标题 \n" +
    "文本样式 \n" +
    "--------------------------- \n" +
    "*强调文本* _强调文本_ \n" +
    " \n" +
    "**加粗文本** __加粗文本__ \n" +
    " \n" +
    "==标记文本== \n" +
    " \n" +
    "~~删除文本~~ \n" +
    " \n" +
    "> 引用文本 \n" +
    " \n" +
    "H~2~O is是液体。 \n" +
    " \n" +
    "2^10^ 运算结果是 1024。 \n" +

    "列表 \n"+
    "--------------------------- \n"+
    "- 项目 \n"+
    "* 项目 \n"+
    "+ 项目 \n"+

    "1. 项目1 \n"+
    "2. 项目2 \n"+
    "3. 项目3 \n"+

    "- [ ] 计划任务 \n"+
    "- [x] 完成任务 \n"+

    "链接 \n"+
    "--------------------------- \n"+
    "链接: [link](https://mp.csdn.net). \n"+

    "图片: ![Alt](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9hdmF0YXIuY3Nkbi5uZXQvNy83L0IvMV9yYWxmX2h4MTYzY29tLmpwZw) \n"+

    "带尺寸的图片: ![Alt](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9hdmF0YXIuY3Nkbi5uZXQvNy83L0IvMV9yYWxmX2h4MTYzY29tLmpwZw =30x30) \n"+

    "居中的图片: ![Alt](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9hdmF0YXIuY3Nkbi5uZXQvNy83L0IvMV9yYWxmX2h4MTYzY29tLmpwZw#pic_center) \n"+

    "居中并且带尺寸的图片: ![Alt](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9hdmF0YXIuY3Nkbi5uZXQvNy83L0IvMV9yYWxmX2h4MTYzY29tLmpwZw#pic_center =30x30) \n"+

    "代码片 \n"+
    "--------------------------- \n"+
    "下面展示一些 `内联代码片`。 \n"+


    "// A code block \n"+
    "var foo = 'bar'; \n"+


    " javascript \n"+
    "// An highlighted block \n"+
    "var foo = 'bar'; \n"+


    "表格 \n"+
    "--------------------------- \n"+
    "项目     | Value \n"+
    "-------- | ----- \n"+
    "电脑  | $1600 \n"+
    "手机  | $12 \n"+
    "导管  | $1 \n"+

    "| Column 1 | Column 2      | \n"+
    "|:--------:| -------------:| \n"+
    "| centered 文本居中 | right-aligned 文本居右 | \n"+

    "自定义列表 \n"+
    "--------------------------- \n"+
    "Markdown \n"+
    ":  Text-to-HTML conversion tool \n"+

    "Authors \n"+
    ":  John \n"+
    ":  Luke \n"+

    "注脚 \n"+
    "--------------------------- \n"+
    "一个具有注脚的文本。[^1] \n"+

    "[^1]: 注脚的解释 \n"+
    "$$ \n"+
    "\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,. \n"+
    "$$ \n"+
    "插入甘特图 \n"+
    "--------------------------- \n"+
    "[参考文档](https://mermaidjs.github.io/#/gantt) \n"+
    "mermaid \n"+
    "gantt \n"+
    "    dateFormat  YYYY-MM-DD \n"+
    "    title Adding GANTT diagram functionality to mermaid \n"+
    "    section 现有任务 \n"+
    "    已完成               :done,    des1, 2014-01-06,2014-01-08 \n"+
    "    进行中               :active,  des2, 2014-01-09, 3d \n"+
    "    计划中               :         des3, after des2, 5d \n"+
    "插入UML图 \n"+
    "--------------------------- \n"+
    "[参考文档](https://mermaidjs.github.io/#/sequenceDiagram) \n"+
    "mermaid \n"+
    "sequenceDiagram \n"+
    "张三 ->> 李四: 你好！李四, 最近怎么样? \n"+
    "李四-->>王五: 你最近怎么样，王五？ \n"+
    "李四--x 张三: 我很好，谢谢! \n"+
    "李四-x 王五: 我很好，谢谢! \n"+
    "Note right of 王五: 李四想了很长时间, 文字太长了<\br/>不适合放在一行. \n"+
    "李四-->>张三: 打量着王五... \n"+
    "张三->>王五: 很好... 王五, 你怎么样? \n"+
    "插入Mermaid流程图 \n"+
    "--------------------------- \n"+
    "[参考文档](https://mermaidjs.github.io/#/flowchart?id=graph) \n"+
    "mermaid \n"+
    "graph LR \n"+
    "A[长方形] -- 链接 --> B((圆)) \n"+
    "A --> C(圆角长方形) \n"+
    "B --> D{菱形} \n"+
    "C --> D \n"+
    "插入Flowchart流程图 \n"+
    "--------------------------- \n"+
    "[参考文档](http://flowchart.js.org/) \n"+
    "mermaid \n"+
    "flowchat \n"+
    "st=>start: 开始 \n"+
    "e=>end: 结束 \n"+
    "op=>operation: 我的操作 \n"+
    "cond=>condition: 确认？ \n"+
    "st->op->cond \n"+
    "cond(yes)->e \n"+
    "cond(no)->op \n";


export {MarkDownHelperText};
