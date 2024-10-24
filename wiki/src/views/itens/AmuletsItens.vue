<template>
    <div class="itens__list">
      <ul class="amulets" id="amulets__title">
        <span>Amulets:</span>
        <li>
          <img class="amulets__icon" src="@/assets/itens/KuramaAmulet.png">
          <span></span>
          <table class="amulets-table">
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
                <td>Amulet of Yinyang</td>
                <td>Item Vip</td>
                <td>0</td>
                <td>Ninjutsu + 10 | Skills + 10 | Jutsus de Heal regeneram +32% | Regenera 750 de Hp e Chakra por segund.</td>
                <td><img src='@/assets/itens/AmuletYinYang.png'></td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>Amulet of Rikudou</td>
                <td>Evento Resistência</td>
                <td>Arm:100, taijutsu +10, ninjutsu +10.</td>
                <td>Regenera +30% de HP nas curas. Taijutsu + 10, Ninjutsu + 10.</td>
                <td><img src='@/assets/itens/AmuletOfRikudou.png'></td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>Kurama Amulet</td>
                <td>Quest Kurama Amulet</td>
                <td>0</td>
                <td>Jutsus Health increass in 25%. Aumenta os jutsus de heal em 25%.</td>
                <td><img src='@/assets/itens/KuramaAmulet.png'></td>
              </tr>
            </tbody>
            
            <tbody>
              <tr>
                <td>Kubikazari</td>
                <td></td>
                <td>0</td>
                <td>Glove taijutsu +3, sword taijutsu +3, distance taijutsu +3, ninjutsu +3, faster regeneration.</td>
                <td><img src='@/assets/itens/Kubikazari.png'></td>
              </tr>
            </tbody>
            </table>
        </li>
      </ul>
    </div>
  </template>
  
  <style scoped>
  .amulets-table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 10px;
    background-color: rgba(0, 0, 0, 0.7); /* Fundo semitransparente */
    border-radius: 8px; /* Bordas arredondadas */
    overflow: hidden; /* Evita que o conteúdo exceda as bordas */
  }
  
  .amulets th, .amulets td {
    border: 1px solid #ffcc00; /* Borda amarela */
    padding: 8px;
    text-align: center;
    color: #fff; /* Cor do texto em branco */
  }
  
  .amulets-table th {
    background-color: #ff6600; /* Cor laranja intensa para os títulos */
    font-weight: bold;
  }
  
  #amulets__title {
    font-size: 24px;
    color: #ff6600; /* Título laranja para destacar */
    margin-bottom: 20px;
  }
  
  .amulets {
    display: flex;
    flex-direction: column;
    color: #ffcc00; /* Cor amarela para o texto */
    background-color:black; /* Fundo laranja semitransparente */
    padding: 15px;
    border-radius: 10px; /* Bordas arredondadas */
    margin-bottom: 20px;
  }
  
  .amulets__icon {
    width: 80px; /* Tamanho dos ícones */
    margin-bottom: 10px;
    border: 2px solid #ffcc00; /* Borda amarela ao redor do ícone */
    border-radius: 50%; /* Ícone em forma de círculo */
    background-color: rgba(255, 255, 255, 0.2); /* Fundo do ícone com leve transparência */
    padding: 5px;
  }

  .amulets img {
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