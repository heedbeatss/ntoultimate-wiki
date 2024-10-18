<template>
  <section class="quests"> 
    <div class="quests__info">
      <h1>Quests</h1>
    </div>

    <div class="quests__info__lista">
      <div class="tabs">
        <button @click="toggleSection('longa')">Quests Longas</button>
        <button @click="toggleSection('media')">Quests Médias</button>
        <button @click="toggleSection('rapida')">Quests Rápidas</button>
      </div>

      <div v-if="activeSection === 'longa'" class="quest-content">
        <ul>
          <li><RouterLink to="/700">Quest 700</RouterLink></li>
          <li><RouterLink to="/craft">Quest Craft</RouterLink></li>
          <li><RouterLink to="/newarmor">Quest New Armor</RouterLink></li>
          <li><RouterLink to="/newboots">Quest New Boots</RouterLink></li>
          <li><RouterLink to="/newkage">Quest New Kage</RouterLink></li>
        </ul> 
      </div>

      <div v-if="activeSection === 'media'" class="quest-content">
        <ul>
          <li><RouterLink to="/questakamanto">Quest Akamanto</RouterLink></li>
          <li><RouterLink to="/questdeidara">Quest Deidara</RouterLink></li>
          <li><RouterLink to="/four">Quest Four</RouterLink></li>
          <li><RouterLink to="/geleira">Quest Geleira</RouterLink></li>
          <li><RouterLink to="/questhidan">Quest Hidan</RouterLink></li>  
          <li><RouterLink to="/questitachi">Quest Itachi</RouterLink></li>
          <li><RouterLink to="/kinkaku">Quest Kinkaku</RouterLink></li>
          <li><RouterLink to="/questkisame">Quest Kisame</RouterLink></li>
          <li><RouterLink to="/questkurama">Quest Kurama Amulet</RouterLink></li>
          <li><RouterLink to="/matatabi">Quest Matatabi</RouterLink></li>
          <li><RouterLink to="/newsword">Quest New Sword</RouterLink></li>
          <li><RouterLink to="/questpain">Quest Pain</RouterLink></li>
          <li><RouterLink to="/questsasori">Quest Sasori</RouterLink></li>
          <li><RouterLink to="/selo">Quest Selo</RouterLink></li>
          <li><RouterLink to="/tartaro">Quest Tartaro</RouterLink></li> 
          <li><RouterLink to="/two">Quest Two</RouterLink></li>   
        </ul>
      </div>

      <div v-if="activeSection === 'rapida'" class="quest-content">
        <ul>
          <li>Baú Black Death</li>
          <p>Local da Quest: Ilhazinha<img class="quest__prints" src="@/assets/quests/blackdeath/QuestBlackDeath.png"></p>
          <li>Baú Gedou Dog</li>
          <p>Local da Quest: Fortress<img class="quest__prints" src="@/assets/quests/gedou/EntradaQuest.png"><img class="quest__prints" src="@/assets/quests/gedou/BauGedouFortress.png"></p>
          <li>Baú Giant Youth</li>
          <p>Local da Quest: Kirigakure<img class="quest__prints" src="@/assets/quests/baugiantyoth/bau.png"></p>
          <li>Baú Jirobou e Tayuya</li>
          <p>Local da Quest: Fortress <img class="quest__prints" src="@/assets/quests/baujirobou/EntradaQuest.png"><img class="quest__prints" src="@/assets/quests/baujirobou/bau.png"><img class="quest__prints" src="@/assets/quests/baujirobou/bau2.png"></p>
          <li>Baú Konoha</li>
          <p>Local da Quest: Konoha<img class="quest__prints" src="@/assets/quests/baukonoha/EntradaQuest.png"><img class="quest__prints" src="@/assets/quests/baukonoha/bau.png"></p>
          <li>Baú Venom Scorpion</li>
          <p>Local da Quest: Covil Orochimaru<img class="quest__prints" src="@/assets/quests/bauvenomscorpion/bau.png"></p>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeSection: 'none', 
    };
  },
  methods: {
    toggleSection(section) {
      if (this.activeSection === section) {
        this.activeSection = ''; 
      } else {
        this.activeSection = section; 
      }
    }
  }
};
</script>



<style scoped>
.quests {
  font-family: 'Ninja Naruto', sans-serif;
  background-color: #f3f3f3;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #d2b48c; 
}

h1 {
  font-size: 2.5rem;
  color: orange;
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 2px 2px 0px #000;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

button {
  background-color: #e0c097; 
  border: 2px solid #c29a67; 
  color: #000;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  text-shadow: 1px 1px 0px #fff; 
}

button:hover {
  background-color: #c29a67; 
  transform: translateY(-2px); 
}

button:active {
  background-color: #a67d4b; 
  transform: translateY(0); 
}

.quest__prints {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
  max-width: 200px;
}

.quest__prints img {
  max-width: 200px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}


.quest-content {
  background-color: #fff8e1; 
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #c29a67;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  margin: 10px 0;
  font-size: 1.1rem;
  color: #2a2a2a;
}

a {
  color: #e76f51;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}
</style>
