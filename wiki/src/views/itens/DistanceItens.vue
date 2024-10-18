<template>
  <div class="itens__list">
    <ul class="distance" id="distance__title">
      <span>Distance:</span>

      <li>
        <img class="ds__icon" src="@/assets/itens/SusanooBow.png">
        <span>Susanoo Bow</span>
        <table class="distance-table">
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
              <td>Susanoo Bow</td>
              <td>Item Vip</td>
              <td>A cada 15 segundos causa uma rajada de dano e causa slow no alvo!</td>
              <td>3350</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </li>

      <li>
        <img class="ds__icon" src="@/assets/itens/SusanooBow.png">
        <span>Susanoo Bow</span>
        <table class="distance-table">
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
              <td>Susanoo Bow</td>
              <td>Item Vip</td>
              <td>A cada 15 segundos causa uma rajada de dano e causa slow no alvo!</td>
              <td>3350</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </li>

      <li>
        <img class="ds__icon" src="@/assets/itens/Kuramaken.png">
        <span>Kuramaken</span>
        <table class="distance-table">
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
              <td>Kuramaken</td>
              <td>Item Vip</td>
              <td>A cada 15 segundos causa uma rajada de dano e cura parte de seu hp por dano causado!</td>
              <td>3350</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </li>

      <li>
        <img class="ds__icon" src="@/assets/itens/newkage_ds.png">
        <span>New Kage</span>
        <table class="distance-table">
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
              <td>New Kage</td>
              <td>...</td>
              <td>...</td>
              <td>2500</td>
              <td>1000</td>
            </tr>
          </tbody>
        </table>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.distance-table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 10px;
  background-color: rgba(0, 0, 0, 0.7); /* Fundo semitransparente */
  border-radius: 8px; /* Bordas arredondadas */
  overflow: hidden; /* Evita que o conteúdo exceda as bordas */
}

.distance-table th, .distance-table td {
  border: 1px solid orange;
  padding: 8px;
  text-align: center;
  color: #fff; /* Cor do texto em branco */
}

.distance-table th {
  background-color: #ff6600; /* Cor laranja intensa para os títulos */
  font-weight: bold;
}

#distance__title {
  font-size: 24px;
  color: #ff6600; /* Título laranja para destacar */
  margin-bottom: 20px;
}

.distance {
  display: flex;
  flex-direction: column;
  color: #ffcc00; /* Cor amarela para o texto */
  background-color: black; /* Fundo laranja semitransparente */
  padding: 15px;
  border-radius: 10px; /* Bordas arredondadas */
  margin-bottom: 20px;
}

.ds__icon {
  width: 80px; /* Tamanho dos ícones */
  margin-bottom: 10px;
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

</style>
