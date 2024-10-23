<template>
  <section class="tutorials"> 
    <div class="tutorials__info">
      <h1>Tutoriais</h1>
    </div>

    <div class="tutorials__info__lista">
      <div class="tabs">
        <a href="#tutorialdungeon" @click="toggleContent('tutorialdungeon')">Tutoriais: Dungeons</a>
        <a href="#tutorialelo" @click="toggleContent('tutorialelo')">Tutorial: Rush Elo</a>
        <a href="#tutorialsaga" @click="toggleContent('tutorialsaga')">Tutoriais: Sagas</a>
        <a href="#tutorialbot" @click="toggleContent('tutorialbot')">Tutoriais: Bot</a>
        <a href="#tutorialup" @click="toggleContent('tutorialup')">Tutoriais: Up</a>
      </div>
    
      <div id="tutorialdungeon" class="tutorial-content" v-show="activeTab === 'tutorialdungeon'">
       
        <h1>Tutorial Dungeons</h1>
                
        <p>
          <strong>Descrição:</strong> Este tutorial vai te auxiliar a completar todas as dungeons do Nto Ultimate.
        </p>
        
        <h2>Passos do Tutorial</h2>
        <ol>
          <p>Passo 1: Dungeons básicas - Dungeons simples que podem ser feitas solo sem set full e em mapas free account:</p>

                <ul>
                    <li>Bandit</li>
                    <li>Gaara Sc2</li>
                    <li>Kimimaru</li>
                    <li>Jya Boss</li>
                    <li>Yoth</li>
                    <li>Renegade</li>
                </ul>

          <p>Passo 2: Dungeons médias - Dungeons que ainda podem ser feitas solo mas exigem mais destreza do jogador e um set full:</p>
                <ul>
                    <li>Deidara</li>
                    <li>Sasori</li>
                    <li>Scorpion</li>
                    <li>Tobirama</li>
                </ul>

          <p>Passo 3: Dungeons difíceis - Dungeons para serem feitas em time:</p>
            <ul>
                <li>Cave Bosses</li>    
                <li>Jouzetsu</li>
                <li>Heishin</li>
                <li>Ibuki</li>
                <li>Minato</li>
                <li>Tower</li>
            </ul>
     
        </ol>
        
        <h2>Vídeo para auxiliar ao tutorial:</h2>
        <div class="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/x1g-3bYKA5w?si=MikWXzoiEXGohhsi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        
    
        <h2>Recursos Adicionais:</h2>
        <ul>
          <li><a href="link1">https://ntoultimate.com.br/statusDungeonsCards.php</a></li>
        </ul>
      </div>
    
      <div id="tutorialelo" class="tutorial-content" v-show="activeTab === 'tutorialelo'">

        <h1>Tutorial Rush de Elo</h1>         
        <p>Rushar elo é essencial no Nto Ultimate, garante a escalada de força do seu personagem e desbloqueia algumas quests no mapa.</p>
    
        <ul>
          <li>Fazer todas as sagas.</li>
          <li>Fazer todas as quests.</li>
          <li>Fazer task fama com o Npc Zoltan (fundamental).</li>
          <li>Fazer task de Konoha com o Npc Taksu.</li>
          <li>Fazer missão diária da Tsunade em Konoha.</li>
          <li>Fazer árvore em Konoha.</li>
          <li>Concorrer à loteria do jogo.</li>
          <li>Se atentar aos horários de task's e quest's que podem ser feitas repetidas vezes e que dão pontos de elo.</li>
          <li>Para rushar Sannin e Kage o boost de elo disponível no shop do jogo é indicado.</li>
      </ul>

      <h2>Recursos Adicionais:</h2>
        <ul>
          <li><a href="link1">https://ntoultimate.com.br/graduacao.php</a></li>
        </ul>  
      </div>
    
      <div id="tutorialsaga" class="tutorial-content" v-show="activeTab === 'tutorialsaga'">
        <h1>Tutorial das Sagas</h1>
                
        <p>
          <strong>Descrição:</strong> Este tutorial é para fazer todas as sagas do Nto Ultimate, ganhar pontos de elo e acessos pelo mapa!</p>
        
        <h2>Passos do Tutorial</h2>
        <ol>
          <li>Siga o vídeo abaixo:</li>
        </ol>
        
        <h2>Vídeo do Tutorial</h2>
        <div class="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/EsKxPj9DGYg?si=RPsZXStYUXMso6y_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        
        
      </div>

      <div id="tutorialbot" class="tutorial-content" v-show="activeTab === 'tutorialbot'">
        <h1>Tutorial Bot *Em Breve*</h1>
                
        <!-- <p>
          <strong>Descrição:</strong> Este tutorial é para auxiliar os jogadores a usarem e configurarem o bot do OTC.</p>
        
        <h2>Passos do Tutorial</h2>
        <ol>
          <li>Siga o vídeo abaixo:</li>
        </ol>
        
        <h2>Vídeo do Tutorial</h2>
        <div class="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/U-VYSv6bRi8?si=XORD3XmtJq26LEcV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        
        <h2>Recursos Adicionais</h2>
        <ul>
          <li><a href="link1">Recurso 1</a></li>
        </ul> -->
      </div>

      <div id="tutorialup" class="tutorial-content" v-show="activeTab === 'tutorialup'">
        <h1>Tutorial Up</h1>
                
        <p>
          <strong>Descrição:</strong> EM BREVE.</p>
        
        
   
      </div>


    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeTab: null
    };
  },
  methods: {
    toggleContent(tab) {
      this.activeTab = this.activeTab === tab ? null : tab;
    }
  }
}
</script>

<style scoped>
section.tutorials {
  background-color: #1c1c1c;
  color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
}

h1 {
  color: #ffcc00;
  font-family: 'Ninja Naruto', sans-serif;
  text-shadow: 2px 2px 5px #000;
  text-align: center;
}

h2, h3 {
  color: #ffa500; 
  font-family: 'Ninja Naruto', sans-serif;
  text-shadow: 1px 1px 3px #000;
  margin-bottom: 20px;
}

p, li {
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #dcdcdc;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 10px;
}

.tabs a {
  display: inline-block;
  padding: 12px 20px;
  margin: 0 5px 15px; /* Adicionei 15px de margem inferior */
  text-decoration: none;
  background-color: #292929; 
  color: #ffa500;
  border-radius: 5px;
  font-family: 'Ninja Naruto', sans-serif;
  transition: background-color 0.3s, color 0.3s;
}

.tabs a:hover {
  background-color: #ffa500;
  color: #292929; 
}

.tutorial-content {
  padding: 20px;
  margin-top: 20px;
  background-color: #292929; 
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.tutorial-content ul {
  padding-left: 20px; 
}

.tutorial-content li {
  color: #ffcc00; 
}

.video-container {
  text-align: center;
  margin-top: 20px;
}

iframe {
  border: 2px solid #ffcc00; 
  border-radius: 5px;
}

a {
  color: #ffcc00;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

</style>
