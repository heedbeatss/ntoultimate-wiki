<template>
    <section class="personagem"> 
        <div class="personagem__info">
          <img src="@/assets/personagens/Kurenai.jpg"> 
          <h2>Kurenai</h2>
          <h3> Dano | Sword/Distance </h3> 
        </div>

        <div class="combos">
          <button @click="toggleCombo('old')">Combo Old Client</button>
          <button @click="toggleCombo('otc')">Combo OTC</button>
        </div>
    
        <div id="old" class="combo-content" v-show="showOld">
          <li> 
            auto 100 listas 'Kurenai' | isattacking {say "magen jubaku satsu" | say " anshousui " | say "botanyuki" | say "magen hanagasumi" | if [$attacked.distance == 1] isattacking say "magen hiei no jutsu" | if [$attacked.distance == 5] isattacking say "kaki buyou"}
                 </li>
        </div>
    
        <div id="otc" class="combo-content" v-show="showOtc">
          <li>  
           
            macro(100, "Combo Kurenai", function()
                if g_game.isAttacking() then
                    say("magen jubaku satsu")
                    say("anshousui")
                    say("botanyuki")
                    say("magen hanagasumi")
                    say("magen hiei no jutsu")
                    say("kaki buyou")
              end
              end)
                </li>
        </div>

        <div class="jutsus__personagens">
          <ul class="jutsus__kurenai.jpg">
            <li>
              <h3>Jutsu: Chakura Kanchi</h3>
              <p>Level: 100</p>
              <p>Utilidade: Buff</p>
              <p>Descrição: Aumenta seus atributos</p>
          </li>
          <li>
              <h3>Jutsu: Kunai Explosion no Jutsu</h3>
              <p>Level: 135</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano em área</p>
          </li>
          <li>
              <h3>Jutsu: Kouyoumu</h3>
              <p>Level: 160</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa múltiplos danos no alvo</p>
          </li>
          <li>
              <h3>Jutsu: Chiyute no Jutsu</h3>
              <p>Level: 175</p>
              <p>Utilidade: Suporte</p>
              <p>Descrição: Cura uma grande quantidade de vida, podendo usar em aliados também. Para usar, basta deixar a kunai ligada e escrever assim: (Chiyute no Jutsu "Nick do jogador")</p>
          </li>
          <li>
              <h3>Jutsu: Jubaku no Jutsu</h3>
              <p>Level: 200</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
              <h3>Jutsu: Botanyuki</h3>
              <p>Level: 250</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
              <h3>Jutsu: Magen Hiei no Jutsu</h3>
              <p>Level: 275</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo. Deixa o alvo lento por alguns segundos.</p>
          </li>
          <li>
              <h3>Jutsu: Kaki Buyou</h3>
              <p>Level: 300</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
              <h3>Jutsu: Magen Hanagasumi</h3>
              <p>Level: 350</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
              <h3>Jutsu: Sansai no Jutsu</h3>
              <p>Level: 400</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo e fica invisível por alguns instantes.</p>
          </li>
          <li>
              <h3>Jutsu: Undo Cho Kosoku</h3>
              <p>Level: 425</p>
              <p>Utilidade: Suporte</p>
              <p>Descrição: Kurenai consegue dashar em linha reta até três vezes.</p>
          </li>
          <li>
              <h3>Jutsu: Anshousui</h3>
              <p>Level: 450</p>
              <p>Utilidade: Dano</p>
              <p>Descrição: Causa dano no alvo</p>
          </li>
          <li>
              <h3>Jutsu: Magen Shinkirou</h3>
              <p>Level: 475</p>
              <p>Utilidade: Suporte</p>
              <p>Descrição: Kurenai fica invisível e cria vários clones que atacam quem está perto.</p>
          </li>
          <li>
              <h3>Jutsu: Magen Jubaku Satsu</h3>
              <p>Level: 500</p>
              <p>Utilidade: Dano/Suporte</p>
              <p>Descrição: Kurenai causa dano no alvo e o trava por alguns segundos.</p>
          </li>
          <li>
              <h3>Jutsu: Genjutsu no Hanabira</h3>
              <p>Level: 515</p>
              <p>Utilidade: Suporte</p>
              <p>Descrição: Se Kurenai estiver presa em um Genjutsu (como Kotoamatsukami de Shisui ou Kokuangyo no Jutsu de Tobirama), ela pode usar este jutsu para reverter ou modificar o efeito, dependendo do Genjutsu:</p>
              <ul>
                  <li>Mundo do Tobirama: Kurenai pode atacar Tobirama dentro de seu mundo.</li>
                  <li>Mundo do Jiraiya: Kurenai sai automaticamente do mundo e fica invisível por 1,5 segundos.</li>
                  <li>Mundo do Shisui: Kurenai não sofre o efeito do jutsu; Shisui sofre em seu lugar.</li>
                  <li>Mundo do Zetsu: Kurenai não sofre dano de Zetsu durante o Genjutsu.</li>
                  <li>Mundo do Itachi (Tsukuyomi): Kurenai não sofre o efeito do jutsu e sai do mundo automaticamente.</li>
                  <li>Mundo do Obito (Dai Kamui): Kurenai sai automaticamente e fica invisível por 1,5 segundos após sair.</li>
              </ul>
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
    background-color: red;
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
    