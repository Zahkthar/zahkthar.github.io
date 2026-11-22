---
title: "L'inductance (la bobine)"
description: "Découvrir le fonctionnement de la bobine, l'auto-induction, le circuit RL et ses applications."

sidebar:
  order: 1

draft: false
---

## Présentation rapide du composant

Après l'article sur [la résistance](/electronics/basics/component-resistance/) et celui sur [le condensateur](/electronics/basics/component-capacitor/), voici venu le moment d'attaquer le troisième composant élémentaire de l'électronique, **la bobine**.

Elle n'est pas du tout aussi simple à décrire qu'une résistance ou un condensateur, je ne vais donc pas tenter de comparaison hasardeuse, tout deviendra un peu plus clair après la lecture de cette page.

### Constitution physique et symbole

Une bobine, comme son nom l'indique, est un conducteur enroulé de façon à former une bobine. Elle est un dipôle, en cela qu'elle a deux pôles, et peut se manifester sous plusieurs formes, allant de la bobine simple avec ou sans noyau ferromagnétique (le cylindre à l'intérieur de la bobine) à des formes un peu plus surprenantes comme les bobines toriques (d'une forme de donut) enroulées ou non autour d'un noyau ferromagnétique.

Voici une image en montrant quelques types.

![Différentes bobines](https://upload.wikimedia.org/wikipedia/commons/a/a1/Electronic_component_inductors.jpg "Différentes bobines")

Son symbole utilisé dans les schémas est comme ceci :

<img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Inductor.svg" alt="Symbole bobine 1" title="Symbole bobine 1" class="invertable" />

<img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Coil_illustration.svg" alt="Symbole bobine 2" title="Symbole bobine 2" class="invertable" />

L'un ou l'autre se retrouvent de façon indifférenciée dans les circuits, certaines fois avec une barre ou des pointillés au-dessus de la bobine, pour préciser si elle a un noyau en fer ou en ferrite. Une flèche la traversant en diagonale peut aussi y être ajoutée si la bobine a une valeur variable. L'utilisation d'un symbole spécifique n'est pas absolument obligatoire et est surtout là à titre indicatif si le type de la bobine joue un rôle important dans le choix du composant.

### L'inductance et le phénomène d'auto-induction

Lorsqu'un courant électrique traverse un fil conducteur, un champ magnétique est généré autour de ce fil. Lorsque l'on enroule ce fil en bobine de plusieurs spires, le champ magnétique se retrouve concentré en son centre.

Tant que le courant traversant la bobine est stable, le champ magnétique reste également stable et il ne se passe rien de particulier. Lorsqu'il n'y a aucune variation, on pourrait même dire que, le cuivre possédant une faible résistance, la bobine ne fait rien de plus qu'un simple fil, d'où son manque de présence dans des circuits fonctionnant en pur régime continu.

Le comportement intéressant des bobines arrive quand on essaie de faire varier le courant qui la traverse (que cela vienne d'une variation de tension comme en alternatif ou que ça vienne par exemple d'une porte logique qui passe de 1 à 0 avec une bobine reliée à sa sortie). Toute variation du courant entraîne une variation du champ magnétique, et chaque variation du champ magnétique induit une tension aux bornes de la bobine qui **s'oppose à cette variation**. Cette caractéristique d'opposition aux variations de courant se nomme **l'auto-induction** et est à l'origine du deuxième nom de ce composant, **la self**. 

Ce comportement est d'ailleurs décrit dans la très célèbre loi de **Lenz-Faraday** :

$$e = -\frac{d\Phi}{dt}$$

Avec :
- $e$ la force électromotrice (ou la tension) induite dans la bobine en **volts** (V) 
- $\Phi$ le flux magnétique variable en **webers** (Wb)
- $t$ le temps en **secondes** (s)

On retrouve également la version avec l'intensité :

$$e = -L\frac{dI}{dt}$$

Avec :
- $e$ la force électromotrice (ou la tension) induite dans la bobine en **volts** (V) 
- $L$ la valeur d'inductance de la bobine en **henrys** (H)
- $I$ l'intensité en **ampères** (A)
- $t$ le temps en **secondes** (s)

On remarque ici que, que ce soit $\frac{d\Phi}{dt}$ ou $\frac{dI}{dt}$, il s'agit d'une variation soit d'un flux magnétique en Wb/s, soit d'une variation d'intensité en A/s. La tension est donc proportionnelle à la vitesse de changement du champ magnétique ou de l'intensité.

Il y a donc deux conséquences majeures :
1. **Si le courant est constant** ($\frac{dI}{dt} = 0$), alors $e = 0\,\text{V}$. En régime continu, une bobine idéale est équivalente à un **fil** (un court-circuit).
2. **Plus le courant varie vite** ($\frac{dI}{dt}$ est grand), et plus la tension $e$ produite aux bornes de la bobine est élevée pour freiner cette variation.

Il y a ici deux nouvelles unités que nous n'avions pas encore vues pour l'instant :
- Le weber (Wb) représente la "quantité de magnétisme" et son unité dérivée est le $T \cdot m^2$ avec T en teslas qui, lui, représente la densité du champ magnétique, sa force en quelque sorte.
- Le henry (H) représente quant à elle l'efficacité ou la capacité magnétique de la bobine à créer une tension en réaction ou à s'opposer à un changement dans le champ magnétique. Une faible inductance en henrys induira une plus faible tension qu'une forte inductance pour le même changement dans le champ magnétique. Elle est notée **L**. Un henry étant déjà une valeur très élevée en électronique, on rencontrera bien plus souvent des bobines exprimées en millihenrys ($\text{mH}$) ou en microhenrys ($\mu\text{H}$). Cette valeur dépend de sa géométrie (nombre de spires, section de la bobine, longueur de la bobine) et de la perméabilité magnétique du matériau utilisé pour son noyau si elle en a un (ou celle de l'air), c'est-à-dire la capacité du matériau à canaliser le champ magnétique.

Comprendre ces unités au moins en surface est intéressant pour mieux comprendre les concepts, il faudra de toute façon approfondir ces connaissances quand on touchera à des domaines comme la radio et les ondes en général, ou si l'intérêt vous prend d'étudier l'électromagnétisme de fond en comble.

On retrouve par ailleurs une belle symétrie avec [le condensateur](/electronics/basics/component-capacitor/) :
- Le **condensateur** s'oppose aux variations brusques de **tension** (il « amortit » les changements de tension).
- La **bobine** s'oppose aux variations brusques de **courant** (elle a une sorte « d'inertie » face aux changements d'intensité).

### Stockage d'énergie sous forme magnétique

Tout comme le condensateur stocke de l'énergie sous forme de **champ électrique** ($E_C = \frac{1}{2} \cdot C \cdot U^2$), la bobine stocke de l'énergie sous forme de **champ magnétique** tant qu'un courant la traverse :

$$E_L = \frac{1}{2} \cdot L \cdot I^2$$

Où :
- $E_L$ est l'énergie stockée en **joules** (J)
- $L$ est l'inductance de la bobine en **henrys** (H)
- $I$ est l'intensité traversant la bobine en **ampères** (A)

Contrairement au condensateur qui peut garder son énergie stockée même débranché (sous forme de tension), la bobine a besoin qu'un courant continue de circuler pour conserver son énergie magnétique. Si l'on coupe le circuit, le courant va de fait chuter, changeant brusquement le champ magnétique : cela induit une tension inverse dans la bobine pour tenter de maintenir le courant à tout prix et va la vider quasiment instantanément (avec une tension pouvant être colossale, ce qui peut donc être dangereux).

## Le circuit RL et la constante de temps

### Établissement et coupure du courant dans une bobine

Imaginons une bobine placée en série avec une résistance $R$ et alimentée par une source de tension continue $U$ via un interrupteur : c'est ce qu'on appelle un **circuit RL** (Résistance-Inductance). À noter que la résistance $R$ est indispensable pour limiter le courant une fois la bobine « chargée ». En effet, une fois que le courant a arrêté de varier et qu'il est devenu stable, la bobine se comporterait comme un court-circuit directement branché aux bornes de la source de tension.

- **À la fermeture de l'interrupteur ($t = 0$)** : la bobine s'oppose à la montée brusque du courant. Juste après la fermeture, le courant est encore nul ($I = 0\,\text{A}$), toute la tension d'alimentation se retrouve donc aux bornes de la bobine ($U_L = U$ et $U_R = 0\,\text{V}$). Puis, progressivement, le courant augmente selon une courbe exponentielle jusqu'à atteindre son maximum limité par la résistance : $I_{\max} = \frac{U}{R}$. À ce moment-là, le courant est stable, la tension aux bornes de la bobine tombe à $0\,\text{V}$ et toute la tension se retrouve aux bornes de $R$.
- **Lors de la décharge (en boucle fermée sur $R$)** : si l'on court-circuite la source d'alimentation pour ne laisser que la bobine et la résistance en boucle fermée, le courant ne s'arrête pas d'un coup. La bobine restitue l'énergie stockée dans son champ magnétique en maintenant le courant, qui va décroître de manière exponentielle jusqu'à $0\,\text{A}$.

### La constante de temps du circuit RL

Comme pour le circuit RC, la vitesse à laquelle le courant s'établit ou s'annule dans un circuit RL est régie par une **constante de temps**, notée $\tau$ (tau) :

$$\tau = \frac{L}{R}$$

Où :
- $\tau$ est la constante de temps en **secondes** (s)
- $L$ est l'inductance en **henrys** (H)
- $R$ est la résistance totale du circuit en **ohms** ($\Omega$)

Attention cependant à ne pas inverser avec le circuit RC ($\tau = R \cdot C$) : ici, plus la résistance $R$ est grande, plus l'énergie magnétique est dissipée rapidement et plus la constante de temps $\tau$ est courte.

Cela paraît contre-intuitif : étant donné que le courant qui passe est inférieur, on aurait tendance à imaginer que ça va monter moins vite et donc durer plus longtemps, mais en réalité ce n'est pas le cas. Quand la résistance augmente, le courant maximal qu'il sera possible d'atteindre lorsque la bobine sera chargée (et se comportera comme un court-circuit) diminue. La quantité d'énergie qu'il y a à stocker diminue donc également, ayant pour effet de réduire le temps nécessaire à la charge.

On peut notamment s'en rendre compte avec la formule [présentée ici](#stockage-dénergie-sous-forme-magnétique) : le $I^2$ de la formule est remplacé ici par $I^2_{\max} = \frac{U^2}{R^2}$. On voit maintenant que si on double $R$, l'intensité max est divisée par 2 ($I_{\max} = \frac{U}{R}$), mais l'énergie à accumuler est divisée par 4.

On retrouve exactement les mêmes repères en pourcentage que pour le condensateur :

| Constante de temps | Établissement du courant | Extinction du courant |
|--------------------|--------------------------|-----------------------|
| $0\tau$            | 0 %                      | 100 %                 |
| $1\tau$            | 63 %                     | 37 %                  |
| $2\tau$            | 86 %                     | 14 %                  |
| $3\tau$            | 95 %                     | 5 %                   |
| $5\tau$            | ~100 %                   | ~0 %                  |

À $5\tau$, on considère en pratique que le courant a atteint son régime établi (environ 99,3 % de $\frac{U}{R}$) ou qu'il s'est totalement annulé.

### Surtension à la coupure et diode de roue libre

Que se passe-t-il si, au lieu de fermer une boucle avec une résistance, on **ouvre brutalement** l'interrupteur (ou on bloque un transistor) qui alimentait une bobine ?

C'est une situation très courante dès qu'on pilote un relais (comme dans [l'introduction aux microcontrôleurs](/electronics/basics/course-microcontrollers-basics/)), un électroaimant ou un moteur. Avant la coupure, un courant $I$ circulait dans la bobine. Au moment où le contact s'ouvre, le courant chute vers $0\,\text{A}$ en un temps minuscule ($\Delta t$ proche de $0$).

Si l'on regarde la formule $e = -L\frac{dI}{dt}$, un changement de courant en un temps quasi nul induit une tension inverse énorme aux bornes de la bobine (pouvant facilement atteindre plusieurs centaines de volts, même sur un circuit alimenté en $5\,\text{V}$ ou $12\,\text{V}$ !). Cette surtension cherche à tout prix à maintenir le courant :
- Sur un interrupteur mécanique, elle provoque une petite étincelle (arc électrique) qui use les contacts.
- Sur un transistor ou une broche de microcontrôleur, la situation est pire : elle dépasse la tension de claquage et **détruit le composant instantanément**.

La solution est très simple et fait appel à un composant déjà vu : **la diode de roue libre** (cf. [la diode](/electronics/basics/component-diode/)).

On branche une diode en parallèle de la bobine, **en sens inverse** par rapport à l'alimentation normale (cathode vers le `+`, anode vers le `-`) :
- **Quand la bobine est alimentée normalement**, la diode est bloquée car la tension est inverse : aucun courant ne passe par elle, le circuit fonctionne comme si elle n'était pas là.
- **Au moment de la coupure**, la bobine inverse la tension à ses bornes pour tenter de continuer à pousser le courant dans le même sens. Cette tension rend la diode passante, le courant dispose alors d'une boucle fermée à travers la diode et la résistance interne de la bobine pour s'éteindre doucement. La tension aux bornes du montage reste ainsi limitée à la tension de seuil de la diode (environ $0{,}7\,\text{V}$ au-dessus de l'alimentation), protégeant efficacement le reste du circuit. On peut même mettre une résistance en série avec cette diode pour accélérer la décharge de la bobine (la tension de la diode est limitée à $0{,}7\,\text{V}$, et la résistance aura comme tension $R \cdot I$).

## Associations d'inductances

Dans les calculs qui suivent, on suppose que les bobines sont suffisamment éloignées ou blindées les unes des autres pour que leurs champs magnétiques ne s'influencent pas mutuellement (pas de couplage magnétique).

### Inductances en série

Plusieurs bobines placées en série sont équivalentes à une seule bobine dont l'inductance est la **somme** des inductances individuelles (comme les résistances en série) :

$$L_{eq} = \sum_{n = 1}^{k} L_n$$

Où $n$ est l'indice de la bobine courante et $k$ le nombre total de bobines en série. Par exemple, deux bobines de $10\,\text{mH}$ en série équivalent à une bobine de $20\,\text{mH}$.

### Inductances en dérivation

Lorsque plusieurs bobines sont placées en parallèle, elles se comportent exactement comme des résistances en dérivation :

$$\frac{1}{L_{eq}} = \sum_{n = 1}^{k} \frac{1}{L_n} \quad \Rightarrow \quad L_{eq} = \frac{1}{\sum_{n = 1}^{k} \frac{1}{L_n}}$$

Dans le cas particulier où il n'y a que deux bobines en parallèle, on retrouve la formule simplifiée du produit sur la somme :

$$L_{eq} = \frac{L_1 \cdot L_2}{L_1 + L_2}$$

Comme pour les résistances, l'inductance équivalente en dérivation sera toujours plus petite que la plus petite des inductances du montage.

## Comportement face aux variations de courant

### Régime continu établi vs variations rapides

En résumé, le comportement d'une bobine dépend directement de la rapidité avec laquelle le signal varie :
- **En régime continu** (aucune variation) : la bobine n'oppose aucune résistance magnétique, elle laisse passer le courant comme un simple fil.
- **Face à des variations rapides (hautes fréquences)** : le courant change constamment de sens ou d'amplitude ($\frac{dI}{dt}$ élevé), la bobine s'oppose donc fortement à son passage.

C'est l'exact opposé du condensateur :

| Comportement | Condensateur | Bobine |
|---|---|---|
| Grandeur à laquelle il s'oppose | Variations de **tension** | Variations de **courant** |
| En régime continu établi | Bloque le courant (**circuit ouvert**) | Laisse passer le courant (**fil**) |
| À haute fréquence | Laisse passer le signal | Bloque le signal |
| Stockage d'énergie | Champ électrique ($E = \frac{1}{2}CU^2$) | Champ magnétique ($E = \frac{1}{2}LI^2$) |

### Ouverture : vers le régime alternatif et les circuits LC / RLC

Si l'on associe une bobine et un condensateur ensemble (circuit LC, ou RLC avec une résistance), on obtient d'un coup un circuit très différent : le condensateur se décharge dans la bobine (qui stocke l'énergie sous forme magnétique), puis la bobine recharge le condensateur en sens inverse, et ainsi de suite. Les deux composants vont donc osciller à une fréquence précise appelée **fréquence de résonance**.

Mais pour calculer la façon dont une bobine ou un condensateur freine un signal à une fréquence donnée, la loi d'Ohm en continu ($U = R \cdot I$) ne va pas suffire. Nous aurons besoin d'introduire la notion de **régime alternatif** et d'**impédance**, ce que nous verrons dès le prochain article !

## Exemples d'utilisations pratiques

Bien que moins visible que les résistances ou les condensateurs dans les petits montages de débutant sur breadboard, la bobine est omniprésente dans l'électronique moderne :

- **Les alimentations à découpage (convertisseurs DC-DC)** : dans un régulateur Buck (abaisseur) ou Boost (élévateur), la bobine sert de réservoir d'énergie temporaire que l'on remplit et vide des dizaines ou centaines de milliers de fois par seconde pour convertir une tension en une autre avec un bien meilleur rendement que les convertisseurs linéaires.
- **Le filtrage et l'antiparasitage** : étant donné qu'elle bloque les hautes fréquences tout en laissant passer le continu, on la place en série sur des lignes d'alimentation pour bloquer les parasites haute fréquence.
- **Les transformateurs** : en plaçant deux bobines très proches l'une de l'autre (couplées sur un même noyau magnétique), le champ magnétique créé par la première induit un courant dans la seconde. Cela permet d'élever ou d'abaisser une tension alternative tout en isolant électriquement le circuit du secteur $230\,\text{V}$.
- **Les actionneurs électromagnétiques** : les relais, les électroaimants ou encore les moteurs électriques et les haut-parleurs exploitent directement le champ magnétique généré par une bobine pour produire un mouvement mécanique.
- **La radio et les télécommunications** : combinée à un condensateur (circuit LC), la bobine permet de sélectionner ou d'émettre une fréquence radio précise.

## Conclusion

Nous avons maintenant fait le tour des trois grands composants passifs élémentaires de l'électronique : **[la résistance](/electronics/basics/component-resistance/)**, **[le condensateur](/electronics/basics/component-capacitor/)** et **la bobine**. Si la bobine peut sembler plus abstraite à cause du magnétisme, retenez le plus important : **elle s'oppose aux variations de courant, stocke de l'énergie magnétique, et nécessite une diode de roue libre dès qu'on la coupe brutalement**.