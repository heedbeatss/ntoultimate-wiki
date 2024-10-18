<template>
    <section class="personagem"> 
        <div class="personagem__info">
          <img src="@/assets/personagens/Deidara.jpg"> 
          <h2>Deidara</h2>
          <h3> Dano | Distance </h3> 
        </div>

        <div class="combos">
          <button @click="toggleCombo('old')">Combo Old Client</button>
          <button @click="toggleCombo('otc')">Combo OTC</button>
        </div>
    
        <div id="old" class="combo-content" v-show="showOld">
          <li> auto 200 listas 'Deidara' | setcolor 205 85 85 | isattacking say kibaku nendo tori | isattacking say shi suri | isattacking say katsu bakurei      </li>
        </div>
    
        <div id="otc" class="combo-content" v-show="showOtc">
          <li>  macro(100, "Combo Deidara", function()
            if g_game.isAttacking() then
                say("kibaku nendo tori")
                say("shi suri")
                say("katsu bakurei")
                 end
          end)      </li>
        </div>

        <div class="jutsus__personagens">
          <ul class="jutsus__deidara.jpg">
            <li>
              <h3>Jutsu: Katsu Bakuku</h3>
              <p>Level: 100</p>
              <p>Utilidade: Buff</p>
              <p>Descrição: Aumenta seus atributos.</p>
          </li>
          <li>
              <h3>Jutsu: Kibaku Nendo Kumo</h3>
              <p>Level: 100</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Invoca duas C1 Spider e logo elas explodem, causando dano no alvo.</p>
          </li>
          <li>
              <h3>Jutsu: Kibaku Nendo Dai Kumo</h3>
              <p>Level: 130</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Invoca cinco C4 Spider e logo elas explodem, causando dano no alvo.</p>
          </li>
          <li>
              <h3>Jutsu: Kibaku Nendo Fukurou</h3>
              <p>Level: 150</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Invoca dois C1 Bird e logo eles explodem, causando dano no alvo.</p>
          </li>
          <li>
              <h3>Jutsu: Kibaku Nendo Dai Fukurou</h3>
              <p>Level: 180</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Invoca cinco C4 Bird e logo eles explodem, causando dano no alvo.</p>
          </li>
          <li>
              <h3>Jutsu: Kibaku Nendo Tori</h3>
              <p>Level: 200</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa múltiplos danos no alvo.</p>
          </li>
          <li>
              <h3>Jutsu: Shi Suri</h3>
              <p>Level: 250</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo.</p>
          </li>
          <li>
              <h3>Jutsu: Kibaku Nendo Nazocho</h3>
              <p>Level: 300</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Invoca um C5 Bird e logo ele explode, causando dano no alvo.</p>
          </li>
          <li>
              <h3>Jutsu: Katsu Bakurei</h3>
              <p>Level: 400</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa múltiplos danos no alvo.</p>
          </li>
          <li>
              <h3>Jutsu: Katsu Shi Tori</h3>
              <p>Level: 425</p>
              <p>Utilidade: Suporte</p>
              <p>Descrição: Trapa o alvo.</p>
          </li>
          <li>
              <h3>Jutsu: Katsu</h3>
              <p>Level: 450</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Para usar este jutsu, você precisa ter alguma invocação. Causa muito dano.</p>
          </li>
          <li>
              <h3>Jutsu: Nendo Suri</h3>
              <p>Level: 475</p>
              <p>Utilidade: Suporte</p>
              <p>Descrição: Ao usar este jutsu e receber um dano superior a 25k, o jutsu é ativado. Deidara não consegue atacar o alvo por 3 segundos, mas também não é alvejado.</p>
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
    background-color:yellow;
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

  .combo-content  {
    color: white;
  }

  .combos button {
    background-color: orange;
    color: #ffffff; 
    border: 2px solid white; 
    border-radius: 8px; 
    padding: 10px 20px; 
    font-size: 1rem; 
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s; 
    margin: 5px; 
  }
  
  .combos button:hover {
    background-color: yellow; 
    transform: scale(1.05);
  }
  
  .combos button:active {
    transform: scale(0.95);
    background-color: yellow; 
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
    