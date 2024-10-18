<template>
    <section class="personagem"> 
      <div class="personagem__info">
        <img src="@/assets/personagens/Zabuza.jpg"> 
        <h2>Zabuza</h2>
        <h3> Dano | Distance/Sword</h3> 
      </div>

      <div class="combos">
        <button @click="toggleCombo('old')">Combo Old Client</button>
        <button @click="toggleCombo('otc')">Combo OTC</button>
      </div>
  
      <div id="old" class="combo-content" v-show="showOld">
        <li>  auto 200 listas "Zabuza" | setcolor 150 0 150 | isattacking say suiton dai suirou | isattacking say suiton daibakufu no jutsu | isattacking say suiton goshokuzame | isattacking say daibakufu no jutsu | isattacking say suiton kazan no jutsu | isattacking say suiton jouki no jutsu | isattacking say suiton hashira      </li>
      </div>
  
      <div id="otc" class="combo-content" v-show="showOtc">
        <li>
            macro(100, "Combo Zabuza", function()
                if g_game.isAttacking() then
                    say("suiton dai suirou")
                    say("suiton daibakufu no jutsu")
                    say("suiton goshokuzame")
                    say("daibakufu no jutsu")
                    say("suiton kazan no jutsu")
                    say("suiton jouki no jutsu")
                    say("suiton hashira")
                end
            end)
        </li>
  </div>

      <div class="jutsus__personagens">
        <ul class="jutsus__zabuza">
          <li>
            <h3>Jutsu: Kirai</h3>
            <p>Level: 100</p>
            <p>Utilidade: Buff</p>
            <p>Descrição: Aumenta seus atributos</p>
        </li>
        
        <li>
            <h3>Jutsu: Tenkizamu</h3>
            <p>Level: 100</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa múltiplos danos no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Suiton Kaiten Suru</h3>
            <p>Level: 130</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Suiton Suichutotsu</h3>
            <p>Level: 150</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Hisenken</h3>
            <p>Level: 150</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Zabuza lança sua espada em até 5 SQM.</p>
        </li>
        
        <li>
            <h3>Jutsu: Suiton Daibakufu Taki</h3>
            <p>Level: 200</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Suirou no Jutsu</h3>
            <p>Level: 250</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Trapa o alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Suiton Hashira</h3>
            <p>Level: 300</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Suiton Goshokuzame</h3>
            <p>Level: 325</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Suiton Fuin Suigadan</h3>
            <p>Level: 350</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Trapa o alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Suiton Jouki no Jutsu</h3>
            <p>Level: 350</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Suiton Dai Suirou</h3>
            <p>Level: 400</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Mizu Bunshin</h3>
            <p>Level: 425</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Zabuza cria um clone de água; se Zabuza receber um ataque de player, o ataque será mitigado.</p>
        </li>
        
        <li>
            <h3>Jutsu: Suiton Kazan no Jutsu</h3>
            <p>Level: 450</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Daibakufu no Jutsu</h3>
            <p>Level: 450</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Sairento Kiringu</h3>
            <p>Level: 500</p>
            <p>Utilidade: Buff</p>
            <p>Descrição: Zabuza aumenta seu skill de Sword em 50% baseado no seu skill base</p>
        </li>
        
        <li>
            <h3>Jutsu: Suiton Daibakufu no Jutsu</h3>
            <p>Level: 500</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa múltiplos danos no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Kirigakure no Jutsu</h3>
            <p>Level: 525</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Zabuza cria uma névoa onde fica invisível por alguns segundos.</p>
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
background-color:lightblue;
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
        
        