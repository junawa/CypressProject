Feature: Front-End Testing
    Scenario Outline: Home Page Verification
        Given user data has been loaded from '<ObjectRowName>'
        And user visits 'localhost' application url
        Then user should see it contains 'usdBalance' in element 'lblUSDBalance' on 'FrontEnd' page
        And user should see it contains 'coinA' in element 'lblCoinA' on 'FrontEnd' page
        And user should see it contains 'coinB' in element 'lblCoinB' on 'FrontEnd' page
        And user should see it contains 'coinC' in element 'lblCoinC' on 'FrontEnd' page
        And user should see it contains 'coinD' in element 'lblCoinD' on 'FrontEnd' page
        And user should see increasing value of element 'lblCoinBPrice' on 'FrontEnd' page
        Examples:
            | ObjectRowName |
            | frontEndTC1   |

    Scenario Outline: User Transaction - Buying Coins
        Given user data has been loaded from '<ObjectRowName>'
        And user visits 'localhost' application url
        When user set text 'coinAToBuy' in element 'txtCoinA' on 'FrontEnd' page
        And user clicks 'btnCoinABuy' element in 'FrontEnd' page
        Then user should see it contains 'coinAToBuy' in element 'lblCoinAOwned' on 'FrontEnd' page
        #Then assert market value

        Examples:
            | ObjectRowName |
            | frontEndTC2   |