<template>
    <section class="personagem"> 
      <div class="personagem__info">
        <img src="@/assets/personagens/Darui.jpg"> 
        <h2>Darui</h2>
        <h3> Dano | Sword/Distance </h3> 
      </div>

      <div class="combos">
        <button @click="toggleCombo('old')">Combo Old Client</button>
        <button @click="toggleCombo('otc')">Combo OTC</button>
      </div>
  
      <div id="old" class="combo-content" v-show="showOld">
        <li> 
            macro(100, "Combo Darui", function()
                if g_game.isAttacking() then
                    say("ranton kuroi kaminari")
                    say("ranton sakasu")
                    say("ranton laser circus")
                    say("ranton kuroi")
                    say("ranton gyakuage")
                    say("raiton suijinheki")
                end
            end)
        </li>
      </div>
  
      <div id="otc" class="combo-content" v-show="showOtc">
        <li> 
            auto 200 listas 'DARUI' | setcolor 255 192 203 | isattacking say ranton kuroi kaminari | isattacking say ranton sakasu | isattacking say ranton laser circus | isattacking say ranton kuroi | isattacking say  ranton gyakuage  | isattacking say raiton suijinheki (editado)
            
        </li>
  </div>

      <div class="jutsus__personagens">
        <ul class="jutsus__darui">
          <li>
            <h3>Jutsu: Kuroi</h3>
            <p>Level: 100</p>
            <p>Utilidade: Buff</p>
            <p>Descrição: Aumenta seus atributos</p>
        </li>
        
        <li>
            <h3>Jutsu: Sword Fang no Jutsu</h3>
            <p>Level: 150</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa múltiplos danos no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Ansatsu Raikouken</h3>
            <p>Level: 250</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Raiton Gyuru</h3>
            <p>Level: 300</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Raiton Kangekiha</h3>
            <p>Level: 350</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Raiton Suijinheki</h3>
            <p>Level: 375</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano nos alvos</p>
        </li>
        
        <li>
            <h3>Jutsu: Ranton Gyakuage</h3>
            <p>Level: 400</p>
            <p>Utilidade: Dano/Suporte</p>
            <p>Descrição: Ao usar o jutsu com um alvo selecionado, causará dano e aplicará lentidão ao alvo. Se usado sem um alvo selecionado, causará dano ao redor do personagem e aplicará lentidão a todos os alvos atingidos pelo jutsu.</p>
        </li>
        
        <li>
            <h3>Jutsu: Ranton Kuroi</h3>
            <p>Level: 425</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Ranton Sakasu</h3>
            <p>Level: 450</p>
            <p>Utilidade: Dano/Suporte</p>
            <p>Descrição: Jutsu causa dano no alvo selecionado e deixa o mesmo stunado por um curto período.</p>
        </li>
        
        <li>
            <h3>Jutsu: Ranton Kuroi Kaminari</h3>
            <p>Level: 500</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Ranton Laser Circus</h3>
            <p>Level: 525</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa múltiplos danos no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Ranton Bunshin</h3>
            <p>Level: 525</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Darui cria um clone, se Darui ou seu clone for morto, todos ao seu redor ficarão cegos por alguns segundos. Se Darui for morto, voltará com o HP cheio no lugar do bunshin.</p>
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
background-color:black;
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
        
        