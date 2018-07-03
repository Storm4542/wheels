# wheels
## 1.Tabs

基于 Jquery

必须使用以下Html结构

```html
	<div class="tabs">
        <ol class="tabs-bar">
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ol>
        <ol class="tabs-content">
            <li>content1</li>
            <li>content2</li>
            <li>content3</li>
        </ol>
    </div>
```

使用方法

```javascript
new Tabs('.tabs');
```

## 2.Sticky

基于 Jquery

注意 ： 元素的宽度需要自己在CSS中写入，否则可能造成页面混乱

默认CSS

```css
.sticky{
    position: fixed;
    top: 0;
    left: 0;
}
```

若需要自己添加宽度，可以

```css
#content.sticky{
  width:100%
}
```

使用方法

```javascript
new Sticky('#content[.content,Element]',offsetTop)
//例如
new Sticky('button',150)
new Sticky('#topbar')
```

### 3.Dialog

基于Jquery

使用方法

```javascript
var dialog = new Dialog({
      title:'标题',
      content:'112233',
      className:'userclass',
      buttons:[
        {text:'确定',action:function(){ alert('确定')}},
        {text:'取消',action:function(){  dialog.close();}}
      ]
    });
    dialog.open()
```

用户可以传入 title,content,className,buttons的属性

其中 className 是用户自己写入，如不写，则使用默认CSS样式

提供两个API `.open` 和 `.close` 用于关闭和打开，并可以传入回调函数

### 4.Suggestion

基于Jquery，underscore

使用方法

```javascript
var suggestion = new Suggestion({
    input: '#el',
    search: function (text, callback) {
       //text 是传入的字符串
      // callback回调需要返回一个结果，该结果数据结构为数组
    },
    loadingTemplate:'<b>正在加载中</b>',
    emptyTemplate : '<b>没找到</b>'
})
```

