---
title: "Le condensateur"
description: "Le condensateur se retrouve dans quasiment tous les circuits, pourquoi ? Rappels et formules au programme !"

sidebar:
  order: 4

draft: false
---

Globalement, le condensateur est simplement une "petite batterie", il permet de stocker de l'énergie électrique et de la restituer.

C'est quand même un petit peu plus compliqué que ça malheuresement... Mais on peut déjà saisir l'intérêt de ce composant dans un circuit.

Voici quelles formes peut avoir un condensateur :

[![Image condensateurs](https://upload.wikimedia.org/wikipedia/commons/b/b9/Capacitors_%287189597135%29.jpg "Condensateurs électrochimiques")](https://upload.wikimedia.org/wikipedia/commons/b/b9/Capacitors_%287189597135%29.jpg)

Voici donc le programme pour aujourd'hui :

1. [Présentation rapide du composant](#présentation-rapide-du-composant)
2. [Capacité équivalente en dérivation](#capacité-équivalente-en-dérivation)
3. [Capacité équivalente en série](#capacité-équivalente-en-série)
4. [Exemples d'utilisations pratique](#exemples-dutilisations-pratique)

### Présentation rapide du composant

Basiquement, un condensateur est constitué de deux armatures conductrices (qu'on appelle généralement électrode) séparées par un isolant (ou diélectrique pour le nom technique). Le symbole du condensateur n'a donc pas été choisi par hasard et l'on reconnaît bien les deux électrodes séparées par un espace !

[![Symbole condensateur](https://upload.wikimedia.org/wikipedia/commons/c/c5/Symbole_condensateur.png "Condensateurs électrochimiques")](https://upload.wikimedia.org/wikipedia/commons/c/c5/Symbole_condensateur.png)

Lorsque le condensateur est branché sur une source d'alimentation continue (admettons une tension de 5V), les électrons vont aller du "+" vers le "-", comme on pourrait s'y attendre. Mais il n'y a pas de contact dans un condensateur, comme on peut le deviner à son symbole. Les deux bornes étaient avant équilibrées, maintenant toute les électrons vont vers le "-".

Un électron ayant une quantité d'énergie négative, la borne "-" va se charger en énergie négative alors que la borne "+" va "perdre de l'énergie négative", ce qui va rendre sa tension plus positive encore !

[![Un condensateur en circuit](/res/images/Electronique/Composants/Condensateur/CondensateurEnCircuit.png "Condensateur en circuit")](/res/images/Electronique/Composants/Condensateur/CondensateurEnCircuit.png)

Une fois que le condensateur sera chargé, une tension de 5V sera présente sur sa borne "+" et de 0V sur sa borne "-", soit la tension d'alimentation. A partir de ce moment, il n'y a plus de courant dans le circuit, le courant venant de la différence de tension.

Ici, il n'y a pas de résistance (R = 0, donc I est très élevé car I = U/R) donc le condensateur passe de 0V à la tension d'alimentation globalement instantanément ! Ce qui n'est pas forecément ce que l'on veut. On peut donc mettre une résistance dans le circuit pour limiter le courant et donc changer le temps de charge du condensateur.

[![Condensateur avec résistance](/res/images/Electronique/Composants/Condensateur/CondensateurResistanceCircuit.png "Condensateur et résistance en circuit")](/res/images/Electronique/Composants/Condensateur/CondensateurResistanceCircuit.png)

La tension aux bornes du condensateur n'évoluant pas de façon linéaire mais exponentielle, comme on peut le voir sur la courbe d'exemple suivante, la formule pour avoir le "pourcentage de charge en fonction du temps" ne sera pas aussi simple que la loi d'Ohm.

[![Graphique charge/décharge d'un condensateur](https://upload.wikimedia.org/wikipedia/commons/3/36/Charge_et_d%C3%A9charge_d%27un_condensateur.svg "Graphique charge/décharge d'un condensateur")](https://upload.wikimedia.org/wikipedia/commons/3/36/Charge_et_d%C3%A9charge_d%27un_condensateur.svg)

Le but ici n'étant pas de rentrer dans la complexité d'un cours de physique, on va se contenter de voir les formules ! Dans les circuits de ce type (qu'on appelle circuit RC pour Résistance-Condensateur, mais il en existe d'autres comme LC ou RLC faisant intervenir une bobine), il intervient ce qu'on appelle une **constante de temps**.

La constante de temps dans un circuit RC est donnée par la formule suivante :

$$τ = R*C$$

où :

- le τ est la lettre grecque tau et représente notre constante de temps en seconde.
- R est la valeur de la résistance
- C est la capacité du condensateur

La constante de temps τ est le temps nécéssaire en seconde pour le condensateur pour monter à 63% de sa charge (où 37% s'il se décharge) en fonction de la résistance.

On peut garder en mémoire ce tableau (ou cet article en favoris 👀) pour avoir une équivalence simple :

| Constante de temps | Charge | Décharge |
|--------------------|--------|----------|
| 0τ                 | 0%     | 100%     |
| 1τ                 | 63%    | 37%      |
| 2τ                 | 87%    | 13%      |
| 3τ                 | 95%    | 5%       |
| 5τ                 | 100%   | 0%       |

La dernière ligne avec 5τ est fausse par définition car la tension n'atteint jamais 100% (elle monte de plus en plus lentement mais n'atteint jamais la tension d'alimentation) mais c'est généralement un repère qui est pris : 5τ = complètement chargé ou complètement vide.

### Capacité équivalente en dérivation

Cette partie et la suivante seront plus simple que la précédente car elle ressemble beaucoup à celle sur [la résistance](/electronics/basics/component-resistance/).

En parrallèle, les capacité s'additionnent.

[![Condensateurs en dérivation](/res/images/Electronique/Composants/Condensateur/CondensateursDerivation.png "Condensateurs en dérivation")](/res/images/Electronique/Composants/Condensateur/CondensateursDerivation.png)

Ici les trois condensateurs sont modélisables par un seul condensateur de capacité :

$$\text{C} = \text{C1} + \text{C2} + \text{C3} = 300\mu\text{F}$$

On peut remarquer que les capacités s'additionnent en parralèle comme les résistances en série.

### Capacité équivalente en série

En série, les capacité se comportent comme les résistances en dérivation.

[![Condensateurs en série](/res/images/Electronique/Composants/Condensateur/CondensateursSerie.png "Condensateurs en série")](/res/images/Electronique/Composants/Condensateur/CondensateursSerie.png)

Ici les trois condensateurs sont modélisables par un seul condensateur de capacité :

$$\frac{1}{\text{C}} = \frac{1}{\text{C1}} + \frac{1}{\text{C2}} + \frac{1}{\text{C3}}$$
$$\text{C} = \frac{1}{\frac{1}{\text{C1}} + \frac{1}{\text{C2}} + \frac{1}{\text{C3}}} = 33.3\mu\text{F}$$

A noter que la formule quand il n'y a que 2 condensateurs fonctionne toujours :

$$\text{C} = \frac{\text{C1} * \text{C2}}{\text{C1} + \text{C2}}$$

### Exemples d'utilisations pratique

Il y a beaucoup d'applications réelle aux condensateurs, ce qui en fait un des composants les plus présents des circuits électroniques. On peut simplement l'utiliser pour ajouter du délai dans un circuit, mais on peut aussi utiliser sa capacité à absorber l'énergie pour faire du traitement de signal (lisser une alimentation 5V qui serait un peu bruitée). On peut également l'utiliser pour transformer une tension alternative en tension continue.

Le condensateur peut aussi tout simplement être là pour stocker de l'énergie (on parle plus de supercondensateur dans ce cas d'utilisation précis).

Un exemple pour la culture générale de cette utilisation serait le flash des anciens appareils photos qui était dans beaucoup de cas un condensateur avec une haute tension qui se chargait et qui relâchait tout d'un coup pour produire le flash bien connu.

&nbsp;
