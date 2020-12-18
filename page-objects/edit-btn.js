module.exports = {

    url: 'https://dashboard.vutura.io/account',

    elements: {
        editBtn: by.xpath("//button[@class='button float-right']")
    },

    performClick: function () {

        var selector = page.editBtn.elements.editBtn;
        return driver.findElement(selector).click();
    }
};
