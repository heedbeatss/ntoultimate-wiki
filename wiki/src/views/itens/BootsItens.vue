<template>
  <div class="itens__list">
    <ul class="Boots" id="Boots__title">
      <span>Boots:</span>
      <li>
        <img class="boots__icon" src="@/assets/itens/KageBoots.png">
        <span></span>
        <table class="boots-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Drop</th>
              <th>Defesa</th>
              <th>Passiva</th>
              <th>Imagem</th>
            </tr>
          </thead>

          
          <tbody>
            <tr>
              <td>Senju Boots</td>
              <td>Item Vip</td>
              <td>Armor: 500 | Ninjutsu + 20 | Skills + 20 | Regenera 1250 de Hp e Chakra por segundo | Speed + 200.</td>
              <td>Quando equipado com hat + armor + legs + boots do set senju, é ativado uma passiva a qual cura 25% de todo dano recebido de mobs. Ativa bonus de EXP 50%!.</td>
              <td><img src='@/assets/itens/SenjuBoots.png'></td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>Kurama Hat</td>
              <td>Item Vip</td>
              <td>Armor: 500 | Ninjutsu + 20 | Skills + 20 | Regenera 1250 de Hp e Chakra por segundo | Speed + 200.</td>
              <td>Quando equipado com hat + armor + legs + boots do set kurama, é ativado uma passiva a qual corta a cura de quem estiver atacando você em 25% quando sua vida estiver abaixo de 65%!.</td>
              <td><img src='@/assets/itens/KuramaBoots.png'></td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>Uchiha Hat</td>
              <td>Item Vip</td>
              <td>Armor: 500 | Ninjutsu + 20 | Skills + 20 | Regenera 1250 de Hp e Chakra por segundo | Speed + 200.</td>
              <td>Quando equipado com hat + armor + legs + boots do set uchiha, é ativado uma passiva a qual cura 20% de todo dano causado no alvo quando sua vida estiver abaixo de 70%!.</td>
              <td><img src='@/assets/itens/UchihaBoots.png'></td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>Shippuden Boots</td>
              <td>Item Vip</td>
              <td>
                Armor: 500 | Ninjutsu + 20 | Skills + 20 | Regenera 1250 de Hp e Chakra por segundo | Speed + 200.</td>
              <td>Quando equipado com hat + armor + legs + boots do set shippuden, é ativado uma passiva a qual cura 20% de danos recebidos quando sua vida estiver abaixo de 55%!.</td>
              <td><img src='@/assets/itens/ShippudenBoots.png'></td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>Otsutsuki Boots</td>
              <td>Evento Resistência</td>
              <td>Arm:350, glove taijutsu +16, sword taijutsu +16, distance taijutsu +16, ninjutsu +16, speed +75, faster regeneration.</td>
              <td>Health/chakra recovery 900/s.</td>
              <td><img src='@/assets/itens/OtsutsukiBoots.png'></td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>Kage Boots</td>
              <td>Ibuki</td>
              <td>Arm:10, glove taijutsu +10, sword taijutsu +10, medicine taijutsu +10, distance taijutsu +10, ninjutsu +10, faster regeneration.</td>
              <td>Ninjutsu skill increases in 10 and increases Skills in 10 and health recovery 750/s .</td>
              <td><img src='@/assets/itens/KageBoots.png'></td>
            </tr>
          </tbody>
        </table>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.boots-table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 10px;
  background-color: black; /* Fundo semitransparente */
  border-radius: 8px; /* Bordas arredondadas */
  overflow: hidden; /* Evita que o conteúdo exceda as bordas */
}

.boots-table th, .boots-table td {
  border: 1px solid #ffcc00; /* Borda amarela */
  padding: 8px;
  text-align: center;
  color: #fff; /* Cor do texto em branco */
}

.boots-table th {
  background-color: black; /* Cor laranja intensa para os títulos */
  font-weight: bold;
}

#boots__title {
  font-size: 24px;
  color: #ff6600; /* Título laranja para destacar */
  margin-bottom: 20px;
}

.boots {
  display: flex;
  flex-direction: column;
  color: #ffcc00; /* Cor amarela para o texto */
  background-color: black; /* Fundo laranja semitransparente */
  padding: 15px;
  border-radius: 10px; /* Bordas arredondadas */
  margin-bottom: 20px;
}

.boots__icon {
  width: 80px; /* Tamanho dos ícones */
  margin-bottom: 10px;
  border: 2px solid #ffcc00; /* Borda amarela ao redor do ícone */
  border-radius: 50%; /* Ícone em forma de círculo */
  background-color: black; /* Fundo do ícone com leve transparência */
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
  background-color: black; /* Fundo preto semitransparente */
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