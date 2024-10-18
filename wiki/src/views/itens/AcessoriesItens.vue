<template>
    <div class="itens__list">
      <ul class="acessories" id="acessorie  s__title">
        <span>Acessories:</span>
        <li>
          <img class="acessories__icon" src="@/assets/itens/Kote.png">
          <span></span>
          <table class="acessories-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Drop</th>
                <th>Passiva</th>
                <th>Imagem</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Bure</td>
                <td>Item Vip</td>
                <td>
                  Skills + 15 | Taijutsu + 10 | Ninjutsu + 15 | Regenera 1000 de Hp e Chakra por segundo | 5% de todos os danos sao bloqueados.</td>
                <td><img src='@/assets/itens/Bure.png'></td>
              </tr>
            </tbody>
                 
            <tbody>
              <tr>
                <td>Gourd</td>
                <td>Item Vip</td>
                <td>
                  Skills +7 | Ninjutsu + 10 | MaxHp + 10% | MaxChakra + 10% | Regenera 500 de Hp e Chakra por segundo.</td>
                <td><img src='@/assets/itens/Gourd.png'></td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>Kote</td>
                <td>Evento Resistência</td>
                <td>All skills + 11. Recovery Heath/Chakra + 900. Block 4 Percent all damage.</td>
                <td><img src='@/assets/itens/Kote.png'></td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>Scarf of Asuma</td>
                <td>Doragon</td>
                <td>Glove Skill +10 and +10 Ninjutsu. Jutsus Heal + 5%.</td>
                <td><img src='@/assets/itens/ScarfOfAsuma.png'></td>
              </tr>
            </tbody>

            <tbody>
                <tr>
                  <td>Suna Basin</td>
                  <td>Evento Resistência</td>
                  <td>All Skills +4, Ninjutsu + 5, MaxHp + 6%, MaxChakra + 6%, Recovery Health/Chakra 350/s.</td>
                  <td><img src='@/assets/itens/SunaBasin.png'></td>
                </tr>
              </tbody>
            </table>
        </li>
      </ul>
    </div>
  </template>
  
  <style scoped>
  .acessories-table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 10px;
    background-color: rgba(0, 0, 0, 0.7); /* Fundo semitransparente */
    border-radius: 8px; /* Bordas arredondadas */
    overflow: hidden; /* Evita que o conteúdo exceda as bordas */
  }
  
  .acessories th, .amulets td {
    border: 1px solid #ffcc00; /* Borda amarela */
    padding: 8px;
    text-align: center;
    color: #fff; /* Cor do texto em branco */
  }
  
  .acessories-table th {
    background-color: #ff6600; /* Cor laranja intensa para os títulos */
    font-weight: bold;
  }
  
  #acessories__title {
    font-size: 24px;
    color: #ff6600; /* Título laranja para destacar */
    margin-bottom: 20px;
  }
  
  .acessories {
    display: flex;
    flex-direction: column;
    color: #ffcc00; /* Cor amarela para o texto */
    background-color: black; /* Fundo laranja semitransparente */
    padding: 15px;
    border-radius: 10px; /* Bordas arredondadas */
    margin-bottom: 20px;
  }
  
  .acessories__icon {
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