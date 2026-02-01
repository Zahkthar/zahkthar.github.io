---
title: "Le transistor bipolaire"
description: "Démystifions le légendaire composant, le transistor !"

sidebar:
  order: 7

draft: false
---

**Que fait un transistor ? Pourquoi est-il si présent dans nos circuits ?**

Pilier de l'électronique moderne, présent dans les circuits de puissance, de contrôle et surtout les circuits numériques, on a de cesse de le mettre absolument partout. Mais pourquoi ? Qu'a-t-il de si spécial ? Nous allons voir ça dans cet article, dans lequel je ferais un bref rappel de physique pour ceux que ça intéresse puis un guide pratique sur la façon dont on peut en tirer parti dans nos circuits.

Le programme pour aujourd'hui :

1. [Rappels physique](#rappels-physique)
2. [Fonctionnement d'un transistor bipolaire](#fonctionnement-dun-transistor-bipolaire)
3. [Conclusion](#conclusion)

### Rappels physique

Le transistor est basé sur des jonctions qu'on appelle PN. Une jonction P est constituée de semi-conducteurs dopés positivement (déficit d'électrons libres) alors que la jonction N est dopée négativement (surplus d'électrons libres). Un exemple serait d'ajouter des atomes de phosphore pour la jonction N, la liaison phosphore-silicium ayant un électron libre, et des atomes d'Aluminium dans la jonction P, la liaison aluminium-silicium créant un manque d'un électron.

(Le paralèle jonctions/symbole pour un transistor NPN et PNP)
[![Jonction NPN](/res/images/Electronique/Composants/Transistor/JonctionsNPN.png "Jonction PNP")](/res/images/Electronique/Composants/Transistor/JonctionsNPN.png)

[![Jonction PNP](/res/images/Electronique/Composants/Transistor/JonctionsPNP.png "Jonction NPN")](/res/images/Electronique/Composants/Transistor/JonctionsPNP.png)

Les jonctions N et P étant en contact direct, les électrons libres de la jonction N vont aller dans la jonction P et créer une zone dite de déplétion, une sorte de "barrière" empêchant les électrons de passer. Avec l'image, on peut se rendre compte que la jonction P (ou la base) est entourée de deux de ces zones, empêchant le courant de s'écouler du collecteur à l'émetteur.

De là, nous avons deux façons d'impacter ces zones :

- En appliquant une tension positive à la base, la barrière de potentiel diminue, ce qui aide les électrons à passer.
- En appliquant une tension négative à la base, la barrière de potentiel augmente, limitant donc le passage des électrons.

À titre indicatif, la barrière de potentiel est d'environ 0.7V sur la majorité des transistors (à compléter avec une lecture du datasheet du transistor en question)

Révélation du jour : une diode est une jonction PN !

### Fonctionnement d'un transistor bipolaire

(Je vais ici me concentrer sur le transistor NPN, qui est le plus courant, mais les calculs sont valables pour les transistor PNP, il suffit de remplacer les valeurs Vce par Vec, Vbe par Veb et Vcb par Vbc.)

#### Les termes

Une image vaut mieux que 6 lignes, voici tous les termes représentant les tensions et intensités ayant lieu dans un transistor bipolaire :
[![Termes PNP](/res/images/Electronique/Composants/Transistor/NPN.png "Termes NPN")](/res/images/Electronique/Composants/Transistor/NPN.png)

Il y a également deux relations toujours vraies (lois des mailles et loi des noeuds) :

$$V_{CE} = V_{CB} + V_{BE}$$

$$I_E = I_C + I_B$$

#### Le régime bloqué

Le transistor est dit en régime bloqué quand le courant de base (Ib) est nul.

Les courants Ic et Ie sont également nuls.

Vbe est inférieur à la tension de seuil (on parle de jonctions PN, donc plus ou moins de diodes, d'où le concept de tension de seuil ici), soit dans un cas général < 0.7V.

Une analogie très courante est de considérer le transistor comme un interrupteur. Ici, l'interrupteur serait ouvert (pas de contact donc).

#### Le régime saturé

Le régime saturé, c'est l'inverse du régime bloqué, cette fois si Ib est supérieur à un seuil qu'on appelle Ibsat (on le reverra plus tard).

Il y a contact entre l'émetteur et le collecteur, la tension Vce est donc à son minimum, appelé Vcesat.

Le courant arrivant par Ic n'est pas limité par le transistor, car il agit ici comme un interrupteur fermé (à la différence que le contact n'est pas parfait -> Vce aurait été égal à 0 si c'était un contact pur, mais ici, il s'agit de diodes, donc Vce est dépendant des tensions de seuil).

#### Le régime linéaire

Lorsque Ib est supérieur à 0, on n'est plus en régime bloqué. Mais si Ib est inférieur à Ibsat, le transistor n'est pas en régime saturé non plus, il se trouve dans un état intermédiaire, le régime linéaire.

Dans ce régime, le courant Ic est proportionnel au courant de base Ib par un coefficient appelé le gain (noté β dans les calculs ou hFE dans les datasheets) qui est donné par le datasheet du transistor. Pour un transistor bipolaire NPN nommé 2N2222 (un des plus courants), le gain est d'au minimum 75.

(extrait du datasheet du 2N2222)
[![Gain 2N2222](/res/images/Electronique/Composants/Transistor/Gain2N2222.png "Gain 2N2222")](/res/images/Electronique/Composants/Transistor/Gain2N2222.png)

Dans ce régime, donc, la valeur du courant Ic est égale à :
$$I_C = \beta * I_B$$

#### Utilisations d'un transistor bipolaire

Après ceci, vous devriez pouvoir déduire deux utilités principales du transistor bipolaire :

- Amplifier le courant
- Servir d'interrupteur électriquement contrôlé
- Par extension du 2ème, permet de créer des portes logiques

#### Remarques

- Les régimes bloqués et saturés sont généralement appelés régimes de commutation.
- Le gain des transistors est généralement vague. L'exemple au-dessus du 2N2222 citait comme valeur minimale du gain 75, mais ne citait pas de valeur maximale. Autrement dit, c'est complètement aléatoire, mais on sait que c'est au-dessus de 75.
- Si vous avez parcouru quelques datasheets de transistor bipolaire, vous aurez sûrement remarqué quelque chose de pour le moins étrange... Ibsat (le seuil à partir duquel on sort du régime linéaire pour entrer en régime saturé) n'est pas tout le temps donnée. Et pour cause, ce n'est pas une donnée strictement nécessaire ! Le gain étant généralement élevé (75 pour le 2N2222 mais ça peut monter beaucoup plus haut), la très grande majorité du courant que le transistor va voir est le courant Ic, pas le courant Ib ! Comment faire du coup ? Vous avez la valeur max de Ic ainsi que le gain typique (s'il n'est pas donné, prenez le minimum, c'est déjà ça). Vous pouvez donc faire :
$$I_B = \frac{I_C}{β}$$
et vous aurez le courant Ib nécéssaire pour atteindre la valeur maximale de Ic avec le gain de votre transistor, dans la réalité, cette précision suffit...

### Conclusion

Dans cet article, nous avons exploré en détail le fonctionnement du transistor bipolaire. Si son utilisation peut sembler complexe au premier abord, ne vous inquiétez pas. Dans les prochains articles, nous aborderons des applications concrètes du transistor, notamment dans le domaine des circuits logiques.

Vous aurez sûrement remarqué que le transistor est ici abordé du point de vue de l'électronicien plutôt que du physicien. Il n'est pas impératif de maîtriser toutes les propriétés physiques des semi-conducteurs pour concevoir ou analyser des circuits électroniques. Cependant, si vous ressentez l'envie d'approfondir vos connaissances en physique et en chimie, n'hésitez pas à le faire, c'est un sujet passionnant !

&nbsp;
