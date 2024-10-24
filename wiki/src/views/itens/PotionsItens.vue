<template>
    <div class="potions__list">
      <ul class="potions" id="potions__title">
        <span>Potions:</span>
        <li>
          <img class="potions__icon" src="@/assets/itens/OldPot.png">
          <span></span>
          <table class="potions-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Drop</th>
                <th>Cura</th>    
                <th>Imagem</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Chakra Pot</td>
                <td>Dg, Npc</td>
                <td>Boa</td>
                <td><img src='@/assets/itens/ChakraPot.png'></td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>New Chakra Potion</td>
                <td>Usando Blue Pill em uma Chakra Potion</td>
                <td>Ótimo</td>
                <td><img src='@/assets/itens/NewChakraPot.png'></td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>Old Pot</td>
                <td>DG, Npc</td>
                <td>Boa</td>
                <td><img src='@/assets/itens/OldPot.png'></td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>New Potion</td>
                <td>Usando Red Pill em uma Potion</td>
                <td>Ótimo</td>
                <td><img src='@/assets/itens/NewPot.png'></td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>Potion Death Ninjutsu</td>
                <td>Npc Chouji</td>
                <td>Especial Potion (Não perde skill de ninjtusu ao morrer)</td>
                <td><img src='@/assets/itens/PotionDeathNinjutsu.png'></td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>Potion Skill Ninjutsu</td>
                <td>Npc Chouji</td>
                <td>Especial Potion (Não perde skill de arma ao morrer)</td>
                <td><img src='@/assets/itens/PotionDeathSkill.png'></td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>Potion Resistência</td>
                <td>Npc Chouji</td>
                <td>Especial Potion (30% de proteção ao dano de jogadores)</td>
                <td><img src='@/assets/itens/PotionResistencia.png'></td>
              </tr>
            </tbody>


            <tbody>
              <tr>
                <td>Souls Witch (Pot Halloween)</td>
                <td>Evento Halloween</td>
                <td>Heal pot infinita </td>
                <td><img src='@/assets/itens/SoulsWitch.png'></td>
              </tr>
          </tbody>
      

           


            </table>
        </li>
      </ul>
    </div>
  </template>
  
  <style scoped>
  .potions-table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 10px;
    background-color: rgba(0, 0, 0, 0.7); /* Fundo semitransparente */
    border-radius: 8px; /* Bordas arredondadas */
    overflow: hidden; /* Evita que o conteúdo exceda as bordas */
  }
  
  .potions th, .potions td {
    border: 1px solid #ffcc00; /* Borda amarela */
    padding: 8px;
    text-align: center;
    color: #fff; /* Cor do texto em branco */
  }
  
  .potions-table th {
    background-color: #ff6600; /* Cor laranja intensa para os títulos */
    font-weight: bold;
  }
  
  #potions__title {
    font-size: 24px;
    color: #ff6600; /* Título laranja para destacar */
    margin-bottom: 20px;
  }
  
  .potions {
    display: flex;
    flex-direction: column;
    color: #ffcc00; /* Cor amarela para o texto */
    background-color: black; /* Fundo laranja semitransparente */
    padding: 15px;
    border-radius: 10px; /* Bordas arredondadas */
    margin-bottom: 20px;
  }
  
  .potions__icon {
    width: 80px; /* Tamanho dos ícones */
    margin-bottom: 10px;
    border: 2px solid #ffcc00; /* Borda amarela ao redor do ícone */
    border-radius: 50%; /* Ícone em forma de círculo */
    background-color: rgba(255, 255, 255, 0.2); /* Fundo do ícone com leve transparência */
    padding: 5px;
  }

  .potions img {
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