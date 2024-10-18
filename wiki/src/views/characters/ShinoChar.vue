<template>
    <section class="personagem"> 
      <div class="personagem__info">
        <img src="@/assets/personagens/Shino.jpg"> 
        <h2>Shino</h2>
        <h3> Dano | Suporte | Distance/Sword </h3> 
      </div>

      <div class="combos">
        <button @click="toggleCombo('old')">Combo Old Client</button>
        <button @click="toggleCombo('otc')">Combo OTC</button>
      </div>
  
      <div id="old" class="combo-content" v-show="showOld">
        <li>
          auto 200 listas 'Shino' | setcolor 255 192 203 | isattacking say kidaichu kikai | isattacking say kidaichu akushu | isattacking say kidaichu mushimayu | isattacking say kidaichu mushikui | isattacking say hijutsu mushitatsumaki | isattacking say dai hijutsu mushidama | isattacking say hijutsu mushidama
         
        </li>
      </div>
  
      <div id="otc" class="combo-content" v-show="showOtc">
        <li>
          macro(100, "Combo Shino", function()
              if g_game.isAttacking() then
                  say("kidaichu kikai")
                  say("kidaichu akushu")
                  say("kidaichu mushimayu")
                  say("kidaichu mushikui")
                  say("hijutsu mushitatsumaki")
                  say("dai hijutsu mushidama")
                  say("hijutsu mushidama")
              end
          end)
         </li>
  </div>

      <div class="jutsus__personagens">
        <ul class="jutsus__shino.jpg">
                <li>
                    <h3>Jutsu: Kikkai Akare</h3>
                    <p>Level: 100</p>
                    <p>Utilidade: Suporte</p>
                    <p>Descrição: Shino invoca um Akare para ajudá-lo. Se o alvo for um jogador, Akare tira chakra do jogador.</p>
                  </li>
                  
                  <li>
                    <h3>Jutsu: Hijutsu Mushidama</h3>
                    <p>Level: 140</p>
                    <p>Utilidade: Dano</p>
                    <p>Descrição: Causa dano no alvo.</p>
                  </li>
                  
                  <li>
                    <h3>Jutsu: Dai Hijutsu Mushidama</h3>
                    <p>Level: 170</p>
                    <p>Utilidade: Dano</p>
                    <p>Descrição: Causa múltiplos danos no alvo.</p>
                  </li>
                  
                  <li>
                    <h3>Jutsu: Hijutsu Mushimayu</h3>
                    <p>Level: 190</p>
                    <p>Utilidade: Suporte</p>
                    <p>Descrição: Shino invoca um Akare para ajudá-lo. Se o alvo for um jogador, Akare tira chakra do jogador.</p>
                  </li>
                  
                  <li>
                    <h3>Jutsu: Yose Tsumuji</h3>
                    <p>Level: 190</p>
                    <p>Utilidade: Buff</p>
                    <p>Descrição: Aumenta seus atributos.</p>
                  </li>
                  
                  <li>
                    <h3>Jutsu: Bosui no Jin</h3>
                    <p>Level: 220</p>
                    <p>Utilidade: Dano</p>
                    <p>Descrição: Causa múltiplos danos no alvo.</p>
                  </li>
                  
                  <li>
                    <h3>Jutsu: Kikkai Kariki</h3>
                    <p>Level: 250</p>
                    <p>Utilidade: Suporte</p>
                    <p>Descrição: Shino invoca um Kariki para ajudá-lo. Se o alvo for um jogador, Kariki tira chakra do jogador.</p>
                  </li>
                  
                  <li>
                    <h3>Jutsu: Mushi Kame no Jutsu</h3>
                    <p>Level: 275</p>
                    <p>Utilidade: Dano</p>
                    <p>Descrição: Causa dano em área.</p>
                  </li>
                  
                  <li>
                    <h3>Jutsu: Hijutsu Akare</h3>
                    <p>Level: 300</p>
                    <p>Utilidade: Dano/Suporte</p>
                    <p>Descrição: Shino trapa seu alvo por alguns segundos, causa dano e remove uma grande quantia de chakra do alvo (se for um player).</p>
                  </li>
                  
                  <li>
                    <h3>Jutsu: Hijutsu Mushitatsumaki</h3>
                    <p>Level: 350</p>
                    <p>Utilidade: Dano</p>
                    <p>Descrição: Causa dano no alvo e o trapa por alguns instantes. Há um cooldown para o alvo ser trapado novamente.</p>
                  </li>
                  
                  <li>
                    <h3>Jutsu: Kidaichu Mushikui</h3>
                    <p>Level: 400</p>
                    <p>Utilidade: Dano</p>
                    <p>Descrição: Causa dano no alvo.</p>
                  </li>
                  
                  <li>
                    <h3>Jutsu: Kidaichu Kikai</h3>
                    <p>Level: 425</p>
                    <p>Utilidade: Dano</p>
                    <p>Descrição: Causa dano no alvo.</p>
                  </li>
                  
                  <li>
                    <h3>Jutsu: Kidaichu Akushu</h3>
                    <p>Level: 450</p>
                    <p>Utilidade: Dano</p>
                    <p>Descrição: Causa dano no alvo e remove uma quantia de chakra.</p>
                  </li>
                  
                  <li>
                    <h3>Jutsu: Kidaichu Mushimayu</h3>
                    <p>Level: 475</p>
                    <p>Utilidade: Dano</p>
                    <p>Descrição: Causa dano no alvo e remove uma quantia de chakra.</p>
                  </li>
                  
                  <li>
                    <h3>Jutsu: Hijutsu Kidaichu</h3>
                    <p>Level: 500</p>
                    <p>Utilidade: Suporte</p>
                    <p>Descrição: Shino cria um casulo de bichos, ficando invulnerável a qualquer tipo de ataque por 10 segundos e pode se movimentar sem problemas.</p>
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
        background-color: palegoldenrod;
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
    
                  