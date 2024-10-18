<template>
    <section class="itens"> 
        <div class="itens__info">
          <h1>Itens</h1>
        </div>
        
        <div class="itens__list">
          <h3>Set's</h3>   
           <li><RouterLink to="/sets">Sets</RouterLink></li>
         </div> 

        <div class="itens__list">
          <h3>Armas</h3>
            <li><RouterLink to="/distance">Distance</RouterLink></li>
            <li><RouterLink to="/gloves">Gloves</RouterLink></li>
            <li><RouterLink to="/outras">Outras</RouterLink></li>
            <li><RouterLink to="/swords">Swords</RouterLink></li>      
        </div>    
        
        <div class="itens__list">
          <h3>Defesa</h3>
            <li><RouterLink to="/armor">Armor</RouterLink></li>
            <li><RouterLink to="/boots">Boots</RouterLink></li>
            <li><RouterLink to="/hats">Hats</RouterLink></li>
            <li><RouterLink to="/legs">Legs</RouterLink></li>
            <li><RouterLink to="/shields">Shields</RouterLink></li>
        </div>   

        <div class="itens__list">
          <h3>Acessórios</h3>
            <li><RouterLink to="/acessories">Acessories</RouterLink></li>
            <li><RouterLink to="/amulets">Amulets</RouterLink></li>
            <li><RouterLink to="/backpacks">Backpacks</RouterLink></li>
            <li><RouterLink to="/rings">Rings</RouterLink></li>
        </div>   

        <div class="itens__list">
          <h3>Outros</h3>
            <li><RouterLink to="/food">Comida</RouterLink></li>
            <li><RouterLink to="/farm">Farm</RouterLink></li>
            <li><RouterLink to="/especiais">Itens Especiais</RouterLink></li>
            <li><RouterLink to="/dinheiro">Moedas</RouterLink></li>
            <li><RouterLink to="/potions">Potions</RouterLink></li>          
        </div>   
      </section>
    </template>
  
  

  <style scoped>

.itens {
  background-color: #1c1c1c;
  color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}


.itens__info h1 {
  font-family: 'Shuriken Ninja', sans-serif;
  font-size: 2.5rem;
  color: #ff4500;
  text-align: center;
  text-shadow: 2px 2px 5px #000;
  margin-bottom: 20px;
}


.itens__list {
  background-color: #2e2e2e;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.itens__list h3 {
  font-family: 'Shuriken Ninja', sans-serif;
  color: #ff4500;
  font-size: 1.8rem;
  text-align: left;
  text-shadow: 2px 2px 5px #000;
}

li {
  list-style-type: none;
  margin: 10px 0;
}

li a {
  font-family: 'Shuriken Ninja', sans-serif;
  color: #ffa500;
  font-size: 1.2rem;
  text-decoration: none;
  transition: color 0.3s;
}

li a:hover {
  color: #ff4500;
}

.itens__list {
  background-image: url('/path-to-your-background-image.png'); /* Adicione um caminho válido para uma imagem de fundo temática */
  background-size: cover;
  background-position: center;
  border: 2px solid #ff4500;
}


  </style>