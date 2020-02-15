Feature: Form validations

  Background:
    Given I'm on the forms screen

  Scenario: Type in the text field
    When I type 'Text for the type test' in the text box
    Then the text that was typed is displayed

  Scenario: Enable and disable the switch button
    When the switch button is in the disabled state
      And I click on the switch button
    Then the switch button is in the activated state

  Scenario: Select options from a Dropdown list
    When I select the 'This app is awesome' option from the list
    Then the text 'Dropdown This app is awesome'is displayed
    When I select the 'webdriver.io is awesome' option from the list
    Then the text 'Dropdown webdriver.io is awesome'is displayed
    When I select the 'Appium is awesome' option from the list
    Then the text 'Dropdown Appium is awesome'is displayed

  Scenario: Open the activation alert and close it with the Ask me later button
    When I click the activate button
    Then the app displays the activated alert
      And I click on the option 'Ask me later'
    Then the app hide the activated alert

  Scenario: Open the activation alert and close it with the Cancel button
    When I click the activate button
    Then the app displays the activated alert
      And I click on the option 'Cancel'
    Then the app hide the activated alert

  Scenario: Open the activation alert and close it with the OK button
    When I click the activate button
    Then the app displays the activated alert
      And I click on the option 'OK'
    Then the app hide the activated alert

  Scenario: Determine that the inactive button is inactive
    When I click the Inactive button
    Then the button does nothing

