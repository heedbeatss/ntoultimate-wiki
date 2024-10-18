<template>
    <section class="personagem"> 
        <div class="personagem__info">
          <img src="@/assets/personagens/Sai.jpg"> 
          <h2>Sai</h2>
          <h3> Dano | Sword/Distance </h3> 
        </div>

        <div class="combos">
          <button @click="toggleCombo('old')">Combo Old Client</button>
          <button @click="toggleCombo('otc')">Combo OTC</button>
        </div>
    
        <div id="old" class="combo-content" v-show="showOld">
          <li>
            auto 200 listas 'Sai' | setcolor 255 192 203 | isattacking say sumi snakes shower | isattacking say sumi futago kyojin | isattacking say choushin renenjaku | isattacking say sumi ryuu no jutsu | isattacking say choujuu giga shower | isattacking say choju giga
          </li>
        </div>
    
        <div id="otc" class="combo-content" v-show="showOtc">
          <li> 
            
            macro(100, "Combo Sai", function()
                if g_game.isAttacking() then
                    say("sumi snakes shower")
                    say("sumi futago kyojin")
                    say("choushin renenjaku")
                    say("sumi ryuu no jutsu")
                    say("choujuu giga shower")
                    say("choju giga")
                end
            end)
          </li>
    </div>

        <div class="jutsus__personagens">
          <ul class="jutsus__sai.jpg">
            <ul>
              <li>
                  <h3>Jutsu: Sumigasumi no Jutsu</h3>
                  <p><strong>Level:</strong> 100</p>
                  <p><strong>Utilidade:</strong> Buff</p>
                  <p><strong>Descrição:</strong> Aumenta seus atributos.</p>
              </li>
              <li>
                  <h3>Jutsu: Choju Giga</h3>
                  <p><strong>Level:</strong> 130</p>
                  <p><strong>Utilidade:</strong> Dano</p>
                  <p><strong>Descrição:</strong> Causa dano no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Choujuu Giga Shower</h3>
                  <p><strong>Level:</strong> 200</p>
                  <p><strong>Utilidade:</strong> Dano</p>
                  <p><strong>Descrição:</strong> Causa múltiplos danos no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Koshi Tandan</h3>
                  <p><strong>Level:</strong> 250</p>
                  <p><strong>Utilidade:</strong> Suporte</p>
                  <p><strong>Descrição:</strong> Sela o buff do alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Sumi Snakes Shower</h3>
                  <p><strong>Level:</strong> 300</p>
                  <p><strong>Utilidade:</strong> Dano</p>
                  <p><strong>Descrição:</strong> Causa múltiplos danos no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Sumi Futago Kyojin</h3>
                  <p><strong>Level:</strong> 350</p>
                  <p><strong>Utilidade:</strong> Dano</p>
                  <p><strong>Descrição:</strong> Causa dano no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Choushin Renenjaku</h3>
                  <p><strong>Level:</strong> 400</p>
                  <p><strong>Utilidade:</strong> Dano</p>
                  <p><strong>Descrição:</strong> Causa dano no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Sumi Ryuu no Jutsu</h3>
                  <p><strong>Level:</strong> 450</p>
                  <p><strong>Utilidade:</strong> Dano</p>
                  <p><strong>Descrição:</strong> Causa dano no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Sumi Bunshin no Jutsu</h3>
                  <p><strong>Level:</strong> 500</p>
                  <p><strong>Utilidade:</strong> Suporte</p>
                  <p><strong>Descrição:</strong> Sai se protege de 3 ataques, ficando invisível a cada jutsu recebido.</p>
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
    