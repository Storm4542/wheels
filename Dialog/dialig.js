class Dialog {
    constructor(options) {
        this.options = options
        this.init() //初始化html模板
    }
    get template() {
        let { title, content } = this.options;
        return `
        <div class='ztyDialog'>
            <div class='ztyWraper'>
                <header>${title}</header>
                <main>${content}</main>
                <footer></footer>
            </div>
        </div>
    `
    }
    generateButtons() {
        let { buttons } = this.options
        let newbuttons = buttons.map((buttonOption) => {
            let $b = $('<button></button>')
            $b.text(buttonOption.text)
            $b.on('click', buttonOption.action)
            return $b
        })
        return newbuttons
    }
    init() {
        let { className } = this.options;
        var $dialog = $(this.template)
        $dialog.find('footer').append(this.generateButtons())
        $dialog.addClass(className)
        this.$dialog = $dialog
    }
    open() {
        this.$dialog.appendTo('body')
    }
    close() {
        this.$dialog.detach()
    }
}

x.onclick = function () {
    var dialog = new Dialog({
        title: '标题',
        content: '112233',
        className: 'userclass',
        buttons: [
            { text: '确定', action: function () { alert('确定') } },
            { text: '取消', action: function () { dialog.close(); } }
        ]
    });
    dialog.open()

}
