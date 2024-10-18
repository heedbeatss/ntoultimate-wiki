<template>
    <div class="itens__list">
      <ul class="outras" id="outras__title">
        <span>Outras Armas:</span>
        <li>
          <img class="outras__icon" src="@/assets/itens/Bashosen.png">
          <table class="outras-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Drop</th>
                <th>Passiva</th>
                <th>Ataque</th>
                <th>Imagem</th>
              </tr>
            </thead>
          
            <tbody>
              <tr>
                <td>Bashosen</td>
                <td>Quest Kinkaku</td>
                <td>Uma das armas do sabio dos 6 caminhos, leque poderoso mas consome muito chakra ao usa-la, essa arma não sobe skill de nenhum tipo de arma.</td>
                <td>Atk:2000</td>
                <th><img src='@/assets/itens/Bashosen.png'></th>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>Explosion Kunai</td>
                <td>Quest</td>
                <td> essa arma não sobe skill de nenhum tipo de arma.</td>
                <td>Atk:1900</td>
                <th><img src='@/assets/itens/ExplosionKunai.png'></th>
              </tr>
            </tbody>
        </table>



        </li>
      </ul>
    </div>
  </template>
  
  <style scoped>
  .outras-table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
  }
  
  .outras-table th, .outras-table td {
    border: 1px solid white;
    padding: 2px;
    text-align: left;
    word-wrap: break-word;
    width: calc(100% / 5); /* Ajustado para cinco colunas */
  }
  
  .outras-table th {
    background-color: black;
  }
  
  #outras__title {
    font-size: larger;
  }
  
  .outras {
    display: flex;
    flex-direction: column;
    color: orange;
    background-color: black;
  }
  
  .outras__icon {
    padding-top: 20px;
    display: block; /* Garante que o ícone e o texto fiquem alinhados */
  }
  
  li {
    color: white;
    font-size: small;
    align-items: center; /* Centraliza verticalmente os elementos */
    display: flex; /* Permite que o ícone e o texto fiquem lado a lado */
    gap: 15px;
    flex-direction: column; /* Garante que as tabelas fiquem abaixo do texto */
  }
  
  p {
    font-size: smaller;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  a {
    color: orange;
  }
  </style>
  