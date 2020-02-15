Feature: Validações do Swipe

  Background:
    Given eu estou na tela de swipe

  Scenario: Deslizar o carrossel apartir do primeiro card para a esquerda
    When o app exibe o card com o nthCard 'first' e o texto 'Fully Open Source'
      And eu deslizo para a esquerda
    Then o app exibe o card com o nthCard 'active' e o texto 'Creat community'

  Scenario: Deslizar o carrossel apartir do segundo card para a esquerda
    When eu deslizo para a esquerda
    Then o app exibe o card com o nthCard 'active' e o texto 'JS.Foundation'

  Scenario: Deslizar o carrossel apartir do terceiro card para a esquerda
    When eu deslizo para a esquerda
    Then o app exibe o card com o nthCard 'active' e o texto 'Support Videos'

  Scenario: Deslizar o carrossel apartir do quarto card para a esquerda
    When eu deslizo para a esquerda
      And eu deslizo para a esquerda
    Then o app exibe o card com o nthCard 'active' e o texto 'Compatible'

  Scenario: Delizar o carrosel para a direita
    When eu deslizo para a direita
    Then o app exibe o card com o nthCard 'active' e o texto 'Extendable'

  Scenario: Deslizar o carrossel para a direita quatro vezes voltando para o primeiro card
    When eu deslizo para a direita
      And eu deslizo para a direita
      And eu deslizo para a direita
      And eu deslizo para a direita
    Then o app exibe o card com o nthCard 'first' e o texto 'Fully Open Source'