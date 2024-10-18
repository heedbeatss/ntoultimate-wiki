<template>
  <section class="personagem"> 
    <div class="personagem__info">
      <img src="@/assets/personagens/Itachi.jpg"> 
      <h2>Itachi</h2>
      <h3>Dano | Suporte | Distance/Sword</h3> 
    </div>
    
    <div class="combos">
      <button @click="toggleCombo('old')">Combo Old Client</button>
      <button @click="toggleCombo('otc')">Combo OTC</button>
    </div>

    <div id="old" class="combo-content" v-show="showOld">
      <li>auto 200 listas 'Itachi' | setcolor 255 192 203 | isattacking say yasaka no magatama | isattacking say mangekyou amaterasu | isattacking say fuumetsu shuriken | isattacking say katon daibakuha | isattacking say ame no ohabari | isattacking say katon endan 
      </li>
    </div>

    <div id="otc" class="combo-content" v-show="showOtc">
      <li>macro(100, "Combo Itachi", function()
        if g_game.isAttacking() then
            say("yasaka no magatama")
            say("mangekyou amaterasu")
            say("fuumetsu shuriken")
            say("katon daibakuha")
            say("ame no ohabari")
            say("Suiton dragon no jutsu")
      end
      end) </li>
    </div>
    
    <div class="jutsus__personagens">
      <ul class="jutsus__itachi">
        <li>
          <h3>Jutsu: Susanoo</h3>
          <p>Level: 100</p>
          <p>Utilidade: Buff</p>
          <p>Descrição: Aumenta seus atributos</p>
        </li>
        <li>
          <h3>Jutsu: Katon Dragon no Jutsu</h3>
          <p>Level: 100</p>
          <p>Utilidade: Dano</p>
          <p>Descrição: Causa dano em área</p>
        </li>
        <li>
          <h3>Jutsu: Doton Dragon Furie</h3>
          <p>Level: 150</p>
          <p>Utilidade: Dano</p>
          <p>Descrição: Causa dano no alvo</p>
        </li>
        <li>
          <h3>Jutsu: Suiton Dragon no Jutsu</h3>
          <p>Level: 180</p>
          <p>Utilidade: Dano</p>
          <p>Descrição: Causa dano no alvo</p>
        </li>
        <li>
          <h3>Jutsu: Magen Kasegui no Jutsu</h3>
          <p>Level: 200</p>
          <p>Utilidade: Dano/Suporte</p>
          <p>Descrição: Teleporta no alvo e causa um dano com trap</p>
        </li>
        <li>
          <h3>Jutsu: Fuumetsu Shuriken</h3>
          <p>Level: 225</p>
          <p>Utilidade: Dano</p>
          <p>Descrição: Causa multiplos dano no alvo</p>
        </li>
        <li>
          <h3>Jutsu: Mangekyou Amaterasu</h3>
          <p>Level: 250</p>
          <p>Utilidade: Dano</p>
          <p>Descrição: Causa multiplos dano no alvo</p>
        </li>
        <li>
          <h3>Jutsu: Katon Endan</h3>
          <p>Level: 300</p>
          <p>Utilidade: Dano</p>
          <p>Descrição: Causa dano no alvo</p>
        </li>
        <li>
          <h3>Jutsu: Ame no Ohabari</h3>
          <p>Level: 300</p>
          <p>Utilidade: Dano</p>
          <p>Descrição: Causa dano no alvo</p>
        </li>
        <li>
          <h3>Jutsu: Magen Kaeshi</h3>
          <p>Level: 350</p>
          <p>Utilidade: Dano/Suporte</p>
          <p>Descrição: Ao usar o jutsu, o mesmo fica ativado por 20 segundos, qualquer monstro que te atacar, receberá o dano de volta e Itachi ficará invulnerável por 1,5 segundos.</p>
        </li>
        <li>
          <h3>Jutsu: Katon Daibakuha</h3>
          <p>Level: 350</p>
          <p>Utilidade: Dano</p>
          <p>Descrição: Causa dano no alvo</p>
        </li>
        <li>
          <h3>Jutsu: Yasaka no Magatama</h3>
          <p>Level: 375</p>
          <p>Utilidade: Dano</p>
          <p>Descrição: Causa dano no alvo</p>
        </li>
        <li>
          <h3>Jutsu: Genjutsu Kaeshi</h3>
          <p>Level: 400</p>
          <p>Utilidade: Suporte</p>
          <p>Descrição: Este jutsu só funciona dentro de algum Genjutsu como o Mundo do Tobirama ou Shisui.</p>
        </li>
        <li>
          <h3>Jutsu: Izanagi</h3>
          <p>Level: 400</p>
          <p>Utilidade: Suporte</p>
          <p>Descrição: Caso o jogador morra dentro de 10 segundos após ativar o jutsu, o jogador será enviado para um mundo preto por alguns segundos, depois será revivido no lugar onde morreu. Cooldown de 60 segundos.</p>
        </li>
        <li>
          <h3>Jutsu: Bangata Karasu</h3>
          <p>Level: 425</p>
          <p>Utilidade: Suporte</p>
          <p>Descrição: O jutsu invoca 3 Corvo, Itachi ignora o dano recebido trocando de local com seu corvo e fica invulnerável por 1,5 segundo</p>
        </li>
        <li>
          <h3>Jutsu: Mangekyou Susanoo</h3>
          <p>Level: 450</p>
          <p>Utilidade: Suporte</p>
          <p>Descrição: Aumenta todos os atributos do personagem, diminuindo todo dano recebido em 40% por 20 segundos</p>
        </li>
        <li>
          <h3>Jutsu: Magen Tsutakata</h3>
          <p>Level: 450</p>
          <p>Utilidade: Suporte</p>
          <p>Descrição: Após ativar o jutsu, se receber dano de um player, Itachi ficará invisível e irá reduzir a velocidade do oponente.</p>
        </li>
        <li>
          <h3>Jutsu: Izanami</h3>
          <p>Level: 500</p>
          <p>Utilidade: Suporte</p>
          <p>Descrição: Envia o alvo para o mundo do Izanami. Após sair, o mesmo não poderá atacar o jogador que levou para o Izanami por 15 segundos. Se não cumprir as regras dentro do Izanami, o tempo será de 30 segundos.</p>
        </li>
        <li>
          <h3>Jutsu: Tsukuyomi no Jutsu</h3>
          <p>Level: 500</p>
          <p>Utilidade: Suporte</p>
          <p>Descrição: Itachi envia o alvo para o Tsukuyomi, onde o mesmo não consegue curar dentro do mundo e fica preso por alguns segundos.</p>
        </li>
      </ul>
      <!-- Lista de Jutsus -->
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
  background-color: #B22222;
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

.combo-content {
  margin-top: 20px;
}

.combos button {
  background-color: #343a40; /* Cor de fundo escura que remete ao manto de Itachi */
  color: #ffffff; /* Cor do texto em branco para contraste */
  border: 2px solid #b22222; /* Borda vermelha para combinar com o fundo da página e o Mangekyou Sharingan */
  border-radius: 8px; /* Bordas arredondadas */
  padding: 10px 20px; /* Espaçamento interno */
  font-size: 1rem; /* Tamanho da fonte */
  cursor: pointer; /* Cursor em forma de mão para indicar interatividade */
  transition: background-color 0.3s, transform 0.3s; /* Transições suaves */
  margin: 5px; /* Espaçamento entre os botões */
}

.combos button:hover {
  background-color: #b22222; /* Muda a cor de fundo ao passar o mouse, referenciando o vermelho intenso do Mangekyou Sharingan */
  transform: scale(1.05); /* Leve aumento no tamanho ao passar o mouse */
}

.combos button:active {
  transform: scale(0.95); /* Leve redução no tamanho ao clicar */
  background-color: #8b0000; /* Cor mais escura para o estado ativo */
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
