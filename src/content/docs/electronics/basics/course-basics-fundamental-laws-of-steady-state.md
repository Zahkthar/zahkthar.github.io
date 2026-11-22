---
title: "Les lois fondamentales en régime continu"
description: "Les principales lois à connaître pour pouvoir aller plus loin dans l'électronique."

sidebar:
  order: 1

pubDate: 2022-09-15
draft: false
---

Avant de pouvoir réellement faire de l'électronique, c'est-à-dire lire des schémas, programmer des microcontrôleurs, découvrir des nouveaux composants ou même designer/construire ses propres circuits, il faut avoir un minimum de bases ! C'est donc ce que je propose de faire dans cette série d'articles : récapituler les bases vitales à la poursuite de l'électronique. Je recommande donc de lire cette série en premier si vous débutez l'électronique, ce qui vous amènera ensuite à pouvoir vous spécialiser un peu plus vers le sujet qui vous intéresse.

Nous allons donc commencer par quelques définitions peut-être évidentes pour certains, mais qui permettront de mieux comprendre la suite.

## La charge électrique, l'intensité et la loi des nœuds

### La charge électrique et l'intensité

N'importe quel matériau conducteur dans un circuit fermé contenant un électromoteur (ça peut être un générateur, une batterie, une pile, un panneau solaire, etc...) est traversé par un courant électrique. Le courant électrique est en réalité un flux d'électrons qui traverse le circuit depuis une borne du générateur dans l'objectif d'y retourner par son autre borne.

La charge électrique d'un électron étant négative ($-1{,}6 \times 10^{-19}\,\text{C}$ -> coulombs), le sens conventionnel du courant (du + vers le -) est opposé à celui des électrons (du - vers le +).

Si on note "$dq$" la charge électrique en coulombs transportée par les électrons traversant un conducteur pendant une durée "$dt$", l'intensité que l'on notera $I$ (ou $i$) sera donnée par la formule :

$$I = \frac{dq}{dt}$$

Où :

- $I$ est en **ampères** (A)
- $dq$ est en **coulombs** (C)
- $dt$ est en **secondes** (s)

### La loi des nœuds

La loi des nœuds peut se résumer simplement par une seule phrase :

"La somme des intensités des courants **qui entrent par un nœud** est égale à la somme des intensités des courants **qui sortent du même nœud.**"

<img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Kirchhoff%27s_Current_Law.svg" alt="Image représentant la loi des nœuds" class="invertable" />

Ici, la somme des courants $i_1$ et $i_2$ qui rentrent dans le nœud est égale à la somme des courants $i_3$ et $i_4$ qui sortent du nœud.

## La tension et la loi des mailles

### La tension électrique

La tension n'est pas une grandeur qu'il est facile de définir sans entrer dans la théorie. Mais par analogie, on arrive à s'approcher du sens de cette grandeur. On peut faire l'analogie entre la tension électrique à un point donné du circuit et l'énergie potentielle en mécanique.

$$E_p = m \cdot g \cdot h$$

L'énergie potentielle dépend directement de la hauteur à laquelle se trouve l'objet de la formule. La hauteur maximale serait dans cet exemple la tension d'alimentation (par exemple 5 volts) qui diminue à chaque fois que l'on traverse un composant résistif ou un récepteur.

<img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Pont_diviseur_tension.svg" alt="Pont diviseur de tension" class="invertable" />

Dans ce circuit, que l'on appelle un "pont diviseur de tension" (nous y reviendrons plus tard), si on imagine que $U$ est la tension d'alimentation du circuit, $5\,\text{V}$ par exemple, avant la première résistance la tension sera égale à $U$, soit $5\,\text{V}$. Après la première résistance, la tension aura chuté. Après la deuxième résistance, la tension sera égale à $0\,\text{V}$.

L'intérêt de ce circuit étant de convertir une tension en une tension plus basse en jouant sur le rapport entre les deux résistances.

### La différence de potentiel

La différence de potentiel (aussi appelée ddp à l'écrit) est une grandeur que l'on confond souvent avec la tension. La différence de potentiel, comme son nom l'indique, est une différence entre deux points d'un circuit. Elle demande donc un point de repère.

Si l'on reprend le circuit ci-dessus et que l'on admet que pour les $5\,\text{V}$ totaux, il y a une répartition égale de la tension entre les deux résistances, nous nous retrouvons donc avec $U_1$ qui vaut $2{,}5\,\text{V}$ et $U_2$ qui vaut aussi $2{,}5\,\text{V}$. Mais d'où viennent ces $2{,}5\,\text{V}$ ? En réalité $U_1$ est une **différence** de potentiel et représente donc le résultat de la soustraction entre la tension $U$ et la tension après le passage dans la résistance. Nous avons donc bien $5\,\text{V} - 2{,}5\,\text{V} = 2{,}5\,\text{V}$. $U_2$ suit exactement le même raisonnement. Nous n'avons plus que $2{,}5\,\text{V}$ après le passage du courant dans $R_1$. La différence entre $2{,}5\,\text{V}$ et $0\,\text{V}$ est donc de $2{,}5\,\text{V} - 0\,\text{V} = 2{,}5\,\text{V}$.

On admet donc que lorsque l'on parle généralement de tension, on parle de la valeur de la tension à un point du circuit alors que si l'on parle de la tension **aux bornes** ou **autour** d'un composant, nous parlons bien de la différence entre le point avant et après ledit composant, de la tension présente à ses bornes en somme (si la tension est représentée par une flèche comme ci-dessus avec $U$, $U_1$ et $U_2$, on peut aussi appeler la ddp par son nom sur le schéma).

### La loi des mailles

La loi des mailles est la deuxième des [lois de Kirchhoff](https://fr.wikipedia.org/wiki/Lois_de_Kirchhoff) dont la première était la [loi des nœuds](#la-loi-des-nœuds).

La loi des mailles nous dit que lorsque l'on traverse une maille (c'est-à-dire une portion de circuit fermé) en partant d'un point N pour revenir au même point N, la somme des différences de potentiel rencontrées est égale à **zéro**.

<img src="https://upload.wikimedia.org/wikipedia/commons/4/40/Kirchhoff_voltage_law.svg" alt="Loi des mailles" class="invertable" />

Dans cette image, nous pouvons voir une maille d'un circuit plus grand. Selon cette loi, la somme des tensions présentes dans la maille présentée sur cette image est égale à zéro. Ici :

$$v_1 + v_2 + v_3 + v_4 = 0$$

Si nous reprenons un exemple avec une tension d'alimentation de $5\,\text{V}$ et que nous admettons que $R_1 = R_2 = R_3$, c'est-à-dire que la tension aux bornes de chaque résistance est égale, nous aurons donc :

$$v_1 = v_2 = v_3 = v_4 / 3$$

Soit $1{,}66 \cdots \,\text{V}$ par résistance. Mais là vous vous demandez sûrement : "Mais $5 \,\text{V} + 1{,}66 \,\text{V} + 1{,}66 \,\text{V} + 1{,}66 \,\text{V}$ ça fait $10$ pas $0$" et oui, vu comme ça, le résultat est bien de $10 \,\text{V}$. Mais il y a un souci, une résistance **s'oppose** au passage du courant, donc ici la tension **chute** de $1{,}66 \,\text{V}$ entre l'entrée et la sortie de la résistance. Si vous regardez une nouvelle fois [le schéma du pont diviseur](#la-tension-électrique), vous remarquerez que les flèches représentant les tensions $U_1$ et $U_2$ sont dans le sens opposé à la flèche représentant la tension d'alimentation $U$. C'est justement en raison du fait que la résistance s'oppose au passage du courant. Si nous reprenons donc notre calcul où nous en étions mais cette fois-ci en inversant les tensions aux bornes des résistances, nous obtenons :

$$5 - 1{,}66 - 1{,}66 - 1{,}66 \approx 0\,\text{V}$$

Ce qui correspond bien à ce que nous attendions.

**Note 1** : Pour calculer une différence de potentiel il faut simplement faire la soustraction entre la tension avant le composant et la tension après (ce qui permet d'avoir le delta). Sur le dernier schéma, $v_1$ peut aussi être nommée "$U_{ab}$" soit "La différence de tension entre le point **a** et le point **b**". Nous pouvons donc la calculer en faisant $U_{ab} = U_a - U_b$ (À noter qu'une tension négative est une tension positive dans l'autre sens -> $-U_{ab} = U_{ba}$ il suffit d'inverser le sens de la flèche).

**Note 2** : Quand on a le nom de la différence de potentiel, $U_{ab}$ par exemple, la flèche part de la 2ème lettre et pointe vers la première.

**Note 3** : La loi des mailles peut être vérifiée dans les deux sens de rotation. Choisissez celui qui vous convient le mieux. Pensez simplement à mettre toutes les tensions dans le bon sens.

## La résistance et la loi d'Ohm

### La résistance électrique

Je l'ai beaucoup utilisée en exemple au-dessus dans cet article et il est venu le temps de clarifier la définition de **la résistance électrique**.

La résistance électrique est la propriété d'un conducteur à s'opposer au passage du courant. Dit plus simplement, plus la résistance d'un conducteur sera grande, et plus l'intensité du courant sera faible pour une tension donnée. À l'inverse, si la résistance du conducteur est plus faible, l'intensité sera plus forte.

### La loi d'Ohm

La loi d'Ohm est la loi empirique nommée en référence à **Georg Simon Ohm**, qui l'a publiée en 1827 et qui relie l'intensité du courant électrique traversant un conducteur à la tension à ses bornes. Elle énonce que :

$$U = R \cdot I$$

Où :

- $U$ est la tension en **volts** (V)
- $R$ est la résistance en **ohms** (Ω)
- $I$ est l'intensité en **ampères** (A)

On appelle un conducteur **ohmique** un composant qui respecte la loi d'Ohm (nous verrons dans d'autres articles que ce n'est pas tout le temps le cas). La résistance est un exemple de conducteur ohmique.

La principale caractéristique d'une résistance étant d'opposer une plus ou moins grande résistance (mesurée en ohms donc) à la circulation du courant électrique, on l'appelle par convention de langage une résistance. En anglais, son nom est "resistor", qui serait traduisible en "résisteur" en français qui correspondrait plus à l'idée d'un "composant qui résiste" mais l'appellation "résistance" est complètement majoritaire.

### Implications de la loi d'Ohm

- La loi d'Ohm permet de retrouver la troisième donnée lorsque l'on n'en a que deux. $I = \frac{U}{R}$ permet de trouver l'intensité, $R = \frac{U}{I}$ permet de trouver la résistance et $U = R \cdot I$ permet de trouver la tension.
- On peut considérer la valeur de la résistance comme étant un coefficient de proportionnalité entre la valeur de la tension et l'intensité. Si l'on trace la caractéristique d'une résistance (c'est-à-dire la courbe de la tension en fonction de l'intensité) nous obtiendrons une droite passant par l'origine et dont la pente sera la valeur de la résistance.

## La notion de puissance et d'énergie

### La puissance

La puissance électrique consommée par un dipôle se calcule avec la formule suivante :

$$P = U \cdot I$$

Où :

- $P$ est la puissance en **watts** (W)
- $U$ est la tension en **volts** (V)
- $I$ est l'intensité en **ampères** (A)

La puissance correspond au débit d'énergie électrique reçue par le conducteur (**attention !** Ce n'est pas le débit de charge électrique/le flux électrique passant dans le conducteur, à savoir [l'intensité](#la-charge-électrique-lintensité-et-la-loi-des-nœuds), il s'agit bien ici d'un débit **d'énergie**). D'où cette formule également valide :

$$P = W / t$$

Où :

- $P$ est la puissance en **watts** (W)
- $W$ est la quantité d'énergie en **joules** (J)
- $t$ est le temps en **secondes** (s)

### L'énergie

La quantité d'énergie électrique consommée par un conducteur pendant un temps donné est donnée par la formule suivante :

$$W = P \cdot t$$

Avec les mêmes unités que la formule ci-dessus.

**Note 1** : En utilisant la loi d'Ohm, nous pouvons trouver de nouvelles formules pour calculer l'énergie. Par exemple : $W = U \cdot I \cdot t$, ou encore $W = R \cdot I^{2} \cdot t$. À vous de jouer avec les formules selon les informations dont vous disposez !

**Note 2** : Avec la formule $W = P \cdot t$, on déduit qu'un joule correspond à une puissance d'un watt pendant une durée d'une seconde, soit $1\,\text{W}\cdot\text{s}$.

**Note 3** : $1\,\text{kWh} = 1000\,\text{Wh} = 1000 \cdot (3600 \,\text{J}) = 3{,}6 \cdot 10^6 \,\text{J} = 3{,}6\,\text{MJ}$

**Note 4** : $1 \,\text{ch (cheval-vapeur)} = 736\,\text{W}$
