# ./features/editfail.feature

Feature: edit profile on the website
    As a user
    I want to be able to edit profile

    @failed
    Scenario: User failed to edit profile on the website
        Given user browse signin page (failed)
        And user fill email field (failed)
        And user fill password field (failed)
        And user click login button (failed)
        And user click menu button (failed)
        And user click profil button (failed)
        And user click edit button (failed)
        And user fill name field (failed)
        And user fill business field (failed)
        And user fill number field (failed)
        When user click restore button (failed)
        Then user see failed the profile edited
