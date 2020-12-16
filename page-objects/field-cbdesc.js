module.exports = {

    url: 'https://dashboard.vutura.io/bot',

    elements: {
        fieldCBDesc: by.xpath("//textarea[@id='input-97']")
    },

    performFill: function () {

        var selector = page.fieldCbdesc.elements.fieldCBDesc;
        return driver.findElement(selector).sendKeys(shared.chatbotid.cbdesc);
    }
};
