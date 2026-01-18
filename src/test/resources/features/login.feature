Feature: Saucedemo Login

  Scenario: Successful login with valid credentials
    Given user navigates to saucedemo login
    When user enters username "standard_user"
    And user enters password "secret_sauce"
    And user submits login
    Then user should see inventory page

  Scenario: Login fails with wrong password
    Given user navigates to saucedemo login
    When user enters username "standard_user"
    And user enters password "wrongpass"
    And user submits login
    Then error message should be shown

  Scenario: Login fails with empty username
    Given user navigates to saucedemo login
    When user enters username ""
    And user enters password "secret_sauce"
    And user submits login
    Then error message should be shown
