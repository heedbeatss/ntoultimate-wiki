<template>
    <section class="quest">
      <div class="quest__info">
        <h2>Quest Kurama Amulet</h2>
        <h3>Local da Quest: Covil Orochimaru</h3>
        <p>Requisitos: Nenhum item é necessário para fazer a quest</p>
        <p>Boss: Lost Shinobi </p>
        <p>Premiação:  pontos de  elo + Kurama Amulet.</p>
    </div>
  
      <div class="quest__media">
        <h3>Galeria de Prints</h3>
        <div class="quest__prints">
          <img src="@/assets/quests/kuramaamulet/PrintKuramaAmulet2.png" alt="Print da Quest 1">
          <img src="@/assets/quests/kuramaamulet/PrintKuramaAmulet.png" alt="Print da Quest 2">
          <img src="@/assets/quests/kuramaamulet/BauKuramaAmulet.png" alt="Print do bau da Quest 3">
          <img src="@/assets/quests/kuramaamulet/KuramaAmulet.png" alt="Print da recompensa da Quest 3">
          <!-- Adicione mais imagens conforme necessário -->
        </div>
  
        <h3>Vídeo da Quest</h3>
        <div class="quest__video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/2lnL5K73HC8?si=Jz57kVwegCNAmBD0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
    max-width: 200px;
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