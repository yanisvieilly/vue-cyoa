import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pages: {
      "1": {
        id: "1",
        text:
          "En tant que mercenaire, tu as été envoyée en mission par le roi d’une lointaine contrée pour trouver et ramener la légendaire pinte d’or. Ce n’est pas la porte à côté, il va falloir traverser quelques marais et autres caves obscures. Pensant à l’aventure qui t’attends, tu franchis les portes du château, puis descends vers le village. Déambulant dans les ruelles de celui-ci, tu passes devant une taverne, le Klon, et envisages d’y passer un peu de temps avant de réellement te mettre en route.",
        links: [
          { destination: "6", text: "Juste un verre." },
          { destination: "8", text: "Le temps presse, le verre attendra." }
        ]
      },
      "2": {
        id: "2",
        text:
          "« C’est ce que je voulais entendre ! », dit-il, le sourire aux lèvres. « Alors à toi de jouer ! ». Sur le verso d’une des cartes, un oiseau est représenté. Sur l’autre, une fleur.",
        links: [
          { destination: "5", text: "Choisir la carte avec l’oiseau." },
          { destination: "4", text: "Choisir la carte avec la fleur." }
        ]
      },
      "3": {
        id: "3",
        text:
          "Tu dégustes les 10 shots. Assez rapidement, ta tête commence à tourner. En fait, maintenant c’est toute la taverne qui tourne. Tu décides que « j’en tsé u atsé pour autjourdui », te lèves, marche vers la sortie, puis trébuches, tombes et t’évanouis. Au réveil, tu es dans la cour du château. Le roi, les bras croisés, te dit que « c’est du joli », et t’explique que les clients de la taverne t’ont ramenée ici. Il décide de faire appel à quelqu’un d’autre pour sa mission.",
        links: []
      },
      "4": {
        id: "4",
        text:
          "« Bien joué ! », s’exclame-t-il. Ton voisin, bon joueur, te remet la carte de la région qui, bien qu’assez abimée, est très détaillée et devrait te permettre de ne pas te perdre facilement. Et maintenant ?",
        links: [
          {
            destination: "3",
            text: "La soirée commence ! Un mètre de shots !"
          },
          {
            destination: "8",
            text:
              "Une affaire qui marche ! Il est temps de se mettre en route ! (Tu te diriges vers la sortie)"
          }
        ]
      },
      "5": {
        id: "5",
        text:
          "« Désolé, mais c’est raté. » Il hausse les épaules, reprend ses cartes et son dîner, mais garde bien entendu ta pièce d’or. Plusieurs choix s’offrent à toi maintenant.",
        links: [
          {
            destination: "3",
            text: "Et si j’oubliais ça avec un mètre de shots ?"
          },
          {
            destination: "8",
            text:
              "Assez perdu de temps à la taverne. En route ! (Tu te diriges vers la sortie)"
          }
        ]
      },
      "6": {
        id: "6",
        text:
          "Tu pousses la porte en bois et entres dans la taverne. A l’intérieur, le vacarme est assourdissant. La cheminée au fond de la salle rend l’endroit assez chaleureux, malgré le brouhaha et les pintes volant à travers la salle. Il est environ six heures du soir, et tout le monde est déjà bourré. Une question reste néanmoins en suspens, que vas-tu boire ?",
        links: [
          {
            destination: "3",
            text: "Un mètre de shots. Pour moi."
          },
          {
            destination: "7",
            text: "Un verre de vin."
          },
          {
            destination: "8",
            text:
              "Tout compte fait, c’était une mauvaise idée. Je vais reprendre la route. (Tu te diriges vers la sortie)"
          }
        ]
      },
      "7": {
        id: "7",
        text:
          "Le tavernier t’amène ton verre que tu paies avec une écu d’or. Le roi t’a fait don de quelques sous pour ton voyage. Ton voisin de comptoir est en train de dîner, son plat ressemblant plus ou moins à un steak avec du chou (l’établissement n’est pas réputé pour sa cuisine). Il a remarqué la pièce et, tout en sortant deux cartes d’une poche de son manteau, te propose un jeu. « Alors c’est très simple. » Il pose les deux cartes, face cachée sur le comptoir. « L’une de ces cartes est un roi, l’autre un valet. Pour gagner, tu dois trouver le roi. Si tu y parviens, je te donne cette carte de la région dont je n’ai plus besoin. Si tu me donnes cette pièce, je te laisse tenter ta chance. »",
        links: [
          {
            destination: "2",
            text: "Une carte pourrait grandement m’aider. Jouer au jeu."
          },
          {
            destination: "28",
            text: "Décliner."
          }
        ]
      },
      "8": {
        id: "8",
        text:
          "Tu quittes le village, puis arrives dans les plaines entourant celui-ci. Mis à part quelques fermes, il y a déjà beaucoup moins de monde ici. Il s’agit de trouver cette pinte d’or à présent. Tu suis la grande route.",
        links: [
          {
            destination: "12",
            text: "C'est parti !"
          }
        ]
      },
      "9": {
        id: "9",
        text:
          "Tu arrives enfin à la base de la plus haute montagne, puis entames son ascension. Le chemin est escarpé, avec plusieurs passages à flanc de montagne. La lune brille et le vent se lève. Il fait très froid et tu réalises qu’il va falloir rapidement trouver un abri pour la nuit. Par chance, tu aperçois l’entrée d’une grotte.",
        links: [
          {
            destination: "16",
            text: "Je vais m’y abriter."
          }
        ]
      },
      "10": {
        id: "10",
        text:
          "Tu prends la route en sens inverse, comptant revenir à la fourche de la grande route. Malheureusement, la fatigue de la marche de la veille se fait ressentir. Dans un moment d’inattention, tu trébuches et fais plusieurs roulades avant de te cogner contre un rocher en contrebas. Assommée sur le coup, tu te réveilles dans la cour du roi. Il t’explique qu’une patrouille t’a trouvée et ramenée au château. Il va faire appel à quelqu’un d’autre pour sa mission.",
        links: []
      },
      "11": {
        id: "11",
        text:
          "Derrière la porte, un groupe de personnes sont regroupés autour d’un feu. Ils portent tous une cape, et remarquent à peine ta présence. L’un d’entre eux finit par lever la tête et présente le groupe comme étant des chevaliers mardi. Tu lui demande de répéter. « Nous voulons préserver l’ordre à travers la galaxie. » te répond-il. Ne comprenant pas trop de quoi il parle, tu lui demandes s’ils ont déjà entendu parler d’une pinte d’or. Ils lèvent tous la tête d’un coup et prennent un air étonné. Puis, ils se mettent tous à murmurer très rapidement. Ils ont l’air de savoir de quoi tu parles. Le premier « chevalier » qui t’a adressé la parole finit par répondre : « Rends-toi à la mer fermée. » Avant que tu n’aies eu le temps de lui demander pourquoi il faut toujours que les gens répondent en énigmes dans les aventures, le groupe se met à prononcer une incantation. Le décor tourne autour de toi et s’assombrit. Lorsque il apparaît à nouveau, tu reconnais l’endroit. Il s’agit du croisement à la sortie du village.",
        links: [
          {
            destination: "12",
            text: "wtf"
          }
        ]
      },
      "12": {
        id: "12",
        text:
          "Te voilà à un croisement d’où partent deux chemins. Tu peux voir qu’à l’horizon, ils mènent respectivement vers deux endroits se distinguant du reste du paysage : une chaîne de montagnes, et un lac. Quelle route vas-tu emprunter ?",
        links: [
          {
            destination: "15",
            text: "La route vers les montagnes."
          },
          {
            destination: "20",
            text: "Le chemin vers le lac."
          }
        ]
      },
      "13": {
        id: "13",
        text:
          "Tu empruntes le passage. L’intérieur est assez humide mais plutôt bien éclairé grâce à la lumière des torches. Au fond se dresse une porte semblable à celle de la grotte.",
        links: [
          {
            destination: "11",
            text: "Cette fois, je vais voir ce qu’il y a derrière."
          }
        ]
      },
      "14": {
        id: "14",
        text:
          "Tu te réveilles à l’aube, après avoir passé une nuit relativement paisible au vu du froid et du vent. En te levant, tu t’aperçois que les torches sont toutes éteintes. De plus, la porte que tu avais aperçu la nuit précédente semble s’être volatilisée. Une simple paroi en pierre la remplace. As-tu rêvé ? En sortant de la grotte, tu réalises que le chemin vers le sommet de la montagne est complètement bloqué. Une avalanche a dû se produire dans la nuit. Tu vas devoir faire demi-tour… à moins que tu aies en ta possession une carte de la région ?",
        links: [
          {
            destination: "18",
            text: "J'ai une carte."
          },
          {
            destination: "10",
            text: "Je vais revenir sur mes pas."
          }
        ]
      },
      "15": {
        id: "15",
        text:
          "Tu marches depuis plusieurs heures déjà, et les montagnes semblent à peine se rapprocher. Tu te demandes si tu n’aurais pas dû prendre une autre route et envisages de rebrousser chemin.",
        links: [
          {
            destination: "12",
            text: "Revenir sur mes pas."
          },
          {
            destination: "9",
            text: "Continuer."
          }
        ]
      },
      "16": {
        id: "16",
        text:
          "L’intérieur de la grotte est étonnamment éclairé par plusieurs torches. Au fond, tu distingues ce qui ressemble une porte en pierre. Tu peux choisir de passer la nuit dans l’entrée de la grotte, plutôt bien abritée du vent. Tu peux également aller voir ce qui se cache derrière la mystérieuse porte.",
        links: [
          {
            destination: "14",
            text: "Passer la nuit à l'entrée."
          },
          {
            destination: "11",
            text: "Pousser la porte en pierre."
          }
        ]
      },
      "17": {
        id: "17",
        text:
          "Les étals s’étendent à perte de vue. Ici, ils ne vendent littéralement que du poisson. Tu te demandes comment chaque vendeur arrive à se distinguer des autres, mais au vu du nombre de clients à chaque stand, ça n’a pas l’air de poser trop de problème. Tu t’approches vers un des vendeurs et lui demandes s’il a déjà entendu parler d’une pinte d’or. Il te répond qu’il ne sait pas de quoi tu parles. « Par contre, j’ai bien mieux à vous proposer ! Un saumon d’or ! » Il sort de sous l’étal une statuette assez moche représentant un saumon de couleur dorée. « Il s’agit d’un trésor de collection ! Vous le voulez ? »",
        links: [
          {
            destination: "23",
            text: "Oui."
          },
          {
            destination: "22",
            text: "Non."
          }
        ]
      },
      "18": {
        id: "18",
        text:
          "Tu décides de sortir la carte que tu avais gagnée à la taverne. Tu réalises assez vite que celle-ci est magique, car elle semble indiquer ta position. En effet, un point de couleur bleue sur le papier a l’air de se déplacer en même temps que toi. Tu peux également voir que la grotte où tu as passé la nuit est indiquée et a même un nom : Airom. Prenant à peine le temps de faire attention à ce très mauvais anagramme de l’auteur, tu décides de suivre un chemin en pointillés qui débute à peu près là où tu te situes actuellement. En rangeant la carte et observant la paroi près de l’entrée de la grotte, tu distingues un renfoncement qui n’a vraisemblablement pas été fait naturellement. Posant à peine ta main à l’intérieur, la paroi recule et laisse place à un passage éclairé par des torches similaires à celles que tu avais remarquées dans la grotte. Il s’agit sans doute du chemin en pointillés indiqué sur la carte.",
        links: [
          {
            destination: "13",
            text: "Emprunter le passage."
          }
        ]
      },
      "19": {
        id: "19",
        text:
          "Vous échangez vos trésors. Le pêcheur est heureux, et tu es maintenant l’heureuse propriétaire d’un saumon d’or. Il se fait tard, et tu commences à être fatiguée.",
        links: [
          {
            destination: "24",
            text: "Tu te rends à l'auberge."
          }
        ]
      },
      "20": {
        id: "20",
        text:
          "Le chemin vers le lac est très agréable. Avec le soleil couchant et la brise agréable venant de l’étendue d’eau, cette mission deviendrait presque une promenade de santé. Tu arrives aux abords d’un village de pêcheurs situé sur les rives du lac. Il y a un marché sur les quais, ou chaque pêcheur tente de vendre son poisson plus ou moins frais. Tu aperçois également une grande hutte au centre du village. Il doit s’agir d’une auberge.",
        links: [
          {
            destination: "17",
            text: "Aller vers le marché."
          },
          {
            destination: "24",
            text: "Je suis un peu fatiguée. (Tu te rends à l’auberge)"
          }
        ]
      },
      "21": {
        id: "21",
        text:
          "« Un saumon d’or ! Mais c’est magnifique ! Je le veux ! » Elle s’empresse de t’échanger sa pinte avec ta statuette de poisson et semble ravie. Tu ranges la pinte dans ton sac, passe la nuit à l’auberge, puis reprend la route du château le lendemain.",
        links: [
          {
            destination: "26",
            text: "Et maintenant, la récompense !"
          }
        ]
      },
      "22": {
        id: "22",
        text:
          "Le marchand semble outré que tu ne veuilles pas de son œuvre d’art. Il hausse les épaules, puis décide de t’ignorer et de s’adresser au client suivant. Tu prends le chemin de l’auberge, persuadée que tu ne trouveras rien t’aidant dans ta quête dans ce marché.",
        links: [
          {
            destination: "24",
            text: "Direction l'auberge."
          }
        ]
      },
      "23": {
        id: "23",
        text:
          "Le marchand est très heureux que tu veuilles te procurer son œuvre d’art. « Il y a une condition ! Une œuvre de cette valeur ne s’achète pas avec des pièces ! As-tu une carte de la région en ta possession ? »",
        links: [
          {
            destination: "19",
            text: "Oui. Je saurai me débrouiller sans cette carte !"
          },
          {
            destination: "22",
            text: "Non. Tout compte fait, je ne veux pas de ce saumon d’or."
          }
        ]
      },
      "24": {
        id: "24",
        text:
          "Tu pousses la porte de l’auberge. La tenancière, ravie de voir une cliente, t’accueille avec un grand sourire. Alors que tu paies pour une nuit à l’auberge, tu regardes les objets disposés sur le comptoir. C’est alors que, n’en croyant pas tes yeux, tu aperçois ce qui ressemble à une pinte sur l’étagère derrière l’aubergiste ! Et dorée en plus ! Tu te demandes à quel point le roi est idiot pour ne pas avoir réussi à trouver un trésor à quelques kilomètres seulement de son château, mais bon il faut dire aussi qu’arrivé à ce stade de l’histoire l’auteur commençait à être sérieusement en manque d’imagination. Tu proposes à la tenancière de lui acheter sa pinte. « Ma pinte d’or ? Ah non ! Ça ferait vide sur l’étagère ! Qu’est-ce que j’y mettrais à la place ? »",
        links: [
          {
            destination: "21",
            text: "(Si j’ai un saumon d’or en ma possession) Ceci ?"
          },
          {
            destination: "25",
            text: "Je n’ai rien à vous proposer, désolé."
          }
        ]
      },
      "25": {
        id: "25",
        text:
          "« Alors dans ce cas, je vais garder ma pinte ! », répond l’aubergiste. Tu es si prête du but que tu n’as plus du tout envie d’aller te coucher. Tu décides d’aller voir au marché si tu pourrais y trouver quelque chose de valeur à échanger à la tenancière.",
        links: [
          {
            destination: "17",
            text: "Direction le marché !"
          }
        ]
      },
      "26": {
        id: "26",
        text:
          "Tu arrives dans la cour du château puis passe les portes de la grande salle où le roi, ayant eu vent de ton retour triomphal, t’attend avec impatience. Il récupère la pinte d’or et te remercie pour tes vaillants efforts. Il te remet la récompense, s’élevant à 100 écus d’or. Alors que tu t’apprêtes à repartir vers de nouvelles aventures, il s’exclame : « Attends ! J’allais oublier ! Un chevalier venant d’une lointaine contrée m’a rendu visite l’autre jour. Il avait une feuille d’érable aux couleurs bleue, blanche, et rouge sur son bouclier. Il m’a demandé de remettre ce message à celle qui réussirait à ramener la pinte d’or, sans trop m’expliquer pourquoi. Ça a l’air d’être écrit dans la langue d’une terre lointaine. » Le roi te donne le message.",
        links: [
          {
            destination: "27",
            text: "Tu y lis les caractères étranges."
          }
        ]
      },
      "27": {
        id: "27",
        text:
          "Χρόνια πολλά ! Fin. To be continued? *imaginer le thème de Retour vers le Futur ici car je n’ai pas les droits*",
        links: []
      },
      "28": {
        id: "28",
        text:
          "Ton voisin est un peu déçu, mais hausse les épaules et se remet à son dîner. Ton verre maintenant terminé, tu décides de te mettre en route. Tu dis au revoir au tavernier et marches d’un pas décidé vers la sortie.",
        links: [
          {
            destination: "8",
            text: "Vers l'aventure !"
          }
        ]
      }
    }
  },
  getters: {
    getPageById: state => id => state.pages[id]
  }
});
