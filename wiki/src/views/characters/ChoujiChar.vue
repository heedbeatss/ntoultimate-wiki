<template>
    <section class="personagem"> 
        <div class="personagem__info">
          <img src="@/assets/personagens/Chouji.jpg"> 
          <h2>Chouji</h2>
          <h3> Dano | Glove/Sword/Distance </h3> 
        </div>

        <div class="combos">
            <button @click="toggleCombo('old')">Combo Old Client</button>
            <button @click="toggleCombo('otc')">Combo OTC</button>
          </div>
      
          <div id="old" class="combo-content" v-show="showOld">
            <li>
                auto 200 listas "Chouji" | setcolor 150 0 150 | isattacking say harite chou baika | isattacking say choudan chou | isattacking say nikudan yoyo | isattacking say dai nikudan baika | isattacking say nikudan baika | isattacking say harite chou
            </li>
          </div>
      
          <div id="otc" class="combo-content" v-show="showOtc">
            <li>
                macro(100, "Combo Chouji", function()
                    if g_game.isAttacking() then
                        say("harite chou baika")
                        say("choudan chou")
                        say("nikudan yoyo")
                        say("dai nikudan baika")
                        say("nikudan baika")
                        say("harite chou")
                    end
                end)      </li>
      </div>

        <div class="jutsus__personagens">
          <ul class="jutsus__chouji.jpg">
            <li>
                <h3>Jutsu: Baika no Jutsu</h3>
                <p>Level: 100</p>
                <p>Utilidade: Buff</p>
                <p>Descrição: Aumenta seus atributos</p>
            </li>
            
            <li>
                <h3>Jutsu: Akimichi Furie</h3>
                <p>Level: 100</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Akimichi Furie Max</h3>
                <p>Level: 130</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano em área</p>
            </li>
            
            <li>
                <h3>Jutsu: Harite Chou</h3>
                <p>Level: 150</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Nikudan Baika</h3>
                <p>Level: 200</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano em área</p>
            </li>
            
            <li>
                <h3>Jutsu: Dai Harite Chou</h3>
                <p>Level: 250</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Dai Nikudan Baika</h3>
                <p>Level: 300</p>
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
                <h3>Jutsu: Harite Chou Baika</h3>
                <p>Level: 350</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Choudan Chou</h3>
                <p>Level: 400</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Shunfu Baika</h3>
                <p>Level: 425</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Chouji fica invisível por alguns segundos</p>
            </li>
            
            <li>
                <h3>Jutsu: Karori Chou Baika</h3>
                <p>Level: 450</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Aumenta drasticamente a vida de Chouji</p>
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
background-color: green;
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

.combo-content {
    color:white;
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
            
            
            