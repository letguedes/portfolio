document.addEventListener('DOMContentLoaded', () => {
    
    // Cria o método de seleção da página
    
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            
            navLinks.classList.toggle('active');
        });
    }

   // Cria a marcação da página ativa

const linksNavegacao = document.querySelectorAll('.nav-links a');
const urlAtual = window.location.href; 
const urlBaseAtual = urlAtual.split('#')[0].split('?')[0]; 

linksNavegacao.forEach(link => {
    // Para cada link na navegação, pega a URL
    // Verifica o link de referenca 
    const urlLink = link.href.split('#')[0].split('?')[0]; 
    
    // Verifica se a URL é a mesma que a atualmente selecionada
    if (urlLink === urlBaseAtual) {
        link.classList.add('active');
    } 
    
    // Verifica se a URL se refere à pasta raiz (index)
    else if (link.getAttribute('href') === 'index.html') {
        
        // Pega a URL da pasta raiz
        const diretorioRaiz = urlLink.replace('index.html', '');
        
        // Se a URL terminar na raiz, é o Index
        if (urlBaseAtual === diretorioRaiz || urlBaseAtual.endsWith(diretorioRaiz)) {
             link.classList.add('active');
        }
    }
});


    // Validação de formulário
    
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o envio default

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();
            let isValid = true;
            let message = '';

            // Validação simples de preenchimento dos campos
            if (nome === '' || email === '' || mensagem === '') {
                isValid = false;
                message = 'Por favor, preencha todos os campos obrigatórios.';
            } else if (!email.includes('@') || !email.includes('.')) {
                // Validação do formato do e-mail
                isValid = false;
                message = 'Por favor, insira um endereço de e-mail válido.';
            }

            // Mostra o resultado da validação
            formMessage.classList.remove('hidden');

            if (isValid) {
                // Faz simulação de envio
                formMessage.textContent = 'Mensagem enviada com sucesso! Em breve entrarei em contato.';
                formMessage.style.color = 'green';
                contactForm.reset(); 
            } else {
                // Retorna mensagem com erro
                formMessage.textContent = message;
                formMessage.style.color = 'red';
            }
        });
    }
});