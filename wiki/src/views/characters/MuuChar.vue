<template>
    <section class="personagem"> 
        <div class="personagem__info">
          <img src="@/assets/personagens/npmMuu.jpg"> 
          <h2>Muu</h2>
          <h3> Dano | Distance/Sword</h3> 
        </div>

        <div class="combos">
            <button @click="toggleCombo('old')">Combo Old Client</button>
            <button @click="toggleCombo('otc')">Combo OTC</button>
          </div>
      
          <div id="old" class="combo-content" v-show="showOld">
            <li>
              auto 200 listas 'Sai' | setcolor 255 192 203 | isattacking say sumi snakes shower | isattacking say sumi futago kyojin | isattacking say choushin renenjaku | isattacking say sumi ryuu no jutsu | isattacking say choujuu giga shower | isattacking say choju giga
            </li>
          </div>
      
          <div id="otc" class="combo-content" v-show="showOtc">
            <li> 
              
              macro(100, "Combo Sai", function()
                  if g_game.isAttacking() then
                      say("sumi snakes shower")
                      say("sumi futago kyojin")
                      say("choushin renenjaku")
                      say("sumi ryuu no jutsu")
                      say("choujuu giga shower")
                      say("choju giga")
                  end
              end)
            </li>
      </div>

        

        <div class="jutsus__personagens">
          <ul class="jutsus__muu.jpg">
            <li>
              <h3>Jutsu: Kanchi no Jutsu</h3>
              <p>Level: 100</p>
              <p>Utilidade: Buff</p>
              <p>Descrição: Aumenta seus atributos</p>
          </li>
          
          <li>
              <h3>Jutsu: Doton Fushoku</h3>
              <p>Level: 115</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Doton Dragon Furie</h3>
              <p>Level: 150</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Doton Prision</h3>
              <p>Level: 175</p>
              <p>Utilidade: Suporte</p>
              <p>Descrição: Trapa o alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Doton Koi Doro</h3>
              <p>Level: 200</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Doton Noboru</h3>
              <p>Level: 250</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Doton Doromizu Funka</h3>
              <p>Level: 300</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa múltiplos danos no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Doton Takai Murasakiiro</h3>
              <p>Level: 350</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Doton Tougoku Murasakiiro</h3>
              <p>Level: 400</p>
              <p>Utilidade: Suporte</p>
              <p>Descrição: Trapa o alvo por alguns segundos.</p>
          </li>
          
          <li>
              <h3>Jutsu: Doton Dai Noboru</h3>
              <p>Level: 425</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Doton Choukajugan no Jutsu</h3>
              <p>Level: 450</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Doton Shiboru Tenohira</h3>
              <p>Level: 475</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Jinton Genkai Hakuri</h3>
              <p>Level: 500</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          
          <li>
              <h3>Jutsu: Bunretsu no Jutsu</h3>
              <p>Level: 515</p>
              <p>Utilidade: Suporte</p>
              <p>Descrição: Jutsu que cria um clone, dividindo Muu. Se o jogador usar o jutsu "Bunretsu no Jutsu Change", ele troca de lugar com o clone, recuperando seu próprio HP e deixando o clone em seu lugar com o HP que tinha.</p>
          </li>
          
          <li>
              <h3>Jutsu: Bunretsu no Jutsu Change</h3>
              <p>Level: 515</p>
              <p>Utilidade: Suporte</p>
              <p>Descrição: Jutsu que permite a Muu trocar de lugar com um clone criado pelo jutsu "Bunretsu no Jutsu". Ao usar o jutsu, Muu troca de posição com o clone, recupera seu HP e deixa o clone em seu lugar com o HP que tinha.</p>
          </li>
          
          <li>
              <h3>Jutsu: Mujin Meisai</h3>
              <p>Level: 525</p>
              <p>Utilidade: Suporte</p>
              <p>Descrição: Ao ativar este jutsu, Muu fica completamente invisível por alguns segundos.</p>
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
background-color: paleturquoise;
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
