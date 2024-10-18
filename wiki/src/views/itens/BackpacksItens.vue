<template>
    <div class="itens__list">
      <ul class="bps" id="bps__title">
        <span>Backpacks:</span>
        <li>
          <img class="bps__icon" src="@/assets/itens/AkatsukiBackpack.png">
          <span></span>
          <table class="bps-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Drop</th>
                <th>Volume</th>
                <th>Defesa</th>
                <th>Passiva</th>
                <th>Imagem</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Akatsuki Backpack</td>
                <td>Evento Resistência</td>
                <td>20</td>
                <td>0</td>
                <td>Nenhuma.</td>
                <td><img src='@/assets/itens/AkatsukiBackpack.png'></td>
              </tr>
           </tbody>

            
           <tbody>
            <tr>
              <td>Black Shinobi Backpack</td>
              <td>Shop Event</td>
              <td>20</td>
              <td>0</td>
              <td>Nenhuma.</td>
              <td><img src='@/assets/itens/BlackShinobiBackpack.png'></td>
            </tr>
           </tbody>

           <tbody>
            <tr>
              <td>Brocade Backpack</td>
              <td>...</td>
              <td>20</td>
              <td>0</td>
              <td>Nenhuma.</td>
              <td><img src='@/assets/itens/BrocadeBackpack.png'></td>
            </tr>
           </tbody>

           <tbody>
            <tr>
              <td>Devil Backpack</td>
              <td>...</td>
              <td>20</td>
              <td>0</td>
              <td>Nenhuma.</td>
              <td><img src='@/assets/itens/DevilBackpack.png'></td>
            </tr>
           </tbody>

           <tbody>
            <tr>
              <td>Easter Backpack</td>
              <td>...</td>
              <td>20</td>
              <td>0</td>
              <td>Nenhuma.</td>
              <td><img src='@/assets/itens/EasterBackpack.png'></td>
            </tr>
           </tbody>

           <tbody>
            <tr>
              <td>Halloween Backpack</td>
              <td>...</td>
              <td>20</td>
              <td>0</td>
              <td>Nenhuma.</td>
              <td><img src='@/assets/itens/HalloweenBackpack.png'></td>
            </tr>
           </tbody>


         <tbody>
          <tr>
            <td>Otsutsuki Backpack</td>
            <td>Evento Resistência</td>
            <td>24</td>
            <td>0</td>
            <td>Taijutsu + 3, All Skills +5, Ninjutsu + 5, MaxHp + 7%, MaxChakra + 10%, Recovery Health/Chakra 750/s.</td>
            <td><img src='@/assets/itens/OtsutsukiBackpack.png'></td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Pink Shinobi Backpack</td>
            <td>Shop Event</td>
            <td>20</td>
            <td>0</td>
            <td>Nenhuma.</td>
            <td><img src='@/assets/itens/PinkShinobiBackpack.png'></td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Purple Shinobi Backpack</td>
            <td>Shop Event</td>
            <td>20</td>
            <td>0</td>
            <td>Nenhuma.</td>
            <td><img src='@/assets/itens/PurpleShinobiBackpack.png'></td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Suna Backpack</td>
            <td>Evento Resistência</td>
            <td>20</td>
            <td>0</td>
            <td>Nenhuma.</td>
            <td><img src='@/assets/itens/SunaBackpack.png'></td>
          </tr>
       </tbody>

       <tbody>
        <tr>
          <td>White Shinobi Backpack</td>
          <td>Shop Event</td>
          <td>20</td>
          <td>0</td>
          <td>Nenhuma.</td>
          <td><img src='@/assets/itens/WhiteShinobiBackpack.png'></td>
        </tr>
      </tbody>


      <tbody>
        <tr>
          <td>Wolf Backpack</td>
          <td>...</td>
          <td>20</td>
          <td>0</td>
          <td>Nenhuma.</td>
          <td><img src='@/assets/itens/WolfBackpack.png'></td>
        </tr>
       </tbody>

          
          

            </table>
        </li>
      </ul>
    </div>
  </template>
  
  <style scoped>
  .bps-table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 10px;
    background-color: rgba(0, 0, 0, 0.7); /* Fundo semitransparente */
    border-radius: 8px; /* Bordas arredondadas */
    overflow: hidden; /* Evita que o conteúdo exceda as bordas */
  }
  
  .bps-table th, .bps-table td {
    border: 1px solid #ffcc00; /* Borda amarela */
    padding: 8px;
    text-align: center;
    color: #fff; /* Cor do texto em branco */
  }
  
  .bps-table th {
    background-color: #ff6600; /* Cor laranja intensa para os títulos */
    font-weight: bold;
  }
  
  #bps__title {
    font-size: 24px;
    color: #ff6600; /* Título laranja para destacar */
    margin-bottom: 20px;
  }
  
  .bps {
    display: flex;
    flex-direction: column;
    color: #ffcc00; /* Cor amarela para o texto */
    background-color:black; /* Fundo laranja semitransparente */
    padding: 15px;
    border-radius: 10px; /* Bordas arredondadas */
    margin-bottom: 20px;
  }
  
  .bps__icon {
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