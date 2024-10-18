<template>
    <section class="personagem"> 
        <div class="personagem__info">
          <img src="@/assets/personagens/Utakata.jpg"> 
          <h2>Utakata</h2>
          <h3> Dano | Suporte | Sword/Distance </h3> 
        </div>


        <div class="combos">
            <button @click="toggleCombo('old')">Combo Old Client</button>
            <button @click="toggleCombo('otc')">Combo OTC</button>
          </div>
      
          <div id="old" class="combo-content" v-show="showOld">
            <li>
                auto 200 listas 'Utakata' | setcolor 0 191 255 | isattacking say suiton houmatsu no jutsu | isattacking say shabondama taiga | isattacking say kibakuhou shabondama | isattacking say shabondama no jutsu | isattacking say santouka no jutsu
            </li>
          </div>
      
          <div id="otc" class="combo-content" v-show="showOtc">
            <li>
                macro(100, "Combo Utakata", function()
                    if g_game.isAttacking() then
                        say("suiton houmatsu no jutsu")
                        say("shabondama taiga")
                        say("kibakuhou shabondama")
                        say("shabondama no jutsu")
                        say("santouka no jutsu")
                    end
                end)
            </li>
      </div>

        <div class="jutsus__personagens">
          <ul class="jutsus__utakata">
            <ul>
              <li>
                  <h3>Jutsu: Baburukei</h3>
                  <p><strong>Level:</strong> 100</p>
                  <p><strong>Utilidade:</strong> Buff</p>
                  <p><strong>Descrição:</strong> Aumenta os atributos.</p>
              </li>
              <li>
                  <h3>Jutsu: Suiton Suichutotsu</h3>
                  <p><strong>Level:</strong> 150</p>
                  <p><strong>Utilidade:</strong> Dano</p>
                  <p><strong>Descrição:</strong> Causa dano no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Kibakuhou</h3>
                  <p><strong>Level:</strong> 175</p>
                  <p><strong>Utilidade:</strong> Dano</p>
                  <p><strong>Descrição:</strong> Causa múltiplos danos no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Kibakuhou Kouken</h3>
                  <p><strong>Level:</strong> 200</p>
                  <p><strong>Utilidade:</strong> Dano</p>
                  <p><strong>Descrição:</strong> Causa dano no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Shabondama Noroi</h3>
                  <p><strong>Level:</strong> 250</p>
                  <p><strong>Utilidade:</strong> Dano</p>
                  <p><strong>Descrição:</strong> Causa dano no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Santouka no Jutsu</h3>
                  <p><strong>Level:</strong> 300</p>
                  <p><strong>Utilidade:</strong> Dano</p>
                  <p><strong>Descrição:</strong> Causa dano no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Kekkai Shabontama no Jutsu</h3>
                  <p><strong>Level:</strong> 350</p>
                  <p><strong>Utilidade:</strong> Suporte</p>
                  <p><strong>Descrição:</strong> Ao utilizar este jutsu, Utakata se cura em 95k por segundo durante alguns segundos. O buff também funciona para membros que estiverem em party.</p>
              </li>
              <li>
                  <h3>Jutsu: Kekkai Shabontama Baburukei</h3>
                  <p><strong>Level:</strong> 375</p>
                  <p><strong>Utilidade:</strong> Suporte</p>
                  <p><strong>Descrição:</strong> Ao utilizar este jutsu, Utakata se cura em 35k por segundo durante alguns segundos.</p>
              </li>
              <li>
                  <h3>Jutsu: Shabondama no Jutsu</h3>
                  <p><strong>Level:</strong> 400</p>
                  <p><strong>Utilidade:</strong> Dano</p>
                  <p><strong>Descrição:</strong> Causa dano no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Kibakuhou Shabondama</h3>
                  <p><strong>Level:</strong> 450</p>
                  <p><strong>Utilidade:</strong> Dano</p>
                  <p><strong>Descrição:</strong> Causa múltiplos danos no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Shabondama Taiga</h3>
                  <p><strong>Level:</strong> 475</p>
                  <p><strong>Utilidade:</strong> Dano</p>
                  <p><strong>Descrição:</strong> Causa múltiplos danos no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Suiton Houmatsu no Jutsu</h3>
                  <p><strong>Level:</strong> 500</p>
                  <p><strong>Utilidade:</strong> Dano</p>
                  <p><strong>Descrição:</strong> Causa dano no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Hiruma Santouka</h3>
                  <p><strong>Level:</strong> 525</p>
                  <p><strong>Utilidade:</strong> Suporte</p>
                  <p><strong>Descrição:</strong> Após utilizar este jutsu, caso Utakata morra dentro de 10 segundos, ele renascerá aleatoriamente por perto de onde morreu.</p>
              </li>
              <li>
                  <h3>Jutsu: Hiruma Shabondama</h3>
                  <p><strong>Level:</strong> 550</p>
                  <p><strong>Utilidade:</strong> Suporte</p>
                  <p><strong>Descrição:</strong> Durante 15 segundos, Utakata terá: 30% a mais de HP, 15% a mais de cura, cura 25% do dano causado por players e 100% do dano causado por monstros.</p>
              </li>
          </ul>
          
          
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
        background-color: lightblue;
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
        color: white;
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