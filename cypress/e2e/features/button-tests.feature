Feature: Input page tests

    Scenario Outline: Verify that the user sees the Input page
        Given User visits the LetCode website
        When User clicks on the Click button
        Then User sees <title> title in the tab
        * User sees the Click title

        Examples:
            | title                         |
            | "Interact with Button fields" |