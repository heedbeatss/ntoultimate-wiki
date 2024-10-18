<template>
    <div class="itens__list">
      <ul class="shields" id="shields__title">
        <span>Shields:</span>
        <li>
          <img class="shields__icon" src="@/assets/itens/SusanoShield.png">
          <span></span>
          <table class="shields-table">
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
                <td>Kurama Shield</td>
                <td>Item Vip</td>
                <td>Def:4000, protection all +8%, faster regeneration.</td>
                <td>Bloqueia 8% de todos danos recebidos!.</td>
                <td><img src='@/assets/itens/KuramaShield.png'></td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>Kakuzu Shield</td>
                <td>Item Vip</td>
                <td>Def:4000, protection all +8%, faster regeneration.</td>
                <td>Bloqueia 8% de todos danos recebidos!.</td>
                <td><img src='@/assets/itens/KakuzuShield.png'></td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>Susano Shield</td>
                <td>Quest Selo</td>
                <td>Def:2000, protection all +5%, faster regeneration.</td>
                <td>Health Max + 15%. Health/Chakra recorevy 300/2seconds. Block 5% damages..</td>
                <td><img src='@/assets/itens/SusanoShield.png'></td>
              </tr>
            </tbody>
          </table>
        </li>
      </ul>
    </div>
  </template>
  
  <style scoped>
  .shields-table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 10px;
    background-color: rgba(0, 0, 0, 0.7); /* Fundo semitransparente */
    border-radius: 8px; /* Bordas arredondadas */
    overflow: hidden; /* Evita que o conteúdo exceda as bordas */
  }
  
  .shields-table th, .shields-table td {
    border: 1px solid #ffcc00; /* Borda amarela */
    padding: 8px;
    text-align: center;
    color: #fff; /* Cor do texto em branco */
  }
  
  .shields-table th {
    background-color: #ff6600; /* Cor laranja intensa para os títulos */
    font-weight: bold;
  }
  
  #shields__title {
    font-size: 24px;
    color: #ff6600; /* Título laranja para destacar */
    margin-bottom: 20px;
  }
  
  .shields {
    display: flex;
    flex-direction: column;
    color: #ffcc00; /* Cor amarela para o texto */
    background-color:black; /* Fundo laranja semitransparente */
    padding: 15px;
    border-radius: 10px; /* Bordas arredondadas */
    margin-bottom: 20px;
  }
  
  .shields__icon {
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