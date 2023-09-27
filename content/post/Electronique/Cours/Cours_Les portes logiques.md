---
author: "Zahkthar"
title: "Les portes logiques"
date: 2023-09-25T10:30:00+02:00
description: ""

Catégories: [
    "Electronique"
]

Étiquettes: [
    "Cours",
    "Montages"
]

Séries: ["Les bases de l'électronique"]
draft: true
---

**Les portes logiques**

Les portes logiques marquent une étape cruciale dans la compréhension de l'électronique moderne, en éclairant la distinction fondamentale entre deux branches essentielles : l'électronique numérique et l'électronique analogique. L'électronique numérique s'attèle aux signaux discrets, échantillonnés et segmentés, tandis que l'électronique analogique se plonge dans le domaine des signaux continus, traitant des filtres, du bruit et des opérations sur les tensions. Pour saisir pleinement cette distinction, imaginez un fleuve fluide par opposition à un fleuve divisé en sections discrètes.

Le transistor, par sa capacité à servir d'interrupteur électriquement contrôlé, brille dans le monde de l'électronique numérique. Nous allons voir ici comment l'utiliser afin de créer le fondement de la logique numérique, les portes logiques.

Le programme d'aujourd'hui :
1. [Qu'est-ce qu'une porte logique](#quest-ce-quune-porte-logique)
2. [Les différentes portes](#les-différentes-portes)
3. [Conclusion](#conclusion)

### Qu'est-ce qu'une porte logique

Dans l'article précédent traitant des [transistors bipolaires]({{< ref "post/Electronique/Composants/Composant_TransistorBipolaire.md" >}}) nous leur avont avons découvert une propriété intéressante. Et c'est son régime de commutation (régime bloqué et saturé). En effet, lorsque l'intensité que l'on envoie dans la base est suffisament grande, le transistor se met à agir comme un conducteur. En revanche, quand on n'envoie rien dans la base, le transistor agit comme un isolant, aucun courant ne passe.

Cela nous conduit à l'essence même de l'informatique moderne : les bits. En considérant l'état du transistor bloqué comme un 0 et saturé comme un 1, nous montont d'une couche d'abstraction ! Nous passons de la gestions de signaux analogiques à des valeurs binaires, sur lesquelles reposent toute la logique numérique.

### Les différentes portes

#### Les portes principales

Les portes OUI et NON, aussi appelleés portes YES et NOT

Pour décrire une porte logique, ainsi qu'une combinaison de porte logique (nous verrons un exemple dans cet article), nous allons utiliser ce qu'on appelle une **table de vérité**. Derrière ce nom se cache un concept très simple, on met dans les x premières colonnes les x entrées de notre porte logique. On ajoute en suite une colonne pour le résultat de la porte.

Le nombre de lignes du tableau représente toutes les combinaisons possibles que l'on peut appliquer aux entrées.

Voyons d'abord la table de vérité de la porte **OUI** :

| Entrée | Sortie |
|--------|--------|
| 0      | 0      |
| 1      | 1      |

En effet, cette porte ne fait rien 🙂. Son implémentation électrique est simplement un fil.

Maintenant la porte **NON** :

| Entrée | Sortie |
|--------|--------|
| 0      | 1      |
| 1      | 0      |

La porte NON est tout simplement un inverseur, comme on peut le voir à sa table de vérité.

Son implémentation physique peut varier, un petit peu, voici celle que je vous propose :

[![La porte NON](/res/images/Electronique/Cours/LesPortesLogiques/NOTGate.png#center "La porte NON")](/res/images/Electronique/Cours/LesPortesLogiques/NOTGate.png)

On voit bien ici le fonctionnement. Quand il y a un 0V à la base du transistor, ledit transistor est bloqué. Le courant passe donc du générateur à la résistance R1, puis à la diode D1. Quand il y a 5V dans la base, il devient saturé. Le courant passe donc par la résistance R1 puis par le transistor pour aller à la masse.

AND / OR

NAND / NOR

Théorème de Morgan

#### Les portes secondaires

XOR / XNOR

### Conclusion

En conclusion, les portes logiques constituent un des fondements essentiels de l'électronique numérique. Leur capacité à traiter des signaux discrets en se basant sur les principes de commutation des transistors ouvre la voie à un vaste éventail d'applications, de l'informatique aux télécommunications en passant par l'électronique embarquée.

&nbsp;