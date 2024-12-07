Feature: This is an example

    Scenario Outline: Verify that the user sees the Input page
        Given User visits the LetCode website
        When User clicks on the Edit button
        Then User sees <title> title in the tab
        * User sees the Input title

        Examples:
            | title                        |
            | "Interact with Input fields" |


    Scenario Outline: Verify that the user sees all textboxes on the Input page
        Given User visits the <url> url
        Then User sees the Full Name textbox
        * User sees the Append textbox
        * User sees the Inside textbox
        * User sees the Clear textbox
        * User sees the Confirm textbox
        * User sees the Readonly textbox

        Examples:
            | url     |
            | "/edit" |

    Scenario Outline: Verify that the user can type a string on the Full Name textbox
        Given User visits the <url> url
        When User types <fullName> on the Full Name textbox
        Then User sees the <fullName> full name on the Full Name textbox

        Examples:
            | url     | fullName          |
            | "/edit" | "Davide Zanda"    |
            | "/edit" | "Salvatore Zanda" |
