<template>
    <section class="personagem"> 
      <div class="personagem__info">
        <img src="@/assets/personagens/Guren.jpg"> 
        <h2>Guren</h2>
        <h3>Dano | Distance/Sword</h3> 
      </div>

      <div class="combos">
        <button @click="toggleCombo('old')">Combo Old Client</button>
        <button @click="toggleCombo('otc')">Combo OTC</button>
      </div>
  
      <div id="old" class="combo-content" v-show="showOld">
        <li>
            
            auto 200 listas Guren | setcolor 0 255 255 | isattacking say shouton Suishouheki Hachi | isattacking say shouton kesshou seichou | isattacking say shouton hashou kouryu | isattacking say shouton kouryu rou | isattacking say shouton suishou meikyu | isattacking say shouton kesshou kouryu | isattacking say shouton omiwatari no jutsu
        </li>
      </div>
  
      <div id="otc" class="combo-content" v-show="showOtc">
        <li>

            
            macro(100, "Combo Guren", function()
                if g_game.isAttacking() then
                    say("shouton Suishouheki Hachi")
                    say("shouton kesshou seichou")
                    say("shouton hashou kouryu")
                    say("shouton kouryu rou")
                    say("shouton suishou meikyu")
                    say("shouton kesshou kouryu")
                    say("shouton omiwatari no jutsu")
                end
            end)
        </li>
  </div>

      <div class="jutsus__personagens">
        <ul class="jutsus__guren">
          <li>
            <h3>Jutsu: Shouton Shishou</h3>
            <p>Level: 100</p>
            <p>Utilidade: Buff</p>
            <p>Descrição: Aumenta seus atributos</p>
        </li>
        
        <li>
            <h3>Jutsu: Shouton Kesshou</h3>
            <p>Level: 100</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Shouton Shuriken Ranbu</h3>
            <p>Level: 150</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Shouton Kesshou Hari</h3>
            <p>Level: 200</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Shouton Kesshou Seichou</h3>
            <p>Level: 250</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Shouton Kesshou Kouryu</h3>
            <p>Level: 300</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Shouton Omiwatari no Jutsu</h3>
            <p>Level: 350</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Shouton Kesshou Ibara</h3>
            <p>Level: 350</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano em área</p>
        </li>
        
        <li>
            <h3>Jutsu: Shouton Suishou Meikyu</h3>
            <p>Level: 400</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Shouton Suishou Rou</h3>
            <p>Level: 450</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: O jutsu tem dois usos. Se usado em um alvo, ele será trapado por alguns segundos. Se usado sem um alvo, Guren fica paralisada sem receber dano e curando 30k a cada meio segundo por instantes.</p>
        </li>
        
        <li>
            <h3>Jutsu: Shouton Hashou Kouryu</h3>
            <p>Level: 475</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Shouton Suishouheki Hachi</h3>
            <p>Level: 475</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Shouton Prision</h3>
            <p>Level: 475</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Trapa o alvo criando vários cristais ao redor do alvo.</p>
        </li>
        
        <li>
            <h3>Jutsu: Shishou Tenketsu</h3>
            <p>Level: 500</p>
            <p>Utilidade: Buff</p>
            <p>Descrição: Recebe 45 de ninjutsu por alguns segundos.</p>
        </li>
        
        <li>
            <h3>Jutsu: Shouton Kouryu Rou</h3>
            <p>Level: 500</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Kesshou no Yoroi</h3>
            <p>Level: 525</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Ao usar este jutsu, Guren fica imortal podendo se mexer livremente por alguns instantes. A vida de Guren pode descer até 1% que ficará limitado nisso.</p>
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
background-color:pink;
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
        
        