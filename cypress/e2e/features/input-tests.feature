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

    Scenario Outline: Verify that the user can append a text on the Append textbox
        Given User visits the <url> url
        When User types <stringAppended> on the Append textbox
        Then User sees the original string with the <stringAppended> string appended on the Append textbox

        Examples:
            | url     | stringAppended    |
            | "/edit" | " guy."           |
            | "/edit" | " on all sports." |

    Scenario Outline: Verify that the user sees the correct text on the Inside textbox
        Given User visits the <url> url
        Then User sees the correct string on the Inside textbox
        
        Examples:
            | url     |
            | "/edit" |

    Scenario Outline: Verify that the user can delete a text on the Clear texbox
        Given User visits the <url> url
        When User deletes the string on the Clear textbox
        Then User sees an empty string on the Clear texbox

        Examples:
            | url     |
            | "/edit" |

    Scenario Outline: Verify that the user sees the Confirm textbox disabled
        Given User visits the <url> url
        Then User sees the Confirm texbox disabled
        
        Examples:
            | url     |
            | "/edit" |