<template>
    <section class="quest">
      <div class="quest__info">
        <h2>Quest New Sword </h2>
        <h3>Local da Quest: Ilhota</h3>
        <p>Requisitos: Isqueiro</p>
        <p>Boss: Soudamatasuta, Akebino Jinin/Kuriarare Kushimaru/Munashi Jinpachi/Suikazan Fuguki/Zabuza Momochi</p>
        <p>Premiação: 50 pontos de elo + uma das espadas dos espadachins da névoa: New Zabuza, New Shibuki, New Samehada, Kabutowari, Kyba e Nuibari</p>
        <p>Essa Quest pode ser feita uma vez a cada 24 horas, conseguindo um item de cada da premiação por vez, uma vez por season.</p>
    </div>
  
      <div class="quest__media">
        <h3>Galeria de Prints</h3>
        <div class="quest__prints">
          <img src="@/assets/quests/newsword/SoudamasutaNewSword.png" alt="Soudamasauta">
          <img src="@/assets/quests/newsword/NewSword.png" alt="Sala principal">
          <img src="@/assets/quests/newsword/EntradaQuest.png" alt="Entrada da quest">
          
          <!-- Adicione mais imagens conforme necessário -->
        </div>
  
        <h3>Vídeo da Quest</h3>
        <div class="quest__video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/lnQy9OgzFXc?si=XYJK7JinRt4Qp4Gu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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