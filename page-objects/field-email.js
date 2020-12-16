module.exports = {

    url: 'https://dashboard.vutura.io/signIn',

    elements: {
        fieldEmail: by.xpath("//input[@id='email-login']")
    },

    performFill: function () {

        var selector = page.fieldEmail.elements.fieldEmail;
        return driver.findElement(selector).sendKeys(shared.id.email);
    }
};
