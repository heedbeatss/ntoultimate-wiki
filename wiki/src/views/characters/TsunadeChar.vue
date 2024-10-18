<template>
  <section class="personagem"> 
    <div class="personagem__info">
      <img src="@/assets/personagens/Tsunade.jpeg"> 
      <h2>Tsunade</h2>
      <h3>Suporte | Glove/Sword | Stack | Distance</h3> 
    </div>

    <div class="combos">
      <button @click="toggleCombo('old')">Combo Old Client</button>
      <button @click="toggleCombo('otc')">Combo OTC</button>
    </div>

    <div id="old" class="combo-content" v-show="showOld">
      <li>
        auto 200 listas 'Tsunade' | setcolor 255 192 203 | isattacking say dai tsutenkyaku | isattacking say chuusuusei biribiri | isattacking say yantou chakra mesu | isattacking say taihou kyaku no jutsu | isattacking say tsutenkyaku | isattacking say Ranshinsho
      </li>
    </div>

    <div id="otc" class="combo-content" v-show="showOtc">
      <li>
        macro(100, "Combo Tsunade", function()
            if g_game.isAttacking() then
                say("dai tsutenkyaku")
                say("chuusuusei biribiri")
                say("yantou chakra mesu")
                say("taihou kyaku no jutsu")
                say("tsutenkyaku")
                say("Ranshinsho")
            end
        end)
      </li>
</div>

    <div class="jutsus__personagens">
      <ul class="jutsus__tsunade">
        <li>
          <h3>Jutsu: Sozo Saisei</h3>
          <p>Level: 100</p>
          <p>Utilidade: Buff</p>
          <p>Descrição: Aumenta seus atributos</p>
        </li>
        <li>
          <h3>Jutsu: Ground Punch</h3>
          <p>Level: 100</p>
          <p>Utilidade: Dano</p>
          <p>Descrição: Causa dano no alvo</p>
        </li>
        <li>
          <h3>Jutsu: Tsutenkyaku</h3>
          <p>Level: 130</p>
          <p>Utilidade: Dano</p>
          <p>Descrição: Causa dano no alvo</p>
        </li>
        <li>
          <h3>Jutsu: Chiyute no Jutsu</h3>
          <p>Level: 175</p>
          <p>Utilidade: Suporte</p>
          <p>Descrição: Cura uma grande quantidade de vida, podendo usar em aliados também. Para usar, basta deixar a kunai ligada e escrever assim: (Chiyute no Jutsu "Nick do jogador)</p>
        </li>
        <li>
          <h3>Jutsu: Kuchyose Katsuyu</h3>
          <p>Level: 175</p>
          <p>Utilidade: Suporte</p>
          <p>Descrição: Invoca a Katsuyu, onde ela irá ajudar a Tsunade se curando. Membros em party com Tsunade também são curados.</p>
        </li>
        <li>
          <h3>Jutsu: Taihou Kyaku no Jutsu</h3>
          <p>Level: 200</p>
          <p>Utilidade: Dano</p>
          <p>Descrição: Causa dano no alvo</p>
        </li>
        <li>
          <h3>Jutsu: Ground Barrier</h3>
          <p>Level: 225</p>
          <p>Utilidade: Suporte</p>
          <p>Descrição: Cria uma barreira de pedras que pode ser utilizada para trapar players.</p>
        </li>
        <li>
          <h3>Jutsu: Chuusuusei Biribiri</h3>
          <p>Level: 300</p>
          <p>Utilidade: Dano</p>
          <p>Descrição: Causa dano no alvo</p>
        </li>
        <li>
          <h3>Jutsu: Yantou Chakra Mesu</h3>
          <p>Level: 350</p>
          <p>Utilidade: Dano</p>
          <p>Descrição: Causa multiplos danos no alvo e tira mana do alvo.</p>
        </li>
        <li>
          <h3>Jutsu: Ranshinsho</h3>
          <p>Level: 400</p>
          <p>Utilidade: Dano</p>
          <p>Descrição: Causa dano no alvo</p>
        </li>
        <li>
          <h3>Jutsu: Dai Chiyute no Jutsu</h3>
          <p>Level: 450</p>
          <p>Utilidade: Suporte</p>
          <p>Descrição: Cura uma grande quantidade de vida, podendo usar em aliados também. Para usar, basta deixar a kunai ligada e escrever assim: (Dai Chiyute no Jutsu "Nick do jogador)</p>
        </li>
        <li>
          <h3>Jutsu: Dai Tsutenkyaku</h3>
          <p>Level: 450</p>
          <p>Utilidade: Dano</p>
          <p>Descrição: Causa multiplos danos no alvo</p>
        </li>
        <li>
          <h3>Jutsu: Byakugo no Jutsu</h3>
          <p>Level: 525</p>
          <p>Utilidade: Suporte</p>
          <p>Descrição: Aumenta a regeneração de HP por um longo período</p>
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
  background-color: 	#F0E68C;
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

