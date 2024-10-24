<template>
    <div class="itens__list">
      <ul class="rings" id="Rings__title">
        <span>Rings:</span>
        <li>
          <img class="rings__icon" src="@/assets/itens/AkatsukiRing.png">
          <span></span>
          <table class="rings-table">
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
                <td>Akatsuki Ring</td>
                <td>DG Deidara</td>
                <td>Recupera 150 de Vida e Chakra por segundo.</td>
                <td><img src='@/assets/itens/AkatsukiRing.png'></td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>Red Ring Ni</td>
                <td>Quest ?</td>
                <td>Parts Ni Ring. Sword Skill +2 and +5 Ninjutsu..</td>
                <td><img src='@/assets/itens/RedRingNi.png'></td>
              </tr>
            </tbody>
            </table>
        </li>
      </ul>
    </div>
  </template>
  
  <style scoped>
  .rings-table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 10px;
    background-color: rgba(0, 0, 0, 0.7); /* Fundo semitransparente */
    border-radius: 8px; /* Bordas arredondadas */
    overflow: hidden; /* Evita que o conteúdo exceda as bordas */
  }
  
  .rings th, .rings td {
    border: 1px solid #ffcc00; /* Borda amarela */
    padding: 8px;
    text-align: center;
    color: #fff; /* Cor do texto em branco */
  }
  
  .rings-table th {
    background-color: #ff6600; /* Cor laranja intensa para os títulos */
    font-weight: bold;
  }
  
  #rings__title {
    font-size: 24px;
    color: #ff6600; /* Título laranja para destacar */
    margin-bottom: 20px;
  }
  
  .rings {
    display: flex;
    flex-direction: column;
    color: #ffcc00; /* Cor amarela para o texto */
    background-color:black; /* Fundo laranja semitransparente */
    padding: 15px;
    border-radius: 10px; /* Bordas arredondadas */
    margin-bottom: 20px;
  }
  
  .rings__icon {
    width: 80px; /* Tamanho dos ícones */
    margin-bottom: 10px;
    border: 2px solid #ffcc00; /* Borda amarela ao redor do ícone */
    border-radius: 50%; /* Ícone em forma de círculo */
    background-color: rgba(255, 255, 255, 0.2); /* Fundo do ícone com leve transparência */
    padding: 5px;
  }

  .rings img {
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