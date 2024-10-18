<template>
  <section class="personagem"> 
      <div class="personagem__info">
        <img src="@/assets/personagens/Orochimaru.jpg"> 
        <h2>Orochimaru</h2>
        <h3>
          Dano | Lyze | Suporte | Sword/Distance
        </h3> 
      </div>

      <div class="combos">
        <button @click="toggleCombo('old')">Combo Old Client</button>
        <button @click="toggleCombo('otc')">Combo OTC</button>
      </div>
  
      <div id="old" class="combo-content" v-show="showOld">
        <li>
          auto 200 listas 'Orochimaru' | setcolor 0 255 255 | isattacking say kusanagi tachi | isattacking say shiro hebi | isattacking say mandara no jin | isattacking say dai sunekubaito | isattacking say seneijashu | isattacking say idaina hebi no kougeki | isattacking say kusanagi no tsurugi
        </li>
      </div>
  
      <div id="otc" class="combo-content" v-show="showOtc">
        <li> 
          macro(100, "Combo Orochimaru", function()
              if g_game.isAttacking() then
                  say("kusanagi tachi")
                  say("shiro hebi")
                  say("mandara no jin")
                  say("dai sunekubaito")
                  say("seneijashu")
                  say("idaina hebi no kougeki")
                  say("kusanagi no tsurugi")
              end
          end)
        </li>
  </div>

      <div class="jutsus__personagens">
          <ul class="jutsus__orochimaru">
              <li>
                <h3>Jutsu: Kiba Hebi</h3>
                <p>Level: 100</p>
                <p>Utilidade: Buff</p>
                <p>Descrição: Aumenta seus atributos</p>
              </li>
              <li>
                <h3>Jutsu: Kuchyose Jya no Jutsu</h3>
                <p>Level: 130</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Orochimaru invoca Jya para ajuda-lo</p>
              </li>
              <li>
                <h3>Jutsu: Kusanagi no Tsurugi</h3>
                <p>Level: 150</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
              </li>
              <li>
                <h3>Jutsu: Kuchyose Manda no Jutsu</h3>
                <p>Level: 150</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Orochimaru invoca Manda para ajuda-lo</p>
              </li>
              <li>
                <h3>Jutsu: Chiyute no Jutsu</h3>
                <p>Level: 175</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Cura uma grande quantidade de vida, podendo usar em aliados também. Para usar, basta deixar a kunai ligada e escrever assim: (Chiyute no Jutsu "Nick do jogador)</p>
              </li>
              <li>
                <h3>Jutsu: Kusanagi Dance</h3>
                <p>Level: 200</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
              </li>
              <li>
                <h3>Jutsu: Senei Tajashu</h3>
                <p>Level: 250</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
              </li>
              <li>
                <h3>Jutsu: Edo Tensei no Jutsu</h3>
                <p>Level: 260</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Ao usar este jutsu, Tobirama ganha um pergaminho do Edo Tensei, para que possa utilizar em algum corpo e usa-lo como Edo Tensei.</p>
              </li>
              <li>
                <h3>Jutsu: Edo Tensei Kai</h3>
                <p>Level: 260</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Ao usar este jutsu, Tobirama desfaz o Edo Tensei.</p>
              </li>
              <li>
                <h3>Jutsu: Idaina Hebi no Kougeki</h3>
                <p>Level: 300</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
              </li>
              <li>
                <h3>Jutsu: Hebi Shykaia no Jutsu</h3>
                <p>Level: 325</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Orochimaru reduz a velocidade de todos os jogadores ao seu redor</p>
              </li>
              <li>
                <h3>Jutsu: Seneijashu</h3>
                <p>Level: 350</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
              </li>
              <li>
                <h3>Jutsu: Dai Sunekubaito</h3>
                <p>Level: 400</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
              </li>
              <li>
                <h3>Jutsu: Kuchyose Yamata</h3>
                <p>Level: 425</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Orochimaru invoca Yamata para ajuda-lo</p>
              </li>
              <li>
                <h3>Jutsu: Noroi No Maku</h3>
                <p>Level: 425</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Este justu irá buffar um aliado, concedendo atributos extra de skills.</p>
              </li>
              <li>
                <h3>Jutsu: Kusanagi Tachi</h3>
                <p>Level: 450</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
              </li>
              <li>
                <h3>Jutsu: Mandara no Jin</h3>
                <p>Level: 475</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
              </li>
              <li>
                <h3>Jutsu: Gogyo No Shiru</h3>
                <p>Level: 475</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Causa lyze e dano no alvo.</p>
              </li>
              <li>
                <h3>Jutsu: Shiro Hebi</h3>
                <p>Level: 500</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
              </li>
              <li>
                <h3>Jutsu: Dappou no Jutsu</h3>
                <p>Level: 500</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Após ativar o jutsu, Orochimaru poderá morrer dentro de 10 segundos. Caso morra, você será revivido, ficando invisível por alguns segundos podendo se mexer livremente enquanto invisível</p>
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
  background: linear-gradient(135deg, #9400D3, #4B0082);
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
