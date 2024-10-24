<template>
  <div class="itens__list">
    <ul class="legs" id="legs__title">
      <span>Legs:</span>
      <li>
        <img class="legs__icon" src="@/assets/itens/SasukeLegRobe.png">
        <span></span>
        <table class="legs-table">
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
              <td>Senju Legs</td>
              <td>Item Vip</td>
              <td>Arm:500, glove taijutsu +20, sword taijutsu +20, distance taijutsu +20, ninjutsu +20, faster regeneration.</td>
              <td>Quando equipado com hat + armor + legs + boots do set senju, é ativado uma passiva a qual cura 25% de todo dano recebido de mobs. Ativa bonus de EXP 50%!.</td>
              <td><img src='@/assets/itens/SenjuLegs.png'></td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>Kurama Legs</td>
              <td>Item Vip</td>
              <td>Arm:500, glove taijutsu +20, sword taijutsu +20, distance taijutsu +20, ninjutsu +20, faster regeneration.</td>
              <td>Quando equipado com hat + armor + legs + boots do set kurama, é ativado uma passiva a qual corta a cura de quem estiver atacando você em 25% quando sua vida estiver abaixo de 65%!.</td>
              <td><img src='@/assets/itens/KuramaLegs.png'></td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>Shippuden Legs</td>
              <td>Item Vip</td>
              <td>Armor: 500 | Ninjutsu + 20 | Skills + 20 | Aumenta o HP em 35% | Regenera 1300 de Hp e Chakra por segundo.</td>
              <td>Quando equipado com hat + armor + legs + boots do set shippuden, é ativado uma passiva a qual cura 20% de danos recebidos quando sua vida estiver abaixo de 55%!.</td>
              <td><img src='@/assets/itens/ShippudenLegs.png'></td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>Otsutsuki Legs</td>
              <td>Evento Resistência</td>
              <td>Arm:350, glove taijutsu +15, sword taijutsu +15, distance taijutsu +15, ninjutsu +15, faster regeneration.</td>
              <td>HP Max +25%. Chakra recovery 950/s and Health recovery 950/s.</td>
              <td><img src='@/assets/itens/OtsutsukiLegs.png'></td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>Sasuke Black Legrobe</td>
              <td>Dokuhebi</td>
              <td>Arm:350, glove taijutsu +15, sword taijutsu +15, distance taijutsu +15, ninjutsu +15, faster regeneration.</td>
              <td>Ninjutsu +15. All Skills +15. HP Max +25%. Chakra recovery 850/s and Health recovery 850/s.</td>
              <td><img src='@/assets/itens/SasukeBlackLegRobe.png'></td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>Sasuke Legrobe</td>
              <td>Dokuhebi</td>
              <td>Arm:300, glove taijutsu +10, sword taijutsu +10, distance taijutsu +10, ninjutsu +15, faster regeneration.</td>
              <td>Ninjutsu +15. All Skills +10. HP Max +25%. Chakra recovery 650/s and Health recovery 650/s.</td>
              <td><img src='@/assets/itens/SasukeLegRobe.png'></td>
            </tr>
          </tbody>
        </table>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.legs-table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 10px;
  background-color: rgba(0, 0, 0, 0.7); /* Fundo semitransparente */
  border-radius: 8px; /* Bordas arredondadas */
  overflow: hidden; /* Evita que o conteúdo exceda as bordas */
}

.legs-table th, .legs-table td {
  border: 1px solid #ffcc00; /* Borda amarela */
  padding: 8px;
  text-align: center;
  color: #fff; /* Cor do texto em branco */
}

.legs-table th {
  background-color: #ff6600; /* Cor laranja intensa para os títulos */
  font-weight: bold;
}

#legs__title {
  font-size: 24px;
  color: #ff6600; /* Título laranja para destacar */
  margin-bottom: 20px;
}

.legs {
  display: flex;
  flex-direction: column;
  color: #ffcc00; /* Cor amarela para o texto */
  background-color: black; /* Fundo laranja semitransparente */
  padding: 15px;
  border-radius: 10px; /* Bordas arredondadas */
  margin-bottom: 20px;
}

.legs__icon {
  width: 80px; /* Tamanho dos ícones */
  margin-bottom: 10px;
  border: 2px solid #ffcc00; /* Borda amarela ao redor do ícone */
  border-radius: 50%; /* Ícone em forma de círculo */
  background-color: rgba(255, 255, 255, 0.2); /* Fundo do ícone com leve transparência */
  padding: 5px;
}

.legs img {
  width: 40px;
  height: 40px;
  object-fit: cover;
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