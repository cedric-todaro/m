---
title: Géométrie repérée
classe: 1^spé^
toc: true
---

# Rappel : Équation de droite

## Fonction du 1$^\text{er}$ degré

\definition

Une fonction du 1$^\text{er}$ degré est une fonction de la forme : $\quad\boxed{f(x)=\mtc{red}{a}x+\mtc{blue}{b}}$

Sa représentation graphique est une **droite**.

- $\mtc{red}{a}~$ est le **coefficient directeur** ou **pente** de la droite
- $\mtc{blue}{b}~$ est le **l'ordonnée à l'origine**

\exemple $~f(x)=\mtc{red}{\dfrac{-1}{2}}x+\mtc{blue}{1}$

\cimg{12cm}{img/01}

- \ul{Résoudre $f(x)=0$}

$$
\def\arraystretch{1.5}\begin{array}{rcll}
f(x)=0&~\Lrarr~& \mtc{red}{\frac{-1}{2}}x+\mtc{blue}{1}=0&~\\
      &~\Lrarr~& \frac{-1}{2}x=-1\qquad\Lrarr~& \boxed{x=2}
\end{array}
$$

\ms

- \ul{Représentation graphique en fonction de $\mtc{red}{a}$}

\cimg{12cm}{img/02}

\newpage

- \ul{Signe de $f(x)$}

$$
\def\arraystretch{1.7}
\begin{array}{ll}
\boxed{a>0}&\boxed{a\less 0}\\
\begin{array}{|c|ccccccc|}\hline
x & -\infty & ~ & ~ & \frac{-b}{a}=2 & ~ & ~ & +\infty \\ \hline
f(x) & ~ & - & ~ & 0 & ~ & + & ~ \\ \hline
\end{array}&
\begin{array}{|c|ccccccc|}\hline
x & -\infty & ~ & ~ & \frac{-b}{a}=2 & ~ & ~ & +\infty \\ \hline
f(x) & ~ & + & ~ & 0 & ~ & - & ~ \\ \hline
\end{array}
\end{array}
$$

## Définition : Équation réduite de droite

\definition

La droite $d$ est l'ensemble des points $M(x;y)$ qui vérifient l'équation :

$$\boxed{y=\mtc{red}{a}x+\mtc{blue}{b}}$$

Cette équation est **l'équation réduite** de la droite $d$.

\exemple

Soit la droite $(d)$ d'équation : $~y=2-x\quad=\mtc{red}{-1}x+\mtc{blue}{2}$

On a :

- \mtc{red}{a=-1}
- \mtc{blue}{b=2}

\ms

\begin{center}\begin{tikzpicture}
\begin{axis}[x=1.0cm,y=1.0cm,axis lines=middle,ymajorgrids=true,xmajorgrids=true,xmin=-2.5,xmax=3.5,ymin=-1.5,ymax=4.5,xtick={-8.0,-7.0,...,11.0},ytick={-5.0,-4.0,...,8.0},]
\draw[line width=2.pt,color=ForestGreen,smooth,samples=10,domain=-8.0:11.202859696157287] plot(\x,{2-(\x)});
\draw[color=black] (-1.5,3.5) node[anchor=north east] {$(d)$};
\draw [fill=blue] (0.,2.) circle (2.5pt);
\end{axis}\end{tikzpicture}\end{center}

## Définition : Équation cartésienne de droite

\definition

La droite $d$ est l'ensemble des points $M(x;y)$ qui vérifient l'équation :

$$\boxed{\mtc{red}{a'}x+\mtc{blue}{b'}y+\mtc{ForestGreen}{c}=0}$$

Cette équation est **l'équation cartésienne** de la droite $d$.

\ms

\rem

Si $~\mtc{blue}{b'}\neq 0$, on peut retrouver l'équation réduite de $d$.

$$
\def\arraystretch{1.6}\begin{array}{rcl}
\mtc{red}{a'}x+\mtc{blue}{b'}y+\mtc{ForestGreen}{c}=0&~\Lrarr~&\mtc{blue}{b'}y=-\mtc{red}{a'}x-\mtc{ForestGreen}{c}\\
&~\Lrarr~&y=\dfrac{-\mtc{red}{a'}}{\mtc{blue}{b'}}x+\dfrac{\mtc{ForestGreen}{-c}}{\mtc{blue}{b'}}
\end{array}
$$

\ms

\rem \ul{Droite d'équation $x=k$}

\bw{r}{5cm}\vspace{-14mm}
\begin{center}\begin{tikzpicture}
\begin{axis}[x=8mm,y=8mm,axis lines=middle,ymajorgrids=true,xmajorgrids=true,xmin=-1.5,xmax=3.5,ymin=-1.5,ymax=2.5,xtick=\empty,ytick=\empty]
\draw[color=black] (1.8,2) node[anchor=north west,fill=white] {$x=k$};
\draw [line width=2.pt,color=blue] (1.7,-5) -- (1.7,5);
\draw [fill=blue] (1.7,0) circle (2pt);
\end{axis}\end{tikzpicture}\end{center}
\ew

Si $~\mtc{blue}{b'}=0$ alors $d$ est parallèle à l'axe des ordonnées et son équation est de la forme $x=k$.

$$
\def\arraystretch{1.6}\begin{array}{rcl}
\mtc{red}{a'}x+\mtc{blue}{b'}y+\mtc{ForestGreen}{c}=0&~\Lrarr~&\mtc{red}{a'}x+\mtc{ForestGreen}{c}=0\\
 &~\Lrarr~&\mtc{red}{a'}x=-\mtc{ForestGreen}{c}\quad\Lrarr~x=\dfrac{-\mtc{ForestGreen}{c}}{\mtc{red}{a'}}\\
\end{array}
$$

\newpage

## Définition : Vecteur directeur de $d$

\definition

Soit la droite $d$ d'équation cartésienne $\mtc{red}{a}x+\mtc{blue}{b}y+\mtc{ForestGreen}{c}=0$

- On appelle **vecteur directeur** de $d$, tout vecteur donnant la **direction** de $d$.
- Le vecteur de coordonnées $\boxed{\coord{-\mtc{blue}{b}}{\mtc{red}{a}}}$ est un **vecteur directeur** de la droite $d$.

\ms

\exemple

Soit $d$ la droite d'équation $\mtc{red}{2}x\mtc{blue}{-5}y+\mtc{ForestGreen}{10}=0$

On a : $\quad\mtc{red}{a=2}\quad,\quad\mtc{blue}{b=-5}\quad\text{et}\quad\mtc{ForestGreen}{c=10}$

Donc le vecteur $\coord{5}{2}$ est un **vecteur directeur** de $d$

\ms

\cimg{10cm}{img/04}

\ms

\methode \ul{Déterminer une équation de droite à partir d'un point et d'un vecteur directeur}

\bw{r}{7.5cm}\cimg{7.5cm}{img/06}\ew

\ms

Déterminons une **équation cartésienne** de la droite $d$ passant par le point $A\left(3~;~1\right)$ et de vecteur directeur $\vec{u}\coord{-1}{5}$.

- La droite $d$ a pour équation $\mtc{red}{a}x+\mtc{blue}{b}y+\mtc{ForestGreen}{c}=0~$et$~\vec{u}\coord{-1}{5}$ est vecteur directeur de $d$

  - Donc $\quad \mtc{red}{a=5}\quad$et$\quad-\mtc{blue}{b}=-1~\Lrarr~\mtc{blue}{b}=1$
  - Donc $~d~$ a pour équation $\quad\mtc{red}{5}x+\mtc{blue}{1}y+\mtc{ForestGreen}{c}=0$

- $A\left(3~;~1\right)\in d~\Lrarr~$Ses coordonnées vérifient l'équation de droite :

$$
\begin{array}{rcl}
\mtc{red}{5}x_A+\mtc{blue}{1}y_A+\mtc{ForestGreen}{c}=0&\Lrarr&\mtc{red}{5}\times 3+\mtc{blue}{1}\times 1+\mtc{ForestGreen}{c}=0\\
&\Lrarr&16+\mtc{ForestGreen}{c}=0\\
&\Lrarr&\mtc{ForestGreen}{c}=(-16)\\
\end{array}
$$

L'équation cartésienne de $d$ est : $\quad\mtc{red}{5}x+\mtc{blue}{1}y\mtc{ForestGreen}{-16}=0$

# Équation de droite et vecteur normal

## Définition : Vecteur normal à $d$

\definition

Soit la droite $d$ d'équation cartésienne $\mtc{red}{a}x+\mtc{blue}{b}y+\mtc{ForestGreen}{c}=0$

- On appelle **vecteur normal** à $d$, tout vecteur de **direction orthogonale** à celle de $d$.
- Le vecteur de coordonnées $\boxed{\coord{\mtc{red}{a}}{\mtc{blue}{b}}}$ est un **vecteur normal** à $d$.

\newpage

\exemple

\ms

\bw{r}{9cm}\vspace{-1cm}\cimg{9cm}{img/07}\vspace{-1cm}\ew

Soit $d$ la droite d'équation $\mtc{red}{2}x\mtc{blue}{-5}y+\mtc{ForestGreen}{10}=0$

On a : $\quad\mtc{red}{a=2}\quad,\quad\mtc{blue}{b=-5}\quad\text{et}\quad\mtc{ForestGreen}{c=10}$

Donc le vecteur $\coord{\mtc{red}{2}}{\mtc{blue}{-5}}$ est un **vecteur normal** à $d$

---

\exemple Soit la droite $d$ d'équation cartésienne :

$$\mtc{red}{2}x\mtc{blue}{-3}y\mtc{ForestGreen}{-6}=0$$

On a $\quad \mtc{red}{a=2}\quad\mtc{blue}{b=-3}\quad\mtc{ForestGreen}{c=-6}$

Un **vecteur directeur** de $d$ est $\vec{u}\coord{3}{2}$

Un vecteur $\vec{n}\coord{\mtc{red}{a}}{\mtc{blue}{b}}$ est un vecteur normal à $~d$.$\quad\vec{n}\coord{\mtc{red}{2}}{\mtc{blue}{-3}}~$ car $~\mtc{red}{a=2}~$ et $~\mtc{blue}{b=-3}$

On peut vérifier que $\vec{u}$ et $\vec{n}$ sont orthognaux à l'aide du produit scalaire $~\vec{u}\cdot\vec{n}$ :

$$
\def\arraystretch{1.6}\begin{array}{rcl}
\vec{u}\cdot\vec{n}&=&\coord{3}{2}\cdot\coord{\mtc{red}{2}}{\mtc{blue}{-3}}\\
&=&\left(3\times \mtc{red}{2}\right)+\left(2\times \mtc{blue}{(-3)}\right)\quad=6-6=0\quad\Lrarr\quad\vec{n}\perp \vec{u}
\end{array}
$$

\cimg{12cm}{img/09}

## Propriété : Vecteur normal et équation de droite

\prop

- Une droite de vecteur normal $\vec{n}\coord{\mtc{red}{a}}{\mtc{blue}{b}}$ admet une équation cartésienne de la forme $~\mtc{red}{a}x+\mtc{blue}{b}y+\mtc{ForestGreen}{c}=0~$ où $~\mtc{ForestGreen}{c}~$ est un nombre réel à déterminer.
- La droite d'équation cartésienne $~\mtc{red}{a}x+\mtc{blue}{b}y+\mtc{ForestGreen}{c}=0~$ admet le vecteur $~\vec{n}\coord{\mtc{red}{a}}{\mtc{blue}{b}}~$ pour **vecteur normal**.

\cimg{8cm}{img/10}

\newpage

\methode \ul{Déterminer une équation de $d$ à l'aide un point et un vecteur normal}

\bw{r}{8.1cm}\vspace{-5mm}
\begin{center}$\begin{tikzpicture}
\begin{axis}[x=9mm,y=9mm,axis lines=middle,ymajorgrids=true,xmajorgrids=true,xmin=-7.5,xmax=1.5,ymin=-1.5,ymax=5.5,xtick={-8.0,-7.0,...,11.0},ytick={-1,0,...,50},]
\draw[line width=2.pt,color=ForestGreen,smooth,samples=10,domain=-8.0:11.202859696157287] plot(\x,{3*(\x)+19});
\draw[color=black] (-5.75,1.5) node[anchor=north west,fill=white] {$(d)~:~3x-y+19=0$};
\draw[color=blue] (-5,3.9) node[anchor=north west,fill=white] {$A$};
\draw[color=black] (-2.9,2.5) node[anchor=south west,fill=white] {$\vec{n}\coord{3}{-1}$};
\draw [fill=blue] (-5,4) circle (2.5pt);
\draw [->,line width=2pt,color=black] (-4,3) -- (-1,2);
\end{axis}\end{tikzpicture}$\end{center}
\vspace{-1cm}\ew

On considère la droite $d$ passant par le point $A(-5;4)$ et dont un vecteur normal est $\vec{n}\coord{3}{-1}$.

Comme $\vec{n}\coord{\mtc{red}{3}}{\mtc{blue}{-1}}$ est un **vecteur normal** à $d$, l'équation cartésienne de $d$ est de la forme :

$$\mtc{red}{3}x\mtc{blue}{-1}y+\mtc{ForestGreen}{c}=0$$

Le point $A(-5;4)$ appartient à $d$, donc :

$\def\arraystretch{1.4}\begin{array}{rcl}
\mtc{red}{3}\times x_A\mtc{blue}{-1}\times y_A+c=0~&\Lrarr&~\mtc{red}{3}\times (-5)\mtc{blue}{-1}\times 4+\mtc{ForestGreen}{c}=0\\
~&\Lrarr&~-19+\mtc{ForestGreen}{c}=0\quad\Lrarr~\mtc{ForestGreen}{c=19}\\
\end{array}$

Une équation cartésienne de $d$ est $\quad\mtc{red}{3}x\mtc{blue}{-}y+\mtc{ForestGreen}{19}=0$

\ms

\prop

Soient $A$ et $B$ deux points du plan et $M\coordl{x}{y}$.

$$\boxed{M\in(AB)~\iff~\det\pa{\vec{AB}~,~\vec{AM}}=0}$$

\prop

Soit $(d)$ une droite du plan et $A$ un point tel que $A\in(d)$.

Soit $\vec{n}$ un vecteur normal à $(d)$ et $M\coordl{x}{y}$.

$$\boxed{M\in(d)~\iff~\vec{AM}\cdot\vec{n}=0}$$

# Équation de cercle

## Propriété : Équation de cercle

\prop

Une équation de **cercle** de centre $A\left(\mtc{red}{x_A}~;~\mtc{blue}{y_A}\right)$ et de rayon $\mtc{ForestGreen}{r}$ est :

$$\boxed{\left(x-\mtc{red}{x_A}\right)^2+\left(y-\mtc{blue}{y_A}\right)^2=\mtc{ForestGreen}{r}^2}$$

\cimg{8cm}{img/12}

\rem

Cela signifie que tous les points appartenant au cercle ont leurs coordonnées $(x;y)$ qui vérifient l'équation.

\newpage

\demo

\bw{r}{6cm}\cimg{6cm}{img/13}\vspace{1cm}\ew

Soit l'ensemble des points $M(x;y)$ appartenant au cercle $\mathcal{C}$ de centre $A(\mtc{red}{x_A};\mtc{blue}{y_A})$ et de rayon $\mtc{ForestGreen}{r}$

$$M\in\mathcal{C}\Lrarr\mtc{ForestGreen}{AM}=\mtc{ForestGreen}{r}$$

À l'aide de Pythagore :

$$\mtc{ForestGreen}{AM}^2=(x-\mtc{red}{x_A})^2+(y-\mtc{blue}{y_A})^2$$

Donc, on a :

$$\left(x-\mtc{red}{x_A}\right)^2+\left(y-\mtc{blue}{y_A}\right)^2=\mtc{ForestGreen}{r}^2$$

\ms

\prop

Soient $M\coordl{x}{y}$ et un cercle $\mathcal{C}$ de diamètre $[AB]$.

$$\boxed{M\in\mathcal{C}~\iff~\vec{MA}\cdot\vec{MB}=0}$$

\ms

\methode \ul{Déterminer une équation d'un cercle}

\bw{r}{7cm}\vspace{-5mm}\cimg{7cm}{img/14}\ew

Déterminons l'équation du cercle $\mathcal{C}$ de centre $A(\mtc{red}{4};\mtc{blue}{-1})$ et passant par le point $B(3;5)$

Le rayon de $\mathcal{C}$ est :

$$
\begin{aligned}
r^2=AB^2&=(x_B-\mtc{red}{x_A})^2+(y_B-\mtc{blue}{y_A})^2\\
        &=(3-\mtc{red}{4})^2+\left(5-\mtc{blue}{(-1)}\right)^2~=37
\end{aligned}
$$

Donc l'équation de $\mathcal{C}$ est donc :

$$\left(x-\mtc{red}{4}\right)^2+\left(y-\mtc{blue}{(-1)}\right)^2=37$$

$$\Lrarr\boxed{\left(x-4\right)^2+\left(y+1\right)^2=37}$$

\vspace{1cm}

\methode \ul{Déterminer les caractéristiques d'un cercle}

On considère l'ensemble $E$ des points $M(x;y)$ qui vérifient l'équation :

$$x^2+y^2-2x-10y+17=0$$

Démontrons que l'ensemble $E$ est un cercle et déterminons ses caractéristiques (centre, rayon).

$$
\def\arraystretch{1.5}\begin{array}{rlllllll}
~&\mtc{red}{x^2}+{y^2}&-&\mtc{red}{2x}-\mtc{violet}{10y}&+&17&=&0\\
\Lrarr&\mtc{red}{x^2-2x}&+&\mtc{violet}{y^2-10y}&+&17&=&0\\
\Lrarr&\underbrace{x^2-2x\mtc{blue}{+1}}_{\mtc{violet}{(x-1)^2}}\mtc{blue}{-1}&+&\underbrace{y^2-10y\mtc{blue}{+25}}_{\mtc{ForestGreen}{(y-5)^2}}\mtc{blue}{-25}&+&17&=&0\\
\Lrarr&\mtc{violet}{(x-1)^2}-1&+&\mtc{ForestGreen}{(y-5)^2}-25&+&17&=&0\\
\Lrarr&(x-1)^2&+&(y-5)^2&-&9&=&0\\
\Lrarr&(x-1)^2&+&(y-5)^2&&&=&9\\
\end{array}
$$

On a donc $~E:(x-1)^2+(y-5)^2=3^2$

L'ensemble $E$ est le cercle de centre $A(1 ; 5)$ et de rayon $3$.

\newpage

**\ul{Vérification graphique :}**

\cimg{10cm}{img/15.png}

\methode \ul{Déterminer les points d'intersection d'une droite et d'un cercle}

Déterminons les coordonnées des points d'intersection du cercle $\mathcal{C}$ de centre $D(3;4)$ et de rayon $4$ et de la droite $d$ d'équation $~x+y=3$

- $\mathcal{C}$ a pour équation :

$$(x-x_D)^2+(y-y_D)^2=r^2\qquad\Lrarr\qquad\mtc{red}{(x-3)^2+(y-4)^2=16}$$

- $d$ a pour équation :

$$\mtc{blue}{x+y=3}$$

Les coordonnées des points d'intersections vérifient les 2 équations

Il faut donc résoudre le système $~S:\begin{cases}\mtc{red}{(x-3)^2+(y-4)^2=16}&:L_1\\\mtc{blue}{x+y=3}&:L_2\end{cases}$

On a $L_2:\mtc{blue}{x+y=3}~\Lrarr~y=(3-x)$

Remplaçons $y$ dans $L_1$ par $(3-x)$ :

$$
\def\arraystretch{1.4}\begin{array}{rclllll}
\mtc{red}{(x-3)^2+(y-4)^2=16}&\Lrarr&(x-3)^2&+&((3-x)-4)^2&=&16\\
&\Lrarr&(x-3)^2&+&(-x-1)^2&=&16\\
&\Lrarr&(x^2-6x+9)&+&(x^2+2x+1)&=&16\\
&\Lrarr&2x^2-4x+10&&&=&16\\
&\Lrarr&2x^2-4x-6&&&=&0\\
&\Lrarr&x^2-2x-3&&&=&0\\
\end{array}
$$

Il reste à résoudre : $~x^2-2x-3=0\qquad\Lrarr a=1\qquad b=-2\qquad c=-3$

$$
\def\arraystretch{3}\begin{array}{rcl}
x^2-2x-3=0&\Lrarr&\Delta=b^2-4ac\enspace=(-2)^2-4\times (1)\times (-3)\enspace=16>0\\
          &\Lrarr&x_1=\dfrac{-b-\sqrt{\Delta}}{2a}\quad\text{et}\quad    x_2=\dfrac{-b+\sqrt{\Delta}}{2a}\\
          &\Lrarr&x_1=\dfrac{-(-2)-\sqrt{16}}{2}=(-1)\quad\text{et}\quad x_2=\dfrac{-(-2)+\sqrt{16}}{2}=3\\
\end{array}
$$

Les $2$ points d'intersection ont pour abscisses $(-1)$ et $3$.

On calcule leurs ordonnées avec $~L_2:y=(3-x)$

Au final : $\quad A(-1;4)\quad$ et $\quad B(3;0)$

\newpage

**\ul{Vérification graphique :}**

\cimg{8cm}{img/16.png}
