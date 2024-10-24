<template>
  <div class="itens__list">
    <ul class="glove" id="gloves__title">
      <span>Gloves:</span>

      <li>
        <img class="sw__icon" src="@/assets/itens/RaijinSlayer.png">
        <span>Raijin Slayer</span>
        <table class="glove-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Drop</th>
              <th>Passiva</th>
              <th>Ataque</th>
              <th>Defesa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Raijin Slayer</td>
              <td>Item Vip</td>
              <td>A cada 15 segundos causa um stun no alvo e cura uma grande porção de seu HP! Outro ponto da raijin slayer é que a cada 15 ataques causado no alvo (mob ou player) causa um dano extra menor que a da gunbai, mas causando lizy no alvo.</td>
              <td>3000</td>
              <td>1500</td>
            </tr>
          </tbody>
        </table>  
      </li>

      <li>
        <img class="sw__icon" src="@/assets/itens/newgloves_gv.png">
        <span>New Gloves</span>
        <table class="glove-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Drop</th>
              <th>Passiva</th>
              <th>Ataque</th>
              <th>Defesa</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Raikage Furie Gloves</td>
              <td>Quest New Gloves/New Kage</td>
              <td></td>
              <td>2500</td>
              <td>1000</td>
            </tr>
          </tbody>
        </table>
      </li>

      <li>
        <img class="sw__icon" src="@/assets/itens/GoldenSlayerGlove.png">
        <span>Golden Slayer Gloves</span>
        <table class="glove-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Drop</th>
              <th>Ataque</th>
              <th>Defesa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Golden Slayer Gloves</td>
              <td></td>
              <td>2500</td>
              <td>1000</td>
            </tr>
          </tbody>
        </table>
      </li>

      <li>
        <img class="sw__icon" src="@/assets/itens/Kokinjo.png">
        <span>Kokinjo</span>
        <table class="glove-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Drop</th>
              <th>Ataque</th>
              <th>Defesa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kokinjo </td>
              <td>Quest Kinkaku</td>
              <td>2000</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </li>

      <li>
        <img class="sw__icon" src="@/assets/itens/AianNakkuru.png">
        <span>Aian Nakkuru</span>
        <table class="glove-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Drop</th>
              <th>Ataque</th>
              <th>Defesa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aian Nakkuru</td>
              <td></td>
              <td>1350</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </li>
 
      

      <li>
        <img class="sw__icon" src="@/assets/itens/RaikageGlove.png">
        <span>Raikage Glove</span>
        <table class="glove-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Drop</th>
              <th>Ataque</th>
              <th>Defesa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Raikage Glove</td>
              <td></td>
              <td>800</td>
              <td>40</td>
            </tr>
          </tbody>
        </table>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.glove-table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 10px;
  background-color: rgba(0, 0, 0, 0.7); /* Fundo semitransparente */
  border-radius: 8px; /* Bordas arredondadas */
  overflow: hidden; /* Evita que o conteúdo exceda as bordas */
}

.glove-table th, .glove-table td {
  border: 1px solid #ffcc00; /* Borda amarela */
  padding: 8px;
  text-align: center;
  color: #fff; /* Cor do texto em branco */
}

.glove-table th {
  background-color: #ff6600; /* Cor laranja intensa para os títulos */
  font-weight: bold;
}

#gloves__title {
  font-size: 24px;
  color: #ff6600; /* Título laranja para destacar */
  margin-bottom: 20px;
}

.glove {
  display: flex;
  flex-direction: column;
  color: #ffcc00; /* Cor amarela para o texto */
  background-color: black; /* Fundo laranja semitransparente */
  padding: 15px;
  border-radius: 10px; /* Bordas arredondadas */
  margin-bottom: 20px;
}

.sw__icon {
  width: 80px; /* Tamanho dos ícones */
  margin-bottom: 10px;
  border: 2px solid #ffcc00; /* Borda amarela ao redor do ícone */
  
  background-color: rgba(255, 255, 255, 0.2); /* Fundo do ícone com leve transparência */
  padding: 5px;
}

li {
  list-style-type: none;
  color: #ffcc00; /* Cor amarela para o texto dos itens */
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #ff6600; /* Bordas laranjas */
  border-radius: 8px; /* Bordas arredondadas */
  margin-bottom: 15px;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo preto semitransparente */
}

ul {
  padding: 0;
  margin: 0;
}

a {
  color: #ff6600;
  text-decoration: none; /* Remove sublinhado */
}

a:hover {
  text-decoration: underline; /* Sublinha ao passar o mouse */
}

span {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
}
</style>