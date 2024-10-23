<template>
    <div class="especiais__list">
      <ul class="especiais" id="especiais__title">
        <span>Itens Especias:</span>
        <li>
          <img class="especiais__icon" src="@/assets/itens/SoulsWitch.png">
          <span></span>
          <table class="especiais-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Drop</th>
                <th>Utilidade</th>    
                <th>Imagem</th>
              </tr>
            </thead>

            <tbody>
                <tr>
                  <td>Fuin Pergaminho</td>
                  <td>Báu de Quests em geral</td>
                  <td>Farm Itens Vip (Quest Craft)</td>
                  <td><img src='@/assets/itens/FuinPergaminho.png'></td>
                </tr>
            </tbody>

            <tbody>
                <tr>
                  <td>Burger</td>
                  <td>Npc Chouji</td>
                  <td>Aumenta a xp em 10% por 12 horas</td>
                  <td><img src='@/assets/itens/GoldDust.png'></td>
                </tr>
            </tbody>

            <tbody>
                <tr>
                  <td>Hyorogan</td>
                  <td>Npc Chouji</td>
                  <td>Aumenta a xp em 30% por 12 horas</td>
                  <td><img src='@/assets/itens/GreenLeaf.png'></td>
                </tr>
            </tbody>

            <tbody>
                <tr>
                  <td>Papel de Pontos</td>
                  <td>Npc Tsunade</td>
                  <td>Sistema desativado que permitia trocar pontos entre os jogadores.</td>
                  <td><img src='@/assets/itens/GreenPill.png'></td>
                </tr>
            </tbody>

            <tbody>
              <tr>
                <td>Isqueiro</td>
                <td>Npc Asuma (troca por 100 Konchu Eggs)</td>
                <td>Serve para abrir a quest New Sword.</td>
                <td><img src='@/assets/itens/Isqueiro.png'></td>
              </tr>
          </tbody>


          <tbody>
            <tr>
              <td>Pirate Voodoo Doll</td>
              <td>...</td>
              <td>Decoração</td>
              <td><img src='@/assets/itens/PirateVoodooDoll.png'></td>
            </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Pumpkin Accursed (Buff Halloween)</td>
            <td>Evento Halloween</td>
            <td>Aumenta seus atributos por alguns segundos ao usar</td>
            <td><img src='@/assets/itens/PumpkinAccursed.png'></td>
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


    <tbody>
      <tr>
        <td>Voodoo Doll</td>
        <td>...</td>
        <td>Decoração</td>
        <td><img src='@/assets/itens/VoodooDoll.png'></td>
      </tr>
    </tbody>


            

            </table>
        </li>
      </ul>
    </div>
  </template>
  
  <style scoped>
  .especiais-table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 10px;
    background-color: rgba(0, 0, 0, 0.7); /* Fundo semitransparente */
    border-radius: 8px; /* Bordas arredondadas */
    overflow: hidden; /* Evita que o conteúdo exceda as bordas */
  }
  
  .especiais th, .especias td {
    border: 1px solid orange; /* Borda amarela */
    padding: 8px;
    text-align: center;
    color: #fff; /* Cor do texto em branco */
  }
  
  .especiais-table th {
    background-color: #ff6600; /* Cor laranja intensa para os títulos */
    font-weight: bold;
  }
  
  #especiais {
    font-size: 24px;
    color: #ff6600; /* Título laranja para destacar */
    margin-bottom: 20px;
  }
  
  .especiais {
    display: flex;
    flex-direction: column;
    color: #ffcc00; /* Cor amarela para o texto */
    background-color: black; /* Fundo laranja semitransparente */
    padding: 15px;
    border-radius: 10px; /* Bordas arredondadas */
    margin-bottom: 20px;
  }
  
  .especiais__icon {
    width: 80px; /* Tamanho dos ícones */
    margin-bottom: 10px;
    border: 2px solid #ffcc00; /* Borda amarela ao redor do ícone */
    border-radius: 50%; /* Ícone em forma de círculo */
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