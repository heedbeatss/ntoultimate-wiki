<template>
    <section class="personagem"> 
        <div class="personagem__info">
          <img src="@/assets/personagens/Pain.jpg">     
          <h2>Pain</h2>
          <h3> Dano | Suporte | Distance/Sword</h3> 
        </div>

        <div class="combos">
            <button @click="toggleCombo('old')">Combo Old Client</button>
            <button @click="toggleCombo('otc')">Combo OTC</button>
          </div>
      
          <div id="old" class="combo-content" v-show="showOld">
            <li> 
                auto 200 listas 'Pain' | setcolor 205 0 0 | isattacking say shin chibaku tensei | isattacking say chibaku tensei | isattacking say jigokudou tensei no jutsu | isattacking say banshou tein | isattacking say shinra tensei | isattacking say suiton suijinheki no jutsu
            </li>
          </div>
      
          <div id="otc" class="combo-content" v-show="showOtc">
            <li> 
                macro(100, "Combo Pain", function()
                    if g_game.isAttacking() then
                        say("shin chibaku tensei")
                        say("chibaku tensei")
                        say("jigokudou tensei no jutsu")
                        say("banshou tein")
                        say("shinra tensei")
                        say("suiton suijinheki no jutsu")
                    end
                end)    </li>
      </div>

        <div class="jutsus__personagens">
          <ul class="jutsus__pain.jpg">
            <li>
                <h3>Jutsu: Rikudou no Kuuin</h3>
                <p>Level: 100</p>
                <p>Utilidade: Buff</p>
                <p>Descrição: Aumenta seus atributos</p>
            </li>
            
            <li>
                <h3>Jutsu: Katon Dragon no Jutsu</h3>
                <p>Level: 100</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano em área</p>
            </li>
            
            <li>
                <h3>Jutsu: Suiryudan no Jutsu</h3>
                <p>Level: 100</p>
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
                <h3>Jutsu: Jigokudou Tensei</h3>
                <p>Level: 215</p>
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
                <h3>Jutsu: Kaiwan no Hiya</h3>
                <p>Level: 250</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa múltiplos danos no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Chikushodou Tensei</h3>
                <p>Level: 275</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Jigokudou Tensei no Jutsu</h3>
                <p>Level: 300</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Chibaku Tensei</h3>
                <p>Level: 350</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Fuinjutsu Genryu Kyufujin</h3>
                <p>Level: 400</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: sei la</p>
            </li>
            
            <li>
                <h3>Jutsu: Kuchyose Gedou Mazou</h3>
                <p>Level: 400</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Pain invoca a estátua Gedou Mazou.</p>
            </li>
            
            <li>
                <h3>Jutsu: Zofuku Kuchiyose no Jutsu</h3>
                <p>Level: 425</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Pain invoca Gedou Kakiome para ajudá-lo</p>
            </li>
            
            <li>
                <h3>Jutsu: Banshou Tein</h3>
                <p>Level: 450</p>
                <p>Utilidade: Suporte/Dano</p>
                <p>Descrição: Pain puxa seu alvo (se for player) para perto de si, se estiver até 3 sqm de distância.</p>
            </li>
            
            <li>
                <h3>Jutsu: Pein Rikudou no Jutsu</h3>
                <p>Level: 450</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Pain invoca 6 clones para ajudá-lo em batalha. Os clones removem chakra do player e trocam de lugar às vezes.</p>
            </li>
            
            <li>
                <h3>Jutsu: Shinra Tensei</h3>
                <p>Level: 450</p>
                <p>Utilidade: Suporte/Dano</p>
                <p>Descrição: Pain empurra seu alvo (se for player) para longe, se o alvo estiver até 3 sqm de distância.</p>
            </li>
            
            <li>
                <h3>Jutsu: Fuin Chibaku Tensei</h3>
                <p>Level: 475</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Trap em área</p>
            </li>
            
            <li>
                <h3>Jutsu: Shin Chibaku Tensei</h3>
                <p>Level: 475</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa múltiplos danos no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Chikushodou Shin Tensei</h3>
                <p>Level: 500</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Pain cria uma camuflagem, ficando invisível por alguns segundos.</p>
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
background-color: orangered;
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
            
