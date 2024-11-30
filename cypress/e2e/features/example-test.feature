Feature: This is an example

    Scenario Outline: I want to see the LetCode website
        Given I want to visit the LetCode website
        Then I see <title> title in the tab

        Examples:
            | title                   |
            | "LetCode - Testing Hub" |