module.exports = {

    url: 'https://dashboard.vutura.io/bot',

    elements: {
        profilBtn: by.xpath("//div[contains(text(),'Profil')]")
    },

    performClick: function () {

        var selector = page.profilBtn.elements.profilBtn;
        return driver.findElement(selector).click();
    }
};
