---
title: Fonctions affines
classe: 2^nde^
toc: true
---

# Définitions et propriétés

## Fonction affine (ou 1$^\text{er}$ degré)

\definition Soit $f$, une fonction définie sur $\R$ tel que :

$$\boxed{f(x)=\textcolor{red}{m}x+\textcolor{blue}{p}}\qquad\text{avec}\qquad\textcolor{red}{m}\in\R~\text{ et }~\textcolor{blue}{p}\in\R$$

$f$ est appelée **fonction affine** ou **fonction du 1$^\text{er}$ degré**.

\exemple

| Fonctions                                                                                                                | $\textcolor{red}{m}$             | $\textcolor{blue}{p}$            |
| :----------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------- |
| $f(x)=\textcolor{red}{3}x+\textcolor{blue}{1}$                                                                           | $\textcolor{red}{3}$             | $\textcolor{blue}{1}$            |
|                                                                                                                          |                                  |                                  |
| $\begin{aligned}f(x)&=5-2x&=\textcolor{red}{-2}x+\textcolor{blue}{5}\end{aligned}$                                       | $\textcolor{red}{-2}$            | $\textcolor{blue}{5}$            |
|                                                                                                                          |                                  |                                  |
| $\begin{aligned}f(x)&=\frac{-2x+4}{5} &=\textcolor{red}{\frac{-2}{5}}x+\textcolor{blue}{\frac{4}{5}}\end{aligned}\qquad$ | $\textcolor{red}{\dfrac{-2}{5}}$ | $\textcolor{blue}{\dfrac{4}{5}}$ |
|                                                                                                                          |                                  |                                  |
| $f(x)=\textcolor{red}{\sqrt{3}}x\textcolor{blue}{-10}$                                                                   | $\textcolor{red}{\sqrt{3}}$      | $\textcolor{blue}{-10}$          |

\rem Quelques contre-exemples

- $f(x)=\sqrt{3x}\quad$ n'est pas une fonction affine.
- $f(x)=\dfrac{3x+1}{x}\quad$ n'est pas une fonction affine.
- $f(x)=x^2+1\quad$ n'est pas une fonction affine.

\medskip

\medskip

**\ul{Calcul d'images}**

$f(x)=\dfrac{1}{2}x+1\qquad m=\frac{1}{2}\quad$et$\quad p=1$

$$
\def\arraystretch{1.4}\begin{array}{|c|c|c|c|c|c|c|c|c|c|}\hline
x & -4  & -2 & -1 & 0 & 1 & 2 & 3 & 4 & 6\\ \hline
f(x) & -1  & ... & ... & 1 & 1.5 & 2 & ... & ... & 4\\ \hline
\end{array}
$$

- $f(\cbox{pink}{-4})=\frac{1}{2}\times (\cbox{pink}{-4})+1\quad=-2+1\quad=-1$
- $f(\cbox{pink}{0})=\frac{1}{2}\times (\cbox{pink}{0})+1\quad=0+1\quad=1$
- $f(\cbox{pink}{6})=\frac{1}{2}\times (\cbox{pink}{6})+1\quad=3+1\quad=4$

\newpage

## Représentation graphique

\propriete La représentation graphique d'une fonction affine est **une droite**

\bw{r}{9.5cm}\cimg{9cm}{img/02.png}\ew

\exemple Soit $f(x)=\frac{1}{2}x+1$ définie sur $\R$

$$
\def\arraystretch{1.4}\begin{array}{|c|c|c|c|}\hline
x & -4  & ... & 6\\ \hline
f(x) & -1  & ... & 4\\ \hline
\end{array}
$$

---

\rem

Soit $f$ définie sur $\R$ tel que : $\quad f(x)=\textcolor{red}{m}x+\textcolor{blue}{p}$

- $\textcolor{red}{m}$ est appelé **coefficient directeur** ou **pente**
- $\textcolor{blue}{p}$ est appelé **ordonnée à l'origine**

\exemple

Soit $f(x)=\textcolor{blue}{3}\textcolor{red}{-2}x$ définie sur $\R$

- **Coefficient directeur** : $\textcolor{red}{-2}$
- **Ordonnée à l'origine** : $\textcolor{blue}{3}$

\rem L'ordonnée à l'origine, c'est la valeur de $f(0)$.

C'est l'ordonnée du point d'intersection de la droite représentative de $f$ avec l'axe des ordonnées.

\exemple $\quad f(x)=\frac{1}{2}x+1\quad\Rightarrow p=1$

Le point d'intersection de la droite et de l'axe des ordonnées à pour coordonnées $\pa{0;1}$.

## Coefficient directeur (ou pente) et ordonnée à l'origine

Soient $f$ définie sur $\R$ par $f(x)=\textcolor{red}{m}x+\textcolor{blue}{p}~$ et $~ a$ et $b$ deux réels distincts.

On a :

$$\boxed{\textcolor{red}{m}=\dfrac{f(b)-f(a)}{b-a}}\quad\text{et}\quad \textcolor{blue}{p}=f(a)-\textcolor{red}{m}a$$

\medskip

\bw{r}{4cm}
\begin{tikzpicture}[line cap=round,line join=round,=triangle 45]
\begin{axis}[x=0.75cm,y=0.75cm,axis lines=middle,ymajorgrids=true,xmajorgrids=true,xmin=-1.5,xmax=2.75,ymin=-6.5,ymax=1.5,xtick={-1.0,...,3.0},ytick={-6.0,-5.0,...,2.0},xticklabels={$-1$,,$1$,$2$},yticklabels={,$5$,,,,,$0$,$1$}]
\draw [color=gray, line width=1.3pt,domain=-4:5] (-1,-8) -- (3,4);
\draw [fill=blue] (0.,-5.) circle (2.5pt);
\draw[color=blue] (0.4,-5) node {$A$};
\draw [fill=blue] (1.,-2.) circle (2.5pt);
\draw[color=blue] (1.4,-2) node {$B$};
\end{axis}
\end{tikzpicture}
\ew

\exemple $f$ est une fonction affine telle que $f(0)=-5$ et $f(1)=-2$

On a :

- $\textcolor{red}{m}=\dfrac{f(b)-f(a)}{b-a}=\dfrac{f(1)-f(0)}{1-0}=\dfrac{-2-(-5)}{1}=3$
- $\textcolor{blue}{p}=f(a)-\textcolor{red}{m}a=f(0)-3\times 0=-5-3\times 0=-5$

\medskip

Donc $\quad f(x)=3x-5$

\methode Lire graphiquement $m$ et $p$

Pour lire la valeur de $p$, on lit l'ordonnée du point d'intersection de la droite avec l'axe des ordonnées.

\cimg{10cm}{img/02.png}

Dans ce cas, on peut lire $\textcolor{blue}{p}=1$ car le point d'intersection de la droite avec l'axe des ordonnées a pour coordonnées $\pa{0;1}$

\newpage

Pour lire la valeur de $\textcolor{red}{m}$, on trace un escalier et : $$\textcolor{red}{m}=\dfrac{\text{Montée}}{\text{Avance}}=\dfrac{\Delta y}{\Delta x}=\dfrac{f(b)-f(a)}{b-a}$$

Dans ce cas, $\quad \textcolor{red}{m}=\dfrac{\text{Montée}}{\text{Avance}}=\dfrac{\Delta y}{\Delta x}=\dfrac{2}{4}=\dfrac{1}{2}$

\cimg{9cm}{img/03.png}

\rem On peut le faire pour d'autres "escaliers" ...

$$\textcolor{red}{m}=\dfrac{\text{Montée}}{\text{Avance}}=\dfrac{\Delta y}{\Delta x}=\dfrac{1}{2}\quad\text{ ou }\quad\textcolor{red}{m}=\dfrac{\text{Montée}}{\text{Avance}}=\dfrac{\Delta y}{\Delta x}=\dfrac{5}{10}=\dfrac{1}{2}$$

\medskip

Au final : $\quad f(x)=\textcolor{red}{\dfrac{1}{2}}x+\textcolor{blue}{1}$

\cimg{18cm}{img/04tt.png}

\methode Déterminer une fonction affine

\bw{r}{7cm}\cimg{7cm}{img/05.png}\vspace{-3cm}\ew

Soit $A(-1;3)$ et $B(5;1)$, deux points du plan.

La droite $(AB)$ est la représentation de $f(x)=mx+p$.

On a :

- $A\in(AB)\Rightarrow f(x_A)=y_A \Rightarrow f(-1)=3$
- $B\in(AB)\Rightarrow f(x_B)=y_B \Rightarrow f(5)=1$

Donc :

$$\begin{aligned}
\textcolor{red}{m}&=\frac{f(x_A)-f(x_B)}{x_A-x_B}&=&\frac{y_A-y_B}{x_A-x_B}=\frac{\Delta y}{\Delta x}\\
&=\frac{3-1}{-1-5}&=&\textcolor{red}{\frac{-1}{3}}
\end{aligned}$$

et

$$\begin{aligned}
f(x_A)=\textcolor{red}{m}x_A + \textcolor{blue}{p}\Lrarr\quad\textcolor{blue}{p}&=f(x_A)-m\times x_A\\
&=y_A-\frac{-1}{3}\times x_A\\
&=3-\frac{-1}{3}\times (-1)&=&\textcolor{blue}{\dfrac{5}{3}}
\end{aligned}$$

Au final : $\qquad f(x)=\textcolor{red}{\frac{-1}{3}}x+\textcolor{blue}{\frac{5}{3}}$

\newpage

# Étude d'une fonction affine

## Sens de variations

Soit $\quad f(x)=\textcolor{red}{m}x+\textcolor{blue}{p}\quad$ définie sur $\R$.

- Si $~m > 0~$ alors $~f$ est **croissante**
- Si $~m < 0~$ alors $~f$ est **décroissante**

\exemple\hfill

\bw{r}{5cm}\vspace{-5mm}\cimg{5cm}{img/07.png}\vspace{-2cm}\ew

Soit $\quad f(x)=\dfrac{-1}{3}x+\frac{5}{3}\quad$ définie sur $\R$.

On a $~\textcolor{red}{m}=\frac{-1}{3}<0$ donc $f$ est **décroissante**.

## Signe de $f(x)=\textcolor{red}{m}x+\textcolor{blue}{p}$

\bw{r}{4cm}\vspace{-5mm}\cimg{3cm}{img/08.png}\vspace{-2cm}\ew

Pour établir le signe de $f(x)$, il faut résoudre $f(x)>0$.

$$
\begin{aligned}
  f(x)>0 & \Lrarr mx+p>0\\
         & \Lrarr mx>(-p)\qquad \Lrarr
         \begin{cases}
             x>\frac{-p}{m}&\text{si}\quad m>0\\
             x<\frac{-p}{m}&\text{si}\quad m<0
         \end{cases}
\end{aligned}
$$

Donc :

$$\begin{array}{ll}
\text{Si }\ \  m>0 &\qquad\text{Si }\ \ m<0 \\
 \begin{array}{|c|ccccc|}\hline
\rule[-0.4cm]{0cm}{1cm}x & -\infty & \quad & \frac{-p}{m} & \quad & +\infty \\ \hline
\rule[-0.4cm]{0cm}{1cm}f(x) & ~ & - & 0 & + & ~ \\\hline
\end{array}&\qquad\begin{array}{|c|ccccc|}\hline
\rule[-0.4cm]{0cm}{1cm}x & -\infty & \quad & \frac{-p}{m} & \quad & +\infty \\ \hline
\rule[-0.4cm]{0cm}{1cm}f(x) & ~ & + & 0 & - & ~ \\\hline
\end{array}
\end{array}$$

\exemple Signe de $~f(x)=3x+1$

$$\begin{aligned}
f(x)>0 & ~\Leftrightarrow~ 3x+1>0\\
& ~\Leftrightarrow~ 3x>-1\\
& ~\Leftrightarrow~ x>\frac{-1}{3}\\
\end{aligned}\qquad\Lrarr\qquad\def\arraystretch{1.5}\begin{array}{|c|ccccc|}\hline
x & -\infty & \quad & \frac{-1}{3} & \quad & +\infty \\ \hline
f(x) & ~ & - & 0 & + & ~ \\\hline
\end{array}$$

\exemple Signe de $~f(x)=2-\frac{1}{3}x$

$$\begin{aligned}
f(x)>0 & ~\Leftrightarrow~ 2-\frac{1}{3}x>0\\
& ~\Leftrightarrow~ \frac{-1}{3}x>-2\\
& ~\Leftrightarrow~ x<(-2)\div \frac{-1}{3}
& ~\Leftrightarrow~ x<6\\
\end{aligned}\qquad\Lrarr\qquad\def\arraystretch{1.5}\begin{array}{|c|ccccc|}\hline
x & -\infty & \quad & 6 & \quad & +\infty \\ \hline
f(x) & ~ & + & 0 & - & ~ \\\hline
\end{array}$$

\medskip

**\ul{Cas général :}**

$$
\def\arraystretch{1.5}\begin{array}{|c|ccccc|}\hline
x & -\infty & \quad & \frac{-p}{m} & \quad & +\infty \\ \hline
\rule[-4mm]{0cm}{1cm}f(x) & ~ & \text{signe de }(-m) & 0 & \text{signe de }(m) & ~ \\\hline
\end{array}
$$

\newpage

# Équations / Inéquations

## Équations / Inéquations du 1$^\text{er}$ degré

\exemple

$\begin{aligned}
3x+2=2(7-x)&~\Leftrightarrow~3x+2\quad\textcolor{red}{\scriptstyle +2x}&~=~&14-2x\quad\textcolor{red}{\scriptstyle +2x}\\
~&~\Leftrightarrow~3x+2+2x\quad\textcolor{red}{\scriptstyle -2}&~=~&14\quad\textcolor{red}{\scriptstyle -2}\\
~&~\Leftrightarrow~5x\quad\textcolor{red}{\scriptstyle\div 5}&~=~&12\quad\textcolor{red}{\scriptstyle\div 5}\\
~&~\Leftrightarrow~x&~=~&\frac{12}{5}\\
~&~\Leftrightarrow~S=\left\{\frac{12}{5}\right\}
\end{aligned}$

\exemple

$\begin{aligned}
x-2>5+3x  ~&~\Leftrightarrow~x-2\quad\textcolor{red}{\scriptstyle -3x}&~>~&5+3x\quad\textcolor{red}{\scriptstyle -3x}\\
~&~\Leftrightarrow~-2x-2\quad\textcolor{red}{\scriptstyle +2}&~>~&5\quad\textcolor{red}{\scriptstyle +2}\\
~&~\Leftrightarrow~-2x\quad\textcolor{red}{\scriptstyle\div (-2)}&~>~&7\quad\textcolor{red}{\scriptstyle\div (-2)}\\
~&~\Leftrightarrow~x&~<~&\frac{-7}{2}\\
~&~\Leftrightarrow~S=\left]-\infty;\frac{-7}{2}\right[
\end{aligned}$

## Équations / Inéquations produit

\propriete Équation produit

Si $\quad \textcolor{red}{a}\times \textcolor{blue}{b}=0\quad$ alors $\quad\begin{cases}\textcolor{red}{a}=0\\ \text{ ou}\\\textcolor{blue}{b}=0\end{cases}$

\exemple

$\begin{aligned}
\textcolor{red}{(3x-1)}\textcolor{blue}{(2x+5)}=0 ~&~\Leftrightarrow~\begin{cases}\textcolor{red}{3x-1}=0\\\textcolor{blue}{2x+5}=0\end{cases}\\
~&~\Leftrightarrow~\begin{cases}3x=1\\2x=-5\end{cases}
~&~\Leftrightarrow~\begin{cases}x=\frac{1}{3}\\x=\frac{-5}{2}\end{cases}
~&~\Leftrightarrow~\boxed{S=\left\{\frac{1}{3};\frac{-5}{2}\right\}}
\end{aligned}$

\methode Résoudre une inéquation produit

On cherche à résoudre $\textcolor{red}{(3x-1)}\textcolor{blue}{(2x+5)}<0$

Il faut établir le tableau de signe de $\textcolor{red}{(3x-1)}$ et de $\textcolor{blue}{(2x+5)}$ puis appliquer la règle des signes.

$$
\begin{array}{ccc}
\boxed{
\begin{aligned}
\textcolor{red}{3x-1}>0&~\Leftrightarrow~ 3x>1\\
      &~\Leftrightarrow~ x>\frac{1}{3}
\end{aligned}}
&\quad&
\boxed{
\begin{aligned}
\textcolor{blue}{2x+5}>0&~\Leftrightarrow~ 2x>-5\\
      &~\Leftrightarrow~ x>\frac{-5}{2}
\end{aligned}}
\end{array}
$$

On a $\quad\textcolor{red}{(3x-1)}>0~\Leftrightarrow~ x>\frac{1}{3}\qquad\text{et}\qquad\textcolor{blue}{(2x+5)}>0~\Leftrightarrow~ x>\frac{-5}{2}$

Donc :

$$
\def\arraystretch{1.5}
\begin{array}{|c|ccccccc|}\hline
x & -\infty & \quad & \frac{-5}{2} & \quad & \frac{1}{3} & \quad & +\infty \\ \hline
\textcolor{red}{(3x-1)} & - & - & - & - & 0 & + & + \\ \hline
\textcolor{blue}{(2x+5)} & - & - & 0 & + & + & + & + \\ \hline
\textcolor{red}{(3x-1)}\times\textcolor{blue}{(2x+5)} & + & + & 0 & - & 0 & + & + \\ \hline
\end{array}
$$

Au final : $\quad\textcolor{red}{(3x-1)}\textcolor{blue}{(2x+5)}<0\quad\Leftrightarrow\quad\boxed{S=\left]\frac{-5}{2};\frac{1}{3}\right[}$
