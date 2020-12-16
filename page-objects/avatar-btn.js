module.exports = {

    url: 'https://dashboard.vutura.io/bot',

    elements: {
        AvatarBtn: by.xpath("//div[@class='px-5 mb-2']//div[3]//div[1]//img[1]")
    },

    performClick: function () {

        var selector = page.avatarBtn.elements.AvatarBtn;
        return driver.findElement(selector).click();
    }
};