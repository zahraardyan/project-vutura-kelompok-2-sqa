module.exports = {

    url: 'https://dashboard.vutura.io/signIn',

    elements: {
        fieldPw: by.xpath("//input[@id='password-login']")
    },

    performFill: function () {

        var selector = page.fieldPw.elements.fieldPw;
        return driver.findElement(selector).sendKeys(shared.id.pw);
    }
};
