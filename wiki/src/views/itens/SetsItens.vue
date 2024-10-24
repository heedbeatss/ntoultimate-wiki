<template>
    <div class="itens__list">
      <ul class="sets" id="sets__title">
        <span>   Set's:</span>
        <li>
          <img class="set__icon" src="@/assets/itens/SenjuSet.png">
          <table class="sets-table">

            <thead>
                <tr>
                  <th>Hagoromo Set</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src='@/assets/itens/HagoromoSet.png' class="set-image">
                    <p class="set-description">
                        Set Free mais forte dísponivel no jogo, adquirido através do evento de resistência.
                    </p>
                  </td>
                </tr>
              </tbody>

              <thead>
              <tr>  
                <th>Shippuden Set (Vip)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src='@/assets/itens/ShippudenSet.png' class="set-image">
                  <p class="set-description">
                    Quando equipado com hat + armor + legs + boots do set shippuden, é ativado uma passiva a qual cura 20% de danos recebidos quando sua vida estiver abaixo de 55%!
                  </p>
                </td>
              </tr>
            </tbody>

            <thead>
                <tr>
                  <th>Kurama Set (Vip)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src='@/assets/itens/KuramaSet.png' class="set-image">
                    <p class="set-description">
                        Quando equipado com hat + armor + legs + boots do set kurama, é ativado uma passiva a qual corta a cura de quem estiver atacando você em 25% quando sua vida estiver abaixo de 65%!
                    </p>
                  </td>
                </tr>
              </tbody>

              <thead>
                <tr>
                  <th>Uchiha Set (Vip)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src='@/assets/itens/UchihaSet.png' class="set-image">
                    <p class="set-description">
                        Quando equipado com hat + armor + legs + boots do set uchiha, é ativado uma passiva a qual cura 20% de todo dano causado no alvo quando sua vida estiver abaixo de 70%!
                    </p>
                  </td>
                </tr>
              </tbody>

              
              <thead>
                <tr>
                  <th>Senju Set (Vip)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src='@/assets/itens/SenjuSet.png' class="set-image">
                    <p class="set-description">
                        Quando equipado com hat + armor + legs + boots do set senju, é ativado uma passiva a qual cura 25% de todo dano recebido de mobs. Ativa bonus de EXP 50%!
                    </p>
                  </td>
                </tr>
              </tbody>
          </table>
        </li>
      </ul>
    </div>
  </template>
  
  
  <style scoped>
  span {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
    margin-left: 20px; 
    margin-top: 10px;
}


  .itens__list {
    width: auto;
    background-color: black;
  }

  .sets-table td {
    text-align: center; 
    padding: 15px;
  }

.sets__icon {
  display: none;
}

.set-image {
    max-width: 100%;
    height: auto; 
    max-height: 450px; 
    margin-bottom: 15px; 
}

.set-description {
    color: #fff; 
    font-size: 16px; 
}



  
  #sets__title {
    font-size: 24px;
    color: #ff6600; 
    margin-bottom: 20px;
  }
  
  .set {
    display: flex;
    flex-direction: column;
    color: #ffcc00; 
    background-color: rgba(255, 102, 0, 0.2); 
    padding: 15px;
    border-radius: 10px; 
    margin-bottom: 20px;
  }
  
  .sets__icon {
    width: 80px; 
    margin-bottom: 10px;
    border: 2px solid #ffcc00; 
    border-radius: 50%; 
    background-color: rgba(255, 255, 255, 0.2); 
    padding: 5px;
  }
  
  li {
    list-style-type: none;
    color: #ffcc00; 
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
 
    border-radius: 8px; 
    margin-bottom: 15px;
    background-color: rgba(0, 0, 0, 0.5); 
  }
  
  ul {
    padding: 0;
    margin: 0;
  }
  
  a {
    color: #ff6600;
    text-decoration: none; 
  }
  
  a:hover {
    text-decoration: underline; 
  }
  
  span {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
  }

  @media (max-width: 1200px) {
    #sets__title {
      font-size: 22px;
    }
  
    .set-image {
      max-height: 350px; /* Reduz o tamanho da imagem em telas menores */
    }
  
    .set-description {
      font-size: 15px;
    }
  
    .set__icon {
      display: none;
    }
  }
  
  /* Telas menores que 900px */
  @media (max-width: 900px) {
    #sets__title {
      font-size: 20px;
    }
  
    .set-image {
      max-height: 300px;
    }
  
    .set-description {
      font-size: 14px;
    }
  
    .sets__icon {
      width: 60px;
    }
    
    li {
      font-size: 13px;
      padding: 8px;
    }
  }
  
  /* Telas menores que 600px (ex. dispositivos móveis) */
  @media (max-width: 600px) {
    #sets__title {
      font-size: 18px;
      text-align: center;
    }
  
    .set-image {
      max-height: 250px;
    }
  
    .set-description {
      font-size: 12px;
      text-align: center;
    }
  
    .sets__icon {
      width: 50px;
    }
  
    .set {
      padding: 10px;
    }
    
    li {
      padding: 5px;
      margin-bottom: 10px;
    }
  }

  </style>