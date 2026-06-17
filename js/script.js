/* ==========================================================================
   ENGINE DO PRE-LOADER: Efeitos Premium e Performance de Alto Nível
   ========================================================================== */

const PreloaderCore = {
    // 1. Configurações Iniciais
    element: document.getElementById('preloader'),
    icones: [
        'assets/images/Ativo 1.png',
        'assets/images/Ativo 4.png',
        'assets/images/Ativo 5.png'
    ],
    quantidadeParticulas: 18, // Número de ícones flutuando na tela

    // 2. Método de Inicialização
    init() {
        if (!this.element) return; // Trava de segurança
        this.criarMosaicoGlow();
        this.iniciarCarregamento();
    },

    // 3. A Mágica: Criação Matemática do Mosaico Sedutor
    criarMosaicoGlow() {
        // DocumentFragment: Cria os elementos "escondidos" na memória primeiro 
        // para não causar travamentos na tela. (Prática Sênior)
        const fragmento = document.createDocumentFragment();

        for (let i = 0; i < this.quantidadeParticulas; i++) {
            const img = document.createElement('img');
            
            // Sorteia um dos 3 ícones da identidade visual
            const iconeSorteado = this.icones[Math.floor(Math.random() * this.icones.length)];
            img.src = iconeSorteado;
            img.classList.add('icone-mosaico');

            // --- Cálculos Matemáticos de Aleatoriedade ---
            const tamanho = Math.random() * 35 + 15; // Tamanho: de 15px a 50px
            const posX = Math.random() * 100; // Posição Horizontal (0 a 100vw)
            const posY = Math.random() * 100; // Posição Vertical (0 a 100vh)
            
            const desfoque = Math.random() * 5; // Nível de Blur (0 a 5px) para criar profundidade
            const atraso = Math.random() * 2; // Quando começa a animar
            const duracao = Math.random() * 3 + 3; // Quanto tempo dura a dança (3s a 6s)
            
            // Injeção de variáveis CSS dinâmicas (A Dança)
            const movX = (Math.random() * 60 - 30) + 'px'; // Vai para a esquerda ou direita
            const movY = (Math.random() * 60 - 30) + 'px'; // Vai para cima ou para baixo
            const rotacao = (Math.random() * 120 - 60) + 'deg'; // Gira levemente
            const opacidadeMax = Math.random() * 0.3 + 0.1; // Fica sutil, sem ofuscar a logo

            // --- Aplicação dos Estilos Inline ---
            img.style.width = `${tamanho}px`;
            img.style.left = `${posX}vw`;
            img.style.top = `${posY}vh`;
            // Aplica o blur e o glow dourado exigido
            img.style.filter = `blur(${desfoque}px) drop-shadow(0 0 10px rgba(216, 193, 170, 0.7))`;
            img.style.animationDuration = `${duracao}s`;
            img.style.animationDelay = `${atraso}s`;
            
            // Enviando a matemática do JS direto para o CSS
            img.style.setProperty('--mov-x', movX);
            img.style.setProperty('--mov-y', movY);
            img.style.setProperty('--rotacao', rotacao);
            img.style.setProperty('--opacidade-max', opacidadeMax);

            // Adiciona a partícula ao fragmento invisível
            fragmento.appendChild(img);
        }

        // Despeja tudo na tela de uma única vez (Performance Extrema)
        this.element.appendChild(fragmento);
    },

    // 4. Lógica de Desaparecimento e Limpeza de Memória
    iniciarCarregamento() {
        window.addEventListener('load', () => {
            // Aumentei o tempo para 3.2 segundos (3200ms) para que o usuário 
            // tenha tempo de apreciar o mosaico sedutor e a logo gigante sendo desenhada.
            setTimeout(() => {
                
                this.element.classList.add('escondido'); // Fade Out
                
                // Extermina o elemento da memória do celular após a transição acabar
                setTimeout(() => {
                    this.element.remove();
                }, 800);

            }, 3200); 
        });
    }
};

// Dispara o motor assim que o navegador lê o arquivo
PreloaderCore.init();