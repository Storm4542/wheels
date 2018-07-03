class Suggestion{
    constructor(options){
        this.options = options
        this.$input = $(options.input) //绑定input
        this.$input.wrap('<div class="suggestion-wrap"></div>') 
        this.$wrap = this.$input.parent()
        this.suggestionList = $('<ul class="suggestionList"></ul>') //构建suggestionList
        this.$input.after(this.suggestionList) //把list放到 input 后面
        this.$loading = $('<div class="suggestion-loading"></div>') //构建loading
        this.$loading.html(this.options.loadingTemplate)
        this.$empty = $('<div class="suggestion-empty"></div>') //构建empty
        this.$empty.html(this.options.emptyTemplate)
        this.suggestionList.after(this.$empty) 
        this.suggestionList.after(this.$loading)
        this.eventsBind() //监听事件
    }
    eventsBind(){
        //underscore的方法，可以避免多次点选和多次查询,这里的this需要绑定
        var lazysearch = _.debounce(this.search.bind(this),300) 
        this.$input.on('input',(e)=>{
            this.suggestionList.empty();
            lazysearch(e.currentTarget.value);
        });
        this.suggestionList.on('click','li',(e)=>{
            this.$input.val($(e.currentTarget).text())
        })
    }
    search(keywords){
        this.$wrap.addClass('loading')
        this.$wrap.removeClass('empty')
        this.options.search(keywords,(array)=>{
            this.$wrap.removeClass('loading')
            if(!array || array.length === 0){
                this.$wrap.addClass('empty')
            }
            array.forEach(text => {
                this.suggestionList.append($('<li></li>').text(text))
            });

            
        })
    }


}



var suggestion = new Suggestion({
    input: '#el',
    search: function (text, callback) {
        if(text === '0'){
            return callback([])
        }
        let array = [];
        for (let i = 0; i < 5; i++) {
            let n = parseInt(Math.random()*100,10)
            array.push(text + n)
        }
        setTimeout(()=>callback(array),300)
    },
    loadingTemplate:'<b>正在加载中</b>',
    emptyTemplate : '<b>没找到</b>'
})