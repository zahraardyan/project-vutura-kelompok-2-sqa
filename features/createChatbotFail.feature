# ./features/createChatbotFail.feature

Feature: Create Chatbot on Vutura.io website
    As a user
    I want to be able to Create a Chatbot

    @failed
    Scenario: Failed to Create Chatbot on Vutura.io website
        Given user browse login page (failed)
        And user fill email field (failed)
        And user fill password field (failed)
        And user click login button (failed)
        And user click Create Chatbot button (failed)
        And user choose the avatar (failed)
        And user fill chatbot name (failed)
        When user click Buat Chatbot button (failed)
        Then user see the the failed to create bot notification