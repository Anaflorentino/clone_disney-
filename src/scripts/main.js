// Programando botões da navegação da seção de SHOWS
document.addEventListener('DOMContentLoaded', function() {
    // Selecionando todos os botões de navegação das guias
    const buttons = document.querySelectorAll('[data-tab-button]');
    // Selecionando todos os containers de guias
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    // Selecionando todas as perguntas
    const questions = document.querySelectorAll(`[data-faq-question]`);

    // Selecionando elementos da hero
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if (posicaoAtual > alturaHero) {
        ocultaElementosHeader();
    } else {
        exibeElementosHeader();
    }

    })


    function ocultaElementosHeader() {
        const header = document.querySelector('header');
        header.classList.add('header--is-hidden');
    
    }

    function exibeElementosHeader() {
        const header = document.querySelector('header');
        header.classList.remove('header--is-hidden');
    
    }
    // Iterando sobre cada botão de navegação
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(tabButton) {
            // Obtendo o ID da guia relacionada ao botão clicado
            const targetTab = tabButton.target.dataset.tabButton;
            // Selecionando a guia correspondente com base no ID
            const tab = document.querySelector(`[data-tab-id="${targetTab}"]`);
            // Ocultando todas as guias
            hideAllTabs();
            // Exibindo a guia correspondente ao botão clicado
            tab.classList.add('shows__list--is-active');
            // Chamando função para remover botão ativo/tab
            removeActiveButton();
            tabButton.target.classList.add(`shows__tabs__button--is-active`);
        })
    }

    // Adicionando comportamento de click as perguntas
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openOrCloseAnswer);
    }
})



// Função e fechar FAQ
function openOrCloseAnswer(element) {
const faqQuestion = 'faq__questions__item--is-open';
const fatherElement = element.target.parentNode;

fatherElement.classList.toggle(faqQuestion);
}

// Função para remover botão ativo da tab
function removeActiveButton() { 
const buttons = document.querySelectorAll(`[data-tab-button]`);

for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove(`shows__tabs__button--is-active`);
    }
}

// Função para ocultar todas as guias
function hideAllTabs() {
    // Selecionando todos os containers de guias
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    // Iterando sobre cada container de guias
    for (let i = 0; i < tabsContainer.length; i++) {
        // Removendo a classe de ativação de cada guia
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}
