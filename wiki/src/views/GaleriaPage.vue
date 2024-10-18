<template>
    <section class="galerias"> 
        <div class="galerias__info">
          <h1>Galeria</h1>
        </div>
  
        <div class="galerias__info__lista">
            
              <div class="tabs">
                <a href="#galeriaauras">Galeria - Auras</a>
                <a href="#galeriatorneios">Galeria - Torneios</a>
                <li><li><RouterLink to="/videos">Galeria - Videos</RouterLink></li></li>
              </div>
          
              <div id="galeriaauras" class="galeria-content">
                <ul>
    
                 </ul> 
              </div>
          
              <div id="galeriatorneios" class="galeria-content">
                <ul>
         
                </ul>
              </div>
          
              <div id="rapida" class="galeria-content">
                <ul>
                  <li>Baú Black Death</li>
                  <li>Baú Venom Scorpion</li>
                  <li>Baú Gedou Dog</li>
                  <li>Baú Jirobou e Tayuya</li>
                  <li>Baú Giant Youth</li>
                  <li>Baú Konoha</li>
                </ul>
              </div>
        </div>
      </section>
  </template>
  
  <style scoped>
section.galerias {
  background-color: #1c1c1c; /* Fundo escuro */
  color: #f5f5f5; /* Texto claro */
  padding: 20px;
  border-radius: 10px;
}

h1 {
  color: #ffcc00; /* Amarelo vibrante */
  font-family: 'Ninja Naruto', sans-serif;
  text-shadow: 2px 2px 5px #000;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #dcdcdc;
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Centraliza os botões */
  gap: 10px; /* Espaçamento uniforme entre os botões */
  padding: 10px 0; /* Espaçamento vertical entre a seção de botões e o conteúdo acima/abaixo */
}

.tabs a {
  display: inline-block;
  padding: 12px 20px;
  margin: 0; /* Remove margens para evitar inconsistências */
  text-decoration: none;
  background-color: #292929; /* Fundo dos botões */
  color: #ffa500; /* Texto laranja */
  border-radius: 5px;
  font-family: 'Ninja Naruto', sans-serif;
  transition: background-color 0.3s, color 0.3s;
}

.tabs a:hover {
  background-color: #ffa500;
  color: #292929;
}

.galeria-content {
  display: none;
  padding: 20px;
  margin-top: 20px;
  background-color: #292929;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.galeria-content:target {
  display: block;
}

a {
  color: #ffcc00;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
