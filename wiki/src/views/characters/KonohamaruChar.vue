<template>
    <section class="personagem"> 
      <div class="personagem__info">
        <img src="@/assets/personagens/Konohamaru.jpg"> 
        <h2>Konohamaru</h2>
        <h3> Dano | Sword/Distace/Gloves </h3> 
      </div>

      <div class="combos">
        <button @click="toggleCombo('old')">Combo Old Client</button>
        <button @click="toggleCombo('otc')">Combo OTC</button>
      </div>
  
      <div id="old" class="combo-content" v-show="showOld">
        <li> 
          auto 200 listas 'Konohamaru' | isattacking {say 'Katon Karyu Endan' | say 'Shitei Taikyoku Rasengan' | say 'Dai Taikyoku Rasengan' | say 'Katon Homuranagase' | say 'Katon Haisekishou' | say 'Katon Endan'}
        </li>
      </div>
  
      <div id="otc" class="combo-content" v-show="showOtc">
        <li> 
          
          testMacro = macro(100, "Combo Konohamaru", function()
              if g_game.isAttacking() then
                  say("Katon Karyu Endan")
                  say("shitei taikyoku rasengan")
                  say("Dai Taikyoku Rasengan")
                  say("Katon Homuranagase") 
                  say("Katon Haisekishou")
                  say("Katon Endan")
                            
            end
            end)
        </li>
  </div>
  

      <div class="jutsus__personagens">
        <ul class="jutsus__konohamaru.jpg">
            <li>
                <h3>Jutsu: Bikou ninjutsu</h3>
                <p>Level: 100</p>
                <p>Utilidade: Buff</p>
                <p>Descrição: Aumenta seus atributos.</p>
              </li>

              <li>
                <h3>Jutsu: Oodama Rasengan</h3>
                <p>Level: 100</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>

              <li>
                <h3>Jutsu: Katon Dragon no Jutsu</h3>
                <p>Level: 100</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa multiplos dano em área.</p>
              </li>

              <li>
                <h3>Jutsu: Kuchyose Gamabunta no Jutsu</h3>
                <p>Level: 125</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Konohamaru invoca o sapo Gamabunta.</p>
              </li>

              <li>
                <h3>Jutsu: Doton Prision</h3>
                <p>Level: 125</p>
                <p>Utilidade: Suporte/Trap</p>
                <p>Descrição: Trapa o alvo.</p>
              </li>

              <li>
                <h3>Jutsu: Katon Sohenka no Jutsu</h3>
                <p>Level: 190</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano em área.</p>
              </li>

              <li>
                <h3>Jutsu: Shuriken Kage Bunshin no Jutsu</h3>
                <p>Level: 250</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>

              <li>
                <h3>Jutsu: Katon Hiuchi Yagura</h3>
                <p>Level: 250</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>

              <li>
                <h3>Jutsu: Shitei Rasengan</h3>
                <p>Level: 300</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa multiplos dano no alvo.</p>
              </li>

              <li>
                <h3>Jutsu: Fuin Kai</h3>
                <p>Level: 300</p>
                <p>Utilidade: Suporte/Trap</p>
                <p>Descrição: Trapa o alvo.</p>
              </li>

              <li>
                <h3>Jutsu: Katon Endan</h3>
                <p>Level: 300</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>

              <li>
                <h3>Jutsu: Katon Karyu Endan</h3>
                <p>Level: 360</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>

              <li>
                <h3>Jutsu: Katon Homuranagase</h3>
                <p>Level: 360</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>

              
              <li>
                <h3>Jutsu: Katon Haisekishou</h3>
                <p>Level: 400</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>


              <li>
                <h3>Jutsu: Fuuinjutsu Kai</h3>
                <p>Level: 400</p>
                <p>Utilidade: Suporte/Buff</p>
                <p>Descrição: Assim que ativar, irá durar por 30 segundos um buff para Konohamaru, ganhando 60 de ninjutsu + 60 de skill de cada arma. Durante 30</p>
              </li>


              <li>
                <h3>Jutsu: Dai Taju Kagebunshin no Jutsu</h3>
                <p>Level: 450</p>
                <p>Utilidade: Suporte/Fuga</p>
                <p>Descrição: Konohamaru invoca vários clones, ficando invisível por alguns segundos. </p>
              </li>

              <li>
                <h3>Jutsu: Dai Taikyoku Rasengan</h3>
                <p>Level: 475</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>

              <li>
                <h3>Jutsu: Shitei Taikyoku Rasengan</h3>
                <p>Level: 500</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
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
    background-color:#1E90FF;
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

