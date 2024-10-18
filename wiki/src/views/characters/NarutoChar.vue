<template>
    <section class="personagem"> 
      <div class="personagem__info">
        <img src="@/assets/personagens/Naruto.png"> 
        <h2>Naruto</h2>
        <h3>Dano | Suporte | Stack | Glove/Sword/Distance</h3> 
      </div>
      
      <div class="combos">
        <button @click="toggleCombo('old')">Combo Old Client</button>
        <button @click="toggleCombo('otc')">Combo OTC</button>
      </div>
  
      <div id="old" class="combo-content" v-show="showOld">
        <li> 
          auto 200 listas 'Naruto' | setcolor 178 58 238 | isattacking say rasenkyugan | isattacking say rikudou choodama rasenshuriken | isattacking say senpou jiton rasenshuriken | isattacking say senpou youton rasenshuriken | isattacking say fuuton rasenshuriken | isattacking say bijuu dama
       </li>
      </div>
  
      <div id="otc" class="combo-content" v-show="showOtc">
        <li> 
          macro(100, "Combo Naruto", function()
              if g_game.isAttacking() then
                  say("rasenkyugan")
                  say("rikudou choodama rasenshuriken")
                  say("senpou jiton rasenshuriken")
                  say("senpou youton rasenshuriken")
                  say("fuuton rasenshuriken")
              say(" bijuu dama")
            end
            end)     </li>
  </div>

      <div class="jutsus__personagens">
        <ul class="jutsus__naruto">
          <li>
            <h3>Jutsu: Oiroke no Jutsu</h3>
            <p>Level: 70</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Causa lyze em área</p>
          </li>
          <li>
            <h3>Jutsu: Kyuubi Protect</h3>
            <p>Level: 100</p>
            <p>Utilidade: Buff</p>
            <p>Descrição: Aumenta seus atributos</p>
          </li>
          <li>
            <h3>Jutsu: Kyuubi Chakura</h3>
            <p>Level: 100</p>
            <p>Utilidade: Buff</p>
            <p>Descrição: Quando Naruto usar o buff, todos os membros num raio de 5SQM irão receber um buff de 25 de Ninjutsu + 10k de regen de chakra e vida por segundo.</p>
          </li>
          <li>
            <h3>Jutsu: Oodama Rasengan</h3>
            <p>Level: 100</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Kuchyose Gamabunta no Jutsu</h3>
            <p>Level: 125</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Naruto invoca Gamabunta para ajuda-lo</p>
          </li>
          <li>
            <h3>Jutsu: Rasenrengan</h3>
            <p>Level: 165</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Bijuu Dama</h3>
            <p>Level: 175</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Kyuubi Punchi</h3>
            <p>Level: 175</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Rasenshuriken</h3>
            <p>Level: 200</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Choodama Rasen Tarengan</h3>
            <p>Level: 220</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Fuuton Rasenshuriken</h3>
            <p>Level: 250</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Biju Rasengan</h3>
            <p>Level: 275</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Rasenkyugan</h3>
            <p>Level: 350</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Chakura no Te</h3>
            <p>Level: 375</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Trapa o alvo por 2 segundos.</p>
          </li>
          <li>
            <h3>Jutsu: Senpou Youton Rasenshuriken</h3>
            <p>Level: 400</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Dai Taju Kagebunshin no Jutsu</h3>
            <p>Level: 450</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Naruto invoca vários clones, ficando invisível por alguns segundos.</p>
          </li>
          <li>
            <h3>Jutsu: Senpou Jiton Rasenshuriken</h3>
            <p>Level: 450</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Rikudou Choodama Rasenshuriken</h3>
            <p>Level: 475</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Barion Modo</h3>
            <p>Level: 500</p>
            <p>Utilidade: Buff</p>
            <p>Descrição: Naruto ganha 155 de Ninjutsu, +25 de Taijutsu, + 120 de Glove, +120 de Sword e +120 de Distance. Naruto fica imune a lentidão durante o efeito do jutsu, além de aumentar 35% de HP máximo e ignorar 20% de dano.
            Durante o efeito do jutsu, Naruto não poderá usar os jutsus: Kyuubi Protect e Kyuubi Chakura. Caso já esteja ativado, será encerrado os outros buffs ao ativar Barion Modo.</p>
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
  background-color: #FF4500;
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

  