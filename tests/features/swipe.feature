Feature: Swipe validations

  Background:
    Given I'm on the swipe screen

  Scenario: Swipe the carousel from first card to left
    When the app displays card with nthCard 'first' and text 'Fully Open Source'
      And I swipe to the left
    Then the app displays card with nthCard 'active' and text 'Creat community'

  Scenario: Swipe the carousel from second card to left
    When I swipe to the left
    Then the app displays card with nthCard 'active' and text 'JS.Foundation'

  Scenario: Swipe the carousel from third card to left
    When I swipe to the left
    Then the app displays card with nthCard 'active' and text 'Support Videos'

  Scenario: Swipe the carousel from fourth card to left twice
    When I swipe to the left
      And I swipe to the left
    Then the app displays card with nthCard 'active' and text 'Compatible'

  Scenario: Swipe the carousel to right
    When I swipe to the right
    Then the app displays card with nthCard 'active' and text 'Extendable'

  Scenario: Swipe the carousel to right four times to the first card
    When I swipe to the right
      And I swipe to the right
      And I swipe to the right
      And I swipe to the right
    Then the app displays card with nthCard 'first' and text 'Fully Open Source'