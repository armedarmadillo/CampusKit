Feature: Home screen
  In order to be relevant
  The users
  Should be able to visit our web site

Scenario: Home screen
  Given I am on the home page
  Then I should see the home page

Scenario: Native iOS Home screen
  Given I am on the Native iOS home page
  And I click "No thanks"
  Then I should see the home page