<template>
    <section class="personagem"> 
      <div class="personagem__info">
        <img src="@/assets/personagens/Tenten.jpg"> 
        <h2>Tenten</h2>
        <h3>Dano | Distance</h3> 
      </div>
      
      <div class="combos">
        <button @click="toggleCombo('old')">Combo Old Client</button>
        <button @click="toggleCombo('otc')">Combo OTC</button>
      </div>
  
      <div id="old" class="combo-content" v-show="showOld">
        <li> 
          auto 200 listas 'Tenten Pvp' | isattacking { say 'sougu tensasai' | say 'sougu souryuu' | say 'tensakai paper' | say 'souryuu tensakai' | say 'buki no nami' | }
       </li>
      </div>
  
      <div id="otc" class="combo-content" v-show="showOtc">
        <li>
          
          macro(100, "Combo Tenten", function()
              if g_game.isAttacking() then
                  say("sougu tensasai")
                  say("sougu souryuu")
                  say("tensakai paper")
                  say("souryuu tensakai")
                  say("satetsu kesshu")
                  say("buki no nami")
              end
          end)
        </li>
  </div>
  

      <div class="jutsus__personagens">
        <ul class="jutsus__tenten">
          <li>
            <h3>Jutsu: Souryuu Kyuuheki</h3>
            <p>Level: 75</p>
            <p>Utilidade: Buff</p>
            <p>Descrição: Aumenta seus atributos</p>
          </li>
          <li>
            <h3>Jutsu: Soushouryuu</h3>
            <p>Level: 100</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa multiplos dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Kunai Explosion no Jutsu</h3>
            <p>Level: 135</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano em área</p>
          </li>
          <li>
            <h3>Jutsu: Sou Shuu Jin</h3>
            <p>Level: 170</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa multiplos dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Buki no Nami</h3>
            <p>Level: 200</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa multiplos dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Souryuu Tensakai</h3>
            <p>Level: 250</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa multiplos dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Sou Shuu Tensakai</h3>
            <p>Level: 300</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Tensakai Paper</h3>
            <p>Level: 350</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Sougu Tensasai</h3>
            <p>Level: 400</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa multiplos dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Sougu Souryuu</h3>
            <p>Level: 450</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Funyu no Jutsu</h3>
            <p>Level: 525</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Tenten joga uma bomba de fumaça em área e fica invisível por alguns segundos.</p>
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
  background-color: #C0C0C0;
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
  color: #343a40;
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
