module.exports = {

    url: 'https://dashboard.vutura.io/bot',

    elements: {
        BuatChatbotBtn: by.xpath("//span[@class='v-btn__content'][normalize-space()='Buat Chatbot']")
    },

    performClick: function () {

        var selector = page.buatchatbotBtn.elements.BuatChatbotBtn;
        return driver.findElement(selector).click();
    }
};