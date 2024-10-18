<template>
    <section class="personagem"> 
        <div class="personagem__info">
          <img src="@/assets/personagens/Kankuro.jpg"> 
          <h2>Kankuro</h2>
          <h3> Dano | Distance</h3> 
        </div>

        <div class="combos">
            <button @click="toggleCombo('old')">Combo Old Client</button>
            <button @click="toggleCombo('otc')">Combo OTC</button>
          </div>
      
          <div id="old" class="combo-content" v-show="showOld">
            <li>
                auto 200 listas 'Kankuro' | setcolor 255 192 203 | isattacking say kiki sankaku | isattacking say akahigi sankaku | isattacking say kurohigi kiki ippatsu | isattacking say kurohigi kiki sanpatsu | isattacking say kurohigi ippatsu | isattacking say dai doku bakudan
                
            </li>
          </div>
      
          <div id="otc" class="combo-content" v-show="showOtc">
            <li>
                macro(100, "Combo Kankuro", function()
                    if g_game.isAttacking() then
                        say("kiki sankaku")
                        say("akahigi sankaku")
                        say("kurohigi kiki ippatsu")
                        say("kurohigi kiki sanpatsu")
                        say("kurohigi ippatsu")
                        say("dai doku bakudan")
                    end
                end)
          </li>
      </div>

        <div class="jutsus__personagens">
          <ul class="jutsus__kankuro.jpg">
                <li>
                    <h3>Jutsu: Yudokuna Kemuri</h3>
                    <p>Level: 100</p>
                    <p>Utilidade: Buff</p>
                    <p>Descrição: Aumenta seus atributos</p>
                </li>
                
                <li>
                    <h3>Jutsu: Dai Doku Bakudan</h3>
                    <p>Level: 125</p>
                    <p>Utilidade: Dano</p>
                    <p>Descrição: Causa dano no alvo</p>
                </li>
                
                <li>
                    <h3>Jutsu: Kurohigi Ippatsu</h3>
                    <p>Level: 150</p>
                    <p>Utilidade: Dano</p>
                    <p>Descrição: Causa dano no alvo</p>
                </li>
                
                <li>
                    <h3>Jutsu: Kuroari Summon Max</h3>
                    <p>Level: 160</p>
                    <p>Utilidade: Suporte</p>
                    <p>Descrição: Kankuro invoca 4 marionetes para ajudá-lo</p>
                </li>
                
                <li>
                    <h3>Jutsu: Dokusei Doku</h3>
                    <p>Level: 200</p>
                    <p>Utilidade: Dano</p>
                    <p>Descrição: Causa dano e lyze em área</p>
                </li>
                
                <li>
                    <h3>Jutsu: Karasu Summon Max</h3>
                    <p>Level: 240</p>
                    <p>Utilidade: Suporte</p>
                    <p>Descrição: Kankuro invoca 5 marionetes para ajudá-lo</p>
                </li>
                
                <li>
                    <h3>Jutsu: Kiki Sankaku</h3>
                    <p>Level: 250</p>
                    <p>Utilidade: Dano</p>
                    <p>Descrição: Causa dano no alvo</p>
                </li>
                
                <li>
                    <h3>Jutsu: Akahigi Sankaku</h3>
                    <p>Level: 300</p>
                    <p>Utilidade: Dano</p>
                    <p>Descrição: Causa dano no alvo</p>
                </li>
                
                <li>
                    <h3>Jutsu: Kurohigi Kiki Ippatsu</h3>
                    <p>Level: 350</p>
                    <p>Utilidade: Dano</p>
                    <p>Descrição: Causa dano no alvo</p>
                </li>
                
                <li>
                    <h3>Jutsu: Sankaku Akahigi Ippatsu</h3>
                    <p>Level: 400</p>
                    <p>Utilidade: Dano</p>
                    <p>Descrição: Causa dano no alvo</p>
                </li>
                
                <li>
                    <h3>Jutsu: Kurohigi Sanshou</h3>
                    <p>Level: 450</p>
                    <p>Utilidade: Suporte</p>
                    <p>Descrição: Kankuro se transforma em uma marionete e ignora 25% de todo dano recebido</p>
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
                
                   