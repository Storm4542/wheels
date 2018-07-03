class Slides{
    constructor(options){
        this.options = options
        this.$element = $(this.options.el)
        this.current = 0 // 初始化位置
        this.timer = undefined //用来存储 setInterval的 名字。好用来stop 销毁
        this.initHtml()
        this.bindEvents()
    }
    initHtml(){
        this.$element.addClass('ztyslides') //放上自己的class
        this.width = this.$element.children('ol').children('li').width() 
        this.$element.width(this.width) //让视窗里面只显示一个图片
        this.$pre = $('<button class="ztypre">上一张</button>')
        this.$element.append(this.$pre)
        this.$next= $('<button class="ztynext">下一张</button>')
        this.$element.append(this.$next)
    }
    bindEvents(){
        this.$pre.on('click',()=>{this.pre()})
        this.$next.on('click',()=>{this.next()})
        if(this.options.autoplay){
            this.play()
        }
        if(this.options.controls){
            this.$element.on('mouseenter',()=>{ this.stop() }).on('mouseleave',()=>{this.play()})
        }
    }

    go(index){
        
        this.$ol = this.$element.children('ol')
        if(index >=this.$ol.children('li').length){
            index = 0
        }else if(index<0){
            index = this.$ol.children('li').length - 1
        }
        this.$ol.css({transform: `translateX(${-index*this.width}px)`})
        this.current = index
    }
    pre(){
        this.go(this.current - 1)
    }
    next(){
        this.go(this.current + 1)
    }
    play(){
        this.timer = setInterval(()=>{ this.go(this.current+1) },2000)
    }
    stop(){
        window.clearInterval(this.timer)
    }
}

var slides = new Slides({
    el:'.slides',
    autoplay:true,
    controls:true
})
