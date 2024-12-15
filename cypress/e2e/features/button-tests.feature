Feature: Button page tests

    Scenario Outline: Verify that the user sees the Button page
        Given User visits the LetCode website
        When User clicks on the Click button
        Then User sees <title> title in the tab
        * User sees the Click title

        Examples:
            | title                         |
            | "Interact with Button fields" |

    Scenario Outline: Verify that the user sees all buttons on the Buttons page
        Given User visits the <url> url
        Then User sees the Home button
        * User sees the Location button
        * User sees the Color button
        * User sees the Tall and fat button
        * User sees the Disabled button
        * User sees the Hold button

        Examples:
            | url        |
            | "/buttons" |

    Scenario Outline: Verify that the user sees the Home page when the Home button is clicked
        Given User visits the <url> url
        When User clicks on the Home button
        Then User sees <title> title in the tab

        Examples:
            | url        | title                  |
            | "/buttons" | "LetCode with Koushik" |

    Scenario Outline: Verify that the user sees the correct color on the Color button
        Given User visits the <url> url
        Then User see the correct color on the Color button

        Examples:
            | url        |
            | "/buttons" |
