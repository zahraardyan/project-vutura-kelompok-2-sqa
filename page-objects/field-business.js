module.exports = {

    url: 'https://dashboard.vutura.io/account',

    elements: {
        fieldBusiness: by.xpath("//input[@placeholder='Nama Bisnis']")
    },

    performFill: function () {

        var selector = page.fieldBusiness.elements.fieldBusiness;
        return driver.findElement(selector).sendKeys(shared.profileid.business);
    }
};