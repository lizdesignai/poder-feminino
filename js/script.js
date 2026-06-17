/* ==========================================================================
   LÓGICA DO PRE-LOADER (Tela de carregamento)
   ========================================================================== */

window.addEventListener('load', function() {
    
    const telaDeCarregamento = document.getElementById('preloader');

    // Aumentamos o tempo para 2600 milissegundos (2.6 segundos).
    // Isso dá o tempo exato para a animação de desenho do CSS (2.5s) 
    // terminar e preencher a logo de branco, antes do pre-loader desaparecer suavemente.
    setTimeout(function() {
        
        telaDeCarregamento.classList.add('escondido');

    }, 2600); 
    
});