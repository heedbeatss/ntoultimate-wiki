<template>
    <section class="personagem"> 
      <div class="personagem__info">
        <img src="@/assets/personagens/RockLee.jpg"> 
        <h2>Rock Lee</h2>
        <h3>Dano | Stack | Glove/Sword</h3> 
      </div>

      <div class="combos">
        <button @click="toggleCombo('old')">Combo Old Client</button>
        <button @click="toggleCombo('otc')">Combo OTC</button>
      </div>
  
      <div id="old" class="combo-content" v-show="showOld">
        <li>
          auto 200 listas 'Lee' | setcolor 150 0 150 | isattacking say konoha daigouken | isattacking say kage buyo | isattacking say konoha gouken | isattacking say asa kujaku | isattacking say daigouken shofu | isattacking say konoha daisenpu 
        </li>
      </div>
  
      <div id="otc" class="combo-content" v-show="showOtc">
        <li> 
          macro(100, "Combo Lee", function()
              if g_game.isAttacking() then
                  say("konoha daigouken")
                  say("kage buyo")
                  say("konoha gouken")
                  say("asa kujaku")
                  say("daigouken shofu")
                  say("konoha daisenpu")
              end
          end)
        </li>
  </div>
  
      <div class="jutsus__personagens">
        <ul class="jutsus__rocklee">
          <li>
            <h3>Jutsu: Hachimon Kaimon</h3>
            <p>Level: 75</p>
            <p>Utilidade: Buff</p>
            <p>Descrição: Aumenta seus atributos</p>
          </li>
          <li>
            <h3>Jutsu: Konoha Senpu</h3>
            <p>Level: 100</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Konoha Daishofu</h3>
            <p>Level: 130</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Gouken</h3>
            <p>Level: 150</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Ura Renge</h3>
            <p>Level: 175</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Kougeki</h3>
            <p>Level: 200</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Konoha Daisenpu</h3>
            <p>Level: 200</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Furi Renge</h3>
            <p>Level: 250</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Konoha Daigouken</h3>
            <p>Level: 300</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Kage Buyo</h3>
            <p>Level: 325</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Konoha Gouken</h3>
            <p>Level: 350</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Asa Kujaku</h3>
            <p>Level: 400</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Daigouken Shofu</h3>
            <p>Level: 425</p>
            <p>Utilidade: Dano/Trap</p>
            <p>Descrição: Causa dano, se teletransporta no alvo e causa uma trap no oponente por 2 segundos a cada 20 segundos.</p>
          </li>
          <li>
            <h3>Jutsu: Undo Cho Kosoku</h3>
            <p>Level: 425</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Lee avança até 3x antes de entrar em cooldown o jutsu. Cooldown de 35 segundos</p>
          </li>
          <li>
            <h3>Jutsu: Hirudora</h3>
            <p>Level: 450</p>
            <p>Utilidade: Buff</p>
            <p>Descrição: Aumenta drasticamente as skills de Taijutsu/Sword/Glove/Distance por 15 segundos.</p>
          </li>
          <li>
            <h3>Jutsu: Suiken</h3>
            <p>Level: 475</p>
            <p>Utilidade: Buff</p>
            <p>Descrição: Lee fica buffado por 45 segundos, recebendo os seguintes bônus a cada 10 segundos:
            Ao usar o jutsu: +15 Ninjutsu, +10 Taijutsu, e 10% de chance de esquivar de qualquer jutsu.
            Após 10 segundos: +15 em todas as armas e 15% de chance de esquivar de qualquer jutsu.
            Após 20 segundos: +10 Ninjutsu, +5 em todas as armas, e 20% de chance de esquivar de qualquer jutsu.
            Após 30 segundos: 25% de chance de esquivar de qualquer jutsu.
            Após 45 segundos: Lee fica mais lento por 2 segundos, impedido de usar Concentrate Chakra Feet devido ao cansaço.</p>
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
  background-color: #32CD32;
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
