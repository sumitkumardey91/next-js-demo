Feature: Login authentication with multiple outcomes

  Scenario: Login validation for success and error cases
    Given user is on login page
    When user tries to login with credentials
      | username | password   | result  | message                          |
      | admin    | admin123   | success | Dashboard Entered                |
      | admin    | wrong123   | error   | Invalid username or password     |
      |          |            | error   | Username and password required   |
    Then login result should be validated