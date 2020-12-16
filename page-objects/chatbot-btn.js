module.exports = {

    url: 'https://dashboard.vutura.io/bot',

    elements: {
        ChatbotBtn: by.xpath("//div[@class='d-flex flex-row flex-sm-column justify-center align-center add-bot-card v-card v-card--link v-sheet theme--light']")
    },

    performClick: function () {

        var selector = page.chatbotBtn.elements.ChatbotBtn;
        return driver.findElement(selector).click();
    }
};