<template>
    <section class="personagem"> 
        <div class="personagem__info">
          <img src="@/assets/personagens/Yamato.jpg"> 
          <h2>Yamato</h2>
          <h3> Dano | Suporte | Distance/Sword</h3> 
        </div>

        <div class="combos">
            <button @click="toggleCombo('old')">Combo Old Client</button>
            <button @click="toggleCombo('otc')">Combo OTC</button>
          </div>
      
          <div id="old" class="combo-content" v-show="showOld">
            <li> 
                auto 200 listas 'Yamato' | setcolor 0 100 0 | isattacking say mokuton jubaku eisou | isattacking say mokuton jumoku koutan | isattacking say senpo mokuton mokujoheki | isattacking say senpo mokuton susenju | isattacking say mokuton jukai koutan | isattacking say mokuton shichuro
            </li>
          </div>
      
          <div id="otc" class="combo-content" v-show="showOtc">
            <li>
                macro(100, "Combo Yamato", function()
                    if g_game.isAttacking() then
                        say("mokuton jubaku eisou")
                        say("mokuton jumoku koutan")
                        say("senpo mokuton mokujoheki")
                        say("senpo mokuton susenju")
                        say("mokuton jukai koutan")
                        say("mokuton shichuro")
                  end
                  end)
                      </li>
      </div>

        <div class="jutsus__personagens">
          <ul class="jutsus__yamato.jpg">
            <li>
                <h3>Jutsu: Saisei Nouryoku</h3>
                <p>Level: 100</p>
                <p>Utilidade: Buff</p>
                <p>Descrição: Aumenta seus atributos</p>
            </li>
            
            <li>
                <h3>Jutsu: Mokuton Hinoto</h3>
                <p>Level: 110</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Suiton Suichutotsu</h3>
                <p>Level: 150</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Mokuton Korin</h3>
                <p>Level: 150</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Mokuton Jukai</h3>
                <p>Level: 155</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Cria uma árvore onde seu personagem está. Essa árvore é uma armadilha; se um alvo passar por cima dela ou permanecer sobre ela, ficará preso por alguns segundos.</p>
            </li>
            
            <li>
                <h3>Jutsu: Doton Prision</h3>
                <p>Level: 170</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Trapa o alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Doton Domu</h3>
                <p>Level: 175</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Mokuton Yanagi</h3>
                <p>Level: 200</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Mokuton Shichuro</h3>
                <p>Level: 230</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Mokuton Daijurin</h3>
                <p>Level: 250</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano em área</p>
            </li>
            
            <li>
                <h3>Jutsu: Mokuton Suishu</h3>
                <p>Level: 300</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Mokuton Jukai Koutan</h3>
                <p>Level: 350</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Senpo Mokuton Susenju</h3>
                <p>Level: 375</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Mokuton Mokujoheki</h3>
                <p>Level: 400</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Yamato cria um casulo feito de madeira que trapa seu alvo.</p>
            </li>
            
            <li>
                <h3>Jutsu: Senpo Mokuton Mokujoheki</h3>
                <p>Level: 400</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Mokuton Jumoku Koutan</h3>
                <p>Level: 400</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa múltiplos danos no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Mokuton Jubaku Eisou</h3>
                <p>Level: 450</p>
                <p>Utilidade: Dano</p>
                <p>Descrição: Causa dano no alvo</p>
            </li>
            
            <li>
                <h3>Jutsu: Mokuton Moku Douka</h3>
                <p>Level: 500</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Ao usar este jutsu, Yamato ficará invisível por 1.5s, podendo utilizar o jutsu 2x antes de entrar em cooldown.</p>
            </li>
            
            <li>
                <h3>Jutsu: Bijuu Fuin</h3>
                <p>Level: 500</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Ao utilizar este jutsu, caso o alvo seja um player e esteja na forma de bijuu (mode bijuu), Yamato sela instantaneamente o player, voltando a ser um jinchuuriki.</p>
            </li>
            
            <li>
                <h3>Jutsu: Mokuton Haikai</h3>
                <p>Level: 525</p>
                <p>Utilidade: Suporte</p>
                <p>Descrição: Yamato cria um casulo em si mesmo, bloqueando todo tipo de ataque recebido por 5 segundos, mas fica impossibilitado de conseguir andar durante a ativação do jutsu.</p>
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
background-color: brown;
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

  .combo-content {
    color: white;
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
              