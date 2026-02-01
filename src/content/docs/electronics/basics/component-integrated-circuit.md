---
title: "Les circuits intégrés"
description: "Le premier saut dans l'électronique moderne, la miniaturisation !"

sidebar:
  order: 9

draft: false
---

Ça ne viendrait plus à l'idée de personne aujourd'hui de concevoir un circuit uniquement avec les composants de base. Nous allons voir aujourd'hui une révolution dans le monde de l'électronique, le moyen de miniaturiser plusieurs composants en une seule puce, un seul **circuit intégré** !

Au programme :

1. [Introduction aux circuits intégrés](#introduction-aux-circuits-intégrés)
2. [Quelques exemples](#quelques-exemples)
3. [Le futur des circuits intégrés](#le-futur-des-circuits-intégrés)
4. [Conclusion](#conclusion)

### Introduction aux circuits intégrés

Les circuits intégrés (CI) ont révolutionné le domaine de l'électronique en permettant la miniaturisation et l'intégration de plusieurs composants sur une seule puce. Cette approche offre des avantages considérables en matière de gain d'espace, de réduction des coûts de production, et d'amélioration de la fiabilité ainsi que des performances globales des systèmes électroniques.

[![Trois CI dans un boîtier DIP](https://upload.wikimedia.org/wikipedia/commons/8/80/Three_IC_circuit_chips.JPG "Trois CI dans un boîtier DIP")](https://upload.wikimedia.org/wikipedia/commons/8/80/Three_IC_circuit_chips.JPG)

Les circuits intégrés peuvent être classés en deux catégories principales : les circuits analogiques et les circuits numériques. Les circuits analogiques traitent des signaux continus, tandis que les circuits numériques manipulent des signaux discrets. Cette dualité permet de répondre à une variété d'applications, de l'électronique de puissance aux dispositifs de traitement de l'information.

### Quelques exemples

#### Régulateur de tension

Un exemple classique de circuit intégré est le LM7805, un régulateur de tension largement utilisé dans les applications électroniques. Il assure une tension de sortie stable de 5 volts, ce qui est très intéressant pour alimenter un circuit.

##### Exemple de circuit avec un LM7805

[![Ciruit type LM7805](/res/images/Electronique/Composants/CircuitIntegre/LM7805.png "Ciruit type LM7805")](/res/images/Electronique/Composants/CircuitIntegre/LM7805.png)

Le circuit vient du [datasheet](https://www.sparkfun.com/datasheets/Components/LM7805.pdf) d'un fabricant de LM7805, qui montre une certaine facilité d'utilisation. Il faut cependant en entrée une tension un peu plus élevée qu'en sortie, de l'ordre d'environ 2V. Si l'entrée est en dessous de 7V (dans le cas d'un régulateur 5V), la sortie ne sera pas stable.

Ce petit composant peut débiter jusqu'à 1.5A sans broncher, ce qui le rend idéal pour alimenter beaucoup de circuits !

##### Petite parenthèse sur les noms de CI

Dans beaucoup de cas, le nom des CI peut être bien cryptique et sans trop d'explications, mais ici il y a une certaine logique !

- Le LM vient de "linear monolithic" -> CI analogique (linéaire) en un seul composant (monolithique)
- Dans cette catégorie, "78" signifie "régulateur de tension fixe positive" (oui ça fait beaucoup), un autre cas que l'on peut retrouver est le "79", qui est une tension fixe négative.
- Le nombre qui vient après, ici "05" est la tension de sortie, donc 5V.

Avec toutes ces informations, on peut deviner ce que fait un CI ayant pour nom "LM7812", "LM7824" ou "LM7905". Je vous laisse trouver, vous allez y arriver !

#### Les portes logiques

Si vous n'avez pas déjà lu [l'article qui leur est dédié](/electronics/basics/course-logic-gates/), allez le lire, ça ne donnera que plus de contexte à pourquoi les circuits intégrés sont pratiques ! Dans celui-ci, nous avions vu comment créer des portes logiques de toutes pièces, avec seulement des transistors et des résistances. C'est possible de faire ça à la marge dans un circuit, mais dès l'instant où l'on a besoin de plusieurs portes logiques, voire de centaines, ça devient vite infernal...

##### La porte AND

Pour créer une porte AND à la main, il nous aurait fallu 2 transistors et au moins une résistance. Pour 4 portes AND, 8 transistors et 4 résistances. Sans parler de coût de production, le schéma aurait été instantanément plus complexe. Pour cet usage, nous aurions pu utiliser un **7408**, soit un circuit possédant 4 portes AND à double entrée !

[![Digramme circuit 7408](/res/images/Electronique/Composants/CircuitIntegre/7408CircuitDiagram.png "Digramme circuit 7408")](/res/images/Electronique/Composants/CircuitIntegre/7408CircuitDiagram.png)

[![Digramme logique 7408](/res/images/Electronique/Composants/CircuitIntegre/7408LogicDiagram.png "Digramme logique 7408")](/res/images/Electronique/Composants/CircuitIntegre/7408LogicDiagram.png)

Les deux schémas viennent du [datasheet juste ici](https://www.ti.com/lit/ds/symlink/sn54ls08-sp.pdf) et nous montre assez simplement pourquoi ces composants sont utilisés presque partout ! Il s'alimente en 5V par le pin VCC, et le pin GND doit être relié à la masse. Une fois cela fait, nous pouvons nous servir des portes logiques, les brancher en cascade ou bien les utiliser séparément, comme vous voulez !

Ce CI fait parti d'une famille bien connue de circuit intégrés. La famille des 74XY !

##### Encore une parenthèse sur les noms

Encore un temps d'explication pour décortiquer les noms de circuits logiques !

Les noms des circuits de cette famille sont divisés en 3 parties :

- Le 74 vient de Texas Instrument. Les composants dits TTL (nous y reviendrons dans quelques lignes) chez TI sont séparés en 3 gammes de températures
  - 54 supportant des températures comprises entre -55°C et 125°C (militaire)
  - 64 supportant des températures comprises entre -40°C et 85°C (industriel)
  - 74 supportant des températures comprises entre 0°C et 70°C (commercial) -> Ce que nous avons ici
- Un indicatif de la technologie employée
  - Rien : TTL standard (Transistor–transistor logic) -> Utilisation de transistors bipolaires saturés. La première technologie, vitesse de commutation faible et haute consommation électrique.
  - L -> Réduit la consommation électrique en augmentant la valeur des résistances, mais au prix de la vitesse de commutation.
  - S -> Met une diode Schottky entre la base et le collecteur pour augmenter la vitesse de commutation, toujours une grosse consommation électrique.
  - LS -> Un mélange entre L et S, on réduit la vitesse et la consommation électrique tout en augmentant la vitesse avec la diode Schottky. On a donc une version améliorée du TTL standard !
    - Et quelques autres dont on ne parlera pas ici.
- Enfin, nous avons la fonction du circuit, voici quelques exemples :
  - 00 -> Quatre portes NAND à 2 entrées chacune
  - 04 -> Six portes NOT
  - 08 -> Quatre portes AND à 2 entrées chacune (cf. l'image juste au-dessus)
  - 30 -> Une porte NAND à huit entrées
  - 4075 -> Trois portes OU à trois entrées chacune (et pourquoi pas ?)

Ça nous fait un sacré pavé, mais au moins ça vous permettra de comprendre pourquoi le datasheet du 7408 parle également de 74S08, de 74LS08 et de ses équivalents en 54 (Le SN devant est un préfixe spécifique à Texas Instruments, il ne fait pas partie du nom).

Comme vous l'auriez peut-être remarqué, la technologie TTL pure tend à disparaître avec le temps, les transistors saturés consommant plus que nécessaire. Des alternatives existent comme CMOS, nous serons amenés à en reparler ne vous inquiétez pas.

#### Le cerveau électronique : Le CPU

Ah le CPU ! Que faire aujourd'hui sans un CPU, il est partout, même quand on n'a pas réellement besoin de lui tant le fait de l'utiliser est pratique. Il aura bien sûr des articles sur ce blog, et même sûrement une série entière tant on ne peut voir le monde de l'électronique qu'à travers lui !

Le **CPU**, ou Central Processing Unit, est un exemple emblématique de l'évolution des circuits intégrés. Les processeurs modernes intègrent des milliards de transistors sur une seule puce, permettant des calculs complexes à une vitesse vertigineuse.

De tous les CPU qui existent, du légendaire Zilog Z80 (ZX Spectrum pour les plus vieux, la Game Boy pour les moins vieux ou encore les calculatrices Texas Instruments pour les plus jeunes), jusqu'aux AMD Ryzen conçus pour le jeu vidéo, il existe pléthore de CPU de toutes les puissances et de toutes les utilités.

##### Mais qu'est-ce qu'un CPU au juste ?

Nous reparlerons d'architecture processeur ici, mais pour garder la chose simple, nous pouvons dire qu'un CPU est une boîte noire exécutant des instructions et interagissant via ses pins d'entrées/sorties. Nous pouvons quand même dépoussiérer un peu quelques une de ses parties :

- La mémoire (stockant le programme et ses valeurs intermédiaires) est souvent externe (une **RAM** si volatile, **ROM** si persistante) mais elle peut aussi être interne dans le cas d'un microcontrôleur. Dans certains cas, lorsque l'accès à la mémoire est complexe, on peut utiliser un composant appelé **MMU** (Memory Management Unit) permettant de servir d'intermédiaire avec le CPU, lui permettant de déléguer la complexité d'accès.
- La partie en charge des calculs est appelée l'**ALU** (Arithmetic Logic Unit). Si les calculs peuvent être faits sur des nombres à virgules, il y aura également la présence d'un **FPU** (Floating-Point Unit). Ils prennent deux valeurs en entrées et produisent un résultat.
- L'unité de contrôle permet de décoder les instructions et de faire communiquer les bons modules ensemble. Par exemple, si l'instruction est une addition entière, alors il enverra les données à l'ALU et fera stocker le résultat à l'emplacement mémoire demandé.
- L'horloge est là pour donner le pas, c'est le composant dont on parle quand on parle de la fréquence d'un processeur (3GHz par exemple). Il doit générer un signal régulier que devront suivre toutes les parties du CPU.
- Les registres servent de mémoire interne au CPU, ils sont souvent très petits et en faible nombre, ce qui ne leur permet pas de stocker des gros volumes de données. En revanche, ils permettent de garder en mémoire des informations très importantes pour le bon fonctionnement des programmes qu'ils exécutent, nous les reverrons bien assez tôt !

##### Mais à quoi sert un CPU ?

Avant l'invention du processeur (et encore aujourd'hui sur les circuits n'en utilisant pas), le cerveau du circuit doit être fait sur mesure, ce qui n'aide pas à sa réutilisation sur un futur circuit... Un processeur est une réponse parfaite à ce besoin car c'est littéralement le circuit intégré universel ! Il permet de répondre à un besoin, puis d'être reprogrammé pour répondre à un autre besoin. Ainsi, le circuit imprimé d'un radio-réveil pourra se transformer en micro-ondes sans trop changer le circuit mais seulement le programme ! Un bon exemple de cela serait les cartes Arduino qui peuvent servir à beaucoup d'applications.

### Le futur des circuits intégrés

Nous n'avons pourtant à l'heure actuelle pas tout découvert des circuits intégrés, il y a beaucoup de champs de recherches disponibles pour ces petits composants :

- Plus de miniaturisation, nous avons encore un peu de marge pour réduire la taille des transistors et ainsi en mettre toujours plus dans un même espace
- Utiliser la 3ème dimension. Même si la miniaturisation en 2D est encore pensable, il va être difficile de tenir la loi de Moore tant la finesse de gravure est faible (environ 10nm), il est cependant imaginable d'empiler des puces de silicium verticalement, permettant de se jeter une nouvelle fois dans une course à la miniaturisation !
- Une meilleure utilisation de l'énergie, l'amélioration des IC est aujourd'hui surtout concentrée sur la performance brute, avec un intérêt tout relatif pour l'économie d'énergie. Un PC gaming peut consommer autant qu'un chauffage de salon, simplement pour faire tourner des jeux vidéo en haute résolution.
- Sans oublier les technologies quantiques, même si on semble encore avoir le temps de voir venir avant d'en voir dans le commerce pour le grand public.

### Conclusion

Les circuits intégrés, sont au cœur de presque tous les circuits électroniques modernes. Ils offrent des solutions compactes tout en restant efficaces pour répondre au besoin croissant de miniaturisation et de complexité. Cette évolution a permis la création de dispositifs électroniques de plus en plus sophistiqués, simplifiant la conception tout en réduisant la complexité des montages électroniques. Dans les prochains articles, nous explorerons plus en détail certaines applications spécifiques des circuits intégrés, mettant en lumière leur utilisation pratique. À bientôt !

&nbsp;
