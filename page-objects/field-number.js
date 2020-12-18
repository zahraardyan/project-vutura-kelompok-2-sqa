module.exports = {

    url: 'https://dashboard.vutura.io/account',

    elements: {
        fieldNumber: by.xpath("//input[@placeholder='Telepon']")
    },

    performFill: function () {

        var selector = page.fieldNumber.elements.fieldNumber;
        return driver.findElement(selector).sendKeys(shared.profileid.number);
    }
};