---
title: Vecteurs et produit scalaire
classe: 1^spé^
toc: true
---

# Rappels sur les vecteurs

## Caractéristiques

\bw{r}{8cm}\vspace{-1cm}\cimg{8cm}{img/01-cours}\ew

Un vecteur a pour caractéristiques :

- Une **longueur (ou norme)**
- Une **direction (une droite parallèle à ce vecteur)**
- Un **sens** (de $A$ vers $B$ ou l'inverse)

\definition \ul{Norme d'un vecteur}

\ms

On note la norme (longueur) d'un vecteur avec des $\norm{\ldots}$

\ms

\exemple

Dans l'exemple précédent, on a : $$\norm{\vec{AB}}=\norm{\vec{u}}=AB\quad=\sqrt{4^2+1^2}=\sqrt{17}$$

\ms

\prop \ul{Vecteurs égaux}

\bw{r}{7cm}\vspace{-3cm}\cimg{5cm}{img/02.png}\vspace{-1cm}\ew

- même **longueur (même norme)**
- même **direction**
- même **sens**

\exemple

$\vec{u}=\vec{v}\quad$ et $\quad\vec{t}=\vec{AB}$

Mais $\quad\vec{t}\neq\vec{BA}\quad$ (sens contraires)

\prop \ul{Multiplication par un nombre}

Le produit du vecteur $\vec{u}\neq\vec{0}$ par le réel $k\neq0$ est un vecteur noté $~k\vec{u}~$ tel que :

\ms

- si $k > 0$, alors
  - $\vec{u}$ et $k\vec{u}$ ont la même direction, le même sens.
  - $\norm{ k\vec{u}}=k\times\norm{\vec{u}}$

\ms

- si $k \less  0$, alors
  - $\vec{u}$ et $k\vec{u}$ ont la même direction mais sens **contraire**.
  - $\norm{ k\vec{u}}=-k\times\norm{\vec{u}}$

\newpage

\exemple

\bw{r}{6cm}\vspace{-1cm}\cimg{6cm}{img/03-cours}\vspace{-2cm}\ew

Dans le repère ci-contre, on a :

$$\vec{b}=2\times \vec{a}\quad\text{ et }\quad\vec{c}=-3\times \vec{a}$$

## Somme de vecteurs

\prop L'enchaînement d'une **translation de vecteur $\vec{u}$** et d'une **translation de vecteur $\vec{v}$** est une **translation de vecteur $\vec{u}+\vec{v}$**.

Ce vecteur $\vec{u}+\vec{v}$ est appelé **somme** des vecteurs $\vec{u}$ et $\vec{v}$.

$\qquad\qquad$![](img/04tt.png){width=7cm}

\exemple

\bw{r}{7cm}\vspace{-4cm}\cimg{7cm}{img/05.png}\ew

$\vec{BB^\prime}$ est un représentant de $\vec{CD}$ donc $\qquad\vec{BB^\prime}=\vec{CD}$

On a donc $\qquad\color{blue}\vec{AB}\color{black}+\color{red}\vec{CD}\color{black}=\color{green!20!black!80}\vec{AB^\prime}\color{black}$

## Relation de Chasles

Quels que soient les points $A$, $B$ et $C$ du plan on a :

$$\color{blue}\vec{AB}\color{black}+\color{red}\vec{BC}\color{black}=\color{green!20!black!80}\vec{AC}\color{black}$$

\cimg{8cm}{img/06tt}

\newpage

## Vecteurs dans un repère orthonormé

Dans le plan muni du repère $\left(O,I,J\right)$, les coordonnées du vecteur $\vec{AB}$ sont :

$$\boxed{\vec{AB}\begin{pmatrix}x_B-x_A\\y_B-y_A\end{pmatrix}}$$

\cimg{9cm}{img/07-cours.png}

\exemple

\bw{r}{6cm}\vspace{-1cm}\cimg{6cm}{img/09-cours}\vspace{-2cm}\ew

Soit $\color{green!20!black!80}A(3,2)$ et $\color{red}B(-1,1)$, on a :

$$\vec{AB}\begin{pmatrix}\color{red}(-1)\color{black}-\color{green!20!black!80}3\\\color{red}1\color{black}-\color{green!20!black!80}2\end{pmatrix}~\rightarrow\vec{AB}\begin{pmatrix}-4\\-1\end{pmatrix}$$

\ms

\prop \ul{Égalité, somme de vecteurs et produit par un réel}

Soit $\vec{u}\begin{pmatrix}x_{\vec{u}}\\y_{\vec{u}}\end{pmatrix}$ , $\vec{v}\begin{pmatrix}x_{\vec{v}}\\y_{\vec{v}}\end{pmatrix}$ et un réel $k\neq0$.

- $\vec{u}=\vec{v}\Leftrightarrow\begin{cases}x_{\vec{u}}=x_{\vec{v}}\\y_{\vec{u}}=y_{\vec{v}}\end{cases}\quad\rightarrow~$ 2 vecteurs de même coordonnées sont égaux
- $\vec{u}+\vec{v}\begin{pmatrix}x_{\vec{u}}+x_{\vec{v}}\\y_{\vec{u}}+y_{\vec{v}}\end{pmatrix}\quad\rightarrow~$On peut additionner les coordonnées des vecteurs
- $k\vec{u}\begin{pmatrix}k\times x_{\vec{u}}\\k\times y_{\vec{u}}\end{pmatrix}\quad\rightarrow~$On peut multiplier les coordonnées des vecteurs par $k$

\ms

\bw{r}{8cm}\vspace{-5mm}\cimg{8cm}{img/08tt}\vspace{-5cm}\ew

\exemple

Soit $\vec{u}\begin{pmatrix}3\\-2\end{pmatrix}$ , $\vec{v}\begin{pmatrix}-1\\2\end{pmatrix}$ et $k=2$.

On a :

- $\vec{u}+\vec{v}\begin{pmatrix}3+(-1)\\(-2)+2\end{pmatrix}\quad \rightarrow\vec{u}+\vec{v}\begin{pmatrix}2\\0\end{pmatrix}$
  $$~$$
- $2\vec{v}\begin{pmatrix}2\times (-1)\\2\times 2\end{pmatrix}\quad \rightarrow2\vec{v}\begin{pmatrix}-2\\4\end{pmatrix}$

\newpage

# Produit scalaire

Le **produit scalaire** de deux vecteurs est un **nombre réel**.

Il se note :

$$\boxed{\vec{u}\cdot\vec{v}}$$

## Produit scalaire dans un repère orthonormé

\bw{r}{5cm}\vspace{-4cm}\cimg{5cm}{img/10-cours}\ew

Soit $\vec{u}\begin{pmatrix}x_{\vec{u}}\\y_{\vec{u}}\end{pmatrix}$ et $\vec{v}\begin{pmatrix}x_{\vec{v}}\\y_{\vec{v}}\end{pmatrix}$.

On a :

$$\boxed{\vec{u}\cdot\vec{v} = \left(x_{\vec{u}}\times x_{\vec{v}}\right) + \left(y_{\vec{u}}\times y_{\vec{v}}\right)}$$

\ms

\exemple

Soit $\vec{u}\begin{pmatrix}2\\4\end{pmatrix}$ et $\vec{v}\begin{pmatrix}3\\-2\end{pmatrix}$.

On a :

$$
\begin{aligned}
\vec{u}\cdot\vec{v} & = \left(x_{\vec{u}}\times x_{\vec{v}}\right) + \left(y_{\vec{u}}\times y_{\vec{v}}\right)\\
                    & =  \left(2\times 3\right) + \left(4\times -2\right)\\
                    & =  6 + (-8) = -2
\end{aligned}
$$

\ms

## Norme d'un vecteur dans un repère

\bw{r}{5cm}\vspace{-1cm}\cimg{5cm}{img/14-cours}\ew

Soit $\vec{u}\begin{pmatrix}x_{\vec{u}}\\y_{\vec{u}}\end{pmatrix}$.

On a : $\quad\boxed{\norm{\vec{u}}=\sqrt{\pa{x_{\vec{u}}}^2+\pa{y_{\vec{u}}}^2}}$

\ms

\exemple

Soit $\vec{u}\begin{pmatrix}2\\4\end{pmatrix}$ et $\vec{v}\begin{pmatrix}3\\-2\end{pmatrix}$.

On a :

$\begin{aligned}
 \color{blue}\norm{\vec{u}} &\color{blue}=\sqrt{\left(x_{\vec{u}}\right)^2+\left(y_{\vec{u}}\right)^2}\\
 & =\sqrt{2^2+4^2} = \sqrt{20}\\
 \end{aligned}$\qquad
$\begin{aligned}
 \color{green!20!black!80}\norm{\vec{v}} &\color{green!20!black!80}=\sqrt{\left(x_{\vec{v}}\right)^2+\left(y_{\vec{v}}\right)^2}\\
 & =\sqrt{3^2+(-2)^2} = \sqrt{13}\\
 \end{aligned}$

\ms

## Produit scalaire (2)

Soit $\vec{u}$ et $\vec{v}$, deux vecteurs du plan et $\alpha$ l'angle $\left(\vec{u} ; \vec{v}\right)$.

On a :

$$\boxed{\vec{u}\cdot\vec{v} = \norm{\vec{u}}\times \norm{\vec{v}}\times \cos\alpha}$$

\bw{r}{7cm}\vspace{-4cm}\cimg{7cm}{img/12-cours}\vspace{-3cm}\ew

\ms

\exemple

$\begin{aligned}
\vec{u}\cdot\vec{v} & = \norm{\vec{u}}\times \norm{\vec{v}}\times \cos\alpha\\
                    & = \sqrt{20} \times \sqrt{13}\times \cos(97,125\ldots)\\
                    & = \sqrt{260}\times \cos(97,125\ldots)\\
                    & = -2
\end{aligned}$

\newpage

## Théorème fondamental \faWarning

\bw{r}{7cm}\vspace{-1cm}\cimg{7cm}{img/13-cours.png}\vspace{1cm}\ew

Soit $\vec{u}$ et $\vec{v}$, deux vecteurs du plan.

On a :

$$\boxed{\vec{u}\cdot\vec{v}=0\quad \Leftrightarrow\quad \vec{u}~\bot~\vec{v}}$$

**\ul{Preuve :}**

- Soit $\vec{u}$ et $\vec{v}$ tel que $\vec{u}~\bot~\vec{v}$.

$$\begin{aligned}\vec{u}\cdot\vec{v}~&=\norm{\vec{u}}\times\norm{\vec{v}}\times\cos(90^\circ)\\~&=\norm{\vec{u}}\times\norm{\vec{v}}\times0\qquad=0\end{aligned}$$

- Soit $\vec{u}$ et $\vec{v}$ tel que $\vec{u}\cdot\vec{v} = 0$.

$$
\begin{aligned}
&\quad\vec{u}\cdot\vec{v}=\norm{\vec{u}}\times\norm{\vec{v}}\times\cos(\alpha)=0\\
\Leftrightarrow&\quad\cos(\alpha)=0\\
\Leftrightarrow&\quad\begin{cases}\alpha=90^\circ\\\alpha=-90^\circ\end{cases}\Leftrightarrow\vec{u}~\bot~\vec{v}\\
\end{aligned}
$$

## Propriétés du produit scalaire

- \ul{Commutativité :} $~\vec{a}\cdot\vec{b}=\vec{b}\cdot\vec{a}$

\ms

- \ul{Associativité :}
  - $\vec{a}\cdot\vec{b}\cdot\vec{c}=\vec{a}\cdot\left(\vec{b}\cdot\vec{c}\right)=\left(\vec{a}\cdot\vec{b}\right)\cdot\vec{c}$
  - $k\vec{a}\cdot\vec{b}=k\left(\vec{a}\cdot\vec{b}\right)=\vec{a}\cdot k\vec{b}$

\ms

- \ul{Distributivité :}
  - $k\left(\vec{a}+\vec{b}\right)=k\vec{a}+k\vec{b}$
  - $\vec{a}\left(\vec{b}+\vec{c}\right)=\vec{a}\cdot\vec{b}+\vec{a}\cdot\vec{c}$

\ms

- \ul{Vecteur "au carré" :}
  - $\vec{a}^2=\vec{a}\cdot\vec{a}=\norm{\vec{a}}^2$

\ms

- \ul{Identités remarquables :}
  - $(\vec{a}+\vec{b})^2=\vec{a}^2+2\cdot\vec{a}\cdot\vec{b}+\vec{b}^2$
  - $(\vec{a}-\vec{b})^2=\vec{a}^2-2\cdot\vec{a}\cdot\vec{b}+\vec{b}^2$
  - $(\vec{a}-\vec{b})(\vec{a}+\vec{b})=\vec{a}^2-\vec{b}^2$

## Produit scalaire (3)

\bw{r}{5cm}\vspace{-1cm}\cimg{5cm}{img/15-cours.png}\vspace{-2cm}\ew

Soit $\vec{u}$ et $\vec{v}$, deux vecteurs du plan.

On a :

$$\boxed{\vec{u}\cdot\vec{v}=\dfrac{1}{2}\left(\norm{\vec{u}+\vec{v}}^2-\norm{\vec{u}}^2-\norm{\vec{v}}^2\right)}$$

$$\boxed{\vec{u}\cdot\vec{v}=\dfrac{1}{2}\left(\norm{\vec{u}}^2+\norm{\vec{v}}^2-\norm{\vec{u}-\vec{v}}^2\right)}$$

**\ul{Preuve :}**

$\begin{array}{ccrl}
                 &\left(\vec{u}+\vec{v}\right)^2  &=&\vec{u}^2+2\vec{u}\cdot\vec{v}+\vec{v}^2\\
 \Leftrightarrow &2\vec{u}\cdot\vec{v}            &=&\left(\vec{u}+\vec{v}\right)^2-\vec{u}^2-\vec{v}^2\\
 \Leftrightarrow &\vec{u}\cdot\vec{v}             &=&\tfrac{1}{2}\left(\left(\vec{u}+\vec{v}\right)^2-\vec{u}^2-\vec{v}^2\right)\\
 \Leftrightarrow &\vec{u}\cdot\vec{v}             &=&\tfrac{1}{2}\left(\norm{\vec{u}+\vec{v}}^2-\norm{\vec{u}}^2-\norm{\vec{v}}^2\right)
 \end{array}$

La seconde proposition se démontre de la même manière avec $\left(\vec{u}-\vec{v}\right)^2$

\newpage

## Produit scalaire et projeté orthogonal

Soient $A$, $B$, $C$ trois points du plan et $H$ le projeté orthogonal de $C$ sur $(AB)$.

On a :

$$\boxed{\vec{AB}\cdot\vec{AC}=\vec{AB}\cdot\vec{AH}}$$

Donc :

1. Si $H\in\left[AB\right)\Rightarrow\vec{AB}\cdot\vec{AC}=AB\times AH$
2. Si $H\notin\left[AB\right)\Rightarrow\vec{AB}\cdot\vec{AC}=-AB\times AH$

|              Cas 1.               |              Cas 2.               |
| :-------------------------------: | :-------------------------------: |
| ![](img/17-cours.png){height=4cm} | ![](img/18-cours.png){height=4cm} |

**\ul{Preuve :}**

\ul{1. Cas où $H\in\left[AB\right)$}

On a :

- $\vec{AB}\cdot\vec{AC}= AB\times AC\times \cos\alpha$
- $\cos\alpha=\dfrac{\text{Adjacent}}{\text{Hypothénuse}}=\dfrac{AH}{AC}$

Donc

$$\begin{aligned}\vec{AB}\cdot\vec{AC}&= AB\times AC\times\frac{AH}{AC}\\&=AB\times AH\end{aligned}$$

\ul{2. Cas où $H\notin\left[AB\right)$}

On a $\quad\alpha=180^\circ-\beta\quad$ donc $\quad\cos\alpha=\cos(180^\circ-\beta)=-\cos(\beta)=\dfrac{-AH}{AC}$

Donc

$$\begin{aligned}\vec{AB}\cdot\vec{AC}&= AB\times AC\times\frac{-AH}{AC}\\&=-AB\times AH\end{aligned}$$

---

## Récapitulatif

- \ul{Dans un repère :}
  $$\boxed{\vec{u}\cdot\vec{v} = \left(x_{\vec{u}}\times x_{\vec{v}}\right) + \left(y_{\vec{u}}\times y_{\vec{v}}\right)}$$

- \ul{Avec l'angle entre $\vec{u}$ et $\vec{v}$ :}
  $$\boxed{\vec{u}\cdot\vec{v} = \norm{\vec{u}}\times \norm{\vec{v}}\times \cos\alpha}$$

- \ul{Avec les normes de $\vec{u}$ et $\vec{v}$ (...et de $\vec{u}+\vec{v}$ et de $\vec{u}-\vec{v}$) :}
  $$\boxed{\vec{u}\cdot\vec{v}=\frac{1}{2}\left(\norm{\vec{u}+\vec{v}}^2-\norm{\vec{u}}^2-\norm{\vec{v}}^2\right)}\quad\text{et}\quad\boxed{\vec{u}\cdot\vec{v}=\frac{1}{2}\left(\norm{\vec{u}}^2+\norm{\vec{v}}^2-\norm{\vec{u}-\vec{v}}^2\right)}$$

- \ul{Théorème fondamentale :}
  $$\boxed{\vec{u}\cdot\vec{v}=0~\Leftrightarrow~\vec{u}~\bot~\vec{v}}$$
