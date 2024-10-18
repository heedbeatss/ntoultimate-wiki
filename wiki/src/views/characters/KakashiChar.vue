<template>
    <section class="personagem"> 
        <div class="personagem__info">
          <img src="@/assets/personagens/Kakashi.jpeg"> 
          <h2>Kakashi</h2>
          <h3> Dano | Suporte | Sword/Distance </h3> 
        </div>

        <div class="combos">
            <button @click="toggleCombo('old')">Combo Old Client</button>
            <button @click="toggleCombo('otc')">Combo OTC</button>
          </div>
      
          <div id="old" class="combo-content" v-show="showOld">
            <li> 
                auto 200 listas 'Kakashi' | setcolor 255 192 203 | isattacking say susanoo raikiri | isattacking say raiton shiden | isattacking say raikiri raku | isattacking say doton dyuheki raku | isattacking say concentrate raikiri | isattacking say kamui (editado)
                
            </li>
          </div>
      
          <div id="otc" class="combo-content" v-show="showOtc">
            <li> 
                macro(100, "Combo Kakashi", function()
                    if g_game.isAttacking() then
                        say("susanoo raikiri")
                        say("raiton shiden")
                        say("raikiri raku")
                        say("doton dyuheki raku")
                        say("concentrate raikiri")
                        say("kamui")
                    end
                end)     </li>
      </div>

        <div class="jutsus__personagens">
          <ul class="jutsus__kakashi.jpg">
            <li>
              <h3>Jutsu: Kuchyose Bull no Jutsu</h3>
              <p>Level: 150</p>
              <p>Utilidade: Suporte</p>
              <p>Descrição: Kakashi invoca Bull para ajudá-lo</p>
          </li>
          
          <li>
              <h3>Jutsu: Doton Prision</h3>
              <p>Level: 170</p>
              <p>Utilidade: Suporte</p>
              <p>Descrição: Kakashi trapa o alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Suiton Suikodan no Jutsu</h3>
              <p>Level: 190</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Ao usar o jutsu, o alvo é empurrado para longe e leva dano. Se usado perto do alvo, o mesmo toma stun</p>
          </li>
          
          <li>
              <h3>Jutsu: Mangekyo Sharingan</h3>
              <p>Level: 200</p>
              <p>Utilidade: Buff</p>
              <p>Descrição: Aumenta seus atributos</p>
          </li>
          
          <li>
              <h3>Jutsu: Suiton Suijinheki no Jutsu</h3>
              <p>Level: 210</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Concentrate Raikiri</h3>
              <p>Level: 230</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Kamui</h3>
              <p>Level: 250</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Doton Doryuheki Raku</h3>
              <p>Level: 300</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Mangekyo Kamui Me</h3>
              <p>Level: 300</p>
              <p>Utilidade: Suporte</p>
              <p>Descrição: Kakashi vai para um mundo alternativo do Kamui por alguns segundos e retornará.</p>
          </li>
          
          <li>
              <h3>Jutsu: Mangekyou Susanoo</h3>
              <p>Level: 450</p>
              <p>Utilidade: Suporte</p>
              <p>Descrição: Aumenta todos os atributos do personagem, diminuindo todo dano recebido em 40% por 20 segundos</p>
          </li>
          
          <li>
              <h3>Jutsu: Raiton Shiden</h3>
              <p>Level: 475</p>
              <p>Utilidade: Buff</p>
              <p>Descrição: Aumenta seu dano causado do elemento raiton (raio/energia) por alguns segundos</p>
          </li>
          
          <li>
              <h3>Jutsu: Susanoo Raikiri</h3>
              <p>Level: 500</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
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
    background-color:blue;
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
                
                  