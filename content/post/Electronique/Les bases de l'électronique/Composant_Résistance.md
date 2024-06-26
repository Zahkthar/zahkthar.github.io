---
author: "Zahkthar"
title: "La résistance"
date: 2022-10-05T09:45:37+02:00
description: "La résistance est un des composants de base de l'électronique, nous allons donc en faire un bref tour."

categories: [
    "Électronique"
]

tags: [
    "Composants"
]

series: ["Les bases de l'électronique"]

draft: false
---

**Un résumé des choses à savoir sur la résistance :**

La résistance est un des composants les plus courants des circuits électroniques. Nous en avons légèrement parlé dans "[Les lois fondamentales en régime continu]({{< ref "post/Electronique/Les bases de l'électronique/Cours_Les lois fondamentales en régime continu.md" >}})" mais dans cet article, je vais tenter de faire un résumé de tout ce qu'il y a à savoir pour pouvoir utiliser simplement ce composant.

Voici donc le sommaire de l'article :

1. [Les unités liées à la résistance](#les-unités-liées-à-la-résistance)
2. [La loi d'Ohm](#la-loi-dohm)
3. [L'effet Joule](#leffet-joule)
4. [Résistance équivalente en série](#résistance-équivalente-en-série)
5. [Résistance équivalente en dérivation](#résistance-équivalente-en-dérivation)

### Les unités liées à la résistance

Dans le composant électrique qu'est la résistance, il y a quelques grandeurs que l'on peut connaître selon son type ou son matériau.

#### La résistivité électrique d'un matériau

La résistivité d'un matériau (symbolisé par la lettre ρ -> rho) représente sa capacité à s'opposer à la circulation d'un courant électrique. Il s'agit plus simplement de la **résistance en Ohm d'un tronçon d'un mètre de longueur et d'un mètre carré de section**. Son unité est le "omhs-mètre" de symbole **Ω⋅m**. La résistivité d'un élément métallique croit linéairement en fonction de la température selon un coefficient propre au matériau en question. (C'est cet effet qui est derrière les résistances de platines utilisées pour les sondes de température type Pt-100)

#### La résistance électrique

La résistance électrique dans une résistance dépend directement de la résistivité du matériau utilisé, qu'on va venir diviser ou multiplier selon la longueur et la section de notre conducteur. Sur les résistances, la valeur de la résistance électrique est généralement donnée via un code couleur que nous verrons juste après, mais si l'on voulait calculer soi-même la résistance d'un conducteur, nous pourrions utiliser cette formule :

$$R = \rho * \frac{\text{L}}{\text{S}}$$

Où :

- ρ (rho) est la résistivité du matériau en **omhs-mètre** (Ω⋅m)
- L est la longueur en **mètres** (m)
- S est la section du conducteur en **mètre carrés** (m²)

#### La conductance électrique

Cette unité est plus rare que son homologue la résistance mais en fait elles sont très fortement liées. En effet, la conductance électrique est le strict inverse de la résistance !

$$G = \frac{1}{\text{R}}$$

Ou via la loi d'Ohm (qui est le point d'après) :

$$G = \frac{\text{I}}{\text{U}}$$

Son symbole est généralement G et son unité est le **Siemens** (S).

Elle correspond à la capacité d'un conducteur à conduire le courant, contrairement à la résistance électrique qui est la faculté d'un conducteur à résister au courant. Par extension, plus la conductance est grande (et donc plus la résistance est petite), et plus le courant sera élevé.

### La loi d'Ohm

Nous avions déjà introduit cette loi dans l'article précédent (cf. "[Les lois fondamentales en régime continu]({{< ref "post/Electronique/Les bases de l'électronique/Cours_Les lois fondamentales en régime continu.md" >}})") mais je vais quand même en refaire un rapide résumé.

**George Simon Ohm** en 1827 a trouvé empiriquement une relation directe entre l'intensité traversant un élément résistif (une résistance) et la tension à ses bornes. En effet, si l'on trace la courbe de caractéristique d'une résistance (le courant qui la traverse en fonction de la tension à ses bornes) nous voyons que le coefficient directeur de la droite est la résistance !

[![Courbe caractéristique d'une résistance](/res/images/Electronique/Composants/Resistance/CourbeCaracteristique.png#center "Courbe caractéristique d'une résistance")](/res/images/Electronique/Composants/Resistance/CourbeCaracteristique.png)

Dans cet exemple, nous avons une résistance de 2 Ohms, la tension en ordonnée et l'intensité en abscisse. Nous voyons donc que pour chaque volt que l'on monte, l'intensité monte de 2 ampères. Le coefficient directeur est bien 2, soit la valeur de notre résistance.

On en déduit donc la formule générale de la loi d'Ohm :

$$\text{U} = \text{R} * \text{I}$$

### L'effet Joule

En courant continu, l'effet Joule correspond à la perte d'énergie électrique en énergie thermique au passage d'une résistance.

Pour l'expliquer plus simplement, nous avons déjà la formule de la puissance dans un coin de notre tête :

$$\text{P} = \text{U} * \text{I}$$

Ainsi que la loi d'Ohm que nous venons de revoir :

$$\text{U} = \text{R} * \text{I}$$

Nous pouvons donc mélanger les deux formules et donc remplacer le U présent dans la formule de la puissance par R * I, ce qui nous donne :

$$\text{P} = \text{R} * \text{I} * \text{I}$$
$$\text{P} = \text{R} * \text{I}^{2}$$

Grâce à cette formule, nous pouvons maintenant calculer la puissance consommée par une résistance !

Mais l'effet Joule correspond à la quantité d'énergie dissipée dans la résistance et non la puissance. Mais nous savons que l'énergie se calcule via la formule suivante :

$$\text{W} = \text{P} * \text{t}$$

Et si on remet notre formule pour la puissance consommée par une résistance, nous obtenons la formule caractéristique de l'effet Joule :

$$\text{W} = \text{R} * \text{I}^{2} * \text{t}$$

Cette formule, assez logiquement, nous permet de calculer la quantité d'énergie dissipée par une résistance. On parle généralement de pertes thermique, étant donné que la chaleur n'est pas une énergie intéressante dans un circuit électrique (à part si l'intérêt est de produire de la chaleur, comme dans un four ou un radiateur par exemple).

### Résistance équivalente en série

Plusieurs résistances en série sont équivalentes à une seule résistance dont la valeur est la somme des résistances composantes.

Cette règle peut être démontrée simplement avec la loi d'Ohm mais gardons simplement l'idée générale : **La résistance électrique des résistances en séries s'additionnent.**

[![Résistance équivalente en série](/res/images/Electronique/Composants/Resistance/ResistancesEnSerie.png#center "Résistance équivalente en série")](/res/images/Electronique/Composants/Resistance/ResistancesEnSerie.png)

Dans cet exemple, deux résistances de 10kΩ placées en série sont équivalentes à une résistance de 20kΩ.

$$\text{Req} = \sum_{n = 1}^{k} \text{Rn}$$

Où n est la résistance actuelle et k la dernière résistance en série.

Ce qui est finalement un résultat assez logique dans l'idée, si le courant est freiné deux fois par une résistance de 10kΩ, c'est la même chose que s'il était freiné une seule fois par une résistance somme de 20kΩ.

### Résistance équivalente en dérivation

Si maintenant les résistances R1 et R2 sont montées en dérivation, quelle sera la résistance équivalente ?

[![Résistance équivalente en dérivation](/res/images/Electronique/Composants/Resistance/ResistancesEnDerivation.png#center "Résistance équivalente en dérivation")](/res/images/Electronique/Composants/Resistance/ResistancesEnDerivation.png)

Et bien c'était tout l'intérêt d'avoir présenté la [conductance électrique](#la-conductance-électrique) un peu plus haut. En série, les résistances s'additionnent, mais en dérivation, ce sont les conductances qui s'additionnent ! Ce qui est assez logique, plusieurs conducteurs résistifs mis en parallèle conduisent mieux le courant que s'ils étaient seuls. Par extension logique que l'on validera juste après par la formule, une infinité de résistance mises en parallèle équivaut à une résistance quasi nulle.

$$\text{Geq} = \sum_{n = 1}^{k} \text{Gn}$$

Où n est la résistance actuelle et k la dernière résistance en parallèle.

Nous savons que la conductance est l'inverse de la résistance, donc :

$$\text{Req} = \frac{1}{\sum_{n = 1}^{k} \text{Gn}} \Rightarrow \frac{1}{\sum_{n = 1}^{k} \frac{1}{\text{Rn}}}$$

Ou plus simplement dans l'exemple juste au dessus :

$$\text{Req} = \frac{1}{\frac{1}{\text{R1}} + \frac{1}{\text{R2}}} = 5\text{kΩ}$$

A noter que dans le cas particulier où il n'y aurait que deux résistances en parallèle, il existe une formule plus simple qui consiste à faire le produit sur la somme des résistances :

$$\text{Req} = \frac{\text{R1} * \text{R2}}{\text{R1} + \text{R2}}$$

Nous pouvons en déduire plusieurs choses :

1. La résistance équivalente de plusieurs résistances en dérivation sera toujours plus petite que la plus petite des résistances prises en compte dans le calcul, ce qui correspond à l'idée générale juste au dessus.
2. Si deux résistances égales sont mises en dérivation, la résistance équivalente sera égale à une des résistance divisée par 2.

&nbsp;
