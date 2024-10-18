<template>
    <section class="personagem"> 
        <div class="personagem__info">
          <img src="@/assets/personagens/Kushina.jpg"> 
          <h2>Kushina</h2>
          <h3> Dano | Suporte | Sword/Distance </h3> 
        </div>

        <div class="combos">
          <button @click="toggleCombo('old')">Combo Old Client</button>
          <button @click="toggleCombo('otc')">Combo OTC</button>
        </div>
    
        <div id="old" class="combo-content" v-show="showOld">
          <li>
            auto 200 listas 'Kushina' | setcolor 184 134 11 | isattacking say hishou shinzoma | isattacking say hishou kongou fuusa | isattacking say hishou akai kari | isattacking say dai hishou tensou | isattacking say akai chishio | isattacking say dai akai chishio
          </li>
        </div>
    
        <div id="otc" class="combo-content" v-show="showOtc">
          <li> 
            macro(100, "Combo Kushina", function()
                if g_game.isAttacking() then
                    say("hishou shinzoma")
                    say("hishou kongou fuusa")
                    say("hishou akai kari")
                    say("dai hishou tensou")
                    say("akai chishio")
                    say("dai akai chishio")
                end
            end)
          </li>
    </div>

        <div class="jutsus__personagens">
          <ul class="jutsus__kushina.jpg">
            <ul>
              <li>
                  <h3>Jutsu: Kongou Shiki</h3>
                  <p>Level: 100</p>
                  <p>Utilidade: Buff</p>
                  <p>Descrição: Aumenta os atributos.</p>
              </li>
              <li>
                  <h3>Jutsu: Hishou Kyufujin</h3>
                  <p>Level: 115</p>
                  <p>Utilidade: Dano</p>
                  <p>Descrição: Causa múltiplos danos no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Hishou Tensou</h3>
                  <p>Level: 160</p>
                  <p>Utilidade: Dano</p>
                  <p>Descrição: Causa dano no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Dai Akai Chishio</h3>
                  <p>Level: 200</p>
                  <p>Utilidade: Dano</p>
                  <p>Descrição: Causa dano no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Akai Chishio</h3>
                  <p>Level: 250</p>
                  <p>Utilidade: Dano</p>
                  <p>Descrição: Causa dano no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Hishou Habanero</h3>
                  <p>Level: 300</p>
                  <p>Utilidade: Dano</p>
                  <p>Descrição: Causa múltiplos danos no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Dai Hishou Tensou</h3>
                  <p>Level: 350</p>
                  <p>Utilidade: Dano</p>
                  <p>Descrição: Causa múltiplos danos no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Hishou Gyaku</h3>
                  <p>Level: 375</p>
                  <p>Utilidade: Suporte</p>
                  <p>Descrição: Dá um dash para onde estiver olhando.</p>
              </li>
              <li>
                  <h3>Jutsu: Hishou Akai Kari</h3>
                  <p>Level: 400</p>
                  <p>Utilidade: Dano</p>
                  <p>Descrição: Causa dano no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Hishou Kongou Fuusa</h3>
                  <p>Level: 450</p>
                  <p>Utilidade: Dano</p>
                  <p>Descrição: Causa dano no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Hishou Shiringuchen</h3>
                  <p>Level: 475</p>
                  <p>Utilidade: Suporte</p>
                  <p>Descrição: Trapa o alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Hishou Shinzoma</h3>
                  <p>Level: 500</p>
                  <p>Utilidade: Dano</p>
                  <p>Descrição: Causa dano no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Hishou Shoku</h3>
                  <p>Level: 525</p>
                  <p>Utilidade: Suporte</p>
                  <p>Descrição: Cria um casulo em volta e repele todos os ataques recebidos por alguns segundos. O buff também funciona para membros que estiverem em party.</p>
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
        background-color: black;
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
                    