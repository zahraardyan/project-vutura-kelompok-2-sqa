module.exports = {

    url: 'https://dashboard.vutura.io/signIn',

    elements: {
        loginBtn: by.xpath("//button[@id='login-button']")
    },

    performClick: function () {

        var selector = page.loginBtn.elements.loginBtn;
        return driver.findElement(selector).click();
    }
};