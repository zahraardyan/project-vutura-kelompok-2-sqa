module.exports = {

    url: 'https://dashboard.vutura.io/signIn',

    elements: {
        fieldName: by.xpath("//input[@placeholder='Nama']")
    },

    performFill: function () {

        var selector = page.fieldName.elements.fieldName;
        return driver.findElement(selector).sendKeys(shared.profileid.name);
    }
};