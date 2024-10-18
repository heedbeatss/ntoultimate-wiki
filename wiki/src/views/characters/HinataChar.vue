<template>
    <section class="personagem"> 
      <div class="personagem__info">
        <img src="@/assets/personagens/Hinata.jpeg"> 
        <h2>Hinata</h2>
        <h3>Suporte | Rouba Chakra | Stack | Distance/Gloves</h3> 
      </div>

      <div class="combos">
        <button @click="toggleCombo('old')">Combo Old Client</button>
        <button @click="toggleCombo('otc')">Combo OTC</button>
      </div>
  
      <div id="old" class="combo-content" v-show="showOld">
        <li>
          auto 200 listas 'Hinata/Neji' | setcolor 255 192 203 | isattacking say celestic kaiten | isattacking say juhou soshiken | isattacking say hakke rokujuyon sho | isattacking say hakke hyaku nijuhachi sho | isattacking say hakkeshou celestic kaiten
        </li>
      </div>
  
      <div id="otc" class="combo-content" v-show="showOtc">
        <li> 
          macro(100, "Combo Hinata/Neji", function()
              if g_game.isAttacking() then
                  say("celestic kaiten")
                  say("juhou soshiken")
                  say("hakke rokujuyon sho")
                  say("hakke hyaku nijuhachi sho")
                  say("hakkeshou celestic kaiten")
              end
          end)
        </li>
  </div>

      <div class="jutsus__personagens">
        <ul class="jutsus__hinata">
          <li>
            <h3>Jutsu: Byakugan</h3>
            <p>Level: 50</p>
            <p>Utilidade: Buff</p>
            <p>Descrição: Aumenta seus atributos</p>
          </li>
          <li>
            <h3>Jutsu: Hakkeshou Kaiten</h3>
            <p>Level: 50</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano em área</p>
          </li>
          <li>
            <h3>Jutsu: Juuken Kushou</h3>
            <p>Level: 70</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Hakke Kusho</h3>
            <p>Level: 100</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Kaiten</h3>
            <p>Level: 125</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano em área</p>
          </li>
          <li>
            <h3>Jutsu: Juhou Soshiken</h3>
            <p>Level: 170</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa multiplos dano no alvo e remove chakra de jogadores</p>
          </li>
          <li>
            <h3>Jutsu: Celestic Kaiten</h3>
            <p>Level: 225</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo e remove chakra de jogadores.</p>
          </li>
          <li>
            <h3>Jutsu: Hakkeshou Celestic Kaiten</h3>
            <p>Level: 300</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo e remove chakra de jogadores.</p>
          </li>
          <li>
            <h3>Jutsu: Kage Buyo</h3>
            <p>Level: 325</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo, pulando nele (stack).</p>
          </li>
          <li>
            <h3>Jutsu: Hakke Rokujuyon Sho</h3>
            <p>Level: 350</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo e remove chakra de jogadores</p>
          </li>
          <li>
            <h3>Jutsu: Hakkeshou Dai Kaiten</h3>
            <p>Level: 400</p>
            <p>Utilidade: Dano/Suporte</p>
            <p>Descrição: Causa dano em área e bloqueia 100% de todos os ataques recebidos por alguns segundos, podendo se mover livremente durante o jutsu.</p>
          </li>
          <li>
            <h3>Jutsu: Hakke Hyaku Nijuhachi Sho</h3>
            <p>Level: 450</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo, trapando o alvo e removendo chakra de jogadores</p>
          </li>
          <li>
            <h3>Jutsu: Byakugan Tenken</h3>
            <p>Level: 475</p>
            <p>Utilidade: Buff</p>
            <p>Descrição: Aumenta os atributos por 15 segundos. Caso Hinata tenha 100 de Taijutsu base sem nenhum item, cada hit será duplo.</p>
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
    background-color: #FAF0E6;
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