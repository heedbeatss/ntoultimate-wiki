<template>
  <section class="personagem"> 
    <div class="personagem__info">
      <img src="@/assets/personagens/Jiraya.png"> 
      <h2>Jiraiya</h2>
      <h3>Dano | Suporte | Trap | Glove/Sword/Distance</h3> 
    </div>

    <div class="combos">
      <button @click="toggleCombo('old')">Combo Old Client</button>
      <button @click="toggleCombo('otc')">Combo OTC</button>
    </div>

    <div id="old" class="combo-content" v-show="showOld">
      <li>
       
        auto 200 listas 'JIRAYA' | setcolor 255 192 203 | isattacking say senpou chou oudama rasengan | isattacking say katon goemon | isattacking say hari jizou | isattacking say chououdama rasengan | isattacking say chou rasengan | isattacking say katon endan      </li>
    </div>

    <div id="otc" class="combo-content" v-show="showOtc">
      <li> 
    
        macro(100, "Combo Jiraya", function()
            if g_game.isAttacking() then
                say("senpou chou oudama rasengan")
                say("katon goemon")
                say("hari jizou")
                say("chououdama rasengan")
                say("chou rasengan")
                say("katon endan")
            end
        end)
      </li>
</div>

    <div class="jutsus__personagens">
      <ul class="jutsus__jiraya">
        <li>
          <h3>Jutsu: Senpou Ryousei</h3>
          <p>Level: 100</p>
          <p>Utilidade: Buff</p>
          <p>Descrição: Aumenta seus atributos</p>
        </li>
        <li>
          <h3>Jutsu: Oodama Rasengan</h3>
          <p>Level: 100</p>
          <p>Utilidade: Dano</p>
          <p>Descrição: Causa dano no alvo</p>
        </li>
        <li>
          <h3>Jutsu: Katon Dragon Furie no Jutsu</h3>
          <p>Level: 130</p>
          <p>Utilidade: Dano</p>
          <p>Descrição: Causa dano no alvo, em linha reta</p>
        </li>
        <li>
          <h3>Jutsu: Doton Dragon Furie</h3>
          <p>Level: 150</p>
          <p>Utilidade: Dano</p>
          <p>Descrição: Causa dano no alvo</p>
        </li>
        <li>
          <h3>Jutsu: Rasenrengan</h3>
          <p>Level: 165</p>
          <p>Utilidade: Dano</p>
          <p>Descrição: Causa dano no alvo</p>
        </li>
        <li>
          <h3>Jutsu: Doton Prision</h3>
          <p>Level: 170</p>
          <p>Utilidade: Suporte</p>
          <p>Descrição: Trapa o alvo</p>
        </li>
        <li>
          <h3>Jutsu: Suiton Suikodan no Jutsu</h3>
          <p>Level: 190</p>
          <p>Utilidade: Dano/Suporte</p>
          <p>Descrição: Ao usar o jutsu, o alvo é empurrado para longe e leva dano. Se usado perto do alvo, o mesmo toma stun</p>
        </li>
        <li>
          <h3>Jutsu: Senpou Kebari Senbou</h3>
          <p>Level: 200</p>
          <p>Utilidade: Dano</p>
          <p>Descrição: Causa multiplos dano no alvo</p>
        </li>
        <li>
          <h3>Jutsu: Gamaguchi Shibari</h3>
          <p>Level: 250</p>
          <p>Utilidade: Suporte</p>
          <p>Descrição: Cria uma trap em volta do alvo</p>
        </li>
        <li>
          <h3>Jutsu: Keiyaku Fuin</h3>
          <p>Level: 285</p>
          <p>Utilidade: Suporte</p>
          <p>Descrição: Trapa o alvo por alguns segundos</p>
        </li>
        <li>
          <h3>Jutsu: Katon Endan</h3>
          <p>Level: 300</p>
          <p>Utilidade: Dano</p>
          <p>Descrição: Causa dano no alvo</p>
        </li>
        <li>
          <h3>Jutsu: Chou Rasengan</h3>
          <p>Level: 350</p>
          <p>Utilidade: Dano</p>
          <p>Descrição: Causa dano no alvo</p>
        </li>
        <li>
          <h3>Jutsu: Chououdama Rasengan</h3>
          <p>Level: 400</p>
          <p>Utilidade: Dano</p>
          <p>Descrição: Causa dano no alvo</p>
        </li>
        <li>
          <h3>Jutsu: Kuchiyose no Jutsu</h3>
          <p>Level: 425</p>
          <p>Utilidade: Suporte</p>
          <p>Descrição: Jiraiya invoca os três sapo lendário</p>
        </li>
        <li>
          <h3>Jutsu: Gamayudan</h3>
          <p>Level: 425</p>
          <p>Utilidade: Suporte</p>
          <p>Descrição: Ao utilizar este jutsu, Jiraiya lança óleo nos oponentes à sua frente, tornando os alvos afetados, que não estiverem em sua party, vulneráveis a danos aumentados do estilo Katon. (o jutsu só funciona em Player)</p>
        </li>
        <li>
          <h3>Jutsu: Katon Goemon</h3>
          <p>Level: 450</p>
          <p>Utilidade: Dano</p>
          <p>Descrição: Causa multiplos dano no alvo</p>
        </li>
        <li>
          <h3>Jutsu: Kekkai Hyoro</h3>
          <p>Level: 450</p>
          <p>Utilidade: Suporte</p>
          <p>Descrição: Jiraiya invoca diversos sapo e troca de lugar aleatoriamente com um dos sapo.</p>
        </li>
        <li>
          <h3>Jutsu: Kekkai Gama Hyoro</h3>
          <p>Level: 450</p>
          <p>Utilidade: Suporte</p>
          <p>Descrição: Jiraiya invoca um sapo especial que irá até o alvo (player) e o enviará para o mundo dos sapos. Se Jiraiya andar em cima do sapo, também é enviado ao mundo dos sapos. Em alguns segundos ambos sairão do mundo.</p>
        </li>
        <li>
          <h3>Jutsu: Senpou Chou Oudama Rasengan</h3>
          <p>Level: 475</p>
          <p>Utilidade: Dano</p>
          <p>Descrição: Causa dano no alvo</p>
        </li>
        <li>
          <h3>Jutsu: Ranjishigami no Jutsu</h3>
          <p>Level: 485</p>
          <p>Utilidade: Suporte</p>
          <p>Descrição: Jiraiya pula no alvo e trapa.</p>
        </li>
        <li>
          <h3>Jutsu: Hari Jizou</h3>
          <p>Level: 500</p>
          <p>Utilidade: Dano/Suporte</p>
          <p>Descrição: Ao usar o jutsu em um alvo, Jiraiya dispara uma rajada de espinhos. Se usar o jutsu sem um alvo, Jiraiya dispara espinhos por todos os lados, recuperando uma pequena porcentagem de HP.</p>
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
  background:#DA70D6;
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
  border: 4px solid black
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

