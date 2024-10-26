<template>
    <section class="personagem"> 
      <div class="personagem__info">
        <img src="@/assets/personagens/Madara.webp"> 
        <h2>Madara</h2>
        <h3> Dano | Suporte | Trap | Distance/Sword </h3> 
      </div>

      <div class="combos">
        <button @click="toggleCombo('old')">Combo Old Client</button>
        <button @click="toggleCombo('otc')">Combo OTC</button>
      </div>
  
      <div id="old" class="combo-content" v-show="showOld">
        <li>
          auto 200 listas 'Madara' | setcolor 106 90 205 | isattacking say shin tengai shinsei | isattacking say say tengai shinsei | say tengai yasaka no magatama | isattacking say susano attack | isattacking say katon booru kaki | isattacking say katon endan | isattacking say mokuton mosayko no jutsu
        </li>
      </div>
  
      <div id="otc" class="combo-content" v-show="showOtc">
        <li> 
          macro(100, "Combo Madara", function()
              if g_game.isAttacking() then
                  say("shin tengai shinsei")
                  say("tengai shinsei")
                  say("tengai yasaka no magatama")
                  say("susano attack")
                  say("katon booru kaki")
                  say("katon endan")
                  say("mokuton mosayko no jutsu")
              end
          end)
         </li>
  </div>

      <div class="jutsus__personagens">
        <ul class="jutsus__madara">
          <li>
            <h3>Jutsu: Susanoo</h3>
            <p>Level: 100</p>
            <p>Utilidade: Buff</p>
            <p>Descrição: Aumenta seus atributos</p>
          </li>
          <li>
            <h3>Jutsu: Katon Dragon no Jutsu</h3>
            <p>Level: 100</p>
            <p>Utilidade: Buff</p>
            <p>Descrição: Causa dano em área</p>
          </li>
          <li>
            <h3>Jutsu: Sharingan Katohenke</h3>
            <p>Level: 130</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Doton Dragon Furie</h3>
            <p>Level: 150</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Senpou Mokuton Prision</h3>
            <p>Level: 175</p>
            <p>Utilidade: Suporte/Trap</p>
            <p>Descrição: Madara trapa o alvo por alguns segundos</p>
          </li>
          <li>
            <h3>Jutsu: Chiyute no Jutsu</h3>
            <p>Level: 175</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Cura uma grande quantidade de vida, podendo usar em aliados também. Para usar, basta deixar a kunai ligada e escrever assim: (Chiyute no Jutsu "Nick do jogador)</p>
          </li>
          <li>
            <h3>Jutsu: Mokuton Prision</h3>
            <p>Level: 175</p>
            <p>Utilidade: Suporte/Trap</p>
            <p>Descrição: Madara trapa seu alvo</p>
          </li>
          <li>
            <h3>Jutsu: Katon Sohenka no Jutsu</h3>
            <p>Level: 190</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano em área</p>
          </li>
          <li>
            <h3>Jutsu: Suiton Suijinheki no Jutsu</h3>
            <p>Level: 210</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Dai Shinra Tensei</h3>
            <p>Level: 275</p>
            <p>Utilidade: Dano/Suporte</p>
            <p>Descrição: Afasta todos os inimigos, empurrando e causando dano.</p>
          </li>
          <li>
            <h3>Jutsu: Katon Endan</h3>
            <p>Level: 300</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Dai Banshou Tein</h3>
            <p>Level: 300</p>
            <p>Utilidade: Dano/Suporte</p>
            <p>Descrição: Madara puxa todos os oponentes para perto.</p>
          </li> 
          <li>
            <h3>Jutsu: Katon Booru Kaki</h3>
            <p>Level: 300</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo.</p>
          </li> 
          <li>
            <h3>Jutsu: Katon Booru Kaki</h3>
            <p>Level: 300</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa  dano no alvo.</p>
          </li> 
          <li>
            <h3>Jutsu: Meteor no Jutsu</h3>
            <p>Level: 350</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa múltiplos dano no alvo.</p>
          </li> 
          <li>
            <h3>Jutsu: Izanagi</h3>
            <p>Level: 400</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Madara puxa todos os oponentes para perto.</p>
          </li> 
          <li>
            <h3>Jutsu: Tengai Shinsei</h3>
            <p>Level: 400</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa  dano no alvo.</p>
          </li> 
          <li>
            <h3>Jutsu: Tengai Shinsei</h3>
            <p>Level: 400</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa  dano no alvo.</p>
          </li> 
          <li>
            <h3>Jutsu: Susano Attack</h3>
            <p>Level: 450</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa  dano no alvo.</p>
          </li> 
          <li>
            <h3>Jutsu: Mangekyou Susanoo</h3>
            <p>Level: 450</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Aumenta todos os atributos do personagem, diminuindo todo dano recebido em 40% por 20 segundos.</p>
          </li> 
          <li>
            <h3>Jutsu: Senpo Mokuton Hijutsu Koutan</h3>
            <p>Level: 450</p>
            <p>Utilidade: Suporte/Lyze</p>
            <p>Descrição: Aumenta todos os atributos do personagem, diminuindo todo dano recebido em 40% por 20 segundos.</p>
          </li> 
          <li>
            <h3>Jutsu: Shin Tengai Shinsei</h3>
            <p>Level: 475</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa  dano no alvo.</p>
          </li> 
          <li>
            <h3>Jutsu: Tengai Yasaka no Magatama</h3>
            <p>Level: 500</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa  dano no alvo.</p>
          </li> 
          <li>
            <h3>Jutsu: Rinbo Hengoku</h3>
            <p>Level: 500</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Após usar o jutsu, você conseguirá ver jogadores oponentes invisíveis durante 7 segundos, além de invocar vários clones do Madara. Clones irão receber parte do dano que o Madara receberá.</p>
          </li> 
          <li>
            <h3>Jutsu: Katon Haijingakure no Jutsu</h3>
            <p>Level: 525</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Madara solta uma fumaça e se camufla nela por alguns segundos.</p>
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
background-color: #844EEE;
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



    