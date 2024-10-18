<template>
    <section class="personagem"> 
      <div class="personagem__info">
        <img src="@/assets/personagens/Sasuke.jpg"> 
        <h2>Sasuke</h2>
        <h3>Dano | Trap | Stack | Distance/Sword </h3> 
      </div>
      
      <div class="combos">
        <button @click="toggleCombo('old')">Combo Old Client</button>
        <button @click="toggleCombo('otc')">Combo OTC</button>
      </div>
  
      <div id="old" class="combo-content" v-show="showOld">
        <li> 
          
          auto 200 listas 'SASUKE' | setcolor 255 192 203 | isattacking say Kirin | isattacking say enton yasaka no magatama | isattacking say  kuroki chidori | isattacking say tenohira chibaku tensei | isattacking say susanoo kagutsuchi  | isattacking say susanoo bakugoyo | isattacking say amaterasu     </li>
      </div>
  
      <div id="otc" class="combo-content" v-show="showOtc">
        <li> 
          
          macro(100, "Combo Sasuke", function()
              if g_game.isAttacking() then
                  say("Kirin")
                  say("enton yasaka no magatama")
                  say("kuroki chidori")
                  say("tenohira chibaku tensei")
                  say("susanoo kagutsuchi")
                  say("susanoo bakugoyo")
                  say("amaterasu")
              end
          end)     </li>
  </div>

      <div class="jutsus__personagens">
        <ul class="jutsus__sasuke">
          <li>
            <h3>Jutsu: Susanoo</h3>
            <p>Level: 100</p>
            <p>Utilidade: Buff</p>
            <p>Descrição: Aumenta seus atributos</p>
          </li>
          <li>
            <h3>Jutsu: Chidorigatana</h3>
            <p>Level: 100</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Chidori Nagashi</h3>
            <p>Level: 125</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Kuchyose Jya no Jutsu</h3>
            <p>Level: 130</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Sasuke invoca uma Jya para ajuda-lo.</p>
          </li>
          <li>
            <h3>Jutsu: Kuchyose Manda no Jutsu</h3>
            <p>Level: 150</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Sasuke invoca a Manda para ajuda-lo</p>
          </li>
          <li>
            <h3>Jutsu: Chidori Raimei</h3>
            <p>Level: 200</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Kirin</h3>
            <p>Level: 225</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Amaterasu</h3>
            <p>Level: 250</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa multiplos dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Susanoo Bakugoyo</h3>
            <p>Level: 300</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Susanoo Kagutsuchi</h3>
            <p>Level: 350</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Kuchyose Hawk no Jutsu</h3>
            <p>Level: 375</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Sasuke invoca Hawk para ajuda-lo</p>
          </li>
          <li>
            <h3>Jutsu: Tenohira Chibaku Tensei</h3>
            <p>Level: 400</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Izanagi</h3>
            <p>Level: 400</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Caso o jogador morra dentro de 10 segundos após ativar o jutsu, o jogador será enviado para um mundo preto por alguns segundos, depois será revivido no lugar onde morreu</p>
          </li>
          <li>
            <h3>Jutsu: Mangekyou Susanoo</h3>
            <p>Level: 450</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Aumenta todas suas skills e ignora 40% de todo dano recebido por 20 segundos.</p>
          </li>
          <li>
            <h3>Jutsu: Kuroki Chidori</h3>
            <p>Level: 450</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Enton Yasaka no Magatama</h3>
            <p>Level: 475</p>
            <p>Utilidade: Dano</p>
            <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
            <h3>Jutsu: Amenotejikara no Jutsu</h3>
            <p>Level: 500</p>
            <p>Utilidade: Suporte</p>
            <p>Descrição: Sasuke cria o Amenotejikara, podendo trocar de lugar com player, monstros e até items jogado no chão.</p>
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
  background-color: #790279;
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

  