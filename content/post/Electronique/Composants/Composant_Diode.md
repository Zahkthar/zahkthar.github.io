---
author: "Zahkthar"
title: "La diode"
date: 2023-04-25T09:00:00+02:00
description: "A quoi sert la diode ? Comment peut-on s'en servir ?"

Catégories: [
    "Electronique"
]

Étiquettes: [
    "Composants"
]

Séries: ["Les bases de l'électronique"]
draft: true
---

**A quoi sert la diode ? Comment peut-on s'en servir ?**

On la voit partout et dans toutes les applications. Pour redresser un signal, créer une IHM, protéger un circuit ou bien capter la lumière, les applications des diodes sont très étendues, et ça en fait un des composants les plus importants en électronique. Nous allons aujourd'hui voir comment se décrit une diode et comment l'utiliser.

Le programme pour aujourd'hui :
1. [Petit rattrapage sur les diodes et diode idéale](#petit-rattrapage-sur-les-diodes-et-diode-idéale)
2. [La diode standard et ses dérivées](#la-diode-standard-et-ses-dérivées)
3. [Capteur de lumière](#capteur-de-lumière)
4. [Un condensateur ?](#un-condensateur)
5. [Interface Homme-Machine](#interface-homme-machine)

### Petit rattrapage sur les diodes et diode idéale

Imaginez que vous vouliez redresser une tension alternative (la rendre continue) ou que vous vouliez protéger une partie du circuit d'un potentiel courant dans le sens inverse. Vous voudriez pouvoir utiliser un composant faisant office de "clapet anti-retour", un composant qui laisse parfaitement passer le courant dans un sens, mais pas dans l'autre. Ça tombe bien, c'est exactement ce que propose de faire la diode. Nous allons dans ce chapitre présenter une diode avec des caractéristiques idéales et présenter dans les suivants en quoi les diodes réelles divergent.

Par diode idéale, on entend une diode avec une courbe caractéristique comme celle-ci :

[![Un condensateur en circuit](/res/images/Electronique/Composants/Diode/CourbeCaractéristiqueIdéale.png#center "Condensateur en circuit")](/res/images/Electronique/Composants/Diode/CourbeCaractéristiqueIdéale.png)

Dans le meilleur des cas, la diode aurait le comportement d'un conducteur pur dans un sens et d'un isolant pur dans l'autre. La différence de potentiel aux bornes de la diode serait donc de 0 car il y aurait contact. La résistance d'une diode idéale étant nulle, elle agirait "comme un court-circuit" et laisserait passer le courant sans le bloquer.

### La diode standard et ses dérivées

#### La diode standard

En réalité, la courbe caractéristique d'une diode réelle est plus proche de celle-ci :

[![Un condensateur en circuit](https://upload.wikimedia.org/wikipedia/commons/a/a5/Diode-IV-Curve.svg#center "Condensateur en circuit")](https://upload.wikimedia.org/wikipedia/commons/a/a5/Diode-IV-Curve.svg)

En effet, même si on garde l'esprit de la diode idéale, la courbe est tout de même bien différente ! Les différences majeures sont :
1. La tension de seuil, notée Vd
2. La tension de claquage, notée Vbr
3. La présence d'un courant inverse (courant de fuite ou leakage current)

La tension de seuil est la tension à partir de laquelle notre diode commence réellement à se comporter comme un conducteur dans le sens de la diode. Sa valeur varie d'une diode à l'autre et pour des diodes standard elle est de l'ordre de 0.7V

La tension de claquage est la tension inverse à laquelle la diode cesse de s'opposer au passage du courant. Dans le cas d'une diode standard, ça signifie sa mort. Elle peut fondre et créer un court circuit ou juste se sectionner et ne plus du tout faire passer le courant. Cette valeur dépend du modèle de diode (penser à lire le datasheet de son modèle).

On pourrait au moins penser que jusqu'à la tension de claquage, la diode s'opposerait parfaitement au passage du courant, mais non, il existe bien un courant inverse qui arrive à passer. Nul besoin cepandant de trop s'en inquéter dans la majorité des cas, ce courant ne dépassant que rarement quelques nano-Ampères.

Quasiment tous les types spéciaux de diodes jouent plus ou moins fortement sur ces trois points mentionnés plus haut. Je vais ici vous en présenter quelques unes.

Une des applications principales de la diode standard est le redressement (d'où le nom de diode de redressement souvent utilisé). En effet, si vous avez du courant alternatif en entrée d'une diode, à la sortie vous aurez, non pas du courant continu, ce n'est pas encore pour tout de suite, mais vous aurez un courant redressé, c'est à dire sans crêtes négatives.


#### La diode Zener

#### La diode Schottky

#### La diode TVS

### Capteur de lumière

#### La photodiode

### Un condensateur ?

#### La diode Varicap

### Interface Homme-Machine

#### La diode électroluminescente (LED)


&nbsp;