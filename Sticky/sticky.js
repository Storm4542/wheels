class Sticky {
    constructor(selector, offset) {
        this.offset = offset || 0
        this.selector = $(selector)
        this.offsets = []
        this.offsetCache() //存储所有的offset
        this.addPlacehoder() //加占位的div
        this.ListenScoll() //监听滑动
    }
    offsetCache() {
        this.selector.each((index, element) => {
            this.offsets[index] = $(element).offset()
        })
    }
    addPlacehoder() {
        this.selector.each((index,element)=>{
            $(element).wrap('<div class="stickPlacehoder"></div>');
            $(element).parent().height($(element).height()) //占位的高度等于自己的高度
        })
    }
    ListenScoll() {
        this.selector.each((index, element) => {
            $(window).on('scroll', () => {
                var scrolltop = window.scrollY;
                if (scrolltop + this.offset > this.offsets[index].top ) {
                    this.selector.addClass('sticky').css('top',this.offset)
                }else{
                    this.selector.removeClass('sticky')
                }
            })
        })

    }
}
new Sticky('#btn',150)
new Sticky('#topbar')