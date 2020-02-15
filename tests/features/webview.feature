Feature: Webview validations

  Background:
    Given I'm on the webview screen

  Scenario: Open call action on the API page in webview context
    When I change the context to webview
      And I click on API to open Api Docs
      And I click to open site menu
      And I click to open 'Webdriver Protocol' option in menu
    Then the page with the title 'Webdriver Protocol' is opened
      And I change the context to native

  Scenario: switch between webview, native and webview
    When I change the context to webview
      And I click on API to open Api Docs
      And I change the context to native
      And I'm click swipe screen button
    Then the app displays card with nthCard 'active' and text 'Creat community'
    When I'm click Webview screen button
      And I change the context to webview
      And I click to open site menu
      And I click to open 'Webdriver Protocol' option in menu
    Then the page with the title 'Webdriver Protocol' is opened

