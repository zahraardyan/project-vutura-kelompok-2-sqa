# ./features/createChatbot.feature

Feature: Create Chatbot on Vutura.io website
    As a user
    I want to be able to Create a Chatbot

    @success
    Scenario: Create Chatbot on Vutura.io website
        Given user browse login page
        And user fill email field
        And user fill password field
        And user click login button
        And user click Create Chatbot button
        And user choose the avatar
        And user fill chatbot name
        And user fill chatbot description
        When user click Buat Chatbot button
        Then user see the new bot created