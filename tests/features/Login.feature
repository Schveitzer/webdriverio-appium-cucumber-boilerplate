Feature: Login validations

  Background:
    Given I'm on the login screen

  Scenario Outline: Displays warning message when logging in with invalid credentials
    When I try to log in with credentials; email: '<Email>' and password: '<Password>'
    Then app displays a message that the credentials are invalid

    Examples:
      | Email       | Password  |
      | user@123456 | 12346.346 |
      | 3243g@user  | /12346569 |

  Scenario: Displays login successfully, when entering valid credentials
    When I log in with the user'Administrator'
    Then app displays alert of successful login
