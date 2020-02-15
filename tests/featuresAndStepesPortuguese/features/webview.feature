# language: pt
  
Funcionalidade: Validações em um app Webview

  Contexto:
    Dado eu estou na tela de webview

  Cenário: Efetuar ações na página de API no contexto de webview
    Quando eu troco o contexto para webview
      E eu clino em API para abrir o Api docs
      E eu clico para abrir o menu do site
      E eu clico na opção do menu 'Webdriver Protocol'
    Então a página com o titúlo 'Webdriver Protocol' é aberta
      E eu troco o contexto para nativo

  Cenário: trocar entre webview, nativo e webview
    Quando eu troco o contexto para webview
      E eu clino em API para abrir o Api docs
      E eu troco o contexto para nativo
      E eu clico no botão para abrir a tela de swipe
    Então o app exibe o card com o nthCard 'active' e o texto 'Creat community'
    Quando eu clico no botão webview
      E eu troco o contexto para webview
      E eu clico para abrir o menu do site
      E eu clico na opção do menu 'Webdriver Protocol'
    Então a página com o titúlo 'Webdriver Protocol' é aberta

