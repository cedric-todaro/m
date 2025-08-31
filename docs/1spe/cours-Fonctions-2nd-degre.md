---
title: Fonctions du 2nd degré
classe: 1^spé^
toc: true
---

# Définition et propriété

## Définition : fonction polynôme de degré 2

\definition

On appelle **fonction polynôme de degré 2** toute fonction $f$ définie sur $\R$ par :

$$\boxed{f\pa{x} = ax^{2} + bx + c}$$

où les coefficients **a**, **b** et **c** sont des réels donnés avec $a \neq 0$.

\rem

Une fonction polynôme de degré 2 s'appelle également fonction **trinôme du second degré** ou par abus de langage **"trinôme"**.

\bw{r}{5cm}\ul{Rappel$^{\text{\faHeart}}$ :}\begin{itemize}\item $(a+b)^2=a^2+2ab+b^2$\item $(a-b)^2=a^2-2ab+b^2$\item $(a-b)(a+b)=a^2-b^2$\end{itemize}\ew

\exemple (et contre-exemples)

\ms

- $f\pa{x}= 3x^{2} - 7x + 3$
  - \faHandORight\quad Fonction du 2$^\text{nd}$ degré avec $a=3$ , $b=-7$ et $c=3$

\ms

- $g\pa{x}= \dfrac{1}{2}x^{2} - 5x + \dfrac{3}{5}$
  - \faHandORight\quad Fonction du 2$^\text{nd}$ degré avec $a=\dfrac{1}{2}$ , $b=-5$ et $c=\dfrac{3}{5}$

\ms

- $h\pa{x}= 4 - 2x^{2}$
  - \faHandORight\quad Fonction du 2$^\text{nd}$ degré avec $a=-2$ , $b=0$ et $c=4$

\ms

- $k\pa{x}= \left( x - 4 \right)\left( 5 - 2x \right)$
  - \faHandORight\quad Fonction du 2$^\text{nd}$ degré car : $(x-4)(5-2x)=5x-2x^2-20+8x=-2x^2+13x-20$

\ms

- $m\pa{x}= 5x - 3$
  - \faWarning\quad Fonction polynôme de degré 1 (fonction affine).

\ms

- $n\pa{x}= 5x^{4} - 7x^{3} + 3x - 8$
  - \faWarning\quad Fonction polynôme de degré 4.

\newpage

# Variations et représentation graphique

\exemple Soit $f(x) = 2x^2-4x+5$.

Pour représenter $f$ dans un repère, nous pouvons calculer quelques valeurs de $f(x)$.

- $f(-2)=2\times (-2)^2-4\times (-2)+5=21$
- $f(-1)=2\times (-1)^2-4\times (-1)+5=11$
- $f(0)=2\times (0)^2-4\times (0)+5=5$
- $\ldots$

\ms

- \ul{Tableau de valeurs}

|  $x$   | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$  | $4$  |
| :----: | :--: | :--: | :-: | :-: | :-: | :--: | :--: |
| $f(x)$ | $21$ | $11$ | $5$ | $3$ | $5$ | $11$ | $21$ |

\bw{r}{3cm}\cimg{3cm}{img/parabole.jpg}\ew

- \ul{Représentation graphique}

La représentation graphique d'une fonction du 2$^{\text{nd}}$ degré est une **parabole**.

\cimg{7cm}{img/01}

## Propriété : Minimum et maximum

Soit $f$ une fonction définie par $f(x) = ax^2+bx+c$, avec $a \neq 0$.

- Si $a > 0$, $f$ admet un **minimum** pour $x=\dfrac{-b}{2a}$.
  - Ce **minimum** est égal à $f\left(\dfrac{-b}{2a}\right)$.
- Si $a \less  0$, $f$ admet un **maximum** pour $x=\dfrac{-b}{2a}$.
  - Ce **maximum** est égal à $f\left(\dfrac{-b}{2a}\right)$.

On appelle $\alpha$ la valeur $\left(\dfrac{-b}{2a}\right)$ et $\beta$ la valeur $f\left(\dfrac{-b}{2a}\right)$.

\bw{r}{6cm}\vspace{-6cm}\cimg{4cm}{img/02}\vspace{-4cm}\ew

$$\boxed{\alpha=\dfrac{-b}{2a}\qquad\beta=f\left(\dfrac{-b}{2a}\right)}$$

## Propriété : Variations de $f(x)=ax^2+bx+c$

|      Si $a>0$ alors ...       |    Si $a\less 0$ alors ...    |                            |
| :---------------------------: | :---------------------------: | :------------------------: |
| ![](img/tab01.png){width=6cm} | ![](img/tab02.png){width=6cm} | ![](img/00.png){width=5cm} |

\newpage

\methode \ul{Etudier les variations d'une fonction du 2$^\text{nd}$ degré}

\bw{r}{5cm}\cimg{5cm}{img/05}\ew

\ms

Soit $f$ définie sur $\R$ par $f\pa{x}= -x^{2} + 4x - 1$.

On a $\quad a=-1$ , $b=4$ et $c=-1$.

\ms

Donc :

- $\alpha=\dfrac{-b}{2a} = \dfrac{-4}{2\times (-1)}= 2$
- $\beta=f(\alpha)=f(2)=-(2)^2+4\times 2 -1 =3$

\ms

Le sommet de la parabole est le point $S(2;3)$.

\ms

- $a\less 0$ donc le tableau de variations de $f$ est :

\cimg{9cm}{img/04.png}

# Forme factorisée

\bw{4}{5cm}\vspace{-3cm}
\ul{Rappel $^{\text{\faHeart}}$}
\begin{itemize}
\item $(a+b)^2=a^2+2ab+b^2$
\item $(a-b)^2=a^2-2ab+b^2$
\item $(a-b)(a+b)=a^2-b^2$
\end{itemize}
\ew

Il se peut que le polynôme du 2$^\text{nd}$ degré ne se présente pas sous la forme **developpée** mais sous une forme **factorisée** comme par exemple :

$$f(x)= (x-1)(x-2)$$

En effet :

$$
\begin{aligned}
f(x) & = (x-1)(x-2)\\
    & = x^2-2x-1x+2\\
    & = x^2-3x+2\qquad\Rarr a=1 \text{ , } b=-3 \text{ et } c=2
\end{aligned}
$$

## Définition : Forme factorisée

Soit $f$ une fonction définie sur $\R$ tel que :

$$\boxed{f(x)=a(x-x_1)(x-x_2)}$$

$f$ est la forme **factorisée** d'une fonction du 2$^\text{nd}$ degré.

$x_1$ et $x_2$ sont les **racines** de $f$

\bw{4}{5cm}\vspace{-4cm}
Points d'intersections entre $\Cf$ et l'axe des abscisses.
\begin{tikzpicture}\begin{axis}[x=1.0cm,y=1.0cm,axis lines=middle,xmin=-0.75,xmax=4.25,ymin=-1,ymax=4,xtick={-2.0,-6},ytick={-3.0,5.5}]
\draw[line width=2pt,color=blue,smooth,samples=30,domain=-0.6:3.85] plot(\x,{0.8*(\x)^(2)-2.6*(\x)+1.3});
\draw (0.1,-0.07) node[anchor=north west] {${x_1}$};\draw (2.5,-0.07) node[anchor=north west] {${x_2}$};
\draw [fill=red] (0.6172177814626812,0.) circle (2.5pt);\draw [fill=red] (2.6327822185373186,0.) circle (2.5pt);
\end{axis}\end{tikzpicture}\vspace{-5cm}
\ew

\ms

\rem Les **racines** de $f$ sont solutions de l'équation $f(x)=0$.

- $f(x_1) = a(x_1 - x_1)(x_1 - x_2)=0$
- $f(x_2) = a(x_2 - x_1)(x_2 - x_2)=0$

\vspace{1cm}

\exemple $\quad f(x)=3(x-1)\left(x+2\right)\quad=3(x-1)\Big(x- \left(-2\right)\Big)$

$f$ est une fonction du 2$^\text{nd}$ degré sous forme factorisée avec $a=3$ , $x_1=1$ et $x_2=-2$

\ms

\exemple $\quad f(x)=(2x-6)(x-12)$

Pour faire apparaître la forme factorisée il faut modifier l'écriture de $(2x-6)$

On a : $(2x-6)=2(x-3)~\text{donc}~f(x)=2(x-3)(x-12)$

$f$ est une fonction du 2$^\text{nd}$ degré avec $a=2$ , $x_1=3$ et $x_2=12$

\ms

\exemple $\quad f(x)=(3-x)(2x+1)$

On a : $\qquad (3-x)=-(x-3)\quad$ et $\quad(2x+1)=2\left(x+\frac{1}{2}\right)$

Donc $\qquad f(x)=-(x-3)\times 2\left(x+\frac{1}{2}\right)\quad=-2(x-3)\left(x+\frac{1}{2}\right)$

$f$ est une fonction du 2$^\text{nd}$ degré avec $a=-2$ , $x_1=3$ et $x_2=-\dfrac{1}{2}$

\newpage

## Propriété : Racines de $f(x)$

\prop

Soit $f$ une fonction définie sur $\R$ tel que $f(x)=ax^2+bx+c~$ et $~x_1~$,$~x_2~$ les solutions de l'équation $f(x)=0$.

Alors la forme **factorisée** de $f$ est : $f(x)=a(x-x_1)(x-x_2)$

\exemple $\quad f(x)=3(x-1)(x+2)$

$f$ est une fonction du 2$^\text{nd}$ degré sous forme factorisée avec $a=3$ , $x_1=1$ et $x_2=-2$.

D'autre part, $f(x)=3\left(x^2 + 2x - 1x -2\right)=3x^2+3x-6$

Donc $x_1=1~$ et $~x_2=-2~$ sont solutions de l'équation $~3x^2+3x-6=0$

# Résolution d'équations du 2$^\text{nd}$ degré

Résoudre une équation du 2$^\text{nd}$ degré, c'est résoudre une équation du type :

$$ax^2+bx+c=0$$

## Définition : Discriminant

On appelle **discriminant** du trinôme $ax^{2} + bx + c$, le nombre réel, noté $\Delta$, égal à $b^{2} - 4ac$.

$$\boxed{\Delta = b^2-4ac}$$

## Propriété : Solutions de $ax^2+bx+c=0$

Soit $\Delta$ le discriminant du trinôme $ax^{2} + bx + c$.

- Si $\Delta \less  0$ : L'équation $ax^{2} + bx + c = 0$ n'a **pas de solution réelle**.
- Si $\Delta = 0$ : L'équation $ax^{2} + bx + c = 0$ a **une unique solution** : $\boxed{x_{0}=\dfrac{- b}{2a}}$
- Si $\Delta > 0$ : L'équation $ax^{2} + bx + c = 0$ a **deux solutions distinctes** :

$$\boxed{x_{1} =\dfrac{- b - \sqrt{\Delta}}{2a}\qquad x_{2} =\dfrac{- b + \sqrt{\Delta}}{2a}}$$

\ms

\exemple. :\quad On cherche à résoudre $\quad 2x^{2} - x - 6 = 0$

Calculons le discriminant :

$a=2$, $b=-1$ et $c=-6$ donc

$$\Delta = b^{2} - 4ac\quad= (-1)^{2} - 4\times 2 \times (-6)\quad = 49>0$$

Comme $\Delta > 0$, l'équation possède deux solutions distinctes :

$$x_{1} =\dfrac{- b - \sqrt{\Delta}}{2a}\qquad\text{et}\qquad x_{2} =\dfrac{- b + \sqrt{\Delta}}{2a}$$

|                                                       Calcul de $x_1$                                                        |                                                 Calcul de $x_2$                                                 |
| :--------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: |
| $\begin{aligned}x_{1} &=\dfrac{-b-\sqrt{\Delta}}{2a}\\&=\dfrac{-\pa{-1}-\sqrt{49}}{2\times 2}\\&=-\dfrac{3}{2}\end{aligned}$ | $\begin{aligned}x_{2}&=\dfrac{-b+\sqrt{\Delta}}{2a}\\&=\dfrac{-\pa{-1}+\sqrt{49}}{2\times 2}\\&=2\end{aligned}$ |

Les solutions de l'équation $~2x^{2} - x - 6 = 0~$ sont $S=\left\{ -\dfrac{3}{2}~;~2 \right\}$

\newpage

\exemple $\quad 2x^{2} - 3x + \dfrac{9}{8} = 0$

\ms

Calculons le discriminant :

$a=2$, $b=-3$ et $c=\frac{9}{8}\quad$ donc $\quad\Delta = b^{2} - 4ac = (-3)^{2}- 4\times 2 \times \frac{9}{8} = 0$

\ms

Comme $\Delta = 0$, l'équation possède une unique solution :

$$x_{0}=-\dfrac{b}{2a}=-\dfrac{-3}{2 \times 2}=\dfrac{3}{4}$$

\exemple \quad $x^{2} + 3x + 10 = 0$

\ms

$a=1$, $b=3$ et $c=10\quad$ donc $\quad \Delta = b^{2} - 4ac = 3^{2} - 4 \times 1 \times 10 = -31$

Comme $\Delta \less  0$, l'équation ne possède pas de solution réelle.

## Propriété : Somme et produit de racines

La somme $S$ et le produit $P$ des **racines** d’un polynôme du 2$^\text{nd}$ degré de la forme $ax^{2} + bx + c = 0$ sont donnés par :

$$S=-\dfrac{b}{a}\qquad\text{et}\qquad P=\dfrac{c}{a}$$

\demo

Soit $x_1$ et $x_2$ les solutions de $x^2+bx+c=0$ alors
$$x_{1}=\dfrac{-b-\sqrt{\Delta}}{2a}\qquad\text{et}\qquad x_{2}=\dfrac{-b+\sqrt{\Delta}}{2a}$$

- Donc, la somme des **racines** est $S=x_1 + x_2$ :

$$
\begin{aligned}
S & = x_1 + x_2\\
& = \dfrac{-b-\sqrt{\Delta}}{2a}+\dfrac{-b+\sqrt{\Delta}}{2a}\\
& = \dfrac{(-b-\sqrt{\Delta})+(-b+\sqrt{\Delta})}{2a}= \dfrac{-2b}{2a} = \dfrac{-b}{a}
\end{aligned}
$$

- Le produit des **racines** est $P=x_1 \times x_2$ :

$$
\begin{aligned}
P & = x_1 \times x_2\\
& = \dfrac{-b-\sqrt{\Delta}}{2a} \times \dfrac{-b+\sqrt{\Delta}}{2a} = \dfrac{(-b-\sqrt{\Delta})\times(-b+\sqrt{\Delta})}{2a\times 2a}\\
& = \dfrac{ (-b)^2 + \left((-b) \times \sqrt{\Delta}\right) + \left(\left(-\sqrt{\Delta}\right) \times (-b)\right) + \left(\left(-\sqrt{\Delta}\right) \times \sqrt{\Delta}\right) }{4a^2}\\
& = \dfrac{b^2 - \Delta}{4a^2} = \dfrac{b^2 - (b^2-4ac)}{4a^2} = \dfrac{4ac}{4a^2} = \dfrac{c}{a}
\end{aligned}
$$

## Propriété : Forme factorisée de $ax^2+bx+c$

\prop

Soit $f$ une fonction polynôme de degré $2$ définie sur par $f\pa{x}= ax^{2} + bx + c$.

- Si $\Delta = 0$ : Pour tout réel $x$, on a : $f\pa{x}= a\left( x - x_{0} \right)^{2}$.
- Si $\Delta > 0$ : Pour tout réel $x$, on a : $f\pa{x}= a\left( x - x_{1} \right)\left( x - x_{2} \right)$.

\rem Si $\Delta \less  0$, il n’existe pas de forme factorisée de $f$.

\methode \ul{Factoriser un trinôme}

Factorisons le trinôme suivant : ${4x}^{2} + 19x - 5$

On cherche les racines du trinôme ${4x}^{2} + 19x - 5$

On a $a=4$ , $b=19$ et $c=-5$ donc

$$\Delta = 19^2 - 4 \times 4 \times (-5) = 441$$

\newpage

Les racines du trinôme sont :

\bw{r}{5cm}\vspace{-5mm}Une vérification à l'aide de la calculatrice n'est jamais inutile !\par On peut lire une valeur approchée des racines sur l'axe des abscisses.\ew

|                                  Calcul de $x_1$                                   |                                       Calcul de $x_2$                                        |
| :--------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: |
| $\begin{aligned}x_{1}&=\dfrac{-19-\sqrt{441}}{2\times 4}\\&=-5\end{aligned}\qquad$ | $\begin{aligned}x_{2}&=\dfrac{-19+\sqrt{441}}{2\times 4}\\&=\dfrac{1}{4}\end{aligned}\qquad$ |
|                                                                                    |                                                                                              |
|                             ![](img/06.png){width=5cm}                             |                                  ![](img/07.png){width=5cm}                                  |

On a donc :

$$
\begin{array}{rcll}
{4x}^{2}+19x-5 & = a&\left(x-x_1\right)&\left(x-x_2\right)\\
& = 4&\left(x-\left(-5\right)\right)&\left(x-\frac{1}{4}\right)\\
& = 4&\left(x+5\right)&\left(x-\frac{1}{4}\right) \quad=(x+5)(4x-1)
\end{array}
$$

\ms

\exemple Factorisons le trinôme suivant : ${9x}^{2} - 6x + 1$

\ms

On cherche les racines du trinôme ${9x}^{2} - 6x + 1$

On a $a=9$ , $b=-6$ et $c=1$ donc $\Delta = (-6)^2 - 4 \times 9 \times (1) = 0$

La racine du trinôme est : $x_{0} = \dfrac{-(-6)}{2 \times 9} = \dfrac{1}{3}$

On a donc : ${9x}^{2}-6x+1=9\left(x-\dfrac{1}{3}\right)^2$

## Propriété : Les différentes représentations possibles de $f$

\prop En fonction du signe de $a$ et de $\Delta$, nous pouvons en déduire les représentations de $f$.

\ms

- \ul{Pour $a>0$}

|          $\Delta>0$           |          $\Delta=0$           |        $\Delta\less 0$        |
| :---------------------------: | :---------------------------: | :---------------------------: |
| ![](img/img11.png){width=3cm} | ![](img/img13.png){width=3cm} | ![](img/img12.png){width=3cm} |

- \ul{Pour $a\less 0$}

|          $\Delta>0$           |          $\Delta=0$           |        $\Delta\less 0$        |
| :---------------------------: | :---------------------------: | :---------------------------: |
| ![](img/img14.png){width=3cm} | ![](img/img15.png){width=3cm} | ![](img/img16.png){width=3cm} |

\newpage

# Forme canonique

## Définition : Forme canonique

\definition

Toute fonction $f$ de degré 2 définie sur $\R$ par $f\pa{x}= ax^{2} + bx + c$ peut s'écrire sous la forme :

$$\boxed{f\pa{x}= a\left( x - \alpha \right)^{2} + \beta}$$

$\ldots$ où $\alpha$ et $\beta$ sont deux nombres réels.

Cette dernière écriture s'appelle la **forme canonique** de $f$.

\exemple

\ms

$f(x)=2(x-1)^2+3$ est une fonction du 2$^\text{nd}$ degré sous forme \*\*canonique avec $a=2$ , $\alpha=1$ et $\beta=3$.

En effet,

$$\begin{aligned}f(x) & = 2(x-1)^2+3 \\ & = 2(x^2-2x+1)+3 \\ & = 2x^2-4x+2+3 = 2x^2-4x+5\end{aligned}$$

Donc $a=2~$ , $~b=-4~$ et $~c=5$

\ms

\methode \ul{Déterminer la forme canonique d'une fonction du 2$^\text{nd}$ degré}

\ms

Soit la fonction $f$ définie sur $\R$ par : $f\pa{x}= 2x^{2} - 20x + 10$. On veut exprimer la fonction $f$ sous sa forme canonique.

$$
\begin{aligned}
f\left(x\right) & = 2x^{2}-20x+10\\
& = 2\left\lbrack x^{2}-10x\right\rbrack+10\\
& = 2\left\lbrack x^{2}-10x+25-25\right\rbrack+10\\
& = 2\left\lbrack\left(x-5\right)^{2}-25\right\rbrack+10\\
& = 2\left(x-5\right)^{2}-50+10\qquad = 2\left(x-5\right)^{2}-40
\end{aligned}
$$

On a donc $~\alpha=5~$ et $~\beta=-40~$ et $~f(x) = 2\left( x - 5 \right)^{2} - 40$ est la forme **canonique** de $f$.

\ms

\demo

$$
\begin{aligned}
f\pa{x}& =  ax^{2} + bx + c \\
& =  a\left\lbrack x^{2}+\frac{b}{a}x\right\rbrack + c\\
& =  a\left\lbrack x^{2}+\frac{b}{a}x+\left(\frac{b}{2a}\right)^{2}-\left(\frac{b}{2a}\right)^{2}\right\rbrack + c\\
& =  a\left\lbrack \left( x + \frac{b}{2a} \right)^{2} - \left( \frac{b}{2a} \right)^{2} \right\rbrack + c \\
& =  a\left( x + \frac{b}{2a} \right)^{2} - a\frac{b^{2}}{4a^{2}} + c\\
&= a\left( x + \frac{b}{2a} \right)^{2} - \frac{b^{2}}{4a} + c \qquad =  a\left( x + \frac{b}{2a} \right)^{2} - \frac{b^{2} - 4ac}{4a}\qquad=a\left( x - \alpha \right)^{2} + \beta
\end{aligned}
$$

avec $\quad\alpha = -\dfrac{b}{2a}\quad$ et $\quad\beta = f(\alpha) = -~\dfrac{b^{2} - 4ac}{4a}$.

\rem

\ms

Pour écrire un trinôme sous sa forme canonique, il est possible d’utiliser les deux dernières formules donnant $\alpha$ et $\beta$.

$$\boxed{\alpha = -\dfrac{b}{2a}}\qquad{\boxed{\beta = f(\alpha) = - \dfrac{b^{2} - 4ac}{4a}}}$$

\newpage

\methode \ul{Déterminer la forme canonique d'une fonction du 2\nd degré}

\ms

Soit la fonction $f$ définie sur $\R$ par : $f\pa{x}= 2x^{2} - 20x + 10$.

On veut exprimer la fonction $f$ sous sa forme canonique.

On a $~a=2$ , $~b=-20~$ et $~c=10~$ donc

$$\alpha=-\dfrac{b}{2a}\qquad=-\dfrac{-20}{2\times2}\qquad=5$$

Calculons $\beta$ :

$$\beta = f(\alpha)\qquad = 2\times 5^{2} - 20\times 5 + 10\qquad = 50-100+10 \qquad = 40$$

\ms

On a donc $\alpha=5\quad$ et $\quad\beta=-40\quad$ donc $\quad f(x) = 2\left( x - 5 \right)^{2} - 40$

\ms

\exemple Soit la fonction $f$ donnée sous sa forme canonique par :

$$f\pa{x}= 2\left( x - 1 \right)^{2} + 3$$

On a :

$$
\begin{aligned}
& \left( x - 1 \right)^{2} > 0 \\
\Lrarr\quad & 2\left( x - 1 \right)^{2} >  0 \\
\Lrarr\quad & 2\left( x - 1 \right)^{2} +3 > 3 \quad\Lrarr\quad f(x) > 3 \\
\end{aligned}
$$

Or $f\left( 1 \right) = 3~$ donc $~f\pa{x}\ge f(1)$.

\ms

$f$ admet donc un minimum en $x=1$. Ce minimum est égal à $3$.

## Propriété : Mini. et maxi. à l'aide de la forme canonique

\bw{4}{5cm}\vspace{-15mm}
\begin{tikzpicture}\begin{axis}[x=1.0cm,y=1.0cm,axis lines=middle,xmin=-2,xmax=3,ymin=-1.5,ymax=5,xtick={-2.5,4.0},ytick={-2,6},]
\draw[line width=2pt,color=blue,smooth,samples=50,domain=-1.14:3] plot(\x,{0.7*(\x)^(2)-1.3*(\x)+1.9});
\draw (0.7175718275536397,-0.2) node[anchor=north west] {$\alpha=\dfrac{-b}{2a}$};
\draw (-1.,1.5) node[anchor=north west] {$f(\alpha)$};
\draw [line width=1pt,dash pattern=on 2pt off 2pt] (0.9285714285714287,0.)-- (0.9285714285714287,1.2964285714285713);
\draw [line width=1pt,dash pattern=on 2pt off 2pt] (0.9285714285714287,1.2964285714285713)-- (0.,1.2964285714285713);
\draw [fill=red] (0.9285714285714287,1.2964285714285713) circle (3.0pt);
\end{axis}\end{tikzpicture}
\ew

\prop

Soit $f$ une fonction polynôme de degré 2 définie par $f(x) = a\left( x - \alpha \right)^{2} + \beta$

- Si $a > 0$, $f$ admet un **minimum** pour $x = \alpha$. Ce **minimum** est égal à $\beta$.
- Si $a \less  0$, $f$ admet un **maximum** pour $x = \alpha$. Ce **maximum** est égal à $\beta$.

\ms

\rem

On peut retenir que $f$ admet un maximum (ou un minimum) pour $\boxed{x = \dfrac{-b}{2a}}$

\ms

\methode \ul{Déterminer les caractéristiques d’une parabole}

\ms

Déterminons l’axe de symétrie et le sommet de la parabole d’équation $$y = 2x^{2} - 12x + 1$$

La parabole possède un axe de symétrie d'équation $x = \dfrac{-b}{2a}=\dfrac{-(- 12)}{2 \times 2} = 3$

\ms

La droite d’équation $x = 3$ est donc **axe de symétrie** de la parabole.

\ms

Les coordonnées de son sommet sont $\coordl{\dfrac{-b}{2a}}{f\pa{\dfrac{-b}{2a}}}$

\ms

Donc $S\left( 3~;~2 \times 3^{2} - 12 \times 3 + 1 \right)\Rarr\quad S\left( 3\ ;\ - 17 \right)$

\ms

Le point $S\left( 3\ ;\  - 17 \right)$ est le sommet de la parabole.

\bw{r}{9cm}\vspace{-3cm}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
x=0.9cm,y=0.15cm,
axis lines=middle,
xmin=-1,xmax=7,ymin=-20,ymax=15,
]
\draw[line width=2pt,color=red,smooth,samples=50,domain=-1:7] plot(\x,{2*(\x)^(2)-12*(\x)+1});
\draw[line width=1pt, dashed] (3,0) -- (3,-17);
\draw[line width=1pt, dashed] (0,-17) -- (3,-17);
\draw[fill=blue] (3,-17) circle (2pt);
\node[anchor=north west] at (3,-17) {$S\coordl{3}{-17}$};
\end{axis}
\end{tikzpicture}
\end{center}
\vspace{-4cm}
\ew

\ms

$a = 2 > 0$, ce sommet correspond à un **minimum**.

\newpage

\demo \ul{Solutions de l'équation $ax^2+bx+c=0$}

\ms

La fonction $f$ définie sur $\R$ par $f\pa{x}= ax^{2} + bx + c$ peut s'écrire sous sa forme canonique :

$f(x) = a\left( x - \alpha \right)^{2} + \beta\quad$ avec $\quad\alpha = \frac{-b}{2a}~$ et $~\beta =-~\frac{b^{2} - 4ac}{4a}$.

Donc $\quad ax^{2} + bx + c = 0$ peut s’écrire :

$$
\def\arraystretch{1.7}\begin{array}{rrcl}
     ~ & a\left( x + \frac{b}{2a} \right)^{2} - \frac{b^{2} - 4ac}{4a}  & = & 0 \\
\Lrarr & a\left( x + \frac{b}{2a} \right)^{2} - \frac{\Delta}{4a}  & =& 0 \\
\Lrarr & a\left( x + \frac{b}{2a} \right)^{2}  & = & \frac{\Delta}{4a} \\
\Lrarr & \left( x + \frac{b}{2a} \right)^{2}  & = & \frac{\Delta}{4a^{2}} \text{\quad car  } a \neq 0
\end{array}
$$

On a donc $~\boxed{ax^{2} + bx + c = 0\Lrarr\left( x + \frac{b}{2a} \right)^{2}=\frac{\Delta}{4a^{2}}}$

\vspace{3mm}

- \ul{Si $\Delta \less  0$}$\quad\Rarr \frac{\Delta}{4a^{2}} \less  0\quad\Rarr \left( x + \frac{b}{2a} \right)^{2}\less 0$

Impossible car un carré est toujours positif donc l'équation $ax^{2} + bx + c = 0$ n'a pas de solution.

\vspace{3mm}

- \ul{Si $\Delta = 0$}$\quad\Rarr \left( x + \frac{b}{2a} \right)^{2}=0$

L'équation n'a qu'une seule solution : $x = \frac{-b}{2a}$

\vspace{3mm}

- \ul{Si $\Delta > 0$} , il faut résoudre $~\left( x + \frac{b}{2a} \right)^{2}=\frac{\Delta}{4a^{2}}$

|                                                                                                                             Solution n°1                                                                                                                              |                                                                                                                             Solution n°2                                                                                                                              |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| $\def\arraystretch{3}\begin{array}{rl}x_1+\dfrac{b}{2a}&=+\sqrt{\dfrac{\Delta}{4a^{2}}}\\x_1&=+\sqrt{\dfrac{\Delta}{4a^{2}}}-\dfrac{b}{2a}\\x_1&=\dfrac{+\sqrt{\Delta}}{2a}-\dfrac{b}{2a}\\x_1&=\dfrac{+\sqrt{\Delta}-b}{2a}=\dfrac{-b+\sqrt{\Delta}}{2a}\end{array}$ | $\def\arraystretch{3}\begin{array}{rl}x_2+\dfrac{b}{2a}&=-\sqrt{\dfrac{\Delta}{4a^{2}}}\\x_2&=-\sqrt{\dfrac{\Delta}{4a^{2}}}-\dfrac{b}{2a}\\x_2&=\dfrac{-\sqrt{\Delta}}{2a}-\dfrac{b}{2a}\\x_2&=\dfrac{-\sqrt{\Delta}-b}{2a}=\dfrac{-b-\sqrt{\Delta}}{2a}\end{array}$ |

L'équation a deux solutions distinctes :

$$x_1 = \dfrac{-b+\sqrt{\Delta}}{2a}\qquad\text{et}\qquad x_2 = \dfrac{-b-\sqrt{\Delta}}{2a}$$
