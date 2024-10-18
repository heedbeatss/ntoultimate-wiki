
<template>
    <section class="personagem"> 
      <div class="personagem__info">
        <img src="@/assets/personagens/Hanzou.jpg"> 
        <h2>Hanzou</h2>
        <h3> Dano | Suporte | Distance/Sword</h3> 
      </div>

      <div class="combos">
        <button @click="toggleCombo('old')">Combo Old Client</button>
        <button @click="toggleCombo('otc')">Combo OTC</button>
      </div>
  
      <div id="old" class="combo-content" v-show="showOld">
        <li>  
            auto 160 listas 'hanzou' | isattacking {say 'ibuse no dokugiri  ' | say 'Bakuenjin' | say 'Gouriki Saroubaku No Jutsu' | say 'Dokugiri Kouken' | say 'Kamakiri No Jutsu'}
        </li>
      </div>
  
      <div id="otc" class="combo-content" v-show="showOtc">
        <li> 
            
            macro(100, "Combo Hanzou", function()
                if g_game.isAttacking() then
                    say("ibuse no dokugiri")
                    say("bakuenjin")
                    say("gouriki saroubaku no jutsu")
                    say("dokugiri kouken")
                    say("kamakiri no jutsu")
                end
            end)
        </li>
  </div>
  

      <div class="jutsus__personagens">
        <ul class="jutsus__hanzou">
          <li>
            <h3>Jutsu: Shiki Doku</h3>
            <p>Level: 100</p>
            <p>Utilidade: Buff</p>
            <p>Descrição: Aumenta seus atributos</p>
        </li>
        
        <li>
            <h3>Jutsu: Katon Dragon Furie no Jutsu</h3>
            <p>Level: 130</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa múltiplos danos no alvo, em linha reta</p>
        </li>
        
        <li>
            <h3>Jutsu: Kunai Explosion no Jutsu</h3>
            <p>Level: 135</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano em área</p>
        </li>
        
        <li>
            <h3>Jutsu: Doton Dragon Furie</h3>
            <p>Level: 150</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Hagama no Yaiba</h3>
            <p>Level: 200</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Dokugiri</h3>
            <p>Level: 250</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Baku Kouken</h3>
            <p>Level: 300</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa múltiplos danos no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Rakukou</h3>
            <p>Level: 350</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Hanzou dasha alguns sqm em linha reta.</p>
        </li>
        
        <li>
            <h3>Jutsu: Dokugiri Kouken</h3>
            <p>Level: 350</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Kuchyose Ibuse</h3>
            <p>Level: 375</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Hanzou invoca sua salamandra.</p>
        </li>
        
        <li>
            <h3>Jutsu: Ibuse no Dokugiri</h3>
            <p>Level: 400</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Kamakiri no Jutsu</h3>
            <p>Level: 425</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Rakukou no Yaiba</h3>
            <p>Level: 450</p>
            <p>Utilidade: Dano/Suporte</p>
            <p>Descrição: Causa dano no alvo e stuna por alguns segundos.</p>
        </li>
        
        <li>
            <h3>Jutsu: Gouriki Saroubaku no Jutsu</h3>
            <p>Level: 475</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Hagama no Mai</h3>
            <p>Level: 475</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Hanzou fica invisível, impossibilitando de ser targetado por alguns segundos.</p>
        </li>
        
        <li>
            <h3>Jutsu: Dokugiri Saroubaku</h3>
            <p>Level: 500</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Hanzou cria uma névoa tóxica, onde quem estiver na névoa, terá cura reduzida.</p>
        </li>
        
        <li>
            <h3>Jutsu: Bakuenjin</h3>
            <p>Level: 500</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa múltiplos danos no alvo</p>
        </li>
        
        <li>
            <h3>Jutsu: Kamakiri Ibuse no Jutsu</h3>
            <p>Level: 525</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Hanzou chama sua salamandra para criar uma camuflagem, ficando invisível por alguns segundos.</p>
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
background-color:purple;
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
        
        