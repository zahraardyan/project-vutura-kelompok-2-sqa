# ./features/edit.feature

Feature: edit profile on the website
    As a user
    I want to be able to edit profile

    @success
    Scenario: User Success to edit profile on the website
        Given user browse signin page
        And user fill email field
        And user fill password field
        And user click login button
        And user click menu button
        And user click profil button
        And user click edit button
        And user fill name field
        And user fill business field
        And user fill number field
        When user click restore button
        Then user see the profile edited
