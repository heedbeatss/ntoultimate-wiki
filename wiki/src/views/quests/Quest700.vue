<template>
    <section class="quest">
      <div class="quest__info">
        <h2>Quest 700 </h2>
        <h3>Local da Quest: Konoha</h3>
        <p>Requisitos: 25 Gold Bar + 50 Ervas Medicinais + 100 areia sulphurs + 25 olhos de gigante + 5 craneo gedou skeleton</p>
        <p>A Quest começa com o NPC Jiraya em Konoha e ao entregar o que é necessário para inciar a quest, você vai ser teleportado
            para uma sala com 4 teleports, para os caminhos de fogo, de gelo, de terra e também o boss. Após concluir os portais de
            cada elemento você pode prosseguir para o boss
        </p>
        <p>Boss: Kakashi Senpai
          <br> O Boss Kakashi possui 3 ataques em área que dão IK em qualquer player que esteja nos SQM's do ataque. </p>
        <p>Premiação: Permissão de upar level 700 </p>
    </div>
  
      <div class="quest__media">
        <h3>Galeria de Prints</h3>
        <div class="quest__prints">
          <img src="@/assets/quests/700/EntradaQuest.png" alt="Entrada da Quest 700">
          <!-- Adicione mais imagens conforme necessário -->
        </div>
  
        <h3>Vídeo da Quest</h3>
        <div class="quest__video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fTBhlKjhlfw?si=59NNguDmQxN3jjZH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
    gap: 20px;
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