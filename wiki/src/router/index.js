import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contato',
      name: 'contato',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContatoPage.vue')
    },
    {
      path: '/quests',
      name: 'quests',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/QuestsPage.vue')
    },
    {
      path: '/tutorias',
      name: 'tutorias',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TutoriasPage.vue')
    },
    {
      path: '/galeria',
      name: 'galeria',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/GaleriaPage.vue')
    },
    {
      path: '/videos',
      name: 'videos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VideosPage.vue')
    },
    {
      path: '/geleira',
      name: 'quest geleira',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/quests/QuestGeleira.vue')
    },
    {
      path: '/700',
      name: '700',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/quests/Quest700.vue')
    },
    {
      path: '/craft',
      name: 'quest craft',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/quests/QuestCraft.vue')
    },
    {
      path: '/newarmor',
      name: 'quest new armor',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/quests/QuestNewArmor.vue')
    },
    {
      path: '/newsword',
      name: 'quest new sword',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/quests/QuestNewSword.vue')
    },
    {
      path: '/newboots',
      name: 'quest new boots',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/quests/QuestNewBoots.vue')
    },
    {
      path: '/newkage',
      name: 'quest new kage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/quests/QuestNewKage.vue')
    },
    {
      path: '/selo',
      name: 'quest selo',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/quests/QuestSelo.vue')
    },
    {
      path: '/kinkaku',
      name: 'quest kinkaku',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/quests/QuestKinkaku.vue')
    },
    {
      path: '/matatabi',
      name: 'quest matatabi',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/quests/QuestMatatabi.vue')
    },
    {
      path: '/four',
      name: 'quest four',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/quests/QuestFour.vue')
    },
    {
      path: '/four',
      name: 'quest four',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/quests/QuestFour.vue')
    },
    {
      path: '/two',
      name: 'quest two',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/quests/QuestTwo.vue')
    },
    {
      path: '/questitachi',
      name: 'quest itachi',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/quests/QuestItachi.vue')
    },
    {
      path: '/questkisame',
      name: 'quest kisame',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/quests/QuestKisame.vue')
    },
    {
      path: '/questdeidara',
      name: 'quest deidara',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/quests/QuestDeidara.vue')
    },{
      path: '/questsasori',
      name: 'quest sasori',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/quests/QuestSasori.vue')
    },
    {
      path: '/questhidan',
      name: 'quest hidan',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/quests/QuestHidan.vue')
    },
    {
      path: '/questakamanto',
      name: 'quest akamanto',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/quests/QuestAkamanto.vue')
    },
    {
      path: '/tartaro',
      name: 'quest tartaro',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/quests/QuestTartaro.vue')
    },
    {
      path: '/questkurama',
      name: 'quest kurama',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/quests/QuestKurama.vue')
    },
    {
      path: '/questpain',
      name: 'quest pain',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/quests/QuestPain.vue')
    },
      {
        path: '/itens',
        name: 'itens',
        component: () => import('../views/ItensPage.vue')
      },
      {
        path: '/swords',
        name: 'swords',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/itens/SwordsItens.vue')
      },
      {
        path: '/distance',
        name: 'distance',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/itens/DistanceItens.vue')
      },
      {
        path: '/gloves',
        name: 'gloves',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/itens/GloveItens.vue')
      },
      {
        path: '/outras',
        name: 'outras',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/itens/OutrasArmas.vue')
      },
      {
        path: '/hats',
        name: 'hats',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/itens/HatsItens.vue')
      },
      {
        path: '/armor',
        name: 'armor',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/itens/ArmorItens.vue')
      },
      {
        path: '/legs',
        name: 'legs',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/itens/LegsItens.vue')
      },
      {
        path: '/boots',
        name: 'boots',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/itens/BootsItens.vue')
      },
      {
        path: '/shields',
        name: 'shields',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/itens/ShieldsItens.vue')
      },
      {
        path: '/backpacks',
        name: 'backpacks',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/itens/BackpacksItens.vue')
      },
      {
        path: '/amulets',
        name: 'amulets',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/itens/AmuletsItens.vue')
      },
      {
        path: '/rings',
        name: 'rings',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/itens/RingsItens.vue')
      },
      {
        path: '/acessories',
        name: 'acessories',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/itens/AcessoriesItens.vue')
      },
      {
        path: '/sets',
        name: 'sets',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/itens/SetsItens.vue')
      },
      {
        path: '/farm',
        name: 'farm',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/itens/FarmItens.vue')
      },
      {
        path: '/dinheiro',
        name: 'dinheiro',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/itens/DinheiroItens.vue')
      },
      {
        path: '/food',
        name: 'food',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/itens/FoodItens.vue')
      },
      {
        path: '/potions',
        name: 'potions',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/itens/PotionsItens.vue')
      },
      {
        path: '/especiais',
        name: 'especiais',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/itens/ItensEspeciais.vue')
      },
    {
      path: '/personagens',
      name: 'personagens',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PersonagensPage.vue')
    },
    {
      path: '/orochimaru',
      name: 'orochimaru',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/OrochimaruChar.vue')
    },
    {
      path: '/jiraya',
      name: 'jiraya',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/JirayaChar.vue')
    },
    {
      path: '/tsunade',
      name: 'tsunade',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/TsunadeChar.vue')
    },
    {
      path: '/naruto',
      name: 'naruto',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/NarutoChar.vue')
    },
    {
      path: '/sasuke',
      name: 'sasuke',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/SasukeChar.vue')
    },
    {
      path: '/rocklee',
      name: 'rocklee',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/RockLeeChar.vue')
    },
    {
      path: '/sakura',
      name: 'sakura',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/SakuraChar.vue')
    },
    {
      path: '/gaara',
      name: 'gaara',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/GaaraChar.vue')
    },
    {
      path: '/neji',
      name: 'neji',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/NejiChar.vue')
    }
    ,
    {
      path: '/kiba',
      name: 'kiba',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/KibaChar.vue')
    },
    {
      path: '/shikamaru',
      name: 'shikamaru',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/ShikamaruChar.vue')
    },
    {
      path: '/hinata',
      name: 'hinata',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/HinataChar.vue')
    },  
    {
      path: '/tenten',
      name: 'tenten',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/TentenChar.vue')
    }
    ,
    {
      path: '/itachi',
      name: 'itachi',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/ItachiChar.vue')
    },
    {
      path: '/killerbee',
      name: 'killerbee',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/KillerBeeChar.vue')
    },
    {
      path: '/juugo',
      name: 'juugo',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/JuugoChar.vue')
    },
    {
      path: '/madara',
      name: 'madara',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/MadaraChar.vue')
    },
    {
      path: '/hashirama',
      name: 'hashirama',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/HashiramaChar.vue')
    },    {
      path: '/konohamaru',
      name: 'konohamaru',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/KonohamaruChar.vue')
    },
    {
      path: '/shino',
      name: 'shino',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/ShinoChar.vue')
    },    {
      path: '/kakuzu',
      name: 'kakuzu',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/KakuzuChar.vue')
    },
    {
      path: '/hiruzen',
      name: 'hiruzen',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/HiruzenChar.vue')
    },    {
      path: '/danzou',
      name: 'danzou',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/DanzouChar.vue')
    },
    {
      path: '/haku',
      name: 'haku',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/HakuChar.vue')
    },    {
      path: '/dodai',
      name: 'dodai',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/DodaiChar.vue')
    },
    {
      path: '/pain',
      name: 'pain',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/PainChar.vue')
    },    {
      path: '/yamato',
      name: 'yamato',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/YamatoChar.vue')
    },
    {
      path: '/konan',
      name: 'konan',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/KonanChar.vue')
    },    {
      path: '/muu',
      name: 'muu',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/MuuChar.vue')
    },
    {
      path: '/suigetsu',
      name: 'suigetsu',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/SuigetsuChar.vue')
    },    {
      path: '/ino',
      name: 'ino',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/InoChar.vue')
    },
    {
      path: '/tenten',
      name: 'tenten',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/TentenChar.vue')
    },    {
      path: '/hidan',
      name: 'hidan',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/HidanChar.vue')
    },
    {
      path: '/kankuro',
      name: 'kankuro',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/KankuroChar.vue')
    },    {
      path: '/chouji',
      name: 'chouji',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/ChoujiChar.vue')
    },
    {
      path: '/kakashi',
      name: 'kakashi',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/KakashiChar.vue')
    },    {
      path: '/kabuto',
      name: 'kabuto',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/KabutoChar.vue')
    },
    {
      path: '/shisui',
      name: 'Shisui',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/ShisuiChar.vue')
    },    {
      path: '/zetsu',
      name: 'zetsu',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/ZetsuChar.vue')
    },
    {
      path: '/hanzou',
      name: 'hanzou',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/HanzouChar.vue')
    },    
    {
      path: '/zabuza',
      name: 'zabuza',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/ZabuzaChar.vue')
    },
    {
      path: '/darui',
      name: 'darui',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/DaruiChar.vue')
    },    
    {
      path: '/kimimaro',
      name: 'kimimaro',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/KimimaroChar.vue')
    },
    {
      path: '/guren',
      name: 'guren',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/GurenChar.vue')
    },    
    {
      path: '/sasori',
      name: 'sasori',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/SasoriChar.vue')
    },
    {
      path: '/asuma',
      name: 'asuma',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/AsumaChar.vue')
    },    
    {
      path: '/temari',
      name: 'temari',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/TemariChar.vue')
    },
    {
      path: '/maitogai',
      name: 'maitogai',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/MaitoGaiChar.vue')
    },    
    {
      path: '/tobirama',
      name: 'tobirama',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/TobiramaChar.vue')
    },
    {
      path: '/kurenai',
      name: 'kurenai',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/KurenaiChar.vue')
    },    
    {
      path: '/minato',
      name: 'minato',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/MinatoChar.vue')
    },
    {
      path: '/meiterumi',
      name: 'meiterumi',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/MeiTerumiChar.vue')
    },    
    {
      path: '/kisame',
      name: 'kisame',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/KisameChar.vue')
    },
    {
      path: '/deidara',
      name: 'deidara',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/DeidaraChar.vue')
    },    
    {
      path: '/raikage',
      name: 'raikage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/RaikageChar.vue')
    },
    {
      path: '/sai',
      name: 'sai',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/SaiChar.vue')
    },    
    {
      path: '/utakata',
      name: 'utakata',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/UtakataChar.vue')
    },
    {
      path: '/kushina',
      name: 'kushina',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/KushinaChar.vue')
    },    
    {
      path: '/obito',
      name: 'obito',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/characters/ObitoChar.vue')
    },
    
  ]
})

export default router
