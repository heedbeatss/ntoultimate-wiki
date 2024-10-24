<template>
    <div class="itens__list">
      <ul class="hats" id="hats__title">
        <span>Hats:</span>
        <li>
          <img class="hats__icon" src="@/assets/itens/OtsutsukiHat.png">
          <span></span>
          <table class="hats-table">
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
                <td>Senju Hat</td>
                <td>Item Vip</td>
                <td>Arm:500, glove taijutsu +20, sword taijutsu +20, distance taijutsu +20, ninjutsu +20, faster regeneration.</td>
                <td>Quando equipado com hat + armor + legs + boots do set senju, é ativado uma passiva a qual cura 25% de todo dano recebido de mobs. Ativa bonus de EXP 50%!.</td>
                <td><img src='@/assets/itens/SenjuHat.png'></td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>Kurama Hat</td>
                <td>Item Vip</td>
                <td>Arm:500, glove taijutsu +20, sword taijutsu +20, distance taijutsu +20, ninjutsu +20, faster regeneration.</td>
                <td>Quando equipado com hat + armor + legs + boots do set kurama, é ativado uma passiva a qual corta a cura de quem estiver atacando você em 25% quando sua vida estiver abaixo de 65%!.</td>
                <td><img src='@/assets/itens/KuramaHat.png'></td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>Uchiha Hat</td>
                <td>Item Vip</td>
                <td>Arm:500, glove taijutsu +20, sword taijutsu +20, distance taijutsu +20, ninjutsu +20, faster regeneration.</td>
                <td>Quando equipado com hat + armor + legs + boots do set uchiha, é ativado uma passiva a qual cura 20% de todo dano causado no alvo quando sua vida estiver abaixo de 70%!.</td>
                <td><img src='@/assets/itens/UchihaHat.png'></td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>Shippuden Hat</td>
                <td>Item Vip</td>
                <td>Arm:500, glove taijutsu +20, sword taijutsu +20, distance taijutsu +20, ninjutsu +20, faster regeneration.</td>
                <td>Quando equipado com hat + armor + legs + boots do set shippuden, é ativado uma passiva a qual cura 20% de danos recebidos quando sua vida estiver abaixo de 55%!.</td>
                <td><img src='@/assets/itens/ShippudenHat.png'></td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>Otsutsuki Hat</td>
                <td>Evento Resistência</td>
                <td>Arm:350, glove taijutsu +16, sword taijutsu +16, distance taijutsu +16, ninjutsu +16, faster regeneration.</td>
                <td>HP Max +18%. Chakra Max + 10%. Health recovery 1200/s Chakra recorevy 850/s. +3% Heal Jutsus.</td>
                <td><img src='@/assets/itens/OtsutsukiHat.png'></td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>Jiraya War Forehead</td>
                <td>Spectro</td>
                <td>Arm:50, glove taijutsu +14, sword taijutsu +14, distance taijutsu +14, ninjutsu +15, faster regeneration.</td>
                <td>All Skill + 14, Ninjutsu + 15, Max Hp + 15%, Recovery Health/Chakra 1050/s.</td>
                <td><img src='@/assets/itens/JirayaWarForehead.png'></td>
              </tr>
            </tbody>
          </table>
        </li>
      </ul>
    </div>
  </template>
  
  <style scoped>
  .hats-table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 10px;
    background-color:black; /* Fundo semitransparente */
    border-radius: 8px; /* Bordas arredondadas */
    overflow: hidden; /* Evita que o conteúdo exceda as bordas */
  }
  
  .hats-table th, .hats-table td {
    border: 1px solid #ffcc00; /* Borda amarela */
    padding: 8px;
    text-align: center;
    color: #fff; /* Cor do texto em branco */
  }
  
  .hats-table th {
    background-color: black; /* Cor laranja intensa para os títulos */
    font-weight: bold;
  }
  
  #hats__title {
    font-size: 24px;
    color: #ff6600; /* Título laranja para destacar */
    margin-bottom: 20px;
  }
  
  .hats {
    display: flex;
    flex-direction: column;
    color: #ffcc00; /* Cor amarela para o texto */
    background-color: black; /* Fundo laranja semitransparente */
    padding: 15px;
    border-radius: 10px; /* Bordas arredondadas */
    margin-bottom: 20px;
  }
  
  .hats__icon {
    width: 80px; /* Tamanho dos ícones */
    margin-bottom: 10px;
    border: 2px solid #ffcc00; /* Borda amarela ao redor do ícone */
    border-radius: 50%; /* Ícone em forma de círculo */
    background-color: black; /* Fundo do ícone com leve transparência */
    padding: 5px;
  }

  .hats img {
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