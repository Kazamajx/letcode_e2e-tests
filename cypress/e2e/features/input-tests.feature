Feature: This is an example

    Scenario Outline: Verify that the user sees the Input page
        Given User visits the LetCode website
        When User clicks on the Edit button
        Then User sees <title> title in the tab
        * User sees the Input title

        Examples:
            | title                        |
            | "Interact with Input fields" |