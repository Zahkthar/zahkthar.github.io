---
author: "Zahkthar"
title: "The fundamental laws of steady-state"
date: 2024-01-23T22:00:00+02:00
description: "The main laws you need to know to go further in electronics."

categories: [
    "Electronics"
]

tags: [
    "Course",
    "Laws"
]

series: ["Electronics basics"]

draft: false
---

**The main laws you need to know to go further in electronics.**

Before you can really do electronics, i.e. read schematics, program microcontrollers, discover new components or even design/build your own circuits, you need to have a minimum of basics! So that's what I'm aiming to do in this series of articles: recap the basics that are essential if you want to pursue electronics. I therefore recommend that you read this series first if you're new to electronics, which will then allow you to specialise a little more in the subject that interests you.

So we'll start with a few definitions that may be obvious to some, but which will help us understand what follows:
1. [Electric charge, current and Kirchhoff's current law](#electric-charge-current-and-kirchhoffs-current-law)
2. [Voltage and Kirchhoff's voltage law](#voltage-and-kirchhoffs-voltage-law)
3. [Resistance and Ohm's law](#resistance-and-ohms-law)
4. [Power and energy](#power-and-energy)

### Electric charge, current and Kirchhoff's current law

#### Electric charge and current

An electric current flows through any conductive material in a closed circuit containing an electromotor (this could be a generator, a battery, a cell, a solar panel, etc.). The electric current is actually a flow of electrons that crosses the circuit from one terminal of the generator with the aim of returning to it via its other terminal.

Since the electrical charge of an electron is negative (-1.6 * 10-19 C -> Coulombs), the conventional direction of the current (from + to -) is opposite to that of the electrons (from - to +).

If we note "dq" the electric charge in Coulombs transported by the electrons crossing a conductor during a duration "dt", the intensity which we will note I (or i) will be given by the formula :

$$\text{I} = \frac{\text{dq}}{\text{dt}}$$

Where :
- I is in **Ampere** (A)
- dq is in **Coulombs** (C)
- dt is in **seconds** (s)

#### The Kirchhoff's current law

The Kirchhoff's current law can be summarised in a single sentence:

**"The sum of the currents entering a node is equal to the sum of the currents leaving the same node."**

[![The Kirchhoff's current law](https://upload.wikimedia.org/wikipedia/commons/f/f2/Kirchhoff%27s_Current_Law.svg#center "The Kirchhoff's current law")](https://fr.wikipedia.org/wiki/Lois_de_Kirchhoff#/media/Fichier:Kirchhoff's_Current_Law.svg)

Here, the sum of the currents i1 and i2 entering the node is equal to the sum of the currents i3 and i4 leaving the node.

### Voltage and Kirchhoff's voltage law

#### The voltage

Voltage is not a quantity that is easy to define without going into theory. But by analogy, we can get close to the meaning of this quantity. An analogy can be made between electrical voltage at a given point in the circuit and potential energy in mechanics.

$$\text{Ug} = \text{m} * \text{g} * \text{h}$$

The potential energy depends directly on the height of the object in the formula. The maximum height in this example would be the supply voltage (e.g. 5 volts), which decreases every time a conductor is encountered.

[![Voltage divider](https://upload.wikimedia.org/wikipedia/commons/d/d9/Pont_diviseur_tension.svg#center "Voltage divider")](https://upload.wikimedia.org/wikipedia/commons/d/d9/Pont_diviseur_tension.svg)

In this circuit, which we call a "voltage divider" (we'll come back to this later), if we imagine that U is the supply voltage of the circuit, 5V for example, before the first resistor the voltage will be equal to U, i.e. 5V. After the first resistor, the voltage will have dropped. After the second resistor, the voltage will be 0.

The purpose of this circuit is to convert a voltage into a lower voltage by adjusting the ratio between the two resistors.

#### The potential difference

Potential difference is a quantity that is often confused with voltage. The potential difference, as its name suggests, is the difference between two points in a circuit. It therefore requires a reference point.

If we go back to the circuit above and assume that for the total 5 V, there is an equal distribution of voltage between the two resistors, we end up with U1 worth 2.5V and U2 also worth 2.5V. But where does this 2.5 V come from? In reality, U1 is a potential **difference** and therefore represents the result of the subtraction between the voltage U and the voltage after passing through the resistor. So we have 5V - 2.5V = **2.5V**. U2 follows exactly the same reasoning. We only have 2.5V after the current has passed through R1. The difference between 2.5V and 0V is therefore 2.5 - 0 = **2.5V**.

So, when we generally talk about voltage, we are talking about the value of the voltage at a point in the circuit, whereas if we talk about the voltage **at the terminals** or **around** a component, we are talking about the difference between the point before and after the said component, the voltage which crosses it in short (if the voltage is represented by an arrow as above with U, U1 and U2, we can also call the potential difference by its name on the diagram).

#### The Kirchhoff's voltage law

The Kirchhoff's voltage law is the second of [Kirchhoff's laws](https://en.wikipedia.org/wiki/Kirchhoff%27s_circuit_laws), the first of which was the [current law](#the-kirchhoffs-current-law).

The voltage law tells us that when we cross a mesh (i.e. a portion of a closed circuit) and start from a point N and return to the same point N, the sum of the potential differences encountered is equal to **zero**.

[![The Kirchhoff's voltage law](https://upload.wikimedia.org/wikipedia/commons/4/40/Kirchhoff_voltage_law.svg#center "The Kirchhoff's voltage law")](https://fr.wikipedia.org/wiki/Lois_de_Kirchhoff#/media/Fichier:Kirchhoff_voltage_law.svg)

In this image, we can see a mesh from a larger circuit. According to this law, the sum of the voltages present in this image is equal to zero. Here :

$$\text{v1} + \text{v2} + \text{v3} + \text{v4} = 0$$

If we take an example with a supply voltage of 5 V and assume that "R1 = R2 = R3", in other words that the voltage across each resistor is equal. We would then have :

$$\text{v1} = \text{v2} = \text{v3} = \text{v4} / 3$$

That's 1.66...V per resistor. But now you're probably wondering: "But 5 + 1.66 + 1.66 +1.66 makes 10, not 0" and yes, seen like that, the result is indeed 10V. But there's a problem, because a resistor **opposes** the flow of current, so here the voltage **falls** by 1.66V between the input and output of the resistor. If you look again at [the voltage divider](#the-voltage), you'll notice that the arrows representing the voltages U1 and U2 are in the opposite direction to the arrow representing the supply voltage U. This is precisely because the resistance opposes the flow of current. So, if we take up our calculation where we left off, but this time if we invert the voltages across the resistors, we obtain :

$$5 - 1.66 - 1.66 - 1.66 = 0V$$

Which is exactly what we expected.

**Note 1**: To calculate a potential difference, simply subtract the voltage before the component from the voltage after (this gives the delta). On the last diagram, v1 can also be called "Uab", i.e. "The voltage difference between point **a** and point **b**". We can therefore calculate it by doing **Uab = Ua - Ub** (Note that a negative voltage is a positive voltage in the other direction -> -Uab = Uba - simply reverse the direction of the arrow).

**Note 2**: When you have the name of the potential difference, Uab for example, the arrow starts from the 2nd letter and points to the first.

**Note 3**: The voltage law can be verified in both directions of rotation. Choose the one that suits you best. Just remember to put all the voltages in the right direction.

### Resistance and Ohm's law

#### The electrical resistance

I've used it a lot as an example above in this article and now it's time to clarify the definition of **electrical resistance**.

Electrical resistance is the property of a conductor to resist the passage of current. Put more simply, the greater the resistance of a conductor, the lower the current for a given voltage. Conversely, if the resistance of the conductor is lower, the current will be higher.

#### The Ohm's law

Ohm's law is the empirical law named after **Georg Simon Ohm** who published it in 1827, which relates the intensity of the electric current flowing through a conductor to the voltage at its terminals. It states that :

$$\text{U} = \text{R} * \text{I}$$

Where :
- U is the voltage in **Volts** (V)
- R is the resistance in **Ohms** (Ω)
- I is the current in **Ampere** (A)

A component that respects Ohm's law is called an **ohmic** conductor (we will see in other articles that this is not always the case). A resistor is an example of an ohmic conductor.

The main characteristic of a resistor is that it offers a greater or lesser resistance (measured in ohms) to the flow of electric current, so by convention it is called a resistance.

#### Implications of Ohm's law

- Ohm's law can be used to find the third value when there are only two. "I = U/R" is used to find the current, "R = U/I" is used to find the resistance and "U = R*I" is used to find the voltage. 
- The value of the resistance can be considered as a proportionality coefficient between the value of the voltage and the current. If we draw the characteristic of a resistor (i.e. the curve of voltage versus current) we obtain a straight line passing through the origin, the slope of which is the value of the resistor.

### Power and energy

#### The power

The power passing through a conductor is calculated using the following formula:

$$\text{P} = \text{U} * \text{I}$$

Where :
- P is the power in **Watts** (W)
- U is the voltage in **Volts** (V)
- I is the current in **Ampere** (A)

The power corresponds to the flow of electrical energy received by the conductor (**Please note!** It's not the flow of electrical charge/electrical flux passing through the conductor, i.e. [the intensity](#electric-charge-current-and-kirchhoffs-current-law), it's a flow of **energy**). Hence this equally valid formula:

$$\text{P} = \text{W} / \text{t}$$

Where :
- P is the power in **Watts** (W)
- W is the amount of energy in **Joules** (J)
- t is the time in **seconds** (A)

#### The energy

The amount of electrical energy consumed by a conductor over a given period of time is given by the following formula :

$$\text{W} = \text{P} * \text{t}$$

Using the same units as the formula above.

**Note 1**: Using Ohm's law, we can find new formulas for calculating energy. For example: **W = U * I * t**, or **W = R * I² * t**. It's up to you to play with the formulas according to the information you have!

**Note 2**: Using the formula **W = P * t**, we can deduce that one Joule corresponds to a power of one Watt for a duration of one second, i.e. **1Ws**.

**Note 3**: 1kWh = 1000Wh = 1000 * (3600 J) = 3.6 * 10^6 J = **3.6MJ**

**Note 4**: 1 hp (horsepower) = 736W

&nbsp;