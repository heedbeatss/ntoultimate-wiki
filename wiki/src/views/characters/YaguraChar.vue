
<template>
    <section class="personagem"> 
      <div class="personagem__info">
        <img src="@/assets/personagens/Yagura.jpg"> 
        <h2>Yagura</h2>
        <h3> Dano | Stack | Sword/Distance</h3> 
      </div>

      <div class="combos">
        <button @click="toggleCombo('old')">Combo Old Client</button>
        <button @click="toggleCombo('otc')">Combo OTC</button>
      </div>
  

      <div class="jutsus__personagens">
        <ul class="jutsus__yagura">
          <li>
            <h3>Jutsu: Bijuuka</h3>
            <p><strong>Level:</strong> 100</p>
            <p><strong>Utilidade:</strong> Buff de ninjutsu</p>
          </li>
      
          <li>
            <h3>Jutsu: Suiryudan no Jutsu</h3>
            <p><strong>Level:</strong> 100</p>
            <p><strong>Utilidade:</strong> Causa dano</p>
          </li>
      
          <li>
            <h3>Jutsu: Suiton Suigadan</h3>
            <p><strong>Level:</strong> 125</p>
            <p><strong>Utilidade:</strong> Causa dano</p>
          </li>
      
          <li>
            <h3>Jutsu: Bijuu Dama</h3>
            <p><strong>Level:</strong> 175</p>
            <p><strong>Utilidade:</strong> Causa dano</p>
          </li>
      
          <li>
            <h3>Jutsu: Suiton Dragon no Jutsu</h3>
            <p><strong>Level:</strong> 180</p>
            <p><strong>Utilidade:</strong> Causa dano</p>
          </li>
      
          <li>
            <h3>Jutsu: Suiton Suikodan no Jutsu</h3>
            <p><strong>Level:</strong> 190</p>
            <p><strong>Utilidade:</strong> Causa dano em linha reta, empurrando o alvo; se o alvo acertar uma parede, fica stunado</p>
          </li>
      
          <li>
            <h3>Jutsu: Suiton Suijinheki no Jutsu</h3>
            <p><strong>Level:</strong> 210</p>
            <p><strong>Utilidade:</strong> Causa dano</p>
          </li>
      
          <li>
            <h3>Jutsu: Suiton Suirou no Jutsu</h3>
            <p><strong>Level:</strong> 240</p>
            <p><strong>Utilidade:</strong> Causa lentidão em área</p>
          </li>
      
          <li>
            <h3>Jutsu: Suiton Suisahan</h3>
            <p><strong>Level:</strong> 270</p>
            <p><strong>Utilidade:</strong> Causa dano</p>
          </li>
      
          <li>
            <h3>Jutsu: Suiton Suishoha no Jutsu</h3>
            <p><strong>Level:</strong> 300</p>
            <p><strong>Utilidade:</strong> Causa dano no alvo e stacka</p>
          </li>
      
          <li>
            <h3>Jutsu: Suiton Goshokuzame</h3>
            <p><strong>Level:</strong> 325</p>
            <p><strong>Utilidade:</strong> Causa dano</p>
          </li>
      
          <li>
            <h3>Jutsu: Suiton Suisha</h3>
            <p><strong>Level:</strong> 350</p>
            <p><strong>Utilidade:</strong> Causa dano</p>
          </li>
      
          <li>
            <h3>Jutsu: Sentou Taifui</h3>
            <p><strong>Level:</strong> 375</p>
            <p><strong>Utilidade:</strong> Causa dano</p>
          </li>
      
          <li>
            <h3>Jutsu: Suiton Suichu Hogeki</h3>
            <p><strong>Level:</strong> 400</p>
            <p><strong>Utilidade:</strong> Causa inúmeros danos</p>
          </li>
      
          <li>
            <h3>Jutsu: Shunshui</h3>
            <p><strong>Level:</strong> 400</p>
            <p><strong>Utilidade:</strong> Dash em linha reta de até 10 SQM, stackando no alvo, deixando-o "molhado" por 10 segundos (aumenta danos de Raiton)</p>
            <p><strong>Cooldown:</strong> 35 segundos</p>
          </li>
      
          <li>
            <h3>Jutsu: Sango Renshou</h3>
            <p><strong>Level:</strong> 425</p>
            <p><strong>Utilidade:</strong> Stacka no alvo, causa dano e deixa lento por 2 segundos; depois, o alvo fica trapado por 3 segundos</p>
            <p><strong>Cooldown:</strong> 30 segundos</p>
          </li>
      
          <li>
            <h3>Jutsu: Suiton Suijin no Jutsu</h3>
            <p><strong>Level:</strong> 450</p>
            <p><strong>Utilidade:</strong> Ignora 100% de todo o dano recebido por 6 segundos</p>
            <p><strong>Cooldown:</strong> 40 segundos</p>
          </li>
      
          <li>
            <h3>Jutsu: Fuuton Taifuuikka</h3>
            <p><strong>Level:</strong> 475</p>
            <p><strong>Utilidade:</strong> Causa dano</p>
          </li>
      
          <li>
            <h3>Jutsu: Suiton Mizukagami no Jutsu</h3>
            <p><strong>Level:</strong> 500</p>
            <p><strong>Utilidade:</strong> Cria um clone do alvo que reflete alguns jutsus, causando 25% do dano recebido de volta</p>
            <p><strong>Duracão:</strong> 10 segundos</p>
            <p><strong>Cooldown:</strong> 35 segundos</p>
          </li>
      
          <li>
            <h3>Jutsu: Suiton Kaisui Houdan</h3>
            <p><strong>Level:</strong> 500</p>
            <p><strong>Utilidade:</strong> Jutsu ultimate, causando muito dano</p>
          </li>
      
          <li>
            <h3>Jutsu: Sanbi Modo</h3>
            <p>Level: 525</p>
            <p>Utilidade: Buff</p>
            <p>Descrição: Yagura se transforma em sua forma de batalha, ganhando os seguintes efeitos:</p>
            <ul>
                <li>Ao ativar, recupera 100% de vida.</li>
                <li>Ignora 25% de todo o dano.</li>
                <li>Ignora 100% de todo o dano de água.</li>
                <li>Recupera 10% de vida baseado no dano que o Yagura causa no oponente.</li>
                <li>Ganha 70 de Ninjutsu + 70 de Taijutsu + 70 de Sword, Glove e Distance.</li>
                <li>Cooldown: 65 segundos</li>
                <li>Duração: 20 segundos</li>
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
background-color: blue;
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
color: grey;
}

.jutsus__personagens h2 {
    margin: 0 0 10px;
    font-size: 1.5rem;
    color: white;
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
        
        