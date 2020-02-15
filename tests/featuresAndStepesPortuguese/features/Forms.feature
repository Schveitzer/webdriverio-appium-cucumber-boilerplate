# language: pt

Funcionalidade: Validações do form

  Contexto:
    Dado eu estou na tela de forms

  Cenário: Digitar no campo de texto
    Quando Eu digito o texto 'Text for the type test' na caixa de texto
    Então é exibido o texto que foi digitado

  Cenário: Habilitar e desabilitar o botão de switch
    Quando o botão de switch está desabilitado
      E eu clico no botão swtich
    Então o botão switch fica habilitado

  Cenário: Selecionar opções em uma lista
    Quando Eu seleciono a opção 'This app is awesome' da lista
    Então é exibido o texto 'Dropdown This app is awesome'
    Quando Eu seleciono a opção 'webdriver.io is awesome' da lista
    Então é exibido o texto 'Dropdown webdriver.io is awesome'
    Quando Eu seleciono a opção 'Appium is awesome' da lista
    Então é exibido o texto 'Dropdown Appium is awesome'

  Cenário: Abrir o alerta de ativação e fechar ele através do botão Ask me later
    Quando eu clico no botão Activate
    Então o app exibe o alerta de ativação
      E eu clico na opção 'Ask me later'
    Então o app esconde o alerta de ativação

  Cenário: Abrir o alerta de ativação e fechar ele através do botão Cancel
    Quando eu clico no botão Activate
    Então o app exibe o alerta de ativação
      E eu clico na opção 'Cancel'
    Então o app esconde o alerta de ativação

  Cenário: Abrir o alerta de ativação e fechar ele através do botão OK
    Quando eu clico no botão Activate
    Então o app exibe o alerta de ativação
      E eu clico na opção 'OK'
    Então o app esconde o alerta de ativação

  Cenário: Validar se o botão inactive esta inativo
    Quando eu clico no botão Inactive
    Então o botão não faz nada

