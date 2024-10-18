<template>
    <section class="personagem"> 
        <div class="personagem__info">
          <img src="@/assets/personagens/Hiruzen.jpg"> 
          <h2>Hiruzen</h2>
          <h3> Dano | Distance/Sword</h3> 
        </div>

        <div class="combos">
          <button @click="toggleCombo('old')">Combo Old Client</button>
          <button @click="toggleCombo('otc')">Combo OTC</button>
        </div>
    
        <div id="old" class="combo-content" v-show="showOld">
          <li> 
            auto 200 listas 'Hiruzen' | setcolor 0 191 255 | isattacking say doton doryu taiga | isattacking say shuriken kage bunshin no jutsu | isattacking say goton dairendan no jutsu | isattacking say doton doryudan | isattacking say suiton suijinheki no jutsu | isattacking say raiton doryudan
          </li>
        </div>
    
        <div id="otc" class="combo-content" v-show="showOtc">
          <li>
            macro(100, "Combo Hiruzen", function()
                if g_game.isAttacking() then
                    say("doton doryu taiga")
                    say("shuriken kage bunshin no jutsu")
                    say("goton dairendan no jutsu")
                    say("doton doryudan")
                    say("suiton suijinheki no jutsu")
                    say("raiton doryudan")
                end
            end)
          </li>
    </div>
    

        <div class="jutsus__personagens">
          <ul class="jutsus__hiruzen.jpg">
            <li>
                <h3>Jutsu: Kanchigai no Jutsu</h3>
                <p>Level: 100</p>
                <p>Utilidade: Buff</p>
                <p>Descrição: Aumenta seus atributos.</p>
              </li>
              
              <li>
                <h3>Jutsu: Suiryudan no Jutsu</h3>
                <p>Level: 100</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>
              
              <li>
                <h3>Jutsu: Katon Dragon Furie no Jutsu</h3>
                <p>Level: 130</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa múltiplos danos em linha reta.</p>
              </li>
              
              <li>
                <h3>Jutsu: Suiton Suichutotsu</h3>
                <p>Level: 150</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>
              
              <li>
                <h3>Jutsu: Katon Sohenka no Jutsu</h3>
                <p>Level: 190</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano em área.</p>
              </li>
              
              <li>
                <h3>Jutsu: Suiton Suikodan no Jutsu</h3>
                <p>Level: 190</p>
                <p>Utilidade: Dano/Suporte</p>
                <p>Descrição: Ao usar o jutsu, o alvo é empurrado para longe e leva dano. Se usado perto do alvo, o mesmo toma stun.</p>
              </li>
              
              <li>
                <h3>Jutsu: Doton Koi Doro</h3>
                <p>Level: 200</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>
              
              <li>
                <h3>Jutsu: Kongounyoi Buyou</h3>
                <p>Level: 200</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa múltiplos danos no alvo.</p>
              </li>
              
              <li>
                <h3>Jutsu: Suiton Suijinheki no Jutsu</h3>
                <p>Level: 210</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>
              
              <li>
                <h3>Jutsu: Shuriken Kage Bunshin no Jutsu</h3>
                <p>Level: 250</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa múltiplos danos no alvo.</p>
              </li>
              
              <li>
                <h3>Jutsu: Raiton Gyuru</h3>
                <p>Level: 300</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>
              
              <li>
                <h3>Jutsu: Katon Endan</h3>
                <p>Level: 300</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>
              
              <li>
                <h3>Jutsu: Katon Booru Kaki</h3>
                <p>Level: 300</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>
              
              <li>
                <h3>Jutsu: Katon Karyu Endan</h3>
                <p>Level: 360</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>
              
              <li>
                <h3>Jutsu: Raiton Doryudan</h3>
                <p>Level: 375</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>
              
              <li>
                <h3>Jutsu: Kuchyose Enma no Jutsu</h3>
                <p>Level: 400</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Hiruzen invoca o rei macaco Enma para ajudá-lo. Enma ficará dando attract.</p>
              </li>
              
              <li>
                <h3>Jutsu: Doton Doryuheki</h3>
                <p>Level: 425</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: O jutsu cria várias paredes de rochas à frente, parando de ser criada se colidir com um terreno que impossibilita de andar ou chegando ao limite de 50 rochas criadas. Personagens que estiverem no caminho das rochas criadas levam um stun por 3 segundos.</p>
              </li>
              
              <li>
                <h3>Jutsu: Dai Doton Prision</h3>
                <p>Level: 425</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Hiruzen trapa seu alvo.</p>
              </li>
              
              <li>
                <h3>Jutsu: Kongounyoi Prision</h3>
                <p>Level: 450</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Hiruzen trapa o alvo.</p>
              </li>
              
              <li>
                <h3>Jutsu: Doton Doryu Taiga</h3>
                <p>Level: 450</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa múltiplos danos no alvo.</p>
              </li>
              
              <li>
                <h3>Jutsu: Suiton Tenkyu</h3>
                <p>Level: 450</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>
              
              <li>
                <h3>Jutsu: Goton Dairendan no Jutsu</h3>
                <p>Level: 500</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa múltiplos danos no alvo.</p>
              </li>
              
              <li>
                <h3>Jutsu: Doton Bunshin no Jutsu</h3>
                <p>Level: 525</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: O jutsu permite a Hiruzen criar um clone que toma o seu lugar caso ele morra. Se o clone morrer antes de Hiruzen, Hiruzen irá para o hospital. Hiruzen pode usar este jutsu até 3 vezes.</p>
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
                
    
    
                          