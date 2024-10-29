<template>
    <section class="quest">
      <div class="quest__info">
        <h2>Quest Tartaro</h2>
        <h3>Local da Quest: Ilhazinha</h3>
        <p>Requisitos: Vip Account e 10 jogadores para puxar cada Boss</p>
        <p>Boss: Cerbero, Denka, Supertokuru, Yochu e Zagara</p>
        <p>Premiação: 25 pontos de elo + bonus de atributo: Hp, Ninjutsu e Skill de Arma.</p>
    </div>
  
      <div class="quest__media">
        <h3>Galeria de Prints</h3>
        <div class="quest__prints">
          <img src="@/assets/quests/tartaro/SalaInicial.png" alt="Sala inicial da Quest">
          <img src="@/assets/quests/tartaro/Cerbero.png" alt="Cerbero, primeiro Boss">
          <img src="@/assets/quests/tartaro/Sala2.png" alt="Sala principal da Quest">
          <img src="@/assets/quests/tartaro/Boss.png" alt="Sala do Boss">
          <img src="@/assets/quests/tartaro/Bau.png" alt="Sala do Bau">
          <!-- Adicione mais imagens conforme necessário -->
        </div>
  
        <h3>Vídeo da Quest</h3>
        <div class="quest__video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Z_wt7U7HivQ?si=Cgiouy0cl9VVQRsv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .quest {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: black;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .quest__info {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .quest__info h2 {
    font-size: 2rem;
    color: orangered;
  }
  
  .quest__info p {
    font-size: 0.8rem;
    color: white;
  }
  
  .quest__media {
    width: 100%;
    max-width: 800px;
  }
  
  .quest__prints {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .quest__prints img {
    max-width: 800px;
    max-height: 800px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .quest__video {
    text-align: center;
  }
  
  .quest__video iframe {
    width: 100%;
    max-width: 560px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  </style>