Feature: Login features
    Scenario Outline: Verify valid login
        Given user data has been loaded from '<ObjectRowName>'
        And user visits 'demoSite' application url
        When user set text 'validUsername' in element 'txtUsername' on 'Home' page
        And user set text 'validPassword' in element 'txtPassword' on 'Home' page
        And user clicks 'btnLogin' element in 'Home' page

        Examples:
            | ObjectRowName |
            | loginPageTC1  |

