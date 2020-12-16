module.exports = {

    url: 'https://dashboard.vutura.io/bot',

    elements: {
        fieldCBName: by.xpath("//input[@id='input-94']")
    },

    performFill: function () {

        var selector = page.fieldCbname.elements.fieldCBName;
        return driver.findElement(selector).sendKeys(shared.chatbotid.cbname);
    }
};
