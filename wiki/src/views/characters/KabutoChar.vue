<template>
    <section class="personagem"> 
        <div class="personagem__info">
          <img src="@/assets/personagens/Kabuto.webp"> 
          <h2>Kabuto</h2>
          <h3> Dano | Sword/Distance </h3> 
        </div>

        <div class="combos">
            <button @click="toggleCombo('old')">Combo Old Client</button>
            <button @click="toggleCombo('otc')">Combo OTC</button>
          </div>
      
          <div id="old" class="combo-content" v-show="showOld">
            <li>
                auto 200 listas 'Kabuto' | setcolor 255 192 203 | isattacking say Suiton Daibakufu no Jutsu | isattacking say Suiton Suiryudan no Jutsu | isattacking say yantou chakra mesu | isattacking say senpo hakugeki no jutsu | isattacking say mandara no jin | isattacking say kyodaija tay | isattacking say kyodaija hebi
            </li>
          </div>
      
          <div id="otc" class="combo-content" v-show="showOtc">
            <li>
                
                macro(100, "Combo Kabuto", function()
                    if g_game.isAttacking() then
                        say("Suiton Daibakufu no Jutsu")
                        say("Suiton Suiryudan no Jutsu")
                        say("yantou chakra mesu")
                        say("senpo hakugeki no jutsu")
                        say("mandara no jin")
                        say("kyodaija tay")
                        say("kyodaija hebi")
                    end
                end)
            </li>
      </div>

        <div class="jutsus__personagens">
          <ul class="jutsus__kabuto">
            <ul>
                <li>
                    <h3>Jutsu: Edo Snajin</h3>
                    <p>Level: 100</p>
                    <p>Utilidade: Buff</p>
                    <p>Descrição: Aumenta seus atributos</p>
                </li>
                
                <li>
                    <h3>Jutsu: Kuchyose Jya no Jutsu</h3>
                    <p>Level: 130</p>
                    <p>Utilidade: Suporte</p>
                    <p>Descrição: Kabuto invoca uma Jya para ajuda-lo</p>
                </li>
                
                <li>
                    <h3>Jutsu: Kunai Explosion no Jutsu</h3>
                    <p>Level: 135</p>
                    <p>Utilidade: Dano</p>
                    <p>Descrição: Causa dano em área</p>
                </li>
                
                <li>
                    <h3>Jutsu: Chiyute no Jutsu</h3>
                    <p>Level: 175</p>
                    <p>Utilidade: Suporte</p>
                    <p>Descrição: Cura uma grande quantidade de vida, podendo usar em aliados também. Para usar, basta deixar a kunai ligada e escrever assim: (Chiyute no Jutsu "Nick do jogador)</p>
                </li>
                
                <li>
                    <h3>Jutsu: Dai Hebi no Jutsu</h3>
                    <p>Level: 200</p>
                    <p>Utilidade: Dano</p>
                    <p>Descrição: Causa dano no alvo</p>
                </li>
                
                <li>
                    <h3>Jutsu: Dai Poison</h3>
                    <p>Level: 240</p>
                    <p>Utilidade: Suporte</p>
                    <p>Descrição: Kabuto envenena o alvo.</p>
                </li>
                
                <li>
                    <h3>Jutsu: Edo Tensei no Jutsu</h3>
                    <p>Level: 260</p>
                    <p>Utilidade: Suporte</p>
                    <p>Descrição: Ao usar este jutsu, Tobirama ganha um pergaminho do Edo Tensei, para que possa utilizar em algum corpo e usa-lo como Edo Tensei.</p>
                </li>
                
                <li>
                    <h3>Jutsu: Edo Tensei Kai</h3>
                    <p>Level: 260</p>
                    <p>Utilidade: Suporte</p>
                    <p>Descrição: Ao usar este jutsu, Tobirama desfaz o Edo Tensei.</p>
                </li>
                
                <li>
                    <h3>Jutsu: Keiyaku Fuin</h3>
                    <p>Level: 285</p>
                    <p>Utilidade: Suporte</p>
                    <p>Descrição: Trava o alvo por alguns segundos</p>
                </li>
                
                <li>
                    <h3>Jutsu: Idaina Hebi no Kougeki</h3>
                    <p>Level: 300</p>
                    <p>Utilidade: Dano</p>
                    <p>Descrição: Causa dano no alvo</p>
                </li>
                
                <li>
                    <h3>Jutsu: Kyodaija Hebi</h3>
                    <p>Level: 300</p>
                    <p>Utilidade: Dano</p>
                    <p>Descrição: Causa dano no alvo</p>
                </li>
                
                <li>
                    <h3>Jutsu: Yantou Chakra Mesu</h3>
                    <p>Level: 350</p>
                    <p>Utilidade: Dano</p>
                    <p>Descrição: Causa múltiplos danos no alvo e tira mana do alvo.</p>
                </li>
                
                <li>
                    <h3>Jutsu: Seneijashu</h3>
                    <p>Level: 350</p>
                    <p>Utilidade: Dano</p>
                    <p>Descrição: Causa dano no alvo</p>
                </li>
                
                <li>
                    <h3>Jutsu: Kyodaija Tay</h3>
                    <p>Level: 400</p>
                    <p>Utilidade: Dano</p>
                    <p>Descrição: Causa dano no alvo</p>
                </li>
                
                <li>
                    <h3>Jutsu: Senpo Hakugeki no Jutsu</h3>
                    <p>Level: 450</p>
                    <p>Utilidade: Dano</p>
                    <p>Descrição: Causa dano no alvo</p>
                </li>
                
                <li>
                    <h3>Jutsu: Mandara no Jin</h3>
                    <p>Level: 475</p>
                    <p>Utilidade: Dano</p>
                    <p>Descrição: Causa dano no alvo</p>
                </li>
                
                <li>
                    <h3>Jutsu: Sannin Modo</h3>
                    <p>Level: 500</p>
                    <p>Utilidade: Buff</p>
                    <p>Descrição: Ganha 35 de Ninjutsu, 15 de Taijutsu, recupera 5K de Chakra por segundo e terá 15% de Heal a mais ao usar jutsus de cura ou receber jutsus de cura (Potion também). Além disso, Kabuto causará extrema lentidão aos jogadores a cada 0.5s ao decorrer de 1.5s segundos no jutsu "kyodaija tay" e dano adicional de veneno. Kabuto fica imune a paralyze durante o Sannin Modo.</p>
                </li>
                
                <li>
                    <h3>Jutsu: Suiton Suiryudan no Jutsu</h3>
                    <p>Level: 500</p>
                    <p>Utilidade: Dano</p>
                    <p>Descrição: Causa dano no alvo</p>
                </li>
                
                <li>
                    <h3>Jutsu: Suiton Daibakufu no Jutsu</h3>
                    <p>Level: 500</p>
                    <p>Utilidade: Dano</p>
                    <p>Descrição: Causa múltiplos danos no alvo</p>
                </li>
                
                <li>
                    <h3>Jutsu: Shikon no Jutsu</h3>
                    <p>Level: 500</p>
                    <p>Utilidade: Suporte</p>
                    <p>Descrição: Kabuto invoca uma cobra lendária que o ajuda a fugir. A cobra irá andar aleatoriamente e em instantes Kabuto será teleportado no lugar da cobra.</p>
                </li> 
          </ul>      
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
        background-color: lightblue;
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