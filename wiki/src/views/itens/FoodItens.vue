<template>
    <div class="food__list">
      <ul class="food" id="food__title">
        <span>Comidas:</span>
        <li>
          <img class="food__icon" src="@/assets/itens/Ham.png">
          <span></span>
          <table class="food-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Drop</th>
                <th>Cura (1-10)</th>    
                <th>Imagem</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Brown Mushroom</td>
                <td>...</td>
                <td>9</td>
                <td><img src='@/assets/itens/BrownMushroom.png'></td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>Egg</td>
                <td>Npc</td>
                <td>5</td>
                <td><img src='@/assets/itens/Egg.png'></td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>Erva Medicinal</td>
                <td>DG Sasori, Bandit</td>
                <td>10 (cura toda vida de uma vez, sem regeneração continua)</td>
                <td><img src='@/assets/itens/ErvaMedicinal.png'></td>
              </tr>
            </tbody>

            <tbody>
                <tr>
                  <td>Ham</td>
                  <td>Npc</td>
                  <td>8</td>
                  <td><img src='@/assets/itens/Ham.png'></td>
                </tr>
            </tbody>

            
            <tbody>
              <tr>
                <td>Meat</td>
                <td>Npc</td>
                <td>7</td>
                <td><img src='@/assets/itens/Meat.png'></td>
              </tr>
          </tbody>


            </table>
        </li>
      </ul>
    </div>
  </template>
  
  <style scoped>
  .food-table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 10px;
    background-color: rgba(0, 0, 0, 0.7); /* Fundo semitransparente */
    border-radius: 8px; /* Bordas arredondadas */
    overflow: hidden; /* Evita que o conteúdo exceda as bordas */
  }
  
  .food th, .food td {
    border: 1px solid #ffcc00; /* Borda amarela */
    padding: 8px;
    text-align: center;
    color: #fff; /* Cor do texto em branco */
  }
  
  .food-table th {
    background-color: #ff6600; /* Cor laranja intensa para os títulos */
    font-weight: bold;
  }
  
  #food__title {
    font-size: 24px;
    color: #ff6600; /* Título laranja para destacar */
    margin-bottom: 20px;
  }
  
  .food {
    display: flex;
    flex-direction: column;
    color: #ffcc00; /* Cor amarela para o texto */
    background-color: black; /* Fundo laranja semitransparente */
    padding: 15px;
    border-radius: 10px; /* Bordas arredondadas */
    margin-bottom: 20px;
  }
  
  .food__icon {
    width: 80px; /* Tamanho dos ícones */
    margin-bottom: 10px;
    border: 2px solid #ffcc00; /* Borda amarela ao redor do ícone */
    border-radius: 50%; /* Ícone em forma de círculo */
    background-color: rgba(255, 255, 255, 0.2); /* Fundo do ícone com leve transparência */
    padding: 5px;
  }

  .food img {
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
/* Responsividade para dispositivos móveis */
@media (max-width: 768px) {
  .food-table th, .food-table td {
    padding: 5px;
    font-size: 12px;
  }

  .food__icon {
    width: 60px; /* Ícones menores em dispositivos móveis */
  }

  li {
    font-size: 12px; /* Texto menor nos itens */
    padding: 8px;
  }

  #food__title {
    font-size: 20px; /* Reduz o tamanho do título */
  }
}

/* Responsividade para dispositivos menores que 480px */
@media (max-width: 480px) {
  .food-table th, .food-table td {
    font-size: 10px; /* Fonte ainda menor */
    max-width: 50px;
  }

  .food__icon {
    width: 50px; /* Ícones ainda menores */
  }

  li {
    font-size: 10px;
    padding: 6px;
  }

  #food__title {
    font-size: 18px;
  }

  .food {
    padding: 10px;
  }
}
</style>