---
title: "Introduction aux microcontrôleurs"
description: "Comment définir l'électronique moderne avec un seul composant ?"

sidebar:
  order: 11

draft: false
---

#### Le cerveau du circuit

Les microcontrôleurs sont l'une des raisons pour lesquelles l'électronique moderne est aussi pratique et puissante. Très rapidement, c'est un savant mélange entre **le transistor**, composant phare de la logique numérique, **les circuits intégrés** permettant la miniaturisation et une **ingénierie défiant l'entendement**. C'est bon ? La phrase d'accroche a fonctionné ? C'est parti pour cet article qui va d'abord explorer rapidement ce qu'est un microcontrôleur, puis on verra un petit projet que l'on pourra faire sans puis avec un microcontrôleur.

Voici donc le sommaire du jour :

- [Qu'est-ce qu'un microcontrôleur ?](#quest-ce-quun-microcontrôleur-)
- [Quel avantage à utiliser un microcontrôleur dans son circuit ?](#quel-avantage-à-utiliser-un-microcontrôleur-dans-son-circuit-)
  - [Contexte de départ](#contexte-de-départ)
  - [Sans microcontrôleur](#sans-microcontrôleur)
  - [Avec un microcontrôleur](#avec-un-microcontrôleur)
- [Un exemple, l'ESP32](#un-exemple-lesp32)
  - [Le projet](#le-projet)
  - [Le résultat](#le-résultat)
- [Conclusion](#conclusion)

### Qu'est-ce qu'un microcontrôleur ?

Dans un précédent article sur les [circuits intégrés](/electronics/basics/component-integrated-circuit/), nous avions brièvement vu ce qu'était un processeur et ce qu'il permettait, je vais quand même rapidement le rappeler ici.

Un processeur est un composant pouvant exécuter une liste d'instructions (que l'on appelle un programme) depuis une mémoire externe et communique avec l'extérieur via ses broches pour communiquer avec d'autres composants. Un microcontrôleur n'est ni plus ni moins que la somme de tout ceci :

- Un processeur (le CPU) pour exécuter les instructions
- De la mémoire (RAM, ROM, Flash) pour stocker les données et le programme
- Des entrées et des sorties permettant d’interagir avec d'autres composants

Il peut évidemment y avoir plus de choses dans un microcontrôleur, mais c'est le strict minimum pour pouvoir s'appeler comme ça.

Malgré des différences toutes relatives, leurs utilisations sont très différentes. Là où le microprocesseur est très souvent utilisé en informatique, posé sur une carte mère avec tous les auxiliaires nécessaires à son bon fonctionnement, le microcontrôleur est généralement utilisé seul.

Il est beaucoup moins puissant et donc moins cher que le processeur. Il a quand même de nombreux avantages. Il est beaucoup plus efficace énergétiquement, prend moins de place et coûte moins cher. Il sert souvent dès que l'on parle d'informatique embarquée, à savoir d'informatique autonome imposant de facto une limite spatiale et énergétique.

### Quel avantage à utiliser un microcontrôleur dans son circuit ?

#### Contexte de départ

Imaginez que vous vouliez faire un système de domotique simple dans votre maison. Disons que vous vouliez une température stable dans votre logement et que vous décidiez d'installer un chauffage et un thermomètre dans chaque pièce pour bien réguler tout ça efficacement. Essayez d'imaginer un circuit pour remplir ce besoin.

#### Sans microcontrôleur

Sans microcontrôleur, le projet est assez complexe. Pour le simplifier, on va dire qu'on fait une carte spécifique par couple chauffage-capteur. Dans ce cas, on retrouve une complexité modérée. Nous allons ici avoir besoin d'un amplificateur opérationnel. C'est un composant que l'on verra plus tard, mais qui peut faire tout un tas de traitements analogiques sur les signaux et les tensions. Nous allons l'utiliser pour comparer la tension de notre capteur avec une tension représentant notre température de consigne (la consigne peut être fixe ou être réglée avec un potentiomètre). Maintenant, en sortie du comparateur, nous avons un signal qui peut nous dire si oui ou non, la température est :

- En dessous de la consigne → Le comparateur sortira une tension négative
- Au-dessus de la consigne → Le comparateur sortira une tension positive

Il ne restera plus qu'à relier la sortie du comparateur à un relais normalement fermé (ici, le relais fait office de transistor, mais est électriquement plus adapté au passage de gros courants, ici un chauffage). Voilà donc le comportement prévu du relais :

- Le relais va s'ouvrir lorsque la température sera trop haute, débranchant ainsi le chauffage
- Le relais va se fermer lorsque la température sera trop basse, rebranchant ainsi le chauffage

C'est bien le comportement voulu de notre chauffage, nous pouvons insérer le relais directement dans le câble de notre chauffage (après avoir évidemment bien vérifié que les relais pouvaient se piloter avec la tension de nos comparateurs et pouvaient manipuler le 230V). Les fluctuations de températures vont bien alimenter ou désalimenter notre chauffage et ainsi stabiliser sa température.

Petite parenthèse à noter, ce n'est pas un principe de régulation très efficace :

- En théorie, si le chauffage et l'isolation sont quasiment parfaits, la température va dépasser la consigne → le chauffage va s'éteindre → la température va repasser en dessous → le chauffage va se rallumer → on recommence, et ce, très rapidement.
- En pratique, un chauffage a de l'inertie. S'arrêter à la consigne n'est pas une bonne idée, le chauffage va continuer de chauffer encore un peu et nous allons donc dépasser la consigne de possiblement beaucoup. Pareil dans l'autre sens, quand le chauffage aura arrêté de chauffer et que la température aura chuté en dessous de la consigne, elle aura eu le temps de chuter de potentiellement beaucoup avant que le chauffage compense la chute de température.

Nous n'entrerons pas dans les détails d'une meilleure solution de régulation ici, mais sachez qu'il s'agit ici presque d'une branche de l'électronique à part entière, la régulation.

Ici, on peut comprendre une chose. Ce système sans microcontrôleur est encore tout à fait viable pour un couple chauffage-capteur, mais le circuit devient vite infernal lorsque l'on va essayer de relier 10 ou 20 couples chauffage-capteur. D'autant que beaucoup d'applications ne sont pas aussi simples qu'une régulation de température autour d'une consigne.

#### Avec un microcontrôleur

Avec un microcontrôleur, le principe est tout de suite beaucoup plus simple. Peu importe les capteurs et les actionneurs (ici thermomètre et chauffage), il suffit de les relier au microcontrôleur.

Le microcontrôleur va :

- Récupérer la température du capteur
- La comparer en interne avec une valeur, ici la consigne
- Écrire une donnée binaire, 5V ou 0V par exemple, sur une de ses sorties.

Un relais devra toujours être utilisé pour faire la passerelle 5V → 230V.

On peut changer la consigne en réécrivant le programme ou encore mieux, si l'on a branché des boutons et un écran au microcontrôleur, la modifier via une interface homme-machine (IHM). On pourra également, à titre d'exemple, faire transiter les informations via une communication sans fil, si l'on ne peut ou ne veut pas faire de circuit câblé.

Les intérêts principaux sont ici :

- La simplicité, la complexité du circuit n'est plus exponentielle en fonction du nombre de capteurs actionneurs.
- La possibilité de changer la logique du programme. Pour changer la consigne de température, un simple potentiomètre suffisait pour le circuit purement analogique, mais s'il fallait changer la méthode de régulation ? Il aurait fallu reconstruire une nouvelle carte, sûrement beaucoup plus complexe.

On comprend mieux pourquoi les microcontrôleurs sont utilisés partout dans les circuits modernes. Une application, une calculatrice possède des dizaines de boutons, un écran, permet de faire des calculs, voire de faire tourner des programmes ! La complexité pour faire un tel circuit uniquement avec des transistors et des amplificateurs opérationnels serait démentielle, mais reste mesurée avec un microcontrôleur.

### Un exemple, l'ESP32

#### Le projet

L'exemple que je ferai ici sera celui avec le microcontrôleur, qui sera un ESP32, voici donc les deux documents principaux, je commenterais par la suite.

[![Circuit thermomètre + chauffage ESP32](/res/images/Electronique/Cours/BasesMicrocontroleurs/Circuit_ESP32.png "Circuit thermomètre + chauffage ESP32")](/res/images/Electronique/Cours/BasesMicrocontroleurs/Circuit_ESP32.png)

```cpp
#include <Arduino.h> // La librarie Arduino
#include <DHT.h>     // La librairie du thermomètre

#define DHTTYPE DHT22   // Type du capteur, ici DHT22
#define DHTPIN 4        // Broche du thermomètre

#define RELAY_PIN 5     // Broche du relais

// Initialisation du capteur
DHT dht(DHTPIN, DHTTYPE);

// Consigne de température, on pourra la modifier au besoin via une interface
float consigne = 22.0;

// La fonction qui s'exécutera au démarrage du circuit
void setup() {
    // Permet de communiquer avec un ordinateur 
    // Pour voir en direct le fonctionnement du microcontrôleur
    Serial.begin(115200);
    dht.begin();

    pinMode(RELAY_PIN, OUTPUT);
    digitalWrite(RELAY_PIN, LOW); // Chauffage éteint au départ

    Serial.println("Système démarré...");
}

// Cette fonction va s'éxécuter en boucle
void loop() {
    // Lire la température
    float temperature = dht.readTemperature();
    
    // Vérifier si la lecture est valide
    if (isnan(temperature)) {
        Serial.println("Erreur de lecture du capteur !");
        return;
    }

    Serial.print("Température mesurée : ");
    Serial.print(temperature);
    Serial.println(" °C");

    // Gestion du chauffage
    if (temperature < consigne) {
        digitalWrite(RELAY_PIN, HIGH);
        Serial.println("-> Chauffage ALLUMÉ");
    } else {
        digitalWrite(RELAY_PIN, LOW);
        Serial.println("-> Chauffage ÉTEINT");
    }

    // Attendre avant la prochaine mesure, ici 2s de délai
    // Cela permet d'éviter un potentiel "clignotement" autour de la consigne
    delay(2000);
}
```

Ici, nous avons deux choses très importantes pour notre mini-projet, le circuit avec le microcontrôleur et le code pour le programmer. Le code ici est écrit en C++, c'est le langage natif pour Arduino ainsi qu'ESP32 qui utilise la même librairie de code pour fonctionner ici.

Le schéma du circuit est très simple, en voici une description rapide :

- Nous avons le fil rouge, qui permet de distribuer l'alimentation en 5V de l'ESP32 au capteur et au relais
- Le fil noir est la masse, le 0V
- Le fil violet qui est relié au pin numéro 4 de l'ESP32 comme on peut le lire dans le code, sur lequel va transiter la donnée de la température
- Le fil bleu qui est le fil de donnée du relais, relié au pin 5 de l'ESP32 et qui permet d'envoyer un ordre d'ouverture ou de fermeture au relais.
- Le côté non câblé du relais serait relié à notre chauffage entre ses pins COM et NC (commun et normalement fermé), quand le relais reçoit un 1, il y a un lien électrique entre COM et NC, quand il reçoit 0 le lien se fait entre COM et NO (normalement ouvert).

Maintenant, sans entrer dans les détails (des articles traitant spécifiquement de programmation embarquée sont prévus), le code fonctionne de cette manière :

- Le contenu de la fonction setup() va s'exécuter en premier et une seule fois, on y fait l'initialisation. On ouvre un canal de communication série pour pouvoir lire des messages d'informations depuis un ordinateur qu'on pourrait brancher à l'ESP32. On donne également un ordre d'ouverture du relais, car le chauffage est éteint au démarrage du programme (choix arbitraire).
- Ensuite, le contenu de la fonction loop() va se répéter aussi vite que le microcontrôleur le peut et fait une tâche très simple ici. On lit la température et on regarde si elle est valide. On compare à la consigne et on ouvre ou ferme le relais en conséquence (si on le referme deux fois d'affilée, ça n'a pas d'importance, le relais ne bougera pas, étant déjà fermé). Il y a aussi quelques informations qui sont écrites sur la liaison série si jamais un ordinateur était branché.
- À chaque fin de cycle, on attend 2 secondes via un appel à la fonction delay() qui prend entre parenthèses un nombre de millisecondes à attendre. Cela permet d'éviter un potentiel phénomène de clignotement au niveau du relais si la température oscillait au niveau du capteur autour de la consigne. L'imprécision du capteur pourrait suffire à créer ce genre de soucis sinon.

#### Le résultat

Sur le simulateur que j'ai utilisé (ici [Wokwi](https://wokwi.com/)), on peut voir en direct une simulation de notre circuit en fonctionnement. On peut également voir les informations diffusées sur la liaison série, ce qui est bien pratique dans notre cas.

En jouant un peu avec la température du capteur, on peut voir ceci :

[![Messages liaison série.png](/res/images/Electronique/Cours/BasesMicrocontroleurs/Messages_LiaisonSerie.png "Messages liaison série")](/res/images/Electronique/Cours/BasesMicrocontroleurs/Messages_LiaisonSerie.png)

- Dans la première mesure, il faisait 24°C, donc le chauffage était éteint, ce qui est bien l'attendu.
- À la mesure suivante, on imagine un énorme coup de froid (ou un rapide coup de souris dans le simulateur en l’occurrence), 5.3°C, le chauffage s'allume donc.
- Dans les mesures suivantes, la température remonte (très vite quand on sait qu'il n'y a que 2 secondes entre les mesures, mais c'est pour l'exemple) et dépasse la consigne. Le chauffage se reteint donc. Ce qui est bien conforme à l'attendu. On se retrouve donc dans le même cas de figure qu'à la première mesure.

### Conclusion

On a pu l'entrevoir, les microcontrôleurs sont vraiment très adaptés pour implémenter ce qui nécessite de la logique et du traitement de données. Dans notre petit exemple, il n'y avait qu'un seul couple capteur/actionneur, mais là, on se rend compte que pour en ajouter un deuxième, il suffirait de préciser une nouvelle ligne tout en haut pour les fils du relais et du capteur et de copier-coller la condition d'ouverture/fermeture du relais. La seule limite de ce fonctionnement très simpliste serait si l'on utilise réellement beaucoup de couple capteur/actionneur, auquel cas, on manquerait de broches sur l'ESP32. Des solutions existent pour régler ce problème tout en simplifiant encore plus le circuit, comme les liaisons séries (SPI/I2C/CAN ...) qui sont une solution plutôt logicielle ou même des multiplexeurs et démultiplexeurs pour une solution plus matérielle.

&nbsp;
