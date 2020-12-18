# ./features/logout.feature

Feature:    
    As a user
    I want to be able to logout

    @success
    Scenario: User success to logout ont the website
        Given user browse login page
        And user fill email field
        And user fill password field
        And user click login button
        And user click burgermenu button
        When user click logout button
        Then user can see login page
