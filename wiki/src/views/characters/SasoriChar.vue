<template>
    <section class="personagem"> 
        <div class="personagem__info">
          <img src="@/assets/personagens/Sasori.jpg"> 
          <h2>Sasori</h2>
          <h3> Dano | Distance </h3> 
        </div>

        <div class="combos">
          <button @click="toggleCombo('old')">Combo Old Client</button>
          <button @click="toggleCombo('otc')">Combo OTC</button>
        </div>
    
        <div id="old" class="combo-content" v-show="showOld">
          <li> 
            auto 200 listas 'Sasori' | setcolor 184 134 11 | isattacking say souen hitomi gouku | isattacking say satetsu kesshu raku | isattacking say karakuri sandan yabu | isattacking say satetsusou | isattacking say satetsu kesshu | isattacking say hitomi gouku
          </li>
        </div>
    
        <div id="otc" class="combo-content" v-show="showOtc">
          <li> 
            macro(100, "Combo Sasori", function()
                if g_game.isAttacking() then
                    say("souen hitomi gouku")
                    say("satetsu kesshu raku")
                    say("karakuri sandan yabu")
                    say("satetsusou")
                    say("satetsu kesshu")
                    say("hitomi gouku")
                end
            end)
          </li>
    </div>
    

        <div class="jutsus__personagens">
          <ul class="jutsus__sasori.jpg">
            <li>
              <h3>Jutsu: Chakura no Ito</h3>
              <p>Level: 100</p>
              <p>Utilidade: Buff</p>
              <p>Descrição: Aumenta seus atributos</p>
          </li>
          
          <li>
              <h3>Jutsu: Karakuri Sandan</h3>
              <p>Level: 100</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa múltiplos danos no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Gishu Senbon</h3>
              <p>Level: 150</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa múltiplos danos no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Hitokugutsu</h3>
              <p>Level: 200</p>
              <p>Utilidade: Suporte</p>
              <p>Descrição: Sasori invoca um Hiroku para ajudá-lo</p>
          </li>
          
          <li>
              <h3>Jutsu: Odoru</h3>
              <p>Level: 200</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Satetsu Shigure</h3>
              <p>Level: 250</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Hitomi Gouku</h3>
              <p>Level: 300</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Satetsu Kesshu</h3>
              <p>Level: 350</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Satetsusou</h3>
              <p>Level: 400</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Karakuri Sandan Yabu</h3>
              <p>Level: 450</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa múltiplos danos no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Houka Ensou</h3>
              <p>Level: 450</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo, em linha reta</p>
          </li>
          
          <li>
              <h3>Jutsu: Satetsu Kesshu Raku</h3>
              <p>Level: 475</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Souen Hitomi Gouku</h3>
              <p>Level: 500</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Hyakki no Souen</h3>
              <p>Level: 500</p>
              <p>Utilidade: Suporte</p>
              <p>Descrição: Sasori invoca dez Hiroku para ajudá-lo</p>
          </li>
          
          <li>
              <h3>Jutsu: Satetsu Komou</h3>
              <p>Level: 525</p>
              <p>Utilidade: Suporte</p>
              <p>Descrição: Sasori fica invisível por alguns segundos</p>
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
    background-color: orangered;
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
    color: white;
  }
  
  .personagem__info h3 {
    font-size: 1.2rem;
    color: black;
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
    