document.addEventListener('DOMContentLoaded', function() {
    const bookLinks = document.querySelectorAll('.book-link');
    const bookTemplate = document.getElementById('book-template');
    const bookDetails = document.getElementById('book-details');
    const backButton = document.getElementById('back-button');
    const booksSection = document.getElementById('books');
    const about = document.getElementById('about');

    bookLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const bookId = this.getAttribute('data-book');
            showBookTemplate(bookId);
        });
    });

    function showBookTemplate(bookId) {
        about.style.display = 'none'
        booksSection.style.display = 'none';
        bookTemplate.style.display = 'block';
        
        if (bookId === 'resumo1') {
            bookDetails.innerHTML = `<h2>Orgulho e Preconceito</h2> 
            <img src="imgs/livro1.jpg"> 
            <p class="autor">Autor(a): <b>Jane Austin</b></p>
            <p>O romance inicia com a chegada do rico e orgulhoso Mr. Darcy à vizinhança dos Bennet, uma família de classe média na Inglaterra do século XIX. A principal protagonista, Elizabeth Bennet, é uma jovem de espírito livre e opinião forte. Ela e suas quatro irmãs enfrentam a pressão social para casar bem, mas Elizabeth é particularmente crítica das normas rígidas de classe e comportamento. O romance entre Elizabeth e Darcy começa com desentendimentos e antipatia mútua. Darcy é visto como arrogante e antipático, enquanto Elizabeth é considerada preconceituosa e julgadora.<br><br>
            Conforme a história avança, Darcy tenta corrigir suas falhas e se revela uma pessoa mais complexa do que inicialmente aparentava. Ele ajuda a resolver uma crise na família Bennet e faz um gesto significativo de reparação. Por outro lado, Elizabeth começa a entender as verdadeiras intenções de Darcy e a perceber suas próprias falhas de julgamento. Através de cartas e encontros significativos, ambos enfrentam e superam seus orgulhos e preconceitos, culminando em uma nova compreensão e respeito mútuo.<br><br>
            A narrativa oferece uma crítica sutil das normas sociais da época, explorando questões de classe, casamento e moralidade com um toque de ironia. Os personagens são desenvolvidos com profundidade, e o romance proporciona uma reflexão sobre a importância da comunicação e da compreensão na construção de relacionamentos saudáveis. O livro termina com a união de Elizabeth e Darcy, que simboliza a superação dos obstáculos sociais e pessoais.</p>
            <a href="https://reciclaleitores.com.br/wp-content/uploads/2020/10/ORGULHO-E-PRECONCEITO-Austen-Jane.pdf" target="_blank">Livro Completo</a>`;
        } else if (bookId === 'resumo2') {
            bookDetails.innerHTML = `<h2>1984</h2>
            <img src="imgs/livro2.jpg"> 
            <p class="autor">Autor: <b>George Orwell</b></p>
            <p>Em uma sociedade distópica governada pelo Partido, liderado pelo enigmático Grande Irmão, o romance segue Winston Smith, um membro do Partido que trabalha no Ministério da Verdade, onde é responsável por reescrever documentos históricos para que se alinhem à versão oficial do governo. Nesta sociedade, a vigilância é constante, e o controle do pensamento é imposto por meio do "duplipensar", uma técnica de manipulação mental que força os cidadãos a aceitarem simultaneamente ideias contraditórias.<br><br>
            Winston começa a questionar a realidade opressiva que o cerca e, em sua busca por liberdade, inicia um relacionamento com Julia, uma colega que também se opõe secretamente ao regime. Juntos, eles procuram se unir à Irmandade, um suposto movimento rebelde contra o Partido. No entanto, suas esperanças são rapidamente frustradas quando são traídos e capturados pela polícia secreta do Partido.<br><br>
            O romance explora temas como totalitarismo, vigilância, e a destruição da verdade e da liberdade individual. A história se intensifica com a tortura psicológica e física de Winston, forçado a renunciar às suas convicções e a amar o Grande Irmão. A narrativa revela o poder devastador da opressão estatal e o impacto profundo da manipulação mental na psique humana. O livro termina com a completa submissão de Winston ao regime totalitário, destacando a eficácia da repressão em destruir qualquer forma de resistência.</p>
            <a href="https://multimidia.gazetadopovo.com.br/media/info/2022/202209/1984/e-book-1984.pdf" target="_blank">Livro Completo</a>`;
        } else if (bookId === 'resumo3') {
            bookDetails.innerHTML = `<h2>O Senhor dos Anéis: A Sociedade do Anel</h2>
            <img src="imgs/livro3.webp"> 
            <p class="autor">Autor: <b>J.R.R. Tolkien</b></p>
            <p>A primeira parte da trilogia de "O Senhor dos Anéis" começa com Frodo Bolseiro, um jovem hobbit que leva uma vida pacata na Comarca. Sua existência muda radicalmente quando herda o Um Anel, um artefato mágico criado pelo maligno Senhor das Trevas, Sauron, com o propósito de dominar todas as raças da Terra Média. O anel, com seu poder corruptor, representa um enorme perigo, e Frodo é encarregado de destruí-lo no Monte da Perdição, o único lugar onde pode ser completamente aniquilado.<br><br>
            Para cumprir essa missão, Frodo é acompanhado por uma Sociedade formada por amigos e aliados: o misterioso Aragorn, o arqueiro elfo Legolas, o guerreiro anão Gimli, o humano Boromir, e o mago Gandalf, além de seus companheiros hobbits Sam, Merry e Pippin. A jornada da Sociedade é repleta de perigos, incluindo ataques de orcs, emboscadas de criaturas malignas, e traições internas. Eles enfrentam desafios que testam sua coragem, habilidades e lealdades, enquanto o poder tentador do anel ameaça corromper até os mais fortes.<br><br>
            A narrativa explora temas como amizade, coragem, sacrifício e o impacto do poder sobre os indivíduos. Cada membro da Sociedade desempenha um papel crucial na proteção de Frodo e no avanço da missão. A história termina com a Sociedade se dividindo, preparando o terreno para as aventuras e batalhas subsequentes que irão moldar o destino da Terra Média.</p>
            <a href="https://elivros.digital/wordpress/wp-content/files/elivros.digital/2023/03/1-a-sociedade-do-anel-jrr-tolkien.pdf" target="_blank">Livro Completo</a>`;
        } else if (bookId === 'resumo4') {
            bookDetails.innerHTML = `<h2>Dom Casmurro</h2>
            <img src="imgs/livro4.jpg"> 
            <p class="autor">Autor: <b>Machado de Assis</b></p>
            <p>O romance é narrado por Bentinho Santiago, um homem de meia-idade que reflete sobre seu passado, buscando entender se sua esposa, Capitu, o traiu com seu melhor amigo, Escobar. Bentinho, também conhecido como Dom Casmurro, relembra sua juventude, sua amizade com Escobar e seu casamento com Capitu, sempre questionando a verdade por trás dos acontecimentos.<br><br>
            A narrativa é marcada pela subjetividade e introspecção de Bentinho, levando o leitor a desconfiar da veracidade de suas percepções. O livro explora temas como ciúmes, dúvida e a complexidade da natureza humana. A perspectiva ciumenta e insegura de Bentinho revela as dinâmicas de seu relacionamento com Capitu e lança dúvidas sobre a suposta traição.<br><br>
            O romance termina em uma ambiguidade deliberada, sem fornecer uma resposta clara sobre a fidelidade de Capitu, refletindo sobre a natureza da verdade, a memória subjetiva e o impacto das inseguranças pessoais nas relações. "Dom Casmurro" é uma obra que convida o leitor a interpretar os eventos por si mesmo, questionando até que ponto a realidade é moldada pela percepção individual.</p>
            <a href="https://ddcus.org/pdf/summer_reading/11th_grade/Dom_Casmurro-Machado_de_Assis.pdf" target="_blank">Livro Completo</a>`;;
        } else if (bookId === 'resumo5') {
            bookDetails.innerHTML = `<h2>O Pequeno Príncipe</h2>
            <img src="imgs/livro5.jpg"> 
            <p class="autor">Autor: <b>Antoine de Saint-Exupéry</b></p>
            <p>O livro começa com um aviador que, após um acidente no deserto, conhece um pequeno príncipe vindo de um planeta distante. O príncipe compartilha suas histórias de viagens por diferentes planetas e dos encontros que teve com diversos personagens, cada um simbolizando aspectos variados da natureza humana. Ele encontra figuras como um rei, um vaidoso, um bêbado, um empresário e um geógrafo, todos mais preocupados com suas próprias preocupações do que com a verdadeira essência da vida.<br><br>
            Durante sua jornada, o príncipe aprende lições sobre amor e amizade, especialmente com uma raposa que lhe ensina que o essencial é invisível aos olhos e que o verdadeiro valor das coisas está na conexão emocional. O príncipe reflete sobre seu amor por uma rosa em seu planeta, aprendendo a vê-la como única e especial devido ao tempo e ao cuidado que dedicou a ela.<br><br>
            A narrativa termina com o príncipe retornando ao seu planeta e à sua rosa, enquanto o aviador reflete sobre as profundas lições aprendidas. "O Pequeno Príncipe" é uma fábula poética sobre a importância das relações humanas, da inocência e da busca por significado além das superficialidades da vida.</p>
            <a href="https://www.sesirs.org.br/sites/default/files/paragraph--files/o_pequeno_principe_-_antoine_de_saint-exupery_1.pdf" target="_blank">Livro Completo</a>`;
        } else if (bookId === 'resumo6') {
            bookDetails.innerHTML = `<h2>Cem Anos de Solidão</h2>
            <img src="imgs/livro6.jpg"> 
            <p class="autor">Autor: <b>Gabriel García Márquez</b></p>
            <p>O romance segue a saga da família Buendía ao longo de sete gerações na cidade fictícia de Macondo, fundada por José Arcadio Buendía e sua esposa Úrsula. A história é marcada por eventos extraordinários e realismo mágico, como a chuva interminável de quatro anos e a ascensão e queda de vários personagens. A narrativa explora temas de solidão, destino e a repetição cíclica dos eventos na história da família.<br><br>
            A vida dos Buendía é marcada por conflitos, amores e tragédias, refletindo a complexidade da experiência humana e a luta contra o destino inevitável. O livro revela como os personagens estão presos em um ciclo de solidão e repetição, ilustrando as questões sociais e políticas da América Latina. A destruição de Macondo e a extinção da família Buendía simbolizam o fim de um ciclo histórico e a busca pela compreensão do passado.<br><br>
            A obra é um exemplo fundamental do realismo mágico, combinando o fantástico com o cotidiano para criar uma narrativa rica e evocativa. A conclusão do romance oferece uma reflexão sobre a história e a condição humana, encerrando o ciclo narrativo com uma nota de compreensão e resignação.</p>
            <a href="https://www.escolahenriquemedina.org/bibdigital/view/1788/Cem%20Anos%20de%20Solidao%20-%20Gabriel%20Garcia%20Marquez.pdf" target="_blank">Livro Completo</a>`;
        } else if (bookId === 'resumo7') {
            bookDetails.innerHTML = `<h2>Dom Quixote</h2>
            <img src="imgs/livro7.jpg">
            <p class="autor">Autor(a): <b>Miguel de Cervantes</b></p>
            <p>O romance narra as aventuras de Alonso Quixano, um homem idoso que, após ler muitos romances de cavalaria, perde a sanidade e decide se tornar um cavaleiro andante, adotando o nome de Dom Quixote de La Mancha. Veste uma antiga armadura e monta seu cavalo, Rocinante, partindo em busca de aventuras para restaurar a justiça e combater o mal.<br><br>
            Acompanhado por Sancho Pança, um camponês que acredita na promessa de uma ilha para governar, Dom Quixote se envolve em diversas peripécias. Entre as mais conhecidas estão a luta contra moinhos de vento, que ele confunde com gigantes, e uma série de mal-entendidos e situações cômicas que resultam de sua visão distorcida da realidade.<br><br>
            A segunda parte do romance, publicada em 1615, segue as novas aventuras de Dom Quixote, agora com maior consciência de sua fama e das consequências de suas ações. Ele enfrenta zombarias e intrigas enquanto continua a lutar por seus ideais, embora seu estado mental comece a deteriorar.<br><br>
            No final, Dom Quixote retorna a casa, desiludido e doente. Recupera a razão antes de morrer, reconhecendo a futilidade de suas fantasias. O livro é uma crítica da sociedade e da literatura cavalheiresca da época, explorando temas como a realidade versus a ilusão e a natureza do heroísmo.</p>
            <a href="https://itaudeminas.mg.gov.br/arquivos/ere/livros/Dom-Quixote-Miguel-de-Cervantes.pdf" target="_blank">Livro Completo</a>`;
        } else if (bookId === 'resumo8') {
            bookDetails.innerHTML = `<h2>Moby Dick</h2>
            <img src="imgs/livro8.jpg"> 
            <p class="autor">Autor(a): <b>Herman Melville</b></p>
            <p>O romance começa com a introdução do narrador, Ishmael, que decide embarcar no navio Pequod para uma viagem de caça às baleias. O capitão do navio, Ahab, está obcecado por Moby Dick, uma baleia branca gigantesca que lhe causou grandes danos e perdeu a perna em um encontro anterior. A obsessão de Ahab com Moby Dick é central para a trama e é representada como uma luta pessoal contra uma força quase sobrenatural.<br><br>
            A viagem do Pequod é repleta de aventuras e desafios, com o capitão Ahab cada vez mais consumido por sua busca. A narrativa detalha a vida a bordo do navio e as diversas características das baleias, além de explorar temas filosóficos profundos sobre o destino, a vingança e a natureza do mal. O confronto final com Moby Dick é épico e destrutivo, resultando na destruição do Pequod e na morte de muitos de seus tripulantes.<br><br>
            O livro é uma meditação sobre a obsessão e a natureza da luta humana contra forças além de seu controle. A conclusão trágica de Ahab e a sobrevivência de Ishmael oferecem uma reflexão sobre a mortalidade e o significado da vida.</p>
            <a href="http://www.lighthousebilingue.com.br/wp-content/uploads/2018/07/Moby-Dick-Herman-Melville.pdf" target="_blank">Livro Completo</a>`;
        } else if (bookId === 'resumo9') {
            bookDetails.innerHTML = `<h2>Harry Potter e a Pedra Filosofal</h2>
            <img src="imgs/livro9.jpg"> 
            <p class="autor">Autor(a): <b>J.K. Rowling</b></p>
            <p>O romance começa com Harry Potter, um jovem órfão que vive com seus cruéis tios e primo. Aos 11 anos, Harry descobre que é um bruxo e recebe um convite para estudar na Escola de Magia e Bruxaria de Hogwarts. Lá, ele faz novos amigos, como Hermione Granger e Ron Weasley, e descobre que seus pais foram mortos por um poderoso bruxo das trevas, Voldemort, que também tentou matar Harry quando era bebê, mas falhou, deixando uma cicatriz em forma de raio em sua testa.<br><br>
            Em Hogwarts, Harry aprende sobre magia e o mundo dos bruxos, e descobre mais sobre seu passado e sua conexão com Voldemort. O livro segue a busca de Harry e seus amigos para impedir que Voldemort recupere a Pedra Filosofal, um artefato mágico com poder para conceder a imortalidade. A história é rica em aventuras, mistérios e a construção de um universo mágico fascinante.<br><br>
            A narrativa destaca temas de amizade, coragem e a luta entre o bem e o mal. Harry e seus amigos enfrentam vários desafios e perigos enquanto tentam proteger a Pedra Filosofal e desmascarar as intenções de Voldemort. O livro termina com a destruição da Pedra e a promessa de futuras aventuras.</p>
            <a href="https://static.tumblr.com/kvvdpco/ZNXm8ij2e/j.k._rowling_-_1_-_harry_potter_e_a_pedra_filosofal.pdf" target="_blank">Livro Completo</a>`;;
        } else if (bookId === 'resumo10') {
            bookDetails.innerHTML = `<h2>A Menina que Roubava Livros</h2>
            <img src="imgs/livro10.jpg"> 
            <p class="autor">Autor(a): <b>Markus Zusak</b></p>
            <p>Ambientado na Alemanha nazista, o romance é narrado pela Morte e segue Liesel Meminger, uma jovem que encontra conforto nos livros enquanto sua família adota um jovem judeu em fuga, Max Vandenburg. Liesel começa a roubar livros, o que lhe proporciona um escape das dificuldades da guerra e um meio de se conectar com as pessoas ao seu redor. A história se concentra na relação de Liesel com sua família adotiva, seu amor pela leitura e as difíceis circunstâncias da época.<br><br>
            O livro explora temas de amor, perda e a importância das palavras e histórias em tempos de adversidade. Liesel forma uma amizade profunda com Max, que compartilha sua própria paixão por palavras e literatura. A história culmina em uma série de eventos trágicos e a devastação da cidade devido a bombardeios, refletindo o impacto da guerra nas vidas das pessoas.<br><br>
            A narrativa é uma homenagem ao poder da literatura e da imaginação como formas de resistência e sobrevivência. O livro é elogiado por sua abordagem única e sensível da Segunda Guerra Mundial e pela perspectiva inovadora da Morte como narradora.</p>
            <a href="https://clubdelivros.wordpress.com/wp-content/uploads/2014/02/ameninaqueroubavalivros.pdf" target="_blank">Livro Completo</a>`;
        } else if (bookId === 'resumo11') {
            bookDetails.innerHTML = `<h2>A Revolução dos Bichos</h2>
            <img src="imgs/livro11.jpg"> 
            <p class="autor">Autor(a): <b>George Orwell</b></p>
            <p>A história começa com uma revolta dos animais na Fazenda dos Jones, onde eles se rebelam contra o tratamento opressor de seu dono humano, Sr. Jones. Sob a liderança dos porcos Napoleão e Bola de Neve, os animais estabelecem um novo regime baseado na igualdade e na justiça. Inicialmente, os animais têm esperança de criar uma sociedade mais justa e livre de exploração. No entanto, à medida que os porcos assumem o controle, a promessa de igualdade começa a desmoronar.<br><br>
            A corrupção e a traição se instauram quando Napoleão expulsa Bola de Neve e toma o poder absoluto. O regime dos porcos se torna cada vez mais autoritário, e os princípios da Revolução dos Bichos são gradualmente corrompidos. A sociedade animal se vê de volta a um estado de opressão, com os porcos vivendo em conforto e luxo às custas dos outros animais, que são novamente explorados.<br><br>
            A obra é uma alegoria da Revolução Russa e da ascensão do totalitarismo, demonstrando como os ideais revolucionários podem ser subvertidos por aqueles que buscam poder. O final revela a completa transformação dos porcos em tiranos tão opressivos quanto os humanos que substituíram.</p>
            <a href="https://multimidia.gazetadopovo.com.br/media/info/2021/202110/bichos/revolucao-dos-bichos.pdf" target="_blank">Livro Completo</a>`;
        } else if (bookId === 'resumo12') {
            bookDetails.innerHTML = `<h2>O Código Da Vinci</h2>
            <img src="imgs/livro12.jpg"> 
            <p class="autor">Autor(a): <b>Dan Brown</b></p>
            <p>O thriller começa com o assassinato do curador do Museu do Louvre, Jacques Saunière. Robert Langdon, um professor de simbologia de Harvard, é chamado para ajudar a resolver o crime. Langdon descobre uma série de pistas e códigos deixados pelo curador que levam a uma conspiração envolvendo a Igreja Católica e uma sociedade secreta, os Illuminati. Ele se une a Sophie Neveu, uma criptógrafa e neta de Saunière, para investigar o mistério.<br><br>
            A investigação revela segredos antigos sobre o Santo Graal e a verdadeira história por trás da religião cristã. Langdon e Neveu enfrentam vários perigos e perseguições enquanto desvendam a verdade sobre o Graal e o papel de Maria Madalena na história cristã. O livro explora temas de fé, história e os limites da verdade.<br><br>
            A narrativa é rápida e cheia de reviravoltas, com uma trama intricada que mistura fatos históricos com ficção. O livro termina com uma revelação surpreendente sobre o verdadeiro significado do Santo Graal e o impacto das descobertas na vida dos protagonistas.</p>
            <a href="https://ricbooks.tripod.com/sitebuildercontent/sitebuilderfiles/o_codigo_da_vinci.pdf" target="_blank">Livro Completo</a>`;
        }
    }

    backButton.addEventListener('click', function() {
        bookTemplate.style.display = 'none';
        about.style.display = 'block';
        booksSection.style.display = 'block';
    });
});
