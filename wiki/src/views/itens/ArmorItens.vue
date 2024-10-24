<template>
  <div class="itens__list">
    <ul class="armor" id="armor__title">
      <span>Armor:</span>
      <li>
        <img class="armor__icon" src="@/assets/itens/ChoujiArmor.png">
        <span></span>
        <table class="armor-table">
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
              <td>Senju Armor</td>
              <td>Item Vip</td>
              <td>Arm:3000, glove taijutsu +18, sword taijutsu +18, distance taijutsu +18, ninjutsu +25, faster regeneration.</td>
              <td>Quando equipado com hat + armor + legs + boots do set senju, é ativado uma passiva a qual cura 25% de todo dano recebido de mobs. Ativa bonus de EXP 50%!.</td>
              <td><img src='@/assets/itens/SenjuArmor.png'></td>
            </tr>
          </tbody>
  
          <tbody>
            <tr>
              <td>Kurama Armor</td>
              <td>Item Vip</td>
              <td>Arm:3000, glove taijutsu +18, sword taijutsu +18, distance taijutsu +18, ninjutsu +25, faster regeneration.</td>
              <td>Quando equipado com hat + armor + legs + boots do set kurama, é ativado uma passiva a qual corta a cura de quem estiver atacando você em 25% quando sua vida estiver abaixo de 65%!.</td>
              <td><img src='@/assets/itens/KuramaArmor.png'></td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>Uchiha Armor</td>
              <td>Item Vip</td>
              <td>
                Armor: 3000 | Ninjutsu + 25 | Skills + 18 | Aumenta o HP em 55% | Regenera 7000 de Hp e Chakra por segundo.</td>
              <td>Quando equipado com hat + armor + legs + boots do set uchiha, é ativado uma passiva a qual cura 20% de todo dano causado no alvo quando sua vida estiver abaixo de 70%!.</td>
              <td><img src='@/assets/itens/UchihaArmor.png'></td>
            </tr>
          </tbody>
          
          <tbody>
            <tr>
              <td>Shippuden Tunic</td>
              <td>Item Vip</td>
              <td>Armor: 3000 | Ninjutsu + 25 | Skills + 18 | Aumenta o HP em 55% | Regenera 7000 de Hp e Chakra por segundo</td>
              <td>Quando equipado com hat + armor + legs + boots do set shippuden, é ativado uma passiva a qual cura 20% de danos recebidos quando sua vida estiver abaixo de 55%!.</td>
              <td><img src='@/assets/itens/ShippudenTunic.png'></td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>Otsutsuki Armor</td>
              <td>Evento Resistência</td>
              <td>Arm:2500, glove taijutsu +15, sword taijutsu +15, distance taijutsu +15, ninjutsu +20, faster regeneration.</td>
              <td>Health Max + 48%. Health/Chakra recovery 6000/s.</td>
              <td><img src='@/assets/itens/OtsutsukiArmor.png'></td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>Nidaime Armor</td>
              <td>DG Tobirama</td>
              <td>Arm:850, glove taijutsu +17, sword taijutsu +17, distance taijutsu +17, ninjutsu +25, faster regeneration.</td>
              <td>All Skills + 17, Ninjutsu + 25. Health Max + 50%. Health recovery 6350/s Chakra recorevy 6350/s.</td>
              <td><img src='@/assets/itens/NidaimeArmor.png'></td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>Chouji Armor</td>
              <td></td>
              <td>Arm:850, glove taijutsu +15, sword taijutsu +15, distance taijutsu +15, ninjutsu +10, faster regeneration.</td>
              <td>All Skills + 15, Ninjutsu + 10. Health Max + 40%. Health recovery 2750/s Chakra recorevy 2750/s.</td>
              <td><img src='@/assets/itens/ChoujiArmor.png'></td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>Sarutobi Armor</td>
              <td>Aracnídeo</td>
              <td>Arm:500, glove taijutsu +15, sword taijutsu +15, distance taijutsu +15, ninjutsu +17, faster regeneration.</td>
              <td>All Skill + 15, Ninjutsu + 17. Max Health + 35%. Recovery Health + 3500/s, Recovery Chakra + 2500/s.</td>
              <td><img src='@/assets/itens/SarutobiArmor.png'></td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>Tsunade Shirt</td>
              <td>Quest Two</td>
              <td>Arm:450, taijutsu +10, glove taijutsu +10, faster regeneration.</td>
              <td>Glove Skill + 10, Taijutsu + 10. Jutsus Heal +5%. Health Max + 40%. Health recovery 3500/s and Chakra recorevy 2500/s.</td>
              <td><img src='@/assets/itens/TsunadeShirt.png'></td>
            </tr>
          </tbody>

          
          <tbody>
            <tr>
              <td>Hyuuga Shirt</td>
              <td></td>
              <td>Arm:135, taijutsu +5, glove taijutsu +15, sword taijutsu +15, distance taijutsu +15, ninjutsu +10, faster regeneration.</td>
              <td>All Skills + 15, Taijutsu + 5, Ninjutsu + 10. Chakra Max/HpMax + 40%. Health/Chakra recovery 2850/s.</td>
              <td><img src='@/assets/itens/HyuugaShirt.png'></td>
            </tr>
          </tbody>
        </table>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.armor-table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 10px;
  background-color: rgba(0, 0, 0, 0.7); /* Fundo semitransparente */
  border-radius: 8px; /* Bordas arredondadas */
  overflow: hidden; /* Evita que o conteúdo exceda as bordas */
}

.armor-table th, .armor-table td {
  border: 1px solid #ffcc00; /* Borda amarela */
  padding: 8px;
  text-align: center;
  color: #fff; /* Cor do texto em branco */
}

.armor-table th {
  background-color: #ff6600; /* Cor laranja intensa para os títulos */
  font-weight: bold;
}

#armor__title {
  font-size: 24px;
  color: #ff6600; /* Título laranja para destacar */
  margin-bottom: 20px;
}

.armor {
  display: flex;
  flex-direction: column;
  color: #ffcc00; /* Cor amarela para o texto */
  background-color: black; /* Fundo laranja semitransparente */
  padding: 15px;
  border-radius: 10px; /* Bordas arredondadas */
  margin-bottom: 20px;
}

.armor__icon {
  width: 80px; /* Tamanho dos ícones */
  margin-bottom: 10px;
  border: 2px solid #ffcc00; /* Borda amarela ao redor do ícone */
  border-radius: 50%; /* Ícone em forma de círculo */
  background-color: rgba(255, 255, 255, 0.2); /* Fundo do ícone com leve transparência */
  padding: 5px;
}

.armor img {
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