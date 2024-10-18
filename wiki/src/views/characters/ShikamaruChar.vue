<template>
    <section class="personagem"> 
      <div class="personagem__info">
        <img src="@/assets/personagens/Shikamaru.jpg"> 
        <h2>Shikamaru</h2>
        <h3>Suporte | Lyze | Distance/Sword</h3> 
      </div>

      <div class="combos">
        <button @click="toggleCombo('old')">Combo Old Client</button>
        <button @click="toggleCombo('otc')">Combo OTC</button>
      </div>
  
      <div id="old" class="combo-content" v-show="showOld">
        <li> 
          auto 200 listas 'Shikamaru' | setcolor 80 0 0 | isattacking say kage hayashi no jutsu | isattacking say nikudan yoyo | isattacking say kage kubishibari no jutsu | isattacking say kageyose kubishibari | isattacking say nikudan yoyo | isattacking say oni noshuku no jutsu 
        </li>
      </div>
  
      <div id="otc" class="combo-content" v-show="showOtc">
        <li>
          macro(100, "Combo Shikamaru", function()
              if g_game.isAttacking() then
                  say("kage hayashi no jutsu")
                  say("nikudan yoyo")
                  say("kage kubishibari no jutsu")
                  say("kageyose kubishibari")
                  say("nikudan yoyo")
                  say("oni noshuku no jutsu")
              end
          end)
        </li>
  </div>
  
      <div class="jutsus__personagens">
        <ul class="jutsus__shikamaru">
          <li>
            <h3>Jutsu: Kage Noshuku Sa Reta</h3>
            <p>Level: 70</p>
            <p>Utilidade: Buff</p>
            <p>Descrição: Aumenta seus atributos</p>
          </li>
          <li>
            <h3>Jutsu: Kage Nui Shibari no Jutsu</h3>
            <p>Level: 75</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Kage Nui</h3>
            <p>Level: 100</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Kage Oni Shibari no Jutsu</h3>
            <p>Level: 150</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Kage Shibari no Jutsu</h3>
            <p>Level: 200</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Kageyose no Jutsu</h3>
            <p>Level: 225</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa multiplos dano em área</p>
          </li>
          <li>
            <h3>Jutsu: Kageyose Nui Reta no Jutsu</h3>
            <p>Level: 250</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Oni Noshuku no Jutsu</h3>
            <p>Level: 300</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Nikudan Yoyo</h3>
            <p>Level: 300</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Kageyose Kubishibari</h3>
            <p>Level: 350</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Kage Kubishibari no Jutsu</h3>
            <p>Level: 400</p>
            <p>Utilidade: Dano/Suporte</p>
            <p>Descrição: Shikamaru trapa seu alvo e o alvo recebe um dano.</p>
          </li>
          <li>
            <h3>Jutsu: Kage Oni Hayashi</h3>
            <p>Level: 425</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Shikamaru cria umas sombras no seu pé, o deixando inalvejável e quem lhe atacar, ficará preso por alguns segundos.</p>
          </li>
          <li>
            <h3>Jutsu: Kagemane no Jutsu</h3>
            <p>Level: 425</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Shikamaru joga uma sombra em linha reta, que quem estiver em sua reta, terá sua speed reduzida em 95%, impedindo que consigam utilizar jutsus que concedam speed por 3 segundos.</p>
          </li>
          <li>
            <h3>Jutsu: Dai Kagemane no Jutsu</h3>
            <p>Level: 450</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Shikamaru cria diversas sombras, trapando todos que estiverem a sua volta</p>
          </li>
          <li>
            <h3>Jutsu: Kage Hayashi no Jutsu</h3>
            <p>Level: 475</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Kagenui no Jutsu</h3>
            <p>Level: 500</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Shikamaru trapa seu alvo por alguns segundos.</p>
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
    background: linear-gradient(to bottom, #CCCCCC, black);
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

  