---
title: Trigonométrie
classe: 1^spé^
toc: true
---

# Cercle trigonométrique et radian

## Définition : Sens direct

\definition

Sur un cercle, on appelle **sens direct**, **sens positif** ou **sens trigonométrique**, le sens **_contraire_** des aiguilles d'une montre.

## Définition : Cercle trigonométrique

Dans le plan muni d'un repère orthonormé $\vOIJ$ et orienté dans le sens direct, le **cercle trigonométrique** est le cercle de centre $O$ et de rayon $1$.

\cimg{9cm}{img/01a}

\newpage

\bw{r}{6cm}\cimg{6cm}{img/01a}\ew

\rem

- Le périmètre du cercle trigo. est de :

  $$\mathcal{C}=2\pi R=2\pi$$

- Le périmètre du demi-cercle est de :

  $$\frac{\mathcal{C}}{2}=\frac{2\pi}{2}=\pi$$

- L'arc $\wideparen{AB}$ est le quart du cercle donc sa longueur est :

  $$\wideparen{AB}=\frac{1}{4}\times 2\pi=\frac{\pi}{2}$$

\ms

\rem

L'arc $\wideparen{AC}$ (en rose), c'est $\frac{5}{8}$ du cercle donc sa longueur est :

$$\wideparen{AC}=\frac{5}{8}\times 2\pi=\frac{5\pi}{4}$$

\cimg{12cm}{img/03}

La longueur du cercle trigonométrique est égale à $2\pi$.

Ainsi, à un tour complet sur le cercle, on peut faire correspondre le nombre réel $2\pi$.

On définit alors une nouvelle unité d'angle : **le radian**, tel qu'un tour mesure $360^\circ$ ou $2\pi$ radians.

\ms

\cimg{12cm}{img/04}

\rem Pour faire correspondre l'angle en degré avec l'angle en radians on peut utiliser un tableau de proportionnalité.

$$
\def\arraystretch{2.5}\begin{array}{|c|c|c|c|c|c|c|c|c|}\hline
\rule[-5mm]{0cm}{1cm}\text{Degré}  & 360^\circ & 180^\circ & 90^\circ       & 45^\circ      & 10^\circ       & 1^\circ         & 150^\circ                         & 67.5^\circ\\ \hline
\rule[-5mm]{0cm}{1cm}\text{Radian} & 2\pi      & \pi       & \dfrac{\pi}{2}  & \dfrac{\pi}{4} & \dfrac{\pi}{18} & \dfrac{\pi}{180} & \dfrac{150\pi}{180}=\dfrac{5\pi}{6} & \dfrac{3\pi}{8}\\ \hline
\end{array}
$$

- Pour $10^\circ\rarr\quad \dfrac{10^\circ\times\pi}{180}=\dfrac{\pi}{18}$ radians
- Pour $\dfrac{3\pi}{8}$ rad.$~\rarr\quad \dfrac{\dfrac{3\pi}{8}\times 180}{\pi}=67.5^\circ$
- etc...

\newpage

## Définition : Le radian

\bw{r}{5cm}\vspace{-1cm}\cimg{5cm}{img/05}\vspace{-2cm}\ew

\definition

On appelle **1 radian**, noté **1 rad**, la mesure de l'angle au centre qui intercepte un arc de longueur $1$ du cercle trigonométrique.

\ms

**\ul{Angles remaquables$^{\text{\faHeart}}$}**

\ms

\cimg{12cm}{img/06}

# Image d'un nombre sur le cercle trigonométrique

## Propriété : Image d'un nombre

A tout nombre $x$, on peut aasocier un point $M$ du cercle trigonométrique :

- \ul{Si $x\ge 0$ :}
  - On parcourt dans le **sens direct** un chemin de longueur $x$ en partant de $A$ et on place $M$.

\ms

- \ul{si $x\le 0$ :}
  - On parcourt dans le **sens indirect** un chemin de longueur $(-x)$ en partant de $A$ et on place $M$.

\ms

On dit que $M$ est l'image de $x$ sur le cercle trigonométrique

|          $x\ge 0$           |          $x\le 0$           |
| :-------------------------: | :-------------------------: |
| ![](img/07a.png){width=7cm} | ![](img/07b.png){width=7cm} |

\newpage

\exemple $\quad\boxed{x=\dfrac{3\pi}{4}}$

\bw{r}{8cm}\vspace{-1cm}\cimg{6cm}{img/08}\vspace{-2cm}\ew

On a $\quad \dfrac{3\pi}{4}\text{ rad.}=135^\circ\quad$ donc la longueur de $\wideparen{AM}=\dfrac{3\pi}{4}$

\exemple $\quad\boxed{x=\dfrac{-5\pi}{6}}$

On a $\quad \dfrac{-5\pi}{6}\text{ rad.}=\dfrac{-5\pi}{6}\times\dfrac{180}{\pi}=-150^\circ$ donc la longueur de $\wideparen{AM}=\dfrac{5\pi}{6}$

\cimg{6cm}{img/09}

\ms

\rem

Plusieurs nombres peuvent avoir la même image sur le cercle trigo.

Par ex :

\bw{r}{6cm}\vspace{-4cm}\cimg{6cm}{img/10}\ew

- $\pi$ et $-\pi$
- $\dfrac{-\pi}{2}$ et $\dfrac{3\pi}{2}$
- $2\pi$ ; $4\pi$ ; $-8\pi$

\rem

Les nombres $(x)$ et $(x+2k\pi)$, avec $k\in\Z$, ont la même image sur le cercle trigo.

Par ex :

\ms

- $\dfrac{3\pi}{7}~$ et $~\dfrac{17\pi}{7}$ ont même image car $\dfrac{17\pi}{7}=\mtc{blue}{\dfrac{14\pi}{7}}+\dfrac{3\pi}{7}=\mtc{blue}{2\pi}+\dfrac{3\pi}{7}$

\ms

- $\dfrac{3\pi}{4}~$ et $~\dfrac{19\pi}{4}$ ont même image car $\dfrac{19\pi}{4}=\mtc{blue}{\dfrac{16\pi}{4}}+\dfrac{3\pi}{4}=\mtc{blue}{4\pi}+\dfrac{3\pi}{4}$

\ms

- $\dfrac{6\pi}{5}$ et $\dfrac{-4\pi}{5}$ ont même image car $\dfrac{-4\pi}{5}=\mtc{blue}{\dfrac{-10\pi}{5}}+\dfrac{6\pi}{5}=\mtc{blue}{-2\pi}+\dfrac{6\pi}{5}$

\methode \ul{Placer un point sur le cercle trigonométrique}

- Plaçons sur le cercle trigonométrique, le point $M$ tel que l'angle $\left(\vec{i}~;~\vec{OM}\right)$ mesure $\dfrac{9\pi}{4}$ rad.

\bw{r}{5cm}\cimg{5cm}{img/11}\vspace{-2cm}\ew

\ms

On a :

$$\frac{9\pi}{4}=\mtc{blue}{\frac{8\pi}{4}}+\frac{1\pi}{4}=\mtc{blue}{2\pi}+\frac{1\pi}{4}\qquad\left(\mtc{blue}{\text{1 tour}}~+\frac{1\pi}{4}\right)$$

et

$$\frac{1\pi}{4}~\text{rad.}=45^\circ$$

\newpage

- Plaçons sur le cercle trigonométrique, le point $N$ tel que l'angle $\left(\vec{i}~;~\vec{ON}\right)$ mesure $\frac{8\pi}{3}$ rad.

\bw{r}{5cm}\vspace{-5mm}\cimg{5cm}{img/12}\ew

\ms

On a :

$$\frac{8\pi}{3}=\mtc{blue}{\frac{6\pi}{3}}+\frac{2\pi}{3}=\mtc{blue}{2\pi}+\frac{2\pi}{3}\qquad\left(\mtc{blue}{\text{1 tour}}~+\frac{2\pi}{3}\right)$$

et

$$\frac{2\pi}{3}~\text{rad.}=120^\circ$$

\ms

\rem

On a vu qu'un angle possède plusieurs mesures.

Si $\theta$ est une mesure de l'angle $\left(\vec{i}~;~\vec{OM}\right)$ alors tout angle de la forme $(\theta+2k\pi)$, avec $k\in\Z$ , est une mesure de l'angle $\left(\vec{i}~;~\vec{OM}\right)$.

On dit que l'angle $\left(\vec{i}~;~\vec{OM}\right)$ est égal à $\theta$ **modulo** $2\pi$.

## Définition : Mesure principale d'un angle

\definition

La **mesure principale d'un angle** orienté est la mesure, qui parmi toutes les autres, se situe dans l'intervalle $\left]-\pi~;~\pi\right]$

\ms

\exemple

\bw{r}{7cm}\vspace{-1cm}\cimg{7cm}{img/13}\vspace{-2cm}\ew

Une mesure d'un angle orienté est $\dfrac{7\pi}{4}$

D'autres mesures sont :

- $\dfrac{7\pi}{4}-2\pi\quad;\quad\dfrac{7\pi}{4}-4\pi\quad;\quad\dfrac{7\pi}{4}+2\pi\quad;\quad\ldots$

Soit :

- $\dfrac{-\pi}{4}\quad;\quad\dfrac{-9\pi}{4}\quad;\quad\dfrac{15\pi}{4}\quad;\quad\ldots$

Donc $\left(\dfrac{-\pi}{4}\right)$ est la **mesure principale** de cet **angle orienté** car c'est la seule comprise dans $\left]-\pi~;~\pi\right]$.

\ms

\methode \ul{Donner la mesure principale d'un angle}

\bw{r}{7cm}\cimg{7cm}{img/14}\ew

\ms

Donnons la mesure principale de l'angle $\dfrac{27\pi}{4}$

- On choisit un multiple de $4$ proche de $27$, soit $28$

$$\dfrac{27\pi}{4}=\dfrac{28\pi}{4}-\dfrac{\pi}{4}=7\pi-\dfrac{\pi}{4}$$

- Dans $7\pi$, on fait apparaître un multiple de $2\pi$ soit $6\pi$ :

$$
\def\arraystretch{2.4}\begin{array}{rcl}
\dfrac{27\pi}{4}&=&6\pi+\pi-\dfrac{\pi}{4}\\
&=&6\pi+\dfrac{4\pi}{4}-\dfrac{\pi}{4}\\&=&6\pi+\dfrac{3\pi}{4}
\end{array}
$$

$6\pi$ correspond à $3$ tours et on a $~\dfrac{3\pi}{4}\in\left]-\pi~;~\pi\right]~$ donc $~\dfrac{3\pi}{4}~$ est la mesure principale de $~\dfrac{27\pi}{4}~$

\newpage

# Cosinus et sinus d'un angle

\textbf{\ul{Rappel de 3\eme}}

- $\boxed{\cos(\mtc{gray}{\text{angle}})=\dfrac{\mtc{ForestGreen}{\text{Adjacent}}}{\mtc{red}{\text{Hypoténuse}}}}$
- $\boxed{\sin(\mtc{gray}{\text{angle}})=\dfrac{\mtc{blue}{\text{Opposé}}}{\mtc{red}{\text{Hypotenuse}}}}$
- $\boxed{\tan(\mtc{gray}{\text{angle}})=\dfrac{\mtc{blue}{\text{Opposé}}}{\mtc{ForestGreen}{\text{Adjacent}}}}$

\bw{r}{8cm}\vspace{-4cm}\cimg{8cm}{img/15b}\vspace{-3cm}\ew

\ms

\exemple

\bw{r}{5cm}\cimg{5cm}{img/16}\vspace{-2cm}\ew

Pour déterminer l'angle $\widehat{BAC}$, on peut déterminer son **cosinus** (ou **sinus**) :

$$
\def\arraystretch{1.9}\begin{array}{rcl}
AC^2&=&AB^2+BC^2\\
&=&5^2+3^2\qquad=34\qquad AC=\sqrt{34}\\
\end{array}
$$

On a : $\quad\cos\left(\widehat{BAC}\right)=\dfrac{\mtc{ForestGreen}{AB}}{\mtc{red}{AC}}=\dfrac{\mtc{ForestGreen}{5}}{\mtc{red}{\sqrt{34}}}\approx 0.8575$

Donc $\quad\widehat{BAC}=\cos^{-1}\left(\dfrac{5}{\sqrt{34}}\right)\approx 30,96^\circ$

## Définition : Cosinus et sinus dans le cercle trigonométrique

Soit, dans le cercle trigonométrique, l'angle $\left(\vec{i}~;~\vec{OM}\right)$ de **mesure principale** $x$.

- Le **cosinus** de $x$ est **l'abscisse** de $M$ : $\quad\boxed{\cos(x)=x_M}$
- Le **sinus** de $x$ est **l'ordonnée** de $M$ : $\quad\boxed{\sin(x)=y_M}$

\ms

\cimg{5cm}{img/17}

\exemple

- Si $x=\frac{\pi}{2}$ alors $M$ a pour coordonnées $(0;1)\quad$ donc $~\cos\left(\frac{\pi}{2}\right)=0~$ et $~\sin\left(\frac{\pi}{2}\right)=1$

- Si $x=\frac{3\pi}{4}$ alors $M$ a pour coordonnées $\approx(-0.7;0.7)\quad$ donc $~\cos\left(\frac{3\pi}{4}\right)\approx -0.7~$ et $~\sin\left(\frac{3\pi}{4}\right)\approx 0.7$

\ms

\cimg{9cm}{img/18tt}

\newpage

\exemple

Si $~x=\dfrac{5\pi}{12}~(\rarr 75^\circ)~$ alors $M$ à pour coordonnées $~\approx(0.26;0.97)$

Donc $\quad\cos\left(\dfrac{5\pi}{12}\right)\approx 0.26\quad$ et $\quad\sin\left(\dfrac{5\pi}{12}\right)\approx 0.97$

\ms

\cimg{12cm}{img/19a.png}

\ms

## Valeurs remarquables$^{\text{\faHeart}}$

$$
\def\arraystretch{2.0}\begin{array}{|c|c|c|c|c|c|c|}\hline
x & ~0~ & \frac{\pi}{6} & \frac{\pi}{4} & \frac{\pi}{3} & \frac{\pi}{2}  & \pi \\ \hline
\cos(x) & 1 & \frac{\sqrt{3}}{2} & \frac{\sqrt{2}}{2} & \frac{1}{2}  & 0 & -1 \\ \hline
\sin(x) & 0 & \frac{1}{2} & \frac{\sqrt{2}}{2} & \frac{\sqrt{3}}{2}  & 1 & 0 \\ \hline
\end{array}
$$

\cimg{12cm}{img/20}

\demo $\cos\pa{\dfrac{\pi}{4}}=\dfrac{\sqrt{2}}{2}$

\bw{r}{5cm}\vspace{0cm}\cimg{5cm}{img/21}\vspace{-2cm}\ew

$\left(\frac{\pi}{4}\right)~$ correspond à un angle de $45^\circ$

On a $~\widehat{OMH}=180^\circ-45^\circ-90^\circ=45^\circ$ donc $OHM$ est un triangle rectangle et isocèle en $H$.

On a :

$$
\def\arraystretch{1.5}\begin{array}{ll}
~&OH^2+HM^2=OM^2\\
\Lrarr&OH^2+OH^2=1\qquad\text{car}\quad OM=1~\text{et}~OH=HM\\
\Lrarr&2\times OH^2=1\\
\Lrarr&OH=\sqrt{\dfrac{1}{2}}=\dfrac{\sqrt{2}}{2}\qquad\text{donc}\quad\boxed{\cos\left(\dfrac{\pi}{4}\right)=OH=\dfrac{\sqrt{2}}{2}}\\
\end{array}
$$

\newpage

\demo $\cos\left(\dfrac{\pi}{3}\right)=\dfrac{1}{2}\quad$et$\quad\sin\left(\dfrac{\pi}{3}\right)=\dfrac{\sqrt{3}}{2}$

\bw{r}{6cm}\vspace{-1cm}\cimg{6cm}{img/22}\ew

$\pa{\dfrac{\pi}{3}}~$ correspond à un angle de $60^\circ$ donc $OMA$ est équilatéral.

On a $H$ milieu de $[OA]$ donc $~\boxed{OH=\cos\left(\dfrac{\pi}{3}\right)=\dfrac{1}{2}}$

Pour le sinus, on a :

$$
\def\arraystretch{1.5}\begin{array}{ll}
HM^2&=OM^2-OH^2\\
~&=1-\pa{\dfrac{1}{2}}^2=\dfrac{3}{4}\qquad HM=\sqrt{\dfrac{3}{4}}=\dfrac{\sqrt{3}}{2} \end{array}
$$

Donc $\quad\boxed{HM=\sin\pa{\dfrac{\pi}{3}}=\dfrac{\sqrt{3}}{2}}$

\ms

\rem

Dans le cercle trigonométrique (rayon=1), $OHM$ est un triangle rectangle et $HM=OK$ donc :

$$OH^2+OK^2=OM^2\quad\Lrarr\quad OH^2+OK^2=1$$

Or $~OH^2=\pa{\cos(x)}^2\quad$et$\quad OK^2=\pa{\sin(x)}^2$

\bw{r}{4cm}\vspace{-3cm}\cimg{4cm}{img/17}\ew

Donc, pour tout $x$ :

$$\boxed{\pa{\cos(x)}^2+\pa{\sin(x)}^2=1}$$

## Propriété : Cosinus et sinus

- $\boxed{(-1)\less \cos(x)\less (+1)}\quad$et$\quad\boxed{(-1)\less \sin(x)\less (+1)}$
  - Cercle de rayon $1\Rarr$ abscisse et ordonnée de $M\in[-1;1]$

\ms

- $\boxed{\cos^2(x)+\sin^2(x)=1}$
  - Voir démonstration au-dessus

\ms

- $\boxed{\cos(x+2k\pi)=\cos(x)}\quad$et$\quad\boxed{\sin(x+2k\pi)=\sin(x)}$
  - $x$ et $x+2k\pi$ ont même image sur le cercle trigo. donc même cosinus/sinus

## Propriété : $~\cos(-x)~$ et $~\sin(-x)$

Pour tout $x$, on a : $\qquad\boxed{\cos(-x)=\cos(x)}\quad\text{et}\quad\boxed{\sin(-x)=-\sin(x)}$

\ms

\cimg{8cm}{img/23}

\newpage

## Propriété : $~\cos(x+\pi)~$ et $~\sin(x+\pi)$

Pour tout $x$, on a : $\quad\boxed{\cos(x+\pi)=-\cos(x)}\quad\text{et}\quad\boxed{\sin(x+\pi)=-\sin(x)}$

\ms

\cimg{7cm}{img/24}

# Fonctions cosinus/sinus

## Représentations graphiques

\cimg{12cm}{img/25.png}

\vspace{1cm}

\cimg{12cm}{img/26.png}

\newpage

## Propriété : Périodicité de $\cos(x)$ et $\sin(x)$

\prop

On a vu que : $\quad\cos(x+2k\pi)=\cos(x)\quad$et$\quad\sin(x+2k\pi)=\sin(x)$

On dit que les fonctions $\cos(x)$ et $\sin(x)$ sont **\fbox{périodiques}** (et plus précisément $2\pi$-périodique)

\ms

\rem

Pour tracer la courbe représentative de la fonction $\cos(x)$ ou de la fonction $\sin(x)$, il suffit de la tracer sur un intervalle de longueur $2\pi$ et de la compléter par translation.

## Propriété : Parité de $\cos(x)$ et $\sin(x)$

\prop

On a vu que : $\quad\cos(-x)=\cos(x)\quad$et$\quad\sin(-x)=-\sin(x)$

On dit que :

- La fonction $\cos(x)$ est **paire**
- La fonction $\sin(x)$ est **impaire**

\rem

- La courbe représentative de $\cos(x)$ est symétrique par rapport à l'**axe des ordonnées**.
- La courbe représentative de la $\sin(x)$ est symétrique par rapport à **l’origine du repère**.

\ms

\cimg{18cm}{img/27.png}
