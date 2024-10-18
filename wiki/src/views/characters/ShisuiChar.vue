<template>
    <section class="personagem"> 
        <div class="personagem__info">
          <img src="@/assets/personagens/Shisui.jpeg"> 
          <h2>Shisui</h2>
          <h3> Dano | Sword/Distance </h3> 
        </div>

        <div class="combos">
            <button @click="toggleCombo('old')">Combo Old Client</button>
            <button @click="toggleCombo('otc')">Combo OTC</button>
          </div>
      
          <div id="old" class="combo-content" v-show="showOld">
            <li>
                auto 200 listas 'Shisui' | setcolor 0 191 255 | isattacking say katon karyu endan | isattacking say susanoo tsukumo | isattacking say susanoo danmaku | isattacking say fuumetsu shuriken | isattacking say katon endan | isattacking say katon hosenka tsumabeni
            </li>
          </div>
      
          <div id="otc" class="combo-content" v-show="showOtc">
            <li>
                macro(100, "Combo Shisui", function()
                    if g_game.isAttacking() then
                        say("katon karyu endan")
                        say("susanoo tsukumo")
                        say("susanoo danmaku")
                        say("fuumetsu shuriken")
                        say("katon endan")
                        say("katon hosenka tsumabeni")
                    end
                end)
            </li>
      </div>

        <div class="jutsus__personagens">
          <ul class="jutsus__shisui.jpg">
            <li>
              <h3>Jutsu: Susanoo</h3>
              <p>Level: 100</p>
              <p>Utilidade: Buff</p>
              <p>Descrição: Aumenta seus atributos</p>
          </li>
          
          <li>
              <h3>Jutsu: Katon Dragon no Jutsu</h3>
              <p>Level: 100</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa múltiplos danos no alvo em área</p>
          </li>
          
          <li>
              <h3>Jutsu: Katon Dragon Furie no Jutsu</h3>
              <p>Level: 130</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo, em linha reta</p>
          </li>
          
          <li>
              <h3>Jutsu: Katon Hosenka Tsumabeni</h3>
              <p>Level: 160</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Shunka Shuto</h3>
              <p>Level: 200</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Fuumetsu Shuriken</h3>
              <p>Level: 225</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa múltiplos danos no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Higasa no Mai</h3>
              <p>Level: 260</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa múltiplos danos no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Katon Endan</h3>
              <p>Level: 300</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Katon Kairyudan no Jutsu</h3>
              <p>Level: 300</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo, em linha reta</p>
          </li>
          
          <li>
              <h3>Jutsu: Shunshin no Shisui</h3>
              <p>Level: 325</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Shunfu Taito</h3>
              <p>Level: 350</p>
              <p>Utilidade: Suporte</p>
              <p>Descrição: Shisui pula no alvo e o trapa por alguns instantes. Ele consegue usar o jutsu 2x antes de entrar em cooldown.</p>
          </li>
          
          <li>
              <h3>Jutsu: Katon Karyu Endan</h3>
              <p>Level: 360</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Susanoo Danmaku</h3>
              <p>Level: 400</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Izanagi</h3>
              <p>Level: 400</p>
              <p>Utilidade: Suporte</p>
              <p>Descrição: Caso o jogador morra dentro de 10 segundos após ativar o jutsu, ele será enviado para um mundo preto por alguns segundos, depois será revivido no lugar onde morreu.</p>
          </li>
          
          <li>
              <h3>Jutsu: Magen Shinkarasu</h3>
              <p>Level: 425</p>
              <p>Utilidade: Suporte</p>
              <p>Descrição: Após usar este jutsu, se Shisui receber dano de algum jogador ele se transformará num corvo automaticamente, ficando invisível e criará alguns corvos. Shisui pode se mexer livremente para onde quiser.</p>
          </li>
          
          <li>
              <h3>Jutsu: Mangekyou Susanoo</h3>
              <p>Level: 450</p>
              <p>Utilidade: Suporte</p>
              <p>Descrição: Aumenta todos os atributos do personagem, diminuindo todo dano recebido em 40% por 20 segundos.</p>
          </li>
          
          <li>
              <h3>Jutsu: Susanoo Tsukumo</h3>
              <p>Level: 450</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa múltiplos danos no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Sanzengarasu no Jutsu</h3>
              <p>Level: 475</p>
              <p>Utilidade: Suporte</p>
              <p>Descrição: Shisui invoca vários corvos e fica invisível por alguns segundos, trocando de lugar aleatoriamente com um dos corvos.</p>
          </li>
          
          <li>
              <h3>Jutsu: Kotoamatsukami</h3>
              <p>Level: 500</p>
              <p>Utilidade: Suporte</p>
              <p>Descrição: Shisui puxa o alvo para seu mundo, onde após sair, o alvo tem todos os buffs selados e fica trapado por alguns segundos.</p>
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
background-color: green;
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
        
        