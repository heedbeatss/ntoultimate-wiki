<template>
    <section class="personagem"> 
        <div class="personagem__info">
          <img src="@/assets/personagens/Ino.jpg"> 
          <h2>Ino</h2>
          <h3> Dano | Sword/Distance </h3> 
        </div>

        <div class="combos">
            <button @click="toggleCombo('old')">Combo Old Client</button>
            <button @click="toggleCombo('otc')">Combo OTC</button>
          </div>
      
          <div id="old" class="combo-content" v-show="showOld">
            <li>
                auto 200 listas 'Ino' | setcolor 255 192 203 | isattacking say nikudan yoyo | isattacking say ninpo shingetsu ichirin | isattacking say shintenshin no jutsu | isattacking say misuteshisu tenohira | isattacking say choshinka | isattacking say ninpo hyakka ryoran
            </li>
          </div>
      
          <div id="otc" class="combo-content" v-show="showOtc">
            <li>
                macro(100, "Combo Ino", function()
                    if g_game.isAttacking() then
                        say("nikudan yoyo")
                        say("ninpo shingetsu ichirin")
                        say("shintenshin no jutsu")
                        say("misuteshisu tenohira")
                        say("choshinka")
                        say("ninpo hyakka ryoran")
                    end
                end)
            </li>
      </div>

        <div class="jutsus__personagens">
          <ul class="jutsus__ino.jpg">
            <li>
                <h3>Jutsu: Iryo no Jutsu</h3>
                <p>Level: 100</p>
                <p>Utilidade: Buff</p>
                <p>Descrição: Aumenta seus atributos</p>
            </li>
            
            <li>
                <h3>Jutsu: Kunai Explosion no Jutsu</h3>
                <p>Level: 135</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano em área</p>
            </li>
            
            <li>
                <h3>Jutsu: Kibaku Hana</h3>
                <p>Level: 160</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa múltiplos danos no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Chiyute no Jutsu</h3>
                <p>Level: 175</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Cura uma grande quantidade de vida, podendo usar em aliados também. Para usar, basta deixar a kunai ligada e escrever assim: (Chiyute no Jutsu "Nick do jogador)</p>
            </li>
            
            <li>
                <h3>Jutsu: Shingetsu Ichirin</h3>
                <p>Level: 200</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Ninpo Hyakka Ryoran</h3>
                <p>Level: 250</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa múltiplos danos no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Nikudan Yoyo</h3>
                <p>Level: 300</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Kuge Okuri</h3>
                <p>Level: 350</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Chakra Seigyo</h3>
                <p>Level: 375</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Ao usar este jutsu, Ino irá recuperar 500k de chakra por segundo, durante alguns segundos.</p>
            </li>
            
            <li>
                <h3>Jutsu: Ninpo Shingetsu Ichirin</h3>
                <p>Level: 400</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa múltiplos danos no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Doton Doryuheki</h3>
                <p>Level: 425</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: O jutsu cria várias paredes de rochas à frente, parando de ser criada se colidir com um terreno que impossibilita de andar ou chegando ao limite de 50 rochas criadas. Personagens que estiverem no caminho das rochas criadas levam um stun por 3 segundos.</p>
            </li>
            
            <li>
                <h3>Jutsu: Shintenshin no Jutsu</h3>
                <p>Level: 450</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Misuteshisu Tenohira</h3>
                <p>Level: 475</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Ino reduz os atributos do alvo em 40%.</p>
            </li>
            
            <li>
                <h3>Jutsu: Dai Shintenshin no Jutsu</h3>
                <p>Level: 480</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Ao utilizar este jutsu, Ino trapa seu alvo por 4 segundos, mas também ficará presa, recebendo 75% menos de dano.</p>
            </li>
            
            <li>
                <h3>Jutsu: Choshinka</h3>
                <p>Level: 500</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
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
background-color:yellow;
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
            
            