<template>
    <section class="personagem"> 
        <div class="personagem__info">
          <img src="@/assets/personagens/Dodai.png"> 
          <h2>Dodai</h2>
          <h3> Dano | Suporte | Distance/Sword</h3> 
        </div>

        <div class="combos">
            <button @click="toggleCombo('old')">Combo Old Client</button>
            <button @click="toggleCombo('otc')">Combo OTC</button>
          </div>
      
          <div id="old" class="combo-content" v-show="showOld">
            <li>
                auto 200 listas 'DODAI' | setcolor 255 192 203 | isattacking say dai youton doryuheki | isattacking say youton doryuheki | isattacking say youton doryudan | isattacking say youton taiga | isattacking say youton shouka | isattacking say youton funka (editado)
            </li>
          </div>
      
          <div id="otc" class="combo-content" v-show="showOtc">
            <li> 
                
                macro(100, "Combo Dodai", function()
                    if g_game.isAttacking() then
                        say("dai youton doryuheki")
                        say("youton doryuheki")
                        say("youton doryudan")
                        say("youton taiga")
                        say("youton shouka")
                        say("youton funka")
                    end
                end)
            </li>
      </div>

        <div class="jutsus__personagens">
          <ul class="jutsus__dodai.jpg">
            <li>
                <h3>Jutsu: Ground Punch</h3>
                <p>Level: 100</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Youton Gomu</h3>
                <p>Level: 100</p>
                <p>Utilidade: Buff</p>
                <p>Descrição: Aumenta os atributos.</p>
            </li>
            
            <li>
                <h3>Jutsu: Doton Dragon Furie</h3>
                <p>Level: 150</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Youton Akai</h3>
                <p>Level: 200</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa multiplos dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Ground Barrier</h3>
                <p>Level: 225</p>
                <p>Utilidade: Suporte/Trap</p>
                <p>Descrição: Cria uma barreira de pedras que pode ser utilizada em áreas pequenas para trapar seus oponentes.</p>
            </li>
            
            <li>
                <h3>Jutsu: Youton Gakuhou</h3>
                <p>Level: 250</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Youton Funka</h3>
                <p>Level: 300</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa multiplos dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Youton Shouka</h3>
                <p>Level: 350</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Youton Taiga</h3>
                <p>Level: 400</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa multiplos dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Youton Prision</h3>
                <p>Level: 425</p>
                <p>Utilidade: Trap</p>
                <p>Descrição: Trapa um alvo.</p>
            </li>
            
            <li>
                <h3>Jutsu: Youton Doryudan</h3>
                <p>Level: 450</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Youton Doryuheki</h3>
                <p>Level: 475</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Dai Youton Doryuheki</h3>
                <p>Level: 500</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Youton Chiri no Jutsu</h3>
                <p>Level: 500</p>
                <p>Utilidade: Buff</p>
                <p>Descrição: Aumenta todos os atributos do personagem, diminuindo todo dano recebido em 40% por 10 segundos e todos que estiverem em party também recebem o buff.</p>
            </li>
            
            <li>
                <h3>Jutsu: Youton Yokai</h3>
                <p>Level: 525</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Dodai fica invisível por alguns segundos.</p>
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
    background-color: yellow;
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
            