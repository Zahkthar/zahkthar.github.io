---
title: "Lois des diviseurs"
description: "Comment diviser une tension ou un courant ?"

sidebar:
  order: 5

draft: false
---

Vous voulez diviser une tension ou un courant par un facteur arbitraire et utiliser les [lois de Kirchhoff](/electronics/basics/course-basics-fundamental-laws-of-steady-state/) vous fait mal au crâne ? Que ce soit dans un contexte de création ou d'analyse de circuit, les diviseurs en électronique sont très courants. Je vais vous présenter ici deux d'entre eux très communs qui vous simplifieront la vie !

## Le diviseur de tension

### Le diviseur de tension non chargé

Reprenons le circuit rapidement présenté dans l'article "[Les lois fondamentales en régime continu](/electronics/basics/course-basics-fundamental-laws-of-steady-state/)".

<img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Pont_diviseur_tension.svg" alt="Pont diviseur de tension non chargé" class="invertable" />

Avec la loi des mailles (je prends ici le sens horaire), on peut dire que :

$$U - U_1 - U_2 = 0$$

Si on ajoute à cela la loi d'Ohm, ça nous donne :

$$U - (R_1 * I_1) - (R_2 * I_2) = 0$$

L'intensité étant la même partout dans une branche, on peut simplifier par :

$$U - I * (R_1 + R_2) = 0$$

$$U = I * (R_1 + R_2)$$

Nous pouvons donc en déduire ceci :

$$I = \frac{U}{R_1 + R_2}$$

$$U_2 = I * R_2 = \frac{U * R_2}{R_1 + R_2}$$

Par souci de lisibilité, dans la pratique on écrira plutôt :

$$U2 = U * \frac{R_2}{R_1 + R_2}$$

$\frac{R_2}{R_1 + R_2}$ étant simplement le **"pourcentage"** de $R_2$ par rapport à la somme $R_1$ + $R_2$. Le fait qu'on le multiplie par $U$ est assez significatif ici. **La tension se sépare proportionnellement entre les résistances**. Si $R_2$ représente 18% de la résistance R1 + $R_2$, la tension $U_2$ représentera aussi 18% de la tension $U_1 + U_2$.

Nous venons ici de démontrer la formule de ce qu'on appelle un **pont diviseur de tension**. Je vais ici vous donner plusieurs formules qui vont de pair avec celle que nous venons de voir, libre à vous de les démontrer formellement.

En gardant la même idée (que la tension se sépare proportionnellement entre les résistances), on peut étendre à une branche où il y aurait plus que deux résistances :

$$U_{R_x} = U * \frac{R_x}{\sum_{i = 1}^{n} R_i}$$

En français : dans une branche de **n résistances distinctes**, la tension aux bornes de **la résistance x** est égale à la tension totale de la branche multipliée par **le pourcentage que représente la résistance x par rapport à la somme des n résistances de la branche**.

Maintenant vous vous dites : "Mais ok très bien je viens d'apprendre une nouvelle formule un poil cryptique mais ça sert à quoi ?"

Imaginez que vous ayez un capteur qui vous envoie une plage de 0 à 50V, et que votre microcontrôleur n'accepte que 5V max dans ses entrées. (ce qui arrive occasionnellement). Là vous vous dites évidemment :

"Ok très bien je dois couper 50V en deux parties pour avoir 5V. J'aurais donc une partie de 5V, et une partie de 45V. Je vais donc faire un pont diviseur de tension dans lequel $R_2$ représentera 5/50ème, soit 10% de la résistance, comme ça j'aurais U2 qui vaudra 10% de la tension, et donc 5V !"

Bien joué, c'est exactement le bon raisonnement 😀 !

Vous devez donc faire votre circuit avec $R_2$ qui vaut 1/10ème de la résistance totale. Pour dire plus simplement vous voulez $R_1 = 9 \cdot R_2$.

Vous pourrez donc relier $R_2$ à l'entrée de votre microcontrôleur plutôt que la sortie du capteur. Étant donné que vous avez divisé la tension par 10, il faudra bien sûr que le microcontrôleur multiplie dans son programme la tension captée par 10 pour avoir la bonne valeur.

### Le diviseur de tension chargé

Si vous avez essayé juste après avoir lu la première partie de cet article de construire un pont diviseur de tension pour **alimenter** quelque chose (ce que je vous recommande évidemment de faire, bien que peu réaliste), vous avez dû vous rendre compte d'un **problème majeur**.

En effet, même si le pont diviseur de tension est **très utile pour conditionner une tension**, il est très **mauvais pour alimenter** et nous allons voir pourquoi.

Vous vous êtes peut-être également demandé ce que signifiait l'adjectif "chargé" dans le contexte des diviseurs de tension, je vais vous le dire tout de suite. Nous avons vu dans l'article présentant [la résistance](/electronics/basics/component-resistance/), lorsque l'on met en **parallèle** deux résistances, elles peuvent être représentées par **une seule résistance équivalente** d'une valeur différente.

<img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Pont_divisuer_tension_charge.svg" alt="Pont diviseur de tension chargé" class="invertable" />

$$\text{(On remercie chaleureusement wikipedia pour ces images)}$$

Vous vous attendiez à garder le rapport $U_2 = U \cdot (\frac{R_2}{R_1 + R_2})$, mais en fait en ajoutant une charge en parallèle à $R_2$, vous avez modifié sa valeur ! Nous nous retrouvons donc avec ce calcul :

$$U_2 = U \cdot \frac{R_{eq}}{R_1 + R_{eq}}$$

Avec :

$$R_{eq} = \frac{R_2 \cdot R_L}{R_2 + R_L}$$

Si la charge RL est constante, $R_{eq}$ sera stable. Sinon $R_{eq}$ et donc le rapport de division du pont diviseur changera en permanence.

Quelle est donc la bonne solution pour abaisser une tension dans le but d'alimenter quelque chose ?

La bonne solution serait d'utiliser un circuit (que l'on peut aussi trouver intégré dans un seul composant) qu'on appelle un convertisseur DC-DC. C'est un composant dont l'objectif est d'élever ou d'abaisser une tension continue d'un niveau à un autre. Les convertisseurs de tension feront l'objet d'articles, le besoin de convertir des tensions étant important. Je tenais à les citer ici à titre informatif pour expliquer pourquoi il ne faut généralement pas charger un pont diviseur. Voici [un lien](https://fr.wikipedia.org/wiki/Convertisseur_DC-DC "Pont diviseur de tension chargé") si vous voulez survoler plus en profondeur ce sujet.

## Le diviseur de courant

### Le diviseur de courant non chargé

Cette partie sera beaucoup plus courte que la première car nous avons déjà quasiment tout vu. Nous savons maintenant que pour diviser une tension, il fallait mettre plusieurs résistances **en série**. Et bien pour diviser un courant, il suffit de mettre plusieurs résistances **en parallèle** !

Pour exactement la même raison que dans l'article sur [la résistance](/electronics/basics/component-resistance/), les résistances s'additionnaient en série et les conductances (l'inverse de la résistance) s'additionnaient en parallèle, ici nous pouvons adapter notre formule précédemment trouvée.

<img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Diviseur_de_courant.svg" alt="Pont diviseur de courant non chargé" class="invertable" />

Dans ce pont diviseur de courant, nous affirmons que l'intensité dans la branche I2 est égale à :

$$I_2 = I * \frac{G_2}{G_1 + G_2}$$

Avec I valant l'intensité totale et $G_1$ et $G_2$ l'inverse de $R_1$ et $R_2$. Libre à vous de prouver formellement cette formule.

Exactement comme pour le pont diviseur de tension, nous pouvons généraliser un peu cette formule dans le cas où il y aurait plus de résistances en parallèle.

$$I_{Rx} = I * \frac{G_x}{\sum_{i = 1}^{n} G_i}$$

Ce qui en français donne : à un nœud du circuit où il y a **n branches distinctes** contenant des résistances, **le courant partant dans la branche x** est égal à l'intensité totale à ce nœud multipliée par **le pourcentage** que représente **la conductance de la branche x** par rapport à la **somme de toutes les conductances**.

Le calcul avec les conductances pouvant ne pas être intuitif, une formule existe aussi avec les résistances :

$$I_2 = I \cdot \frac{R_1}{R_1 + R_2} \quad \text{et} \quad I_1 = I \cdot \frac{R_2}{R_1 + R_2}$$

On fera bien attention ici, pour avoir l'intensité dans la branche 1, il faut dans la formule utiliser non pas $R_1$ mais $R_2$ !

### Le diviseur de courant chargé

Exactement pour la même raison qui faisait que l'on ne chargeait que rarement les ponts diviseurs de tension, le même comportement est présent quand on essaye de charger notre diviseur de courant. La conductance d'une branche dépendant directement de la charge, si on essaye de tirer du courant depuis une branche précise du diviseur, le facteur de division va s'en retrouver déséquilibré.

## Conclusion

Nous avons donc vu comment diviser une tension et un courant. Il y a beaucoup de cas réels qui poussent à utiliser ces circuits dans des projets en tous genres. On peut diviser une tension pour la rendre compatible avec un microcontrôleur, pour créer une tension de référence, etc... Le diviseur de courant est quant à lui un peu plus rare, l'utilité majeure étant dans un circuit débitant beaucoup d'intensité et donc fatalement qui chauffe beaucoup, de séparer la perte thermique à travers plusieurs résistances, pour éviter qu'une seule résistance ne chauffe trop.

Dans le contexte de l'analyse de circuit, ces formules peuvent se montrer très utiles pour ne pas vous arracher les cheveux avec les lois de Kirchhoff et d'Ohm.
