<template>
    <section class="personagem"> 
      <div class="personagem__info">
        <img src="@/assets/personagens/Hashirama.jpg"> 
        <h2>Hashirama</h2>
        <h3> Dano | Trap | Distance/Sword </h3> 
      </div>

      <div class="combos">
        <button @click="toggleCombo('old')">Combo Old Client</button>
        <button @click="toggleCombo('otc')">Combo OTC</button>
      </div>
  
      <div id="old" class="combo-content" v-show="showOld">
        <li> 
          auto 200 listas Hashirama | setcolor 0 255 255 | isattacking say mokuton susenju kourin | isattacking say senpou mokuton shin susenju | isattacking say senpo mokuton mokujoheki | isattacking say mokuton koutan | isattacking say suiton suijinheki no jutsu | isattacking say senpo mokuton mokujin | isattacking say mokuton shichuro
        </li>
      </div>
  
      <div id="otc" class="combo-content" v-show="showOtc">
        <li> 
          macro(100, "Combo Hashirama", function()
              if g_game.isAttacking() then
                  say("mokuton susenju kourin")
                  say("senpou mokuton shin susenju")
                  say("senpo mokuton mokujoheki")
                  say("mokuton koutan")
                  say("suiton suijinheki no jutsu")
                  say("senpo mokuton mokujin")
                  say("mokuton shichuro")
              end
          end)
        </li>
  </div>


      <div class="jutsus__personagens">
        <ul class="jutsus__hashirama">
            <li>
                <h3>Jutsu: Sozo Saisei</h3>
                <p>Level: 100</p>
                <p>Utilidade: Buff/Cura</p>
                <p>Descrição: Aumenta seus atributos e tem uma cura extra de 6,5k por segundo.</p>
              </li>

              <li>
                <h3>Jutsu: Suiryudan no Jutsu</h3>
                <p>Level: 100</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>

              <li>
                <h3>Jutsu: Mokuton no Hinoto</h3>
                <p>Level: 110</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>

              <li>
                <h3>Jutsu: Mokuton no Hinoto</h3>
                <p>Level: 110</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>


              <li>
                <h3>Jutsu: Tsutenkyaku</h3>
                <p>Level: 130</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>

              <li>
                <h3>Jutsu: Mokuton Korin</h3>
                <p>Level: 150</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>

              <li>
                <h3>Jutsu: Mokuton Korin</h3>
                <p>Level: 150</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>

              <li>
                <h3>Jutsu: Doton Dragon Furie</h3>
                <p>Level: 150</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>

              <li>
                <h3>Jutsu: Mokuton Jukai</h3>
                <p>Level: 155</p>
                <p>Utilidade: Suporte/Trap</p>
                <p>Descrição: Cria uma árvore onde seu personagem está. Essa árvore é uma armadilha; se um alvo passar por cima dela ou permanecer sobre ela, ficará preso por alguns segundos.</p>
              </li>

              <li>
                <h3>Jutsu: Doton Prision</h3>
                <p>Level: 155</p>
                <p>Utilidade: Suporte/Trap</p>
                <p>Descrição: Trapa o alvo.</p>
              </li>


              <li>
                <h3>Jutsu: Senpou Mokuton Prision</h3>
                <p>Level: 175</p>
                <p>Utilidade: Suporte/Trap</p>
                <p>Descrição: Cria uma árvore no pé do alvo e o trava por alguns segundos.</p>
              </li>

              
              <li>
                <h3>Jutsu: Mokuton Prision</h3>
                <p>Level: 175</p>
                <p>Utilidade: Suporte/Trap</p>
                <p>Descrição: Trapa o alvo.</p>
              </li>

              <li>
                <h3>Jutsu: Mokuton Prision</h3>
                <p>Level: 175</p>
                <p>Utilidade: Suporte/Trap</p>
                <p>Descrição: Trapa o alvo.</p>
              </li>

              <li>
                <h3>Jutsu: Suiton Dragon Furie</h3>
                <p>Level: 180</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>

              <li>
                <h3>Jutsu: Doton Mosayko no Jutsu</h3>
                <p>Level: 200</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa multiplos dano no alvo.</p>
              </li>

            
              <li>
                <h3>Jutsu: Suiton suijinheki no jutsu</h3>
                <p>Level: 210</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>

              <li>
                <h3>Jutsu: Mokuton Shichuro</h3>
                <p>Level: 230</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>

              <li>
                <h3>Jutsu: Mokuton Shichuro</h3>
                <p>Level: 250</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano em área.</p>
              </li>

              <li>
                <h3>Jutsu: Mokuton Prision</h3>
                <p>Level: 285</p>
                <p>Utilidade: Suporte/Trap</p>
                <p>Descrição: Hashirama trapa seu alvo por alguns segundos e tira seus kuchyose's.</p>
              </li>

              <li>
                <h3>Jutsu: Mokuton Koutan</h3>
                <p>Level: 300</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>

              <li>
                <h3>Jutsu: Senpo Mokuton Mokujin</h3>
                <p>Level: 375</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>

              <li>
                <h3>Jutsu: Mokuton Mokujoheki</h3>
                <p>Level: 400</p>
                <p>Utilidade: Suporte/Trap</p>
                <p>Descrição: Hashirama cria um casulo feito de madeira que trapa seu alvo.</p>
              </li>
              
              <li>
                <h3>Jutsu: Senpou Myojinmon</h3>
                <p>Level: 425</p>
                <p>Utilidade: Suporte/Trap</p>
                <p>Descrição: Trapa o alvo e sela seus buff por alguns instantes.</p>
              </li> 

              <li>
                <h3>Jutsu: Mokuton Mokujin no Jutsu</h3>
                <p>Level: 425</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Hashirama invoca Hanma Mokuton para ajuda-lo.</p>
              </li> 

              <li>
                <h3>Jutsu: Mokuton Susenju Kourin</h3>
                <p>Level: 475</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo.</p>
              </li>

              <li>
                <h3>Jutsu: Jukai Shinshoku</h3>
                <p>Level: 475</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa multiplos dano no alvo.</p>
              </li>

              <li>
                <h3>Jutsu: Mokuton Kajukai Korin</h3>
                <p>Level: 485</p>
                <p>Utilidade: Suporte/Trap/Fuga</p>
                <p>Descrição: Hashirama invoca a floresta, trapando todos em área por 3 segundos . Hashirama fica invisível dentro desta área , sendo revelado após começar a combar ( ser revelado se atacar apenas jogadores ) . Caso pare de atacar, fica invisível novamente. Depois de 5 segundos de duração, durante 5 segundos irá sair inúmeros clones em direções aleatórias . Se Hashirama tiver com menos de 50% de vida e os clones já tiverem sido invocados, ele substitui o lugar de um dos clones, recuperando 100% da sua vida. Só poderá trocar de lugar com o clone 1x.</p>
              </li> 

              <li>
                <h3>Jutsu: Mokuton Moku Douka</h3>
                <p>Level: 485</p>
                <p>Utilidade: Suporte/Fuga</p>
                <p>Ao usar este jutsu, hashirama ficará invisível por 1.5s, podendo utilizar o jutsu 2x antes de entrar em cooldown.</p>
              </li> 

              <li>
                <h3>Jutsu: Mokuton Kajukai Korin</h3>
                <p>Level: 485</p>
                <p>Utilidade: Suporte/Trap</p>
                <p>Descrição: Hashirama cria uma área de árvores em volta de seu alvo, trapando seu alvo e todos ao redor do alvo..</p>
              </li> 

              <li>
                <h3>Jutsu: Senpou Mokuton Shin Susenju</h3>
                <p>Level: 475</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa multiplos dano no alvo.</p>
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
        background-color:#c65038;
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
        
        


