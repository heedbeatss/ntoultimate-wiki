<template>
    <section class="personagem"> 
        <div class="personagem__info">
          <img src="@/assets/personagens/Obito.jpg"> 
          <h2>Obito</h2>
          <h3> Dano | Suporte | Sword/Distance </h3> 
        </div>

        <div class="combos">
          <button @click="toggleCombo('old')">Combo Old Client</button>
          <button @click="toggleCombo('otc')">Combo OTC</button>
        </div>
    
        <div id="old" class="combo-content" v-show="showOld">
          <li> 
            auto 200 listas 'Obito' | setcolor 0 191 255 | isattacking say katon bakufu ranbu | isattacking say katon karyu endan | isattacking say gedou shinsei | isattacking say katon katohenke no jutsu | isattacking say senka no en | isattacking say kamui
          </li>
        </div>
    
        <div id="otc" class="combo-content" v-show="showOtc">
          <li> 
            
            macro(100, "Combo Obito", function()
                if g_game.isAttacking() then
                    say("katon bakufu ranbu")
                    say("katon karyu endan")
                    say("gedou shinsei")
                    say("katon katohenke no jutsu")
                    say("senka no en")
                    say("kamui")
                end
            end)
          </li>
    </div>

        <div class="jutsus__personagens">
          <ul class="jutsus__obito.jpg">
            <ul>
              <li>
                  <h3>Jutsu: Kamui Protect</h3>
                  <p>Level: 50</p>
                  <p>Utilidade: Buff</p>
                  <p>Descrição: Aumenta seus atributos.</p>
              </li>
              <li>
                  <h3>Jutsu: Sharingan Explosion</h3>
                  <p>Level: 50</p>
                  <p>Utilidade: Dano</p>
                  <p>Descrição: Causa dano no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Explosion Kunai</h3>
                  <p>Level: 50</p>
                  <p>Utilidade: Dano</p>
                  <p>Descrição: Causa múltiplos danos no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Katon Dragon Furie</h3>
                  <p>Level: 80</p>
                  <p>Utilidade: Dano</p>
                  <p>Descrição: Causa dano no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Katon Dragon No Jutsu</h3>
                  <p>Level: 100</p>
                  <p>Utilidade: Dano</p>
                  <p>Descrição: Causa dano em área.</p>
              </li>
              <li>
                  <h3>Jutsu: Sharingan Katohenke</h3>
                  <p>Level: 130</p>
                  <p>Utilidade: Dano</p>
                  <p>Descrição: Causa dano no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Katon Dragon Furie No Jutsu</h3>
                  <p>Level: 130</p>
                  <p>Utilidade: Dano</p>
                  <p>Descrição: Causa dano no alvo, em linha reta.</p>
              </li>
              <li>
                  <h3>Jutsu: Doton Dragon Furie</h3>
                  <p>Level: 150</p>
                  <p>Utilidade: Dano</p>
                  <p>Descrição: Causa dano no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Doton Prision</h3>
                  <p>Level: 170</p>
                  <p>Utilidade: Trap</p>
                  <p>Descrição: Trapa o alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Katon Sohenka No Jutsu</h3>
                  <p>Level: 190</p>
                  <p>Utilidade: Dano</p>
                  <p>Descrição: Dano em área.</p>
              </li>
              <li>
                  <h3>Jutsu: Doton Mosayko No Jutsu</h3>
                  <p>Level: 200</p>
                  <p>Utilidade: Dano</p>
                  <p>Descrição: Múltiplos danos no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Kamui Me</h3>
                  <p>Level: 240</p>
                  <p>Utilidade: Suporte</p>
                  <p>Descrição: Te envia para outro mundo dentro do Kamui, com teleports para você escolher onde quer ir (O Kamui Me é uma área de safe zone).</p>
              </li>
              <li>
                  <h3>Jutsu: Kamui</h3>
                  <p>Level: 250</p>
                  <p>Utilidade: Dano</p>
                  <p>Descrição: Causa dano no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Keiyaku Fuin</h3>
                  <p>Level: 285</p>
                  <p>Utilidade: Trap</p>
                  <p>Descrição: Trapa o alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Kamui No Jutsu</h3>
                  <p>Level: 300</p>
                  <p>Utilidade: Suporte</p>
                  <p>Descrição: Te envia para o Kamui, deixando um teleporte para o Kamui onde você usar o jutsu. Outros jogadores poderão entrar no Kamui.</p>
              </li>
              <li>
                  <h3>Jutsu: Senka No En</h3>
                  <p>Level: 300</p>
                  <p>Utilidade: Dano</p>
                  <p>Descrição: Causa dano no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Katon Katohenke No Jutsu</h3>
                  <p>Level: 350</p>
                  <p>Utilidade: Dano</p>
                  <p>Descrição: Causa dano no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Katon Karyu Endan</h3>
                  <p>Level: 360</p>
                  <p>Utilidade: Dano</p>
                  <p>Descrição: Causa dano no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Izanagi</h3>
                  <p>Level: 400</p>
                  <p>Utilidade: Suporte</p>
                  <p>Descrição: Ao usar este jutsu, o Izanagi será ativado por um período específico. Se seu personagem morrer durante esse período, ele será transportado para um mundo negro com todo o HP recuperado e retornará à posição original após alguns segundos.</p>
              </li>
              <li>
                  <h3>Jutsu: Kuchyose Gedou Mazou</h3>
                  <p>Level: 400</p>
                  <p>Utilidade: Kuchyose</p>
                  <p>Descrição: Invoca a estátua Gedou Mazou.</p>
              </li>
              <li>
                  <h3>Jutsu: Katon Bakufu Ranbu</h3>
                  <p>Level: 450</p>
                  <p>Utilidade: Dano</p>
                  <p>Descrição: Causa dano no alvo.</p>
              </li>
              <li>
                  <h3>Jutsu: Kamui Muzan</h3>
                  <p>Level: 450</p>
                  <p>Utilidade: Suporte</p>
                  <p>Descrição: Ao utilizar este jutsu, Obito ficará invisível por alguns segundos.</p>
              </li>
              <li>
                  <h3>Jutsu: Dai Kamui</h3>
                  <p>Level: 500</p>
                  <p>Utilidade: Suporte</p>
                  <p>Descrição: Este jutsu só funciona via target. Obito envia o alvo para um mundo paralelo do Kamui por alguns segundos e, logo depois, o alvo retorna à posição original.</p>
              </li>
              <li>
                  <h3>Jutsu: Gedou Shinsei</h3>
                  <p>Level: 500</p>
                  <p>Utilidade: Dano</p>
                  <p>Descrição: Causa dano no alvo.</p>
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
          