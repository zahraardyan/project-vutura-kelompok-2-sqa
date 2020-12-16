module.exports = function () {
    this.Given(/^user browse login page$/, function () {
        helpers.loadPage('https://dashboard.vutura.io/signIn')
    });

    this.Given(/^user fill email field$/, function () {
        driver.then(function () {
            return page.fieldEmail.performFill();

        });
    });
    
    this.Given(/^user fill password field$/, function () {
        driver.then(function () {
            return page.fieldPw.performFill();

        });
    });

    this.Given(/^user click login button$/, function () {
        driver.then(function () {
            return page.loginBtn.performClick();

        });
    });

    this.Given(/^user click Create Chatbot button$/, function () {
        driver.wait(until.elementsLocated(by.xpath("//div[@class='mb-0 mb-sm-6 white--text headline']")),30000).then(function () {
            return page.chatbotBtn.performClick();

        });
    });

    this.Given(/^user choose the avatar$/, function () {
        driver.wait(until.elementsLocated(by.xpath("//div[@class='px-5 mb-2']//div[3]//div[1]//img[1]")),30000).then(function () {
            return page.avatarBtn.performClick();

        });
    });
    
        this.Given(/^user fill chatbot name$/, function () {
        driver.then(function () {
            return page.fieldCbname.performFill();

        });
    });

    this.Given(/^user fill chatbot description$/, function () {
        driver.then(function () {
            return page.fieldCbdesc.performFill();

        });
    });

    this.When(/^user click Buat Chatbot button$/, function () {
        driver.then(function () {
            return page.buatchatbotBtn.performClick();

        });
    });

    this.Then(/^user see the new bot created$/, function () {
        return driver.findElements(by.xpath("//div[@class='ml-3 mr-auto mt-2']"))

            .then(function (elements){

                //verify this element has children
                expect(elements.length).to.equal(0);
            });
    });
}