---
author: "Zahkthar"
title: "Lois des diviseurs"
date: 2023-04-22T15:00:00+02:00 # Changer
description: "Comment diviser une tension ou un courant ?"

Catégories: [
    "Electronique"
]

Étiquettes: [
    "Cours",
    "Lois",
    "Montages"
]

Séries: ["Les bases de l'électronique"]
draft: true
---

**Comment diviser une tension ? Un courant ?**

Vous voulez diviser une tension ou un courant par un facteur arbitraire et utiliser les [lois de Kirchhoff]({{< ref "post/Electronique/Cours/Cours_Les lois fondamentales en régime continu.md" >}}) vont font mal au crâne ? Que ce soit dans un contexte de création ou d'analyse de circuit, les diviseurs en électronique sont très courants. Je vais vous présenter ici deux d'entre eux très communs qui vont simplifieront la vie !

Le sommaire de l'article :
1. [Le diviseur de tension](#le-diviseur-de-tension)
2. [Le diviseur de courant](#le-diviseur-de-courant)

### Le diviseur de tension

#### Le diviseur de tension non chargé

Reprenons circuit rapidement présenté dans l'article "[Les lois fondamentales en régime continu]({{< ref "post/Electronique/Cours/Cours_Les lois fondamentales en régime continu.md" >}})".

[![Pont diviseur de tension non chargé](https://upload.wikimedia.org/wikipedia/commons/d/d9/Pont_diviseur_tension.svg#center "Pont diviseur de tension non chargé")](upload.wikimedia.org/wikipedia/commons/d/d9/Pont_diviseur_tension.svg)

Avec la loi des mailles (je prend ici le sens horaire), on peut dire que :
$$\text{U} - \text{U1} - \text{U2} = 0$$

Si on ajoute à cela la loi d'Ohm, ça nous donne :
$$\text{U} - (\text{R1} * \text{I1}) - (\text{R2} * \text{I2}) = 0$$

L'intensité étant la même partout dans une branche, on peut simplifier par :
$$\text{U} - \text{I} * (\text{R1} + \text{R2}) = 0$$
$$\text{U} = \text{I} * (\text{R1} + \text{R2})$$

Nous pouvons donc en déduire ceci :
$$\text{I} = \frac{\text{U}}{\text{R1} + \text{R2}}$$
$$\text{U2} = \text{I} * \text{R2} = \frac{\text{U} * \text{R2}}{\text{R1} + \text{R2}}$$

Par soucis de lisibilité, dans la pratique on écrira plutôt :
$$\text{U2} = \text{U} * \frac{\text{R2}}{\text{R1} + \text{R2}}$$

**R2 / (R1 + R2)** étant simplement le **"pourcentage"** de R2 par rapport à la somme R1 + R2. Le fait qu'on le multiplie par U est assez significatif ici. **La tension se sépare équitablement entre les résistance**. Si R2 représente 18% de la résistance R1 + R2, la tension U2 représentera aussi 18% de la tension U1 + U2.

Nous venons ici de démontrer la formule de ce qu'on appelle un **pont diviseur de tension**. Je vais ici vous donner plusieurs formules qui font de paires avec celle que nous venons de voir, libre à vous de les démontrer formellement.

En gardant la même idée (que la tension se sépare équitablement entre les résistances), on peut étendre à une branche où il y aurait plus que deux résistances :
$$U_{Rx} = U * \frac{\text{Rx}}{\sum_{i = 1}^{n} \text{Ri}}$$
En français : dans une branche de **n résistances distinctes**, la tesion aux bornes de **la résistance x** est égale à la tension totale de la branche multipliée par **le pourcentage que représente la résistance x par rapport à toutes les n résistances de la branche**.

&nbsp;

Maintenant vous vous dites : "Mais ok très bien je viens d'apprendre une nouvelle formule un poil cryptique mais ça sert à quoi ?"

Imaginez que vous avez une un capteur qui vous envoie une plage de 0 à 50V, et que votre microcontrôleur n'accepte que 5V max dans ses entrées. (ce qui arrive occasionnellement). Là vous vous dites évidemment :

"Ok très bien je dois couper 50V en deux parties pour avoir 5V. J'aurais donc une partie de 5V, et une partie de 45V. Je vais donc faire un pont diviseur de tension dans lequel R2 représentera 5/50ème, soit 10% de la résistance, comme ça j'aurais U2 qui vaudra 10% de la tension, et donc 5V !"

Bien joué, c'est exactement le bon raisonement 😀 !

Vous devez donc faire votre circuit avec R2 qui vaut 1/10ème de la résistance totale. Pour dire plus simplement vous voulez R1 = 9 * R2.

Vous pourrez donc relier R2 à l'entrée de votre microcontrôleur plutôt que la sortie du capteur. Etant donné que vous avez divisé la tension par 10, il faudra bien sûr que le microcontrôleur multiplie dans son programme la tension captée par 10 pour avoir la bonne valeur.

#### Le diviseur de tension chargé

Si vous avez essayé juste après avoir lu la première partie de cet article de construire de construire un pont diviseur de tension pour **alimenter** quelque chose (ce que je vous recommande évidemment de faire, bien que peu réaliste), vous avez du vous rendre compte d'un **problème majeur**.

En effet, même si le pont diviseur de tension est **très utile pour conditionner une tension**, il est très **mauvais pour alimenter** et nous allons voir pourquoi.

Vous vous êtes peut-être également demandés ce que signifiait l'adjectif "chargé" dans le contexte des diviseurs de tension, je vais vous le dire tout de suite. Nous avons vu dans l'article présentant [la résistance]({{< ref "post/Electronique/Composants/Composants_Résistance.md" >}}), lorsque l'on met en **parralèle** deux résistances, elles peuvent être représentées par **une seule résistance équivalente** d'une valeur différente.

[![Pont diviseur de tension chargé](https://upload.wikimedia.org/wikipedia/commons/5/56/Pont_divisuer_tension_charge.svg#center "Pont diviseur de tension chargé")](https://upload.wikimedia.org/wikipedia/commons/5/56/Pont_divisuer_tension_charge.svg)
$$\text{(On remercie chaleureusement wikipedia pour ces images)}$$

Vous vous attendiez à garder le rapport "U2 = U * (R2) / (R1 + R2)", mais en fait en ajoutant une charge en parralèle à R2, vous avez modifié sa valeur ! Nous nous retrouvons donc avec ce calcul :

$$\text{U2} = \text{U} * \frac{\text{Req}}{\text{R1} + \text{Req}}$$

Avec :

$$\text{Req} = \frac{\text{R1} * \text{R2}}{\text{R1} + \text{R2}}$$

Si la charge RL est constante, Req sera stable. Sinon Req et donc le rapport de division du pont diviseur changera en permanance.

Quelle est donc la bonne solution pour abaisser une tension dans le but d'alimenter quelque chose ?

La bonne solution serait d'utiliser un circuit (que l'on peut aussi trouver intégré dans un seul composant) qu'on appelle un convertisseur DC-DC. C'est un composant dont l'objectif est de d'élever ou d'abaisser une tension continue d'un niveau à un autre. Les convertisseurs de tension feront l'objet d'articles, le besoin de convertir des tensions étant important. Je tenais à les citer ici à titre informatif pour expliquer pourquoi il ne faut généralement pas charger un pont diviseur. Voici [un lien](https://fr.wikipedia.org/wiki/Convertisseur_DC-DC "Pont diviseur de tension chargé") si vous voulez survoler plus en profondeur ce sujet.

### Le diviseur de courant

#### Le diviseur de courant non chargé

#### Le diviseur de courant chargé

&nbsp;