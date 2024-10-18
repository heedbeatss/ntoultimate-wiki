<template>
    <section class="personagem"> 
      <div class="personagem__info">
        <img src="@/assets/personagens/Kimimaro.jpg"> 
        <h2>Kimimaro</h2>
        <h3> Dano | Distance/Sword</h3> 
      </div>

      <div class="combos">
        <button @click="toggleCombo('old')">Combo Old Client</button>
        <button @click="toggleCombo('otc')">Combo OTC</button>
      </div>
  
      <div id="old" class="combo-content" v-show="showOld">
        <li> 
            auto 200 listas Kimimaro | setcolor 0 255 255 | isattcking say sawarabi no mai  | isattacking say tessenka no mai hana | isattacking say sawarabi | isattacking say karamatsu no mai | isattacking say tsubaki no mai
        </li>
      </div>
  
      <div id="otc" class="combo-content" v-show="showOtc">
        <li>  macro(100, "Combo Kimimaro", function()
            if g_game.isAttacking() then
                say("sawarabi no mai")
                say("tessenka no mai hana")
                say("sawarabi")
                say("karamatsu no mai")
                say("tsubaki no mai")
            end
         end)
        </li>
  </div>

      <div class="jutsus__personagens">
        <ul class="jutsus__kimimaru">
          <li>
            <h3>Jutsu: Chi no Juin</h3>
            <p>Level: 100</p>
            <p>Utilidade: Buff</p>
            <p>Descrição: Aumenta seus atributos</p>
        </li>
        
        <li>
            <h3>Jutsu: Teshi Sendan</h3>
            <p>Level: 100</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Tsubaki no Mai</h3>
            <p>Level: 150</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa múltiplos danos no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Yanagi no Mai</h3>
            <p>Level: 200</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano consecutivo a cada 2 segundos em um alvo selecionado até o final do jutsu. Se não tiver alvo selecionado não causará dano em ninguém. O alvo selecionado só recebe o dano se Kimimaro estiver ao lado do mesmo. Ao ativar, Kimimaro ganha esses buffs:
            <ul>
                <li>Reflete 10% de dano de jutsus físicos (aqueles com o dano vermelho)</li>
                <li>Ignora 40% de dano</li>
                <li>Ganho de taijutsu (Double Hit)</li>
            </ul>
            </p>
        </li>
        
        <li>
            <h3>Jutsu: Karamatsu no Mai</h3>
            <p>Level: 250</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Sawarabi</h3>
            <p>Level: 300</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Tessenka no Mai Hana</h3>
            <p>Level: 350</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Yaemugura no Mai</h3>
            <p>Level: 400</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Kimimaro cria uma trap de ossos em volta dele.</p>
        </li>
        
        <li>
            <h3>Jutsu: Yaemugura</h3>
            <p>Level: 400</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Trapa o alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Sawarabi no Mai</h3>
            <p>Level: 450</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Karamatsu no Tsuru</h3>
            <p>Level: 500</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Cria uma floresta de ossos em sua volta. Dentro dessa área, Kimimaro fica invisível durante 7 segundos. Inimigos que forem pegos dentro dessa área são stunados por 3 segundos, após isso podem se locomover livremente pelos ossos. Kimimaro deixa de ficar invisível se atacar alguém ou sair da área da floresta. Kimimaros em geral não são stunados/aprisionados na floresta de espinhos criada.</p>
        </li>
        
        </ul>
        </div>    
        </section>
</template>

<script>
export default {
  data() {
    return {
      showOld: false,
      showOtc: false,
    };
  },
  methods: {
    toggleCombo(combo) {
      console.log(`Toggle combo: ${combo}`); // Adicionado para verificar
      if (combo === 'old') {
        this.showOld = !this.showOld;
        this.showOtc = false;
        console.log(`showOld: ${this.showOld}, showOtc: ${this.showOtc}`); // Verificar os estados
      } else if (combo === 'otc') {
        this.showOtc = !this.showOtc;
        this.showOld = false;
        console.log(`showOld: ${this.showOld}, showOtc: ${this.showOtc}`); // Verificar os estados
      }
    }
  }
}
</script>

<style scoped>
.personagem {
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
background-color:white;
border-radius: 8px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.personagem__info {
text-align: center;
margin-bottom: 20px;
}

.personagem__info img {
max-width: 200px;
border-radius: 50%;
border: 4px solid #343a40;
}

.personagem__info h2 {
margin: 10px 0;
font-size: 2rem;
color: black;
}

.personagem__info h3 {
font-size: 1.2rem;
color: #6c757d;
}


.combos button {
    background-color: #343a40;
    color: #ffffff; 
    border: 2px solid #b22222; 
    border-radius: 8px; 
    padding: 10px 20px; 
    font-size: 1rem; 
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s; 
    margin: 5px; 
  }
  
  .combos button:hover {
    background-color: #b22222; 
    transform: scale(1.05);
  }
  
  .combos button:active {
    transform: scale(0.95);
    background-color: #8b0000; 
  }

.jutsus__personagens {
width: 100%;
}

.jutsus__personagens ul {
list-style: none;
padding: 0;
}

.jutsus__personagens li {
background-color: #ffffff;
margin: 10px 0;
padding: 15px;
border-radius: 8px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.jutsus__personagens h3 {
margin: 0 0 10px;
font-size: 1.5rem;
color: #343a40;
}

.jutsus__personagens p {
margin: 5px 0;
font-size: 1rem;
color: #495057;
}
</style>                
        
        