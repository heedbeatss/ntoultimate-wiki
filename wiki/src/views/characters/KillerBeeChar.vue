<template>
    <section class="personagem"> 
      <div class="personagem__info">
        <img src="@/assets/personagens/KillerBee.jpg"> 
        <h2>Killer Bee</h2>
        <h3>Dano | Stack | Glove/Sword</h3> 
      </div>
      
      <div class="combos">
        <button @click="toggleCombo('old')">Combo Old Client</button>
        <button @click="toggleCombo('otc')">Combo OTC</button>
      </div>
  
      <div id="old" class="combo-content" v-show="showOld">
        <li> 
          auto 200 listas "Bee" | setcolor 150 0 150 | isattacking say mijingiri | isattacking say double lariat | isattacking say lariat | isattacking say bijuu dama | isattacking say akurobatto | isattacking say raiger bomb | isattacking say raiton chinbou no jutsu 
        </li>
      </div>
  
      <div id="otc" class="combo-content" v-show="showOtc">
        <li> 
          
          macro(100, "Combo Bee", function()
              if g_game.isAttacking() then
                  say("mijingiri")
                  say("double lariat")
                  say("lariat")
                  say("bijuu dama")
                  say("akurobatto")
                  say("raiger bomb")
                  say("raiton chinbou no jutsu")
              end
          end)
        </li>
      </div>

      <div class="jutsus__personagens">
        <ul class="jutsus__killerbee">
          <li>
            <h3>Jutsu: Dance Sword</h3>
            <p>Level: 125</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Sword Fang no Jutsu</h3>
            <p>Level: 150</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa multiplos dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Bijuu Dama</h3>
            <p>Level: 175</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Raiton Yoroi</h3>
            <p>Level: 200</p>
            <p>Utilidade: Buff</p>
            <p>Descrição: Aumenta seus atributos</p>
          </li>
          <li>
            <h3>Jutsu: Raiton Fang no Jutsu</h3>
            <p>Level: 200</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Raiton Shibari no Jutsu</h3>
            <p>Level: 250</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano em área</p>
          </li>
          <li>
            <h3>Jutsu: Raiger Bomb</h3>
            <p>Level: 300</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Raiton Chinbou no Jutsu</h3>
            <p>Level: 300</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Akurobatto</h3>
            <p>Level: 350</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa multiplos dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Raigyaku Suihei</h3>
            <p>Level: 350</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Bee dasha em linha reta, todos os jogadores que estiverem no caminho, terá sua velocidade reduzida. Bee consegue utilizar o jutsu 2x.</p>
          </li>
          <li>
            <h3>Jutsu: Lariat</h3>
            <p>Level: 400</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Double Lariat</h3>
            <p>Level: 450</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Mijingiri</h3>
            <p>Level: 475</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Hachibi Shokushu</h3>
            <p>Level: 485</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Trava o alvo por alguns segundos.</p>
          </li>
          <li>
            <h3>Jutsu: Hachibi Furie</h3>
            <p>Level: 500</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Bee se transforma em uma besta de cauda, curando todas suas feridas e recuperando 100% do seu HP ao usar o jutsu. Inimigos ao redor de Bee num raio de 6SQM ficarão com medo, diminuindo o Ninjutsu de seus adversários em 10%, além de aumentar 10% de sua cura e ganha 30 de ninjutsu.</p>
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
  background-color: #D8BFD8;
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
  color: #343a40;
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
