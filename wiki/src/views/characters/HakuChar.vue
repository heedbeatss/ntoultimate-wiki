<template>
    <section class="personagem"> 
        <div class="personagem__info">
          <img src="@/assets/personagens/Haku.jpg"> 
          <h2>Haku</h2>
          <h3> Dano | Distance</h3> 
        </div>

        <div class="combos">
          <button @click="toggleCombo('old')">Combo Old Client</button>
          <button @click="toggleCombo('otc')">Combo OTC</button>
        </div>
    
        <div id="old" class="combo-content" v-show="showOld">
          <li>
            auto 200 listas 'Haku' | setcolor 255 192 203 | isattacking say hyouton hyogakuhou | isattacking say hyouton hissatsu hyosou | isattacking say hyouton bakusai suishou | isattacking say hyouton gakuhou rendan | isattacking say hyouton hyougan
          </li>
        </div>
    
        <div id="otc" class="combo-content" v-show="showOtc">
          <li> 
            
            macro(100, "Combo Haku", function()
                if g_game.isAttacking() then
                    say("hyouton hyogakuhou")
                    say("hyouton hissatsu hyosou")
                    say("hyouton bakusai suishou")
                    say("hyouton gakuhou rendan")
                    say("hyouton hyougan")
                end
            end)
          </li>
    </div>

        <div class="jutsus__personagens">
          <ul class="jutsus__haku.jpg">
            <li>
                <h3>Jutsu: Hyouton Kijin</h3>
                <p>Level: 100</p>
                <p>Utilidade: Buff</p>
                <p>Descrição: Aumenta seus atributos.</p>
              </li>
              
              <li>
                <h3>Jutsu: Suiryudan no Jutsu</h3>
                <p>Level: 100</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>
              
              <li>
                <h3>Jutsu: Hyouton Tsubame</h3>
                <p>Level: 150</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>
              
              <li>
                <h3>Jutsu: Hyouton Tsurara</h3>
                <p>Level: 200</p>
                <p>Utilidade: Dano/Suporte</p>
                <p>Descrição: Causa dano no alvo e trapa por alguns segundos. Há um cooldown para o alvo ser trapado novamente.</p>
              </li>
              
              <li>
                <h3>Jutsu: Hijutsu Sensatsu Suishou</h3>
                <p>Level: 250</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>
              
              <li>
                <h3>Jutsu: Hyouton Reigeki</h3>
                <p>Level: 300</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>
              
              <li>
                <h3>Jutsu: Hyouton Hissatsu</h3>
                <p>Level: 350</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano em área.</p>
              </li>
              
              <li>
                <h3>Jutsu: Hyouton Hyousou</h3>
                <p>Level: 375</p>
                <p>Utilidade: Dano/Suporte</p>
                <p>Descrição: Causa dano no alvo, sela a speed do alvo e o trava por alguns segundos. Há um cooldown para travar o alvo novamente, mas o selo de speed irá toda hora que sair o jutsu.</p>
              </li>
              
              <li>
                <h3>Jutsu: Hyouton Hyogakuhou</h3>
                <p>Level: 400</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa múltiplos danos no alvo.</p>
              </li>
              
              <li>
                <h3>Jutsu: Hyouton Hissatsu Hyosou</h3>
                <p>Level: 425</p>
                <p>Utilidade: Dano/Suporte</p>
                <p>Descrição: Causa dano no alvo e o trapa por alguns instantes.</p>
              </li>
              
              <li>
                <h3>Jutsu: Hyouton Bakusai Suishou</h3>
                <p>Level: 450</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>
              
              <li>
                <h3>Jutsu: Hyouton Gakuhou Rendan</h3>
                <p>Level: 475</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>
              
              <li>
                <h3>Jutsu: Hyouton Hyougan</h3>
                <p>Level: 500</p>
                <p>Utilidade: Dano/Suporte</p>
                <p>Descrição: Causa dano no alvo, sela a speed do alvo e o trapa por alguns segundos. Há um cooldown para trapar o alvo novamente.</p>
              </li>
              
              <li>
                <h3>Jutsu: Hyouton Hyougan Doumu</h3>
                <p>Level: 500</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Haku passa a ignorar apenas 50% de todo o dano recebido e 100% de redução de dano contra armas. Jutsus de Katon causam 25% de dano extra.</p>
              </li>
              
              <li>
                <h3>Jutsu: Hijutsu Makyou Hyoushou</h3>
                <p>Level: 525</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Haku cria diversos espelhos de gelo, onde quanto mais magias utilizar, mais dano seu alvo receberá. Além disso, Haku ficará invisível para seu alvo. O jutsu é utilizado somente no target.</p>
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
    background-color: #b9e8ea;
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
              