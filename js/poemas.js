document.addEventListener('DOMContentLoaded', function() {
    const poetLinks = document.querySelectorAll('.botao-acesso');
    const poetTemplate = document.getElementById('poet-template');
    const poetDetails = document.getElementById('poet-details');
    const backButton = document.getElementById('back-button');
    const poemsSection = document.getElementById('poems');

    // Event listeners para os links de poemas
    poetLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const poetId = this.getAttribute('data-poet');
            showPoetTemplate(poetId);
        });
    });

    // Função para mostrar o template do poeta
    function showPoetTemplate(poetId) {
        poemsSection.style.display = 'none';
        poetTemplate.style.display = 'block';

        // Exemplo de conteúdo dinâmico
        if (poetId === 'cecilia-meireles') {
            poetDetails.innerHTML = `<h2>Poemas de Cecília Meireles</h2>
            <img src="imgs/poeta1.jpg" alt="Poeta 1">
            <p>Aqui estão alguns dos poemas de Cecília Meireles:</p>
            <h3>Ou isto ou aquilo</h3>
            <p class="poema-content">Nada é mais belo que o que não existe.<br>
            Nada é mais triste que o que já foi.<br>
            Nada é mais quente que o que é frio.<br>
            Nada é mais quente que o que é sonho.<br><br>            
            Nada é mais certo que o que é incerto.<br>
            Nada é mais novo que o que é velho.<br>
            Nada é mais livre que o que é preso.<br>
            Nada é mais louco que o que é sensato.<br><br>            
            Nada é mais doce que o que é amargo.<br>
            Nada é mais grande que o que é pequeno.<br>
            Nada é mais forte que o que é fraco.<br>
            Nada é mais firme que o que é bicho.<br><br>            
            E assim, na vida, há apenas uma escolha: Ou isto ou aquilo.<br>
            Ou isto ou aquilo.</p>
            <h3>Motivo</h3>
            <p class="poema-content">Eu sei que nada sei.<br>
            E sei que nada sei.<br>
            Nada sei, nada sei, nada sei,<br>
            E a coisa que mais sei é o que sei.<br><br>           
            Nada é mais triste do que o que não é<br>
            Mais do que o que é, mais do que o que foi,<br>
            Mais do que o que está, mais do que o que vai.<br><br>            
            Por isso eu sei que nada sei.<br>
            Mas sei que nada sei.</p>
            <h3>Crepúsculo</h3>
            <p class="poema-content last">O crepúsculo é uma flor que abre e fecha no céu.<br><br>           
            Não é o sol que se vai ou a noite que vem,<br>
            é um instante em que tudo parece esperar um novo dia.<br><br>            
            O crepúsculo é uma pausa entre o fim e o começo,<br>
            uma promessa de que há algo mais para além da escuridão e da luz.<br><br>           
            É o tempo em que os sonhos se tornam visíveis e os medos se dissolvem,<br>
            uma tela onde tudo é possível e nada é para sempre.<br><br>
            Espero que tenha gostado deste poema! Se quiser mais alguma coisa, é só me avisar.</p>`;
        }
         else if (poetId === 'carlos-drummond') {
            poetDetails.innerHTML = `<h2>Poemas de Carlos Drummond de Andrade</h2>
            <img src="imgs/poeta2.jpg" alt="Carlos Drummond de Andrade">
            <p>Aqui estão alguns dos poemas de Carlos Drummond de Andrade:</p>
            <h3>No Meio do Caminho</h3>
            <p class="poema-content">No meio do caminho tinha uma pedra<br>
            Tinha uma pedra no meio do caminho<br>
            Tinha uma pedra<br><br>
            No meio do caminho tinha uma pedra<br>
            Tinha uma pedra no meio do caminho<br>
            Tinha uma pedra<br><br>
            Nunca me esquecerei desse acontecimento<br>
            No meio do caminho tinha uma pedra<br>
            Tinha uma pedra no meio do caminho<br>
            No meio do caminho tinha uma pedra</p>
            <h3>A Máquina do Mundo</h3>
            <p class="poema-content">Quando a máquina do mundo começou a funcionar<br>
            Ninguém sabia que a vida era um imenso engano<br>
            Os homens estavam perdidos, à deriva<br>
            Sem saber se a luz que se acendia<br>
            Era a luz de uma aurora ou de um crepúsculo<br><br>
            Na imensidão dos dias e das horas<br>
            Os homens tentavam se encontrar<br>
            Entre a terra e o céu, entre o real e o sonho<br>
            E a máquina do mundo girava sem parar<br><br>
            Era o tempo do embate, da incerteza<br>
            Era o tempo das perguntas sem resposta<br>
            E a máquina do mundo, impiedosa,<br>
            Continuava seu movimento incessante</p>
            <h3>Alguma Poesia</h3>
            <p class="poema-content last">Não havia poesia naquelas horas<br>
            A poesia era uma coisa estranha, distante<br>
            Um silêncio que se fazia presente<br>
            Entre palavras que não diziam nada<br><br>
            A poesia era uma cidade sem ruas<br>
            Uma paisagem sem céu e sem mar<br>
            Uma sombra que passava, fugidia<br>
            E se perdia no horizonte do tempo<br><br>
            Não havia poesia nas tardes quentes<br>
            Nos dias nublados, nas noites sem fim<br>
            A poesia era um sonho adormecido<br>
            Que esperava a hora de despertar</p>`;
        } else if (poetId === 'manuel-bandeira') {
            poetDetails.innerHTML = `<h2>Poemas de Manuel Bandeira</h2>
            <img src="imgs/poeta3.jpg" alt="Manuel Bandeira">
            <p>Aqui estão alguns dos poemas de Manuel Bandeira:</p>
            <h3>Vou-me embora pra Pasárgada</h3>
            <p class="poema-content">Vou-me embora pra Pasárgada<br>
            Lá sou amigo do rei<br>
            Lá tenho a mulher que eu quero<br>
            Na cama que escolherei<br><br>
            Vou-me embora pra Pasárgada<br>
            Vou-me embora pra Pasárgada<br>
            Lá sou amigo do rei<br>
            Lá tenho a mulher que eu quero<br>
            Na cama que escolherei<br><br>
            Vou-me embora pra Pasárgada<br>
            Lá tenho a mulher que eu quero<br>
            Na cama que escolherei<br><br>
            Vou-me embora pra Pasárgada<br>
            Lá sou amigo do rei<br>
            Lá tenho a mulher que eu quero<br>
            Na cama que escolherei</p>
            <h3>O Bicho</h3>
            <p class="poema-content">Na calada da noite<br>
            O bicho<br>
            De repente<br>
            Aparece<br>
            Com a sua cabeça grande<br>
            E os olhos arregalados<br>
            E os dentes afiados<br><br>
            E o bicho<br>
            Olha pra você<br>
            E o bicho<br>
            Olha pra mim<br>
            E o bicho<br>
            Olha pra todos nós<br>
            E o bicho<br>
            Nos devora<br><br>
            E o bicho<br>
            Deixa um vazio<br>
            E o bicho<br>
            Deixa um medo<br>
            E o bicho<br>
            Deixa um silêncio<br>
            E o bicho<br>
            Deixa um desespero<br><br>
            E o bicho<br>
            Volta a desaparecer<br>
            E o bicho<br>
            Volta a sumir<br>
            E o bicho<br>
            Fica escondido<br>
            No fundo da noite</p>
            <h3>O Poeta do Povo</h3>
            <p class="poema-content last">Sou poeta do povo<br>
            E canto as dores e alegrias<br>
            De um povo que sofre e vive<br>
            Em cada um de seus dias<br><br>
            Canto as esperanças e os medos<br>
            Canto os sonhos e os pesadelos<br>
            Canto as vitórias e as derrotas<br>
            Canto as vidas e os anseios<br><br>
            Sou poeta do povo<br>
            E minha voz é a voz do povo<br>
            Minha canção é a canção do povo<br>
            E minha alma é a alma do povo<br><br>
            Canto a vida como ela é<br>
            Canto a vida como ela vive<br>
            Canto a vida como ela sente<br>
            E sou poeta do povo</p>`;
        } else if (poetId === 'paulo-leminski') {
            poetDetails.innerHTML = `<h2>Poemas de Paulo Leminski</h2>
            <img src="imgs/poeta4.webp" alt="Paulo Leminski">
            <p>Aqui estão alguns dos poemas de Paulo Leminski:</p>
            <h3>Coração</h3>
            <p class="poema-content">Eu gosto de te ver<br>
            Com teu amor carente<br>
            Teu amor me atende<br>
            Teu amor me faz bem<br><br>            
            Eu gosto de te ver<br>
            Com teu amor carente<br>
            Teu amor me atende<br>
            Teu amor me faz bem<br><br>            
            Eu gosto de te ver<br>
            Com teu amor carente<br>
            Teu amor me atende<br>
            Teu amor me faz bem<br><br>            
            Eu gosto de te ver<br>
            Com teu amor carente<br>
            Teu amor me atende<br>
            Teu amor me faz bem</p>
            <h3>De repente</h3>
            <p class="poema-content">De repente, não mais que de repente<br>
            Fez-se de repente<br>
            Fez-se de repente<br>
            O que se fez de repente<br>
            Um adeus<br><br>            
            E a vida, que não se detém, cessa<br>
            Cessa o grito, a luz, a força, a esperança<br>
            E o que era grande, a beleza, a lenda<br>
            Se fez de repente um adeus<br><br>            
            De repente, um gosto amargo<br>
            Um gosto amargo de cinza e dor<br>
            De repente, o que era amor se fez<br><br>            
            Apenas um remédio para dor<br>
            Um grito, um lamento, um pranto<br>
            E o que se fez de repente, se foi</p>
            <h3>Poema da Noite</h3>
            <p class="poema-content last">Eu vou dormir<br>
            Eu vou sonhar<br>
            Eu vou pensar em você<br>
            Eu vou te amar<br><br>            
            Eu vou dormir<br>
            Eu vou sonhar<br>
            Eu vou pensar em você<br>
            Eu vou te amar<br><br>            
            Eu vou dormir<br>
            Eu vou sonhar<br>
            Eu vou pensar em você<br>
            Eu vou te amar<br><br>            
            Eu vou dormir<br>
            Eu vou sonhar<br>
            Eu vou pensar em você<br>
            Eu vou te amar</p>`;
        } else if (poetId === 'cora-coralina') {
            poetDetails.innerHTML = `<h2>Poemas de Cora Coralia</h2>
            <img src="imgs/poeta5.jpg" alt="Cora Coralina">
            <p>Aqui estão alguns dos poemas de Cora Coralinna:</p>
            <h3>O Casamento da Dona Baratinha</h3>
            <p class="poema-content">Era uma vez uma baratinha<br>
            Muito bonita e vaidosa<br>
            Foi-se a casar e queria<br>
            A mais rica e formosa<br><br>         
            Muita festa e alegria<br>
            Na casa da baratinha<br>
            Mas o noivo, triste e só<br>
            Sofria pela dorzinha<br><br>           
            E ela muito triste<br>
            Com seu casório a se fazer<br>
            Só queria ser feliz<br>
            E a tristeza não entender<br><br>            
            Dona Baratinha<br>
            Com seu vestido de noiva<br>
            Foi a mais linda e formosa<br>
            Mas o noivo, triste, chorava</p>
            <h3>Minha Vida</h3>
            <p class="poema-content">Eu sou uma vida que se fez em versos<br>
            Entrelaçados, fugidios e intensos<br>
            Como o tempo, que é breve e é eterno<br>
            Como o amor, que é puro e sincero<br><br>            
            Eu sou a vida que se fez em palavras<br>
            Em cada canto, em cada estrada<br>
            Em cada sonho que se tornou realidade<br>
            Em cada gesto, em cada verdade<br><br>           
            Minha vida é feita de momentos<br>
            De alegrias, de dor e de sentimentos<br>
            E eu sou a vida que se faz em poesia<br>
            A vida que se vive a cada dia</p>
            <h3>Eu Não Sei</h3>
            <p class="poema-content last">Eu não sei<br>
            Por onde ando<br>
            Por onde vou<br>
            Mas vou<br><br>            
            Eu não sei<br>
            Se ando e se não ando<br>
            Se vou e se não vou<br>
            Mas vou<br><br>            
            Eu não sei<br>
            Se a vida é assim<br>
            Se é um sonho ou realidade<br>
            Mas vou<br><br>           
            Eu não sei<br>
            Se o tempo é breve ou eterno<br>
            Se o amor é sincero<br>
            Mas vou<br><br>            
            Eu vou<br>
            Sem saber, sem entender<br>
            Sem querer, sem temer<br>
            Eu vou</p>`;
        } else if (poetId === 'olavo-bilac') {
            poetDetails.innerHTML = `<h2>Poemas de Olavo Bilac</h2>
            <img src="imgs/poeta6.jpg" alt="Olavo Bilac">
            <p>Aqui estão alguns dos poemas de Olavo Bilac:</p>
            <h3>Via-Láctea</h3>
            <p class="poema-content">O céu, que é uma peça de origami<br>
            Desdobrada ao infinito, nos mostra<br>
            O grande manto de estrelas que brilha<br>
            Na imensidão do cosmos, como um símbolo<br><br>            
            De um mistério que fascina e que acalma<br>
            O homem que, perdido em seus anseios<br>
            Busca no firmamento a paz e a calma<br>
            E encontra na beleza o seu anseio<br><br>            
            A Via-Láctea, com seus braços de luz<br>
            Nos guia pelos caminhos do céu<br>
            E, em cada estrela, um sonho reluz<br><br>            
            E a vastidão do espaço, com seu véu<br>
            Nos faz sentir a grandeza e o mistério<br>
            Do universo, e o seu eterno império</p>
            <h3>O Caçador de Versos</h3>
            <p class="poema-content">Eu sou o caçador de versos<br>
            Aquele que anda pelos caminhos<br>
            Buscando, em cada passo, os sonetos<br>
            Que se escondem entre os espinhos<br><br>            
            Eu sou o poeta que não se cansa<br>
            De buscar a beleza na palavra<br>
            Que, em cada verso, se lança<br>
            A procura do sonho que lavra<br><br>            
            A minha caneta é a minha arma<br>
            E os versos são os meus troféus<br>
            Que eu conquisto com alma e com calma<br><br>          
            Eu sou o caçador que nunca para<br>
            E, em cada poema, me encontro e me declaro<br>
            O caçador de versos que se ampara</p>
            <h3>Toada</h3>
            <p class="poema-content last">As coisas, que eu não sei se eram ou são,<br>
            Que de mim se afastam e eu não posso entender,<br>
            São como a luz que oscila e vai ao chão<br>
            Como o sonho que não sabe acontecer.<br><br>            
            Eu me pergunto se as coisas são verdade<br>
            Ou se apenas no sonho acontecem.<br>
            E me interrogo, perdido em solidão,<br>
            Se as coisas são ou se não são.<br><br>            
            E quando, à noite, me deito a sonhar,<br>
            Eu vejo as coisas que de mim se afastam<br>
            Como se fossem fantasmas a vagar<br><br>           
            E a luz que oscila e vai ao chão<br>
            Me leva a crer que a vida é um sonho,<br>
            Um sonho que não sabe acontecer.</p>`;
        }
                      
    }

    // Event listener para o botão de voltar
    backButton.addEventListener('click', function() {
        poetTemplate.style.display = 'none';
        poemsSection.style.display = 'block';
    });
});