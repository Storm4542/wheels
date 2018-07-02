class Tabs {
    constructor(selector) {
        this.element = $(selector)
        this.init()
        this.bindEvents()
    }
    init() {
        this.element.each(function (index, element) {
            $(element).find('.tabs-bar>li').eq(0).addClass('active');
            $(element).find('.tabs-content>li').eq(0).addClass('active');
            //初始化，遍历一遍 .tabs ，找到所有的第一项，并显示
        })
    }
    bindEvents() {
        this.element.on('click', '.tabs-bar>li', function (e) {
            var $li = $(e.currentTarget); //点击项
            $li.addClass('active').siblings().removeClass('active');
            var $index = $li.index();
            var $content = $li.closest('.tabs').find('.tabs-content>li').eq($index) //注意：从里面找外面，不要从外面找
            $content.addClass('active').siblings().removeClass('active');
        })

    }

}

var tabs = new Tabs('.tabs');