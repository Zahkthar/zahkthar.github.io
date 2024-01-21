---
author: "Zahkthar"
title: "Le NE555 : Une introduction aux oscillateurs"
date: 2024-01-19
description: "Découvrez le NE555, un des circuits integrés les plus populaires"

categories: [
    "Électronique"
]

tags: [
    "Composants",
    "Montages",
    "Oscillateurs"
]

series: [
    "Les bases de l'électronique"
]

draft: true
---

Le monde de l'électronique regorge de composants fascinants, et parmi eux, le NE555 se distingue comme un incontournable. Ce circuit intégré, souvent appelé simplement "555", a conquis le cœur de beaucoup de concepteurs grâce à sa polyvalence. Dans cet article, nous allons regarder en détail le NE555 et en voir quelques applications.


Voici donc le sommaire de l'article :
1. [Bref historique](#bref-historique)
2. [Fonctionnement du NE555](#fonctionnement-du-ne555)
3. [Mode bistsable](#mode-bistable)
4. [Mode monostable](#mode-monostable)
5. [Mode astable](#mode-astable)
6. [Conclusion](#conclusion)

### Bref historique

Le NE555 est un circuit intégré qui a été introduit sur le marché dans les années 1970 par la société Signetics. Sa popularité persiste aujourd'hui en raison de sa simplicité d'utilisation et de sa capacité à remplir de multiples fonctions. Ce composant est couramment utilisé pour des tâches de temporisation, de génération de signaux, et bien plus encore.

[![Un NE555](https://upload.wikimedia.org/wikipedia/commons/2/21/Signetics_NE555N.JPG#center "Un NE555")](https://upload.wikimedia.org/wikipedia/commons/2/21/Signetics_NE555N.JPG)

Ici on remarque que ce NE555 est dans un boîtier de type DIP-8. DIP pour "Dual In-line Package" car c'est un boîtier à deux rangées de pattes et 8 car il y a 8 pattes. Il existe également dans bien d'autres formats.

### Fonctionnement du NE555

[![Diagramme interne du NE555](https://upload.wikimedia.org/wikipedia/commons/2/2e/555_esquema.png#center "Diagramme interne du NE555")](https://upload.wikimedia.org/wikipedia/commons/2/2e/555_esquema.png)

Il y a ici deux types de composants que l'on n'a pas encore abordés :
- Les Amplificateur opérationnels (aussi appelés AOP), ce sont les deux triangles dans la partie gauche du schéma.
- La bascule RS, nommée en raison du nom de ses pins, R et S.
Nous expliquerons les deux un peu plus loin.

Les autres composants ont déjà été traités. Trois résistances sur la partie gauche du schéma, un transistor en haut et une porte NOT reliée à la sortie.

#### Les résistances

Entre la tension d'alimentation (Vcc) et la masse (GND), on retrouve trois résistances d'une valeur R (les trois sont identiques).
Si vous vous souvenez bien de l'article sur [les diviseurs]({{< ref "post/Electronique/Cours/Les bases de l'électronique/Cours_Lois des diviseurs.md" >}}), vous devriez vous souvenir que la tension aux bornes d'une résistance dans une série de résistances est obtenue en multipliant la tension d'alimentation par le pourcentage de la résistance sur la résistance totale. Si une résistance prend 45% de la résistance totale, la tension à ses bornes sera naturellement de 45%.

$$U_{Rx} = \text{U} * \frac{\text{Rx}}{\sum_{i = 1}^{n} \text{Ri}}$$

Ici, nous savons que U = Vcc, soit la tension d'alimentation, que Rx est égal à R dans la mesure ou les trois résistances sont identiques et que la somme des résistances en série ici est de 3R.
Nous pouvons donc réarranger la formule comme ceci :

$$U_{R} = \text{Vcc} * \frac{\text{R}}{3\text{R}}$$
$$U_{R} = \text{Vcc} * \frac{1}{3}$$
$$U_{R} = \frac{\text{Vcc}}{3}$$

Nous avons donc **1/3** de la tension à l'entrée de **COMP2** et **2/3** de la tension à l'entrée de **COMP1** ainsi que dans la sortie **Control Voltage**.

Si vous vous êtes dits : "Les trois résistances ne sont pas réellement en série car elles sont branchées aux comparateurs. Du courant est donc censé partir par là". Vous avez eu une bonne intuition, en temps normal, un pont diviseur de tension ne peut pas être chargé. Cela fausserait le calcul. Ici nous pouvons faire cela car la quantité de courant entrant dans un amplificateur opérationnel est négligable, nous pouvons considérer que c'est 0A.

#### Les comparateurs

Ici nous allons survoler une application spécifique de l'amplificateur opérationnel, le comparateur. C'est le montage le plus simple que l'on puisse faire avec un AOP, nous n'avons donc pas besoin de trop rentrer dans les détails techniques ici.

Un amplificateur opérationnel est alimenté avec une tension dite symétrique, c'est à dire en +5V au "+" et -5V au "-".

Le comparateur prend deux entrées et renvoie une tension. Il n'y a ici que deux cas possibles :
- Si V+ > V- alors Vout = Vcc
- Si V+ < V- alors Vout = -Vcc

La sortie des deux comparateurs étant un circuit logique, ici une bascule RS, Vcc et -Vcc seront assimilés à 1 et à 0.

D'ici on peut se rendre compte de plusieurs choses :
- Quand Threshold > 2/3 de Vcc, le COMP1 s'active et envoie un 1 dans la patte R de la bascule
- Quand Trigger < 1/3 de Vcc, le COMP2 s'active et envoie un 1 dans la patte S de la bascule

#### La bascule RS

Là vous allez vous demander "mais c'est quoi cette bascule RS à la fin ?" et vous aurez bien raison. Une bascule RS est en réalité une mémoire numérique. On peut y stocker un bit de donnée (oui c'est peu). Ce n'est certes pas assez pour stocker quoique ce soit de sensible, mais c'est assez pour stocker une valeur binaire (0 ou 1).

[![Bascule RS](https://upload.wikimedia.org/wikipedia/commons/5/5b/Flipflop_SR0.svg#center "Bascule RS")](https://upload.wikimedia.org/wikipedia/commons/5/5b/Flipflop_SR0.svg)

[![Bascule RS avec portes NOR](https://upload.wikimedia.org/wikipedia/commons/3/3c/Flipflop_SR1.svg#center "Bascule RS avec portes NOR")](https://upload.wikimedia.org/wikipedia/commons/3/3c/Flipflop_SR1.svg)

Une bascule RS nous offre deux moyens de changer sa valeur :
- L'entrée S, set, stocke un 1 dans la bascule
- L'entrée R, reset, stocke un 0 dans la bascule, R1 sur le schema ici est simplement une inversion de R. Si l'on envoie un 0 dans la broche reset, on stockera un 0 dans la bascule.

Elle nous donne aussi deux moyens de récupérer sa valeur :
- La broche $\text{Q}$, qui donne le contenu de la bascule
- La broche $\overline{\text{Q}}$, qui donne l'inverse du contenu de la bascule

On se sert en général de l'un ou de l'autre, ici on se sert de $\overline{\text{Q}}$ comme on peut le voir avec le cercle sur le [diagramme plus haut](#fonctionnement-du-ne555)

#### La broche discharge

La sortie **discharge** est une sortie dite à "collecteur ouvert". c'est à dire que le collecteur du transistor derrière la sortie logique a le collecteur "en l'air". Cette broche peut servir à décharger un condensateur quand le bit stocké dans la bascule est à 0.

#### La sortie

Le contenu de la bascule RS est envoyé en sortie. Ici le signal est inversé deux fois ($\overline{\text{Q}}$ puis porte NOT), c'est l'équivalent de la sortie $\text{Q}$

Avec ce que l'on a vu tout à l'heure, nous avons donc ceci :
- Quand Threshold > 2/3 de Vcc, la sortie du 555 est à 0
- Quand Trigger < 1/3 de Vcc, la sortie du 555 est à 1

#### Mode bistable

On peut en déduire basiquement trois modes de fonctionnement pour le NE555. Le mode bistable est le mode dans lequel l'état haut et l'état bas sont stables, d'où son nom.

[![Circuit mode bistable](/res/images/Electronique/Composants/NE555/bistable-circuit.png#center "Circuit mode bistable")](/res/images/Electronique/Composants/NE555/bistable-circuit.png)

Partons du principe que la valeur de départ est 0. Ce n'est pas très important de toutes façons mais Trigger est relié à 5V et Threshold est en l'air. Il n'y a donc pas de contrainte sur la valeur de sortie du 555. La valeur de sortie par défaut sera la valeur par défaut de la bascule RS, qui est indéterminée, pas de bol. On reverra ça plus en détail dans un prochain article sur les mémoires électronique.

Tant que l'on ne fait rien, la sortie reste à 0, nous avons un premier état stable. Lorsque nous appuyons sur le bouton de droite, relié à trigger, nous allons relier la broche Trigger à la masse. Or on l'avait vu juste au dessus, Si Trigger < 1/3 de Vcc (Vcc = 5V dans ce schéma), la sortie du 555 va a 1.

Maintenant on peut appuyer autant de fois que l'on veut sur ce bouton, l'état est stable et restera a 1.

Si en revanche on appuye sur le bouton relié à reset, on envoie un 0 dans la broche reset, qui est inversée (on voit le petit cercle) et donc envoie un 1 dans le R (reset) de la bascule. La sortie du 555 retombe donc à 0, dans le même état qu'au démarrage du circuit.

[![Trame mode bistable](/res/images/Electronique/Composants/NE555/bistable-oscillo.png#center "Trame mode bistable")](/res/images/Electronique/Composants/NE555/bistable-oscillo.png)

Les deux changement d'états sont dus aux appuis du bouton Trigger puis Reset, qui produisent bien l'effet escompté.

#### Mode monostable

Ensuite, après le circuit bistable, voici le circuit monostable, appelé ainsi car il n'a qu'un seul état stable, ici l'état 0 comme nous allons le voir.

Le bouton relié au Trigger est resté, mais maintenant nous avons une nouvelle branche qui relie le pin de décharge et le Threshold à un circuit RC. Mais que va t'il se passer donc ?

[![Circuit mode monostable](/res/images/Electronique/Composants/NE555/monostable-circuit.png#center "Circuit mode monostable")](/res/images/Electronique/Composants/NE555/monostable-circuit.png)

##### Etat initial

Il nous faut nous rappeler d'une information importante là, dans le [diagramme plus haut](#fonctionnement-du-ne555), nous voyons que le pin discharge est relié à la masse lorsque la sortie est à 0 (il faut un 1 pour que le transistor soit passant, et la sortie est inversée).

Maintenant que nous savons ça, nous pouvons réfléchir au circuit. Nous allons considérer l'état par défaut comme étant 0 (nous verrons pourquoi cette fois-ci, cet état est déterminé).

Le pin discharge est donc relié à la masse. Si le condensateur était chargé, il se déchargerait par cette broche, on peut donc dire que le condensateur est déchargé. Threshold est donc à 0V, inférieur à 2/3 de Vcc et Trigger est à 5V, donc supérieure à 1/3 de Vcc. Il n'y a donc aucune condition de changement de valeur remplie. Voilà pour l'état initial du circuit.

##### Appui sur le bouton

Maintenant nous allons appuyer brièvement sur le bouton relié à Trigger, qui va relier le pin à la masse. Trigger sera donc inférieur à 1/3 de Vcc comme nous l'avons vu au dessus pour le [mode bistable](#mode-bistable), ce qui va mettre la sortie à 1. La sortie étant à 1, le pin Discharge va se déconnecter de la masse, il sera donc "en l'air". On a donc un parfait circuit RC !

Dans un précédent article sur [le condensateur]({{< ref "post/Electronique/Composants/Composant_Condensateur" >}}), j'avais présenté le principe de **constante de temps** dans un circuit RC série. On voyais notament que une fois la constante de temps notée **τ** pouvait être obtenue par le produit $R * C$.

Ici, le condensateur va se charger jusqu'à 2/3 de Vcc, **66%**. Une fois la constante de temps dans un circuit RC permettait une charge de 63% (se référer à l'article sur le condensateur), il faudra donc attendre un petit peu plus qu'une fois la constante de temps du circuit RC. Le calcul ne sera pas démontré ici mais le temps que ce condensateur mettra pour atteindre 2/3 de Vcc est de :

$$\text{t} = 1.1 * R * C$$

Soit environ 0.011s = 11ms avec les valeurs d'exemple.

Une fois que la tension aux bornes du condensateur à atteint 2/3 de Vcc, Threshold > 2/3 de Vcc, donc la sortie du NE555 passe à 0. Le pin Discharge est donc de nouveau relié à la masse, ce qui permet au condensateur de s'y vider.

Le condensateur sera donc une nouvelle fois vide, nous sommes retournés à l'état stable de départ. Il n'y a bien qu'un état stable, qui est l'état 0. C'est en vertu de cela que l'on pouvait dire au début que la "valeur par défaut" du NE555 dans ce mode était 0.

[![Trame mode monostable](/res/images/Electronique/Composants/NE555/monostable-oscillo.png#center "Trame mode monostable")](/res/images/Electronique/Composants/NE555/monostable-oscillo.png)

On peut voir ici 4 appuis successifs sur le bouton Trigger. On remarque également que si le bouton est appuyé plus longtemps, le condensateur se chargera à 100% et le NE555 restera à l'état 1. Le temps calculé par la formule du dessus est donc le temps minimum d'une impulsion et n'est valable que si l'on relâche le bouton avant que le condensateur n'ait atteint 2/3 de Vcc.

#### Mode astable

### Conclusion