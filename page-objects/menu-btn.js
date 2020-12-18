module.exports = {

    url: 'https://dashboard.vutura.io/bot',

    elements: {
        menuBtn: by.xpath("//i[@class='v-icon notranslate mdi mdi-menu theme--light white--text']")
    },

    performClick: function () {

        var selector = page.menuBtn.elements.menuBtn;
        return driver.findElement(selector).click();
    }
};
