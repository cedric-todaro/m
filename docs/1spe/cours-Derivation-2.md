---
title: "Dérivation (2) : Fonctions dérivées"
classe: 1^spé^
toc: true
---

# Dérivées des fonctions usuelles

\bw{r}{6cm}\cimg{6cm}{img/courbe01}\vspace{-3cm}\ew

\exemple

\ms

Soit la fonction $f$ définie sur $\R$ par $f(x)=x^2$.

Démontrons que pour tout $x\in\R$ , on : $f'(x)=2x$.

Pour cela, calculons le **nombre dérivé** de $f$ en un nombre réel quelconque $a$.

\ms

Pour $h\neq 0$ :

$$
\begin{aligned}
\dfrac{f(a+h)-f(a)}{h}&=\dfrac{(a+h)^2-a^2}{h}\\
                     ~&=\dfrac{a^2+2ah+h^2-a^2}{h}\\
                     ~&=\dfrac{2ah+h^2}{h}\\
                     ~&=\dfrac{h\times\left(2a+h\right)}{h}\\
                     ~&=2a+h\\
\end{aligned}
$$

\ms

Or $\quad\lim\limits_{h\to 0}\left(\dfrac{f(a+h)-f(a)}{h}\right) = \lim\limits_{h\to 0}\left(2a+h\right)=2a$

\ms

Pour tout nombre $a$, on associe le **nombre dérivé** de la fonction $f$ égal à $2a$.

\ms

On a donc défini sur $\R$ une fonction, notée $f'$, tel que $f'(x)=2x$.

\ms

Cette fonction s'appelle la **fonction dérivée** de $f$.

\newpage

\definition

\bw{r}{4.5cm}\vspace{-1cm}\cimg{4.5cm}{img/42-Lagrange.jpg}
C'est au mathématicien français \textbf{Joseph-Louis Lagrange} (1736-1813) que l'on doit la notation $f'(x)$ au nom de "dérivée" pour désigner ce concept mathématique.
\vspace{-6cm}
\ew

Soit $f$ une fonction définie sur $I$.

On dit que $f$ est dérivable sur $I$ si elle est dérivable en tout réel $x\in I$.

Dans ce cas, la fonction qui à tout $x\in I$ associe le **nombre dérivé** de $f$ en $x$ est appelée **fonction dérivée** de $f$ et se note $f'$.

## Formules de dérivation des fonctions usuelles$^{\text{\faHeart}}$

\nc{\Df}{\m{\mathcal{D}_f}}
\nc{\Dfp}{\m{\mathcal{D}_{f'}}}
\nc{\Rp}{\m{\R^{+}}}
\nc{\Rpe}{\m{\R^{+}-\{0\}}}
\nc{\Ret}{\m{\R-\{0\}}}
\nc{\hhh}{\rule[-2mm]{0cm}{7mm}}

\begin{tabular}{|lc|c|lc|}\hline
\hhh $f$ & \Df & $\quad\quad$ & $f'$ & \Dfp \\ \hline
\hhh $f(x)=a$ & \R & $\quad\rarr\quad$ & $f'(x)=0$ & \R \\
\hhh avec $a\in\R$ & & & & \\ \hline
\hhh $f(x)=ax$ & \R & $\quad\rarr\quad$ & $f'(x)=a$ & \R \\
\hhh avec $a\in\R$ & & & & \\ \hline
\hhh $f(x)=x^2$ & \R & $\quad\rarr\quad$ & $f'(x)=2x$ & \R \\ \hline
\hhh $f(x)=x^n$ & \R & $\quad\rarr\quad$ & $f'(x)=nx^{(n-1)}$ & \R \\
\hhh avec $n\ge 1$ & & & & \\ \hline
\hhh $f(x)=\frac{1}{x}$ & \Ret & $\quad\rarr\quad$ & $f'(x)=\frac{-1}{x^2}$ & \Ret \\ \hline
\hhh $f(x)=\frac{1}{x^n}$ & \Ret & $\quad\rarr\quad$ & $f'(x)=\frac{-n}{x^{(n+1)}}$ & \Ret \\
\hhh avec $n\ge 1$ & & & & \\ \hline
\hhh $f(x)=\sqrt{x}$ & \Rp & $\quad\rarr\quad$ & $f'(x)=\frac{1}{2\sqrt{x}}$ & \Rpe \\ \hline
\end{tabular}

\exemple

- Soit $f$ définie sur $\R$ par $\quad \boxed{f(x)=x^4}\quad$ alors :
  - $f$ est dérivable sur $\R$
  - On a, pour tout $x\in\R$, $\quad \boxed{f'(x)=4x^3}$
- Soit $f$ définie sur $\R-\{0\}$ par $\quad \boxed{f(x)=\dfrac{1}{x^5}}\quad$ alors :
  - $f$ est dérivable sur $\R-\{0\}$
  - On a, pour tout $x\in\R-\{0\}$, $\quad \boxed{f'(x)=\dfrac{-5}{x^6}}$

\ms

\demo \ul{Dérivée de la fonction inverse}

\ms

Soit la fonction $f$ définie sur $\R-\{0\}$ par $f(x)=\dfrac{1}{x}$.

Démontrons que pour tout $x$ de $\R-\{0\}$, on a : $f'(x)=\dfrac{-1}{x^2}$.

- Pour $h\neq 0$ et $h\neq-a$ :

$$\dfrac{f(a+h)-f(a)}{h}\quad=\dfrac{\dfrac{1}{a+h}-\dfrac{1}{a}}{h}\quad=\dfrac{\quad\dfrac{a-(a+h)}{a(a+h)}\quad}{h}\quad=\dfrac{\quad\dfrac{-h}{a(a+h)}\quad}{h}\quad=\dfrac{-1}{a(a+h)}$$

- Donc

$$\lim\limits_{h\to 0}\left(\dfrac{f(a+h)-f(a)}{h}\right)=\lim\limits_{h\to 0}\left(\dfrac{-1}{a(a+h)}\right)=\dfrac{-1}{a^2}$$

Pour tout nombre $a$, on associe le **nombre dérivé** de $f$ égal à $\dfrac{-1}{a^2}$.

Ainsi, pour tout $x\in\R-\{0\}$, on a : $\boxed{f'(x)=\dfrac{-1}{x^2}}$.

\newpage

\demo \ul{Non dérivabilité de la fonction racine carrée en $0$}

\ms

Soit la fonction $f$ définie sur $\left[0~;~+\infty\right[$ par $f(x)=\sqrt{x}$

On calcule le taux de variation de $f$ en $0$ :

- Pour $h>0$ :

$$
\begin{aligned}
\dfrac{f(0+h)-f(0)}{h}&=\dfrac{\sqrt{0+h}-\sqrt{0}}{h}\\
                      &=\dfrac{\sqrt{h}}{h}\qquad=\dfrac{\sqrt{h}}{\sqrt{h}\times\sqrt{h}}\qquad=\dfrac{1}{\sqrt{h}}
\end{aligned}
$$

- Donc :

$$\lim\limits_{h\to 0}\left(\dfrac{f(0+h)-f(0)}{h}\right)=\lim\limits_{h\to 0}\left(\dfrac{1}{\sqrt{h}}\right)=+\infty$$

En effet, lorsque $h\to 0$, $\left(\dfrac{1}{\sqrt{h}}\right)$ prend des valeurs de plus en plus grandes.

\ms

Donc $f$ n'est pas dérivable en $0$.

\ms

Géométriquement, cela signifie que la courbe représentative de la fonction **racine carrée** admet une **tangente verticale** en $x=0$.

\cimg{12cm}{img/01.png}

# Opérations sur les fonctions dérivées

## Somme, produit, inverse, quotient de dérivées

\exemple Soit la fonction $f$ définie sur $\R$ par $f(x)=x+x^2$.

\ms

Pour $h\neq 0$ :

$$
\begin{aligned}
\dfrac{\textcolor{blue}{f(a+h)}-\textcolor{red}{f(a)}}{h}&=\dfrac{\left(\textcolor{blue}{(a+h)+(a+h)^2}\right)-\textcolor{red}{(a+a^2)}}{h}\\
                ~&=\dfrac{a+h+a^2+2ah+h^2-a-a^2}{h}\\
                ~&=\dfrac{h+2ah+h^2}{h}=\dfrac{h(1+2a+h)}{h}&=1+2a+h
\end{aligned}
$$

Donc : $\lim\limits_{h\to 0}\left(\dfrac{f(a+h)-f(a)}{h}\right)= \lim\limits_{h\to 0}\left(1+2a+h\right)=1+2a$.

\ms

On a $f$ dérivable sur $\R$ et pour tout $x\in\R$, $f'(x)=1+2x$.

\ms

On pose pour tout $x\in\R$ : $\quad u(x)=x~$ et $~v(x)=x^2$. On a ainsi : $f(x)=u(x)+v(x)$

\ms

Pour tout $x\in\R$, on a donc : $\quad u'(x)=1~$ et $~v'(x)=2x$

\ms

On constate sur cet exemple que : $~f'(x)=u'(x)+v'(x)$

Soit encore $~\boxed{(u+v)'(x)=u'(x)+v'(x)}$

\newpage

## Formules d'opération sur les fonctions dérivées$^{\text{\faHeart}}$

$u$ et $v$ sont deux fonctions dérivables sur $I$.

| Dérivabilité                                      | Propriété                                         |
| :------------------------------------------------ | :------------------------------------------------ |
| $(u+v)$ est dérivable sur $I$                     | $(u+v)'=u'+v'$                                    |
|                                                   |                                                   |
| $(ku)$ est dérivable sur $I$ avec $k\in\R$        | $(ku)'=ku'$                                       |
|                                                   |                                                   |
| $(uv)$ est dérivable sur $I$                      | $(uv)'=u'v+uv'$                                   |
|                                                   |                                                   |
| $(u^n)$ est dérivable sur $I$                     | $(u^n)'=nu'u^{n-1}$                               |
|                                                   |                                                   |
| $\left(\dfrac{1}{u}\right)$ est dérivable sur $I$ | $\left(\dfrac{1}{u}\right)'=\dfrac{-u'}{u^2}$     |
| Avec $u$ qui **ne s'annule pas** sur $I$          |                                                   |
|                                                   |                                                   |
| $\left(\dfrac{u}{v}\right)$ est dérivable sur $I$ | $\left(\dfrac{u}{v}\right)'=\dfrac{u'v-uv'}{v^2}$ |
| Avec $v$ qui **ne s'annule pas** sur $I$          |                                                   |

\demo \ul{$(uv)'=u'v+uv'$}

- On veut démontrer que :

$$\lim\limits_{h\to 0}\left(\dfrac{(uv)(a+h)-(uv)(a)}{h}\right) = u'(a)v(a)+u(a)v'(a)$$

- Calculons $\pa{\dfrac{(uv)(a+h)-(uv)(a)}{h}}$

$$
\def\arraystretch{2.9}
\begin{array}{rl}
\dfrac{(uv)(a+h)-(uv)(a)}{h}&=\dfrac{u(a+h)v(a+h)-u(a)v(a)}{h}\\
                            &=\dfrac{u(a+h)v(a+h)\quad\color{blue}-u(a)v(a+h)+u(a)v(a+h)\color{black}\quad-u(a)v(a)}{h}\\
                            &=\dfrac{u(a+h)\color{violet}v(a+h)\color{black}-u(a)\color{violet}v(a+h)\color{black}+\color{red}u(a)\color{black}v(a+h)-\color{red}u(a)\color{black}v(a)}{h}\\
                            &=\dfrac{\Big(u(a+h)-u(a)\Big)\color{violet}v(a+h)\color{black}+\color{red}u(a)\color{black}\Big(v(a+h)-v(a)\Big)}{h}\\
                            &=\dfrac{\Big(u(a+h)-u(a)\Big)v(a+h)}{h}+\dfrac{u(a)\Big(v(a+h)-v(a)\Big)}{h}\\
                            &=\dfrac{u(a+h)-u(a)}{h}\times v(a+h)\quad+\quad u(a)\times \dfrac{v(a+h)-v(a)}{h}
\end{array}
$$

\ms

On a :

- $\lim\limits_{h\to 0}\left(u(a+h)\right)=u(a)$
- $\lim\limits_{h\to 0}\left(v(a+h)\right)=v(a)$

\ms

De plus, on a $u$ et $v$ dérivables sur $I$ donc :

- $\lim\limits_{h\to 0}\left(\dfrac{u(a+h)-u(a)}{h}\right)=u'(a)$
- $\lim\limits_{h\to 0}\left(\dfrac{v(a+h)-v(a)}{h}\right)=v'(a)$

\newpage

En passant à la limite lorsque $h\to 0$, on a :

$$
\begin{aligned}
(uv)'&=\lim\limits_{h\to 0}\left(\dfrac{(uv)(a+h)-(uv)(a)}{h}\right)\\
     &=\lim\limits_{h\to 0}\left(\dfrac{u(a+h)-u(a)}{h}\times v(a+h)\quad+\quad u(a)\times \dfrac{v(a+h)-v(a)}{h}\right)\\
     &=\lim\limits_{h\to 0}\left(\dfrac{u(a+h)-u(a)}{h}\times v(a+h)\right)+\lim\limits_{h\to 0}\left(\dfrac{v(a+h)-v(a)}{h}\times u(a)\right)\\
     &=u'(a)v(a)+u(a)v'(a)
\end{aligned}
$$

\ms

On conclut que $\boxed{(uv)'=u'v+uv'}$

\methode \ul{Calculer les dérivées de sommes, produits et quotients de fonctions.}

Calculons les fonctions dérivées des fonctions suivantes :

- $\boxed{f_1(x)=5x^3}$

On a : $\quad f_1(x)=5\times u(x)\quad$ avec $\quad u(x)=x^3\qquad\Rarr u'(x)=3x^2$

Donc :

$$\quad f_1'(x)=5\times u'(x)\quad=5\times 3x^2=15x^2\qquad\rarr\boxed{f_1'(x)=15x^2}$$

---

- $\boxed{f_2(x)=3x^2+4\sqrt{x}}$

On a : $\quad f_2(x)=3\times u(x)+4\times v(x)\quad$ avec $\begin{cases}u(x)=x^2\\v(x)=\sqrt{x}\end{cases}\Rarr\begin{cases}u'(x)=2x\\v'(x)=\dfrac{1}{2\sqrt{x}}\end{cases}$

Donc :

$$f_2'(x)=\left(3\times u'(x)\right)+\left(4\times v'(x)\right)=\left(3\times 2x\right)+\left(4\times \dfrac{1}{2\sqrt{x}}\right)\qquad\rarr\boxed{f_2'(x)=6x+\dfrac{2}{\sqrt{x}}}$$

---

- $\boxed{f_3(x)=\dfrac{1}{2x^2+5x}}$

On a : $\quad f_3(x)=\dfrac{1}{u}\qquad$ avec $u(x)=2x^2+5x\qquad\Rarr u'(x)=\left(2\times 2x\right)+\left(5\times 1\right)=4x+5$

Donc :

$$f_3'(x)=\dfrac{u'}{u^2}=\dfrac{4x+5}{(2x^2+5x)^2}\qquad\rarr\boxed{f_3'(x)=\dfrac{4x+5}{(2x^2+5x)^2}}$$

---

- $\boxed{f_4(x)=(3x^2+4x)(5x-1)}$

On a : $\quad f_4(x)=u(x)\times v(x)\quad$ avec $\begin{cases}u(x)=3x^2+4x\\v(x)=5x-1\end{cases}\Rarr\begin{cases}u'(x)=6x+4\\v'(x)=5\end{cases}$

Donc :

$$
\begin{aligned}
 f_4'(x)&=u'v+uv'\\
 &=(6x+4)(5x-1)+(3x^2+4x)(5)\\
 &=30x^2-6x+20x-4+15x^2+20x\\
 &=45x^2+34x-4
 \end{aligned}
 \qquad\rarr\boxed{f_4'(x)=45x^2+34x-4}
$$

\newpage

- $\boxed{f_5(x)=\dfrac{6x-5}{x^3-2x^2-1}}$

On a : $\quad f_5(x)=\dfrac{u(x)}{v(x)}\quad$ avec $\begin{cases}u(x)=6x-5\\v(x)=x^3-2x^2-1\end{cases}\Rarr\begin{cases}u'(x)=6\\v'(x)=3x^2-4x\end{cases}$

Donc :

$$
\begin{aligned}
 f_5'(x)&=\dfrac{u'v-uv'}{v^2}\\
 &=\dfrac{(6)(x^3-2x^2-1)-(6x-5)(3x^2-4x)}{(x^3-2x^2-1)^2}\\
 &=\dfrac{6x^3-12x^2-6-18x^3+24x^2+15x^2-20x}{(x^3-2x^2-1)^2}\\
 &=\dfrac{-12x^3+27x^2-20x-6}{(x^3-2x^2-1)^2}
 \end{aligned}
 \qquad\rarr\boxed{f_5'(x)=\dfrac{-12x^3+27x^2-20x-6}{(x^3-2x^2-1)^2}}
$$

## Composée de dérivées

| $f$       | $\mathcal{D}_f$       | $f'$        |
| :-------- | :-------------------- | :---------- |
| $f(ax+b)$ | $f$ dérivable sur $I$ | $af'(ax+b)$ |

\exemple $f(x)=\sqrt{5x-4}=u(5x-4)\quad$ avec $~u(x)=\sqrt{x}~\Rarr u'(x)=\dfrac{1}{2\sqrt{x}}$

Donc $f'(x)=5\times u'(5x-4)=5\times\dfrac{1}{2\sqrt{5x-4}}$

\ms

## Cas de la fonction valeur absolue

\exemple

- La valeur **absolue** de $8$ est égale à $8$.
- La valeur **absolue** de $-5$ est égale à $5$.

\definition

La **valeur absolue** d'un nombre $A$ est égal au nombre $A$ si $A$ est **positif**, et au nombre $-A$ si $A$ est négatif.

La **valeur absolue** de $A$ se note $|A|$.

$$|A|=\begin{cases}A&\text{si }A\ge0\\-A&\text{si }A\le 0\end{cases}$$

\exemple \

$$|x-5|\quad=\begin{cases}x-5&\text{si }(x-5)\ge 0\\-(x-5)&\text{si }(x-5)\le 0\end{cases}\quad=\begin{cases}x-5&\text{si }x\ge5\\5-x&\text{si }x\le 5\end{cases}$$

\definition

La fonction **valeur absolue** est la fonction $f$ définie sur $\R$ par $f(x)=|x|$.

\cimg{7.5cm}{img/02.png}

\newpage

\propriete La fonction **valeur absolue** est :

- strictement **décroissante** sur $\left]-\infty~;~0\right]$
- strictement **croissante** sur $\left[0~;~+\infty\right[$.

\cimg{6cm}{img/03.png}

\rem Dans un repère orthogonal, la courbe représentative de la fonction valeur absolue est symétrique par rapport à l'axe des ordonnées.

\demo \ul{Étude de la dérivabilité en 0}

\ms

Soit $f$ définie sur $\R$ par $f(x)=|x|$.

\ms

Calculons le taux de variation de $f$ en 0 :

$$\dfrac{f(0+h)-f(0)}{h}=\dfrac{|0+h|-|0|}{h}=\dfrac{|h|}{h}$$

- Si $h>0\Rarr|h|=h\quad$ donc $\quad\dfrac{f(0+h)-f(0)}{h}=\dfrac{h}{h}=1$
- Si $h\less 0\Rarr|h|=-h\quad$ donc $\quad\dfrac{f(0+h)-f(0)}{h}=\dfrac{-h}{h}=-1$

\ms

\bw{r}{6.4cm}\vspace{-5mm}
\begin{center}
\begin{tikzpicture}
\begin{axis}[x=1.20cm,y=1.20cm,axis lines=middle,xmin=-2,xmax=2,ymin=-1.0,ymax=2.5,xtick={-5,5},ytick={-5,5},]
\draw[line width=3pt,color=blue,smooth,samples=100,domain=-2:2] plot(\x,{abs((\x))});
\draw [line width=2.pt,dash pattern=on 1pt off 1pt,color=gray,domain=-2:2] plot(\x,{(-0.-1.1524560945138296*\x)/1.8907668279875545});
\draw [line width=2.pt,dash pattern=on 1pt off 1pt on 2pt off 4pt,color=gray,domain=-2:2] plot(\x,{(-0.--0.1622453260681709*\x)/1.805947381498393});
\draw [line width=2.pt,dotted,color=gray,domain=-2:2] plot(\x,{(-0.-0.473900522600539*\x)/1.8766302535726942});
\draw [line width=2.pt,dash pattern=on 2pt off 2pt,color=gray,domain=-2:2] plot(\x,{(-0.--1.0175080781672141*\x)/1.3182355641857155});
\draw [fill=red] (0.,0.) circle (3.5pt);
\end{axis}\end{tikzpicture}\\
Où placer la tangente en $x=0$ ?
\end{center}
\ew

Donc :

$$
\lim\limits_{h\to 0}\left(\dfrac{f(0+h)-f(0)}{h}\right)=\begin{cases}
1\quad\text{si }h>0\\-1\quad\text{si }h\less 0
\end{cases}
$$

Cette limite n'existe pas car elle dépend du signe de $h$.

La fonction **valeur absolue** n'est donc pas dérivable en 0.

\rem

Cependant, il est à noter que la fonction $f(x)=|x|$ est dérivable en tout nombre différent de $0$.

# Étude de fonctions

## Variations d'une fonction

\theoreme

Soit une fonction $f$ définie et dérivable sur $I$.

- Si $f'(x)\le 0$, alors $f$ est **décroissante** sur $I$.
- Si $f'(x)\ge 0$, alors $f$ est **croissante** sur $I$.

\exemple

\bw{r}{6cm}\cimg{6cm}{img/courbe02}\vspace{-3cm}\ew

Soit la fonction $f$ définie sur $\R$ par $f(x)=2x^2-8x+1$.

- \ul{Calcul de $f'(x)$ :} $\quad f$ est dérivable sur $\R$ et $\quad f'(x)=4x-8$

- \ul{Signe de $f'$ en fonction de $x$.}

\ms

Il faut résoudre $f'(x)>0$

$$f'(x)>0~\Lrarr~4x-8>0~\Lrarr~4x>8~\Lrarr~x>2$$

\ms

Si $~x>2~$ alors $~f'(x)>0~$ donc $~f~$ est **croissante** sur $\left[2~;~+\infty\right[$

\cimg{7cm}{img/04.png}

$f(2)=2\times (2)^2-8\times(2)+1=-7$

La fonction $f$ admet un minimum égal à $(-7)$ en $x=2$

\newpage

\exemple

\ms

Soit la fonction $f$ définie sur $\R$ par $f(x)=x^3+\dfrac{9}{2}x^2-12x+5$.

- \ul{Calcul de $f'(x)$} : $f$ est dérivable sur $\R$ et $\quad f'(x)=3x^2+9x-12$

\ms

- \ul{Signe de $f'$ en fonction de $x$}

\ms

Il faut résoudre $f'(x)>0$

\ms

$f'$ étant une fonction du 2$^{\text{nd}}$ degré, il faut trouver les racines de $~3x^2+9x-12$

\ms

$\Delta=b^2-4ac=9^2-4\times 3\times (-12)=225\quad>0$

Il existe donc 2 racines : $\begin{cases}
x_1=\dfrac{-b+\sqrt{\Delta}}{2a}=\dfrac{-9+\sqrt{225}}{2\times 3}=1\\~\\
x_2=\dfrac{-b-\sqrt{\Delta}}{2a}=\dfrac{-9-\sqrt{225}}{2\times 3}=-4
\end{cases}$

\bw{r}{6cm}\vspace{2cm}
\begin{tikzpicture}\begin{axis}[x=0.5cm,y=0.05cm,axis lines=middle,ymajorgrids=true,xmajorgrids=true,xmin=-6.9,xmax=4,ymin=-47.9,ymax=79.9,xtick={-8.0,-7.0,...,3.0},ytick={-40.0,-30.0,...,80.0},yticklabel=\empty,xticklabel=\empty]
\draw[line width=1.5pt,color=red,smooth,samples=100,domain=-7:4] plot(\x,{(\x)^(3.0)+4.5*(\x)^(2.0)-12*(\x)+5});
\draw (-3.4116049405390774,72.3798051634355) node[anchor=north west] {$\mathbf{\Cf}$};
\draw [fill=blue] (-4,61) circle (2pt);
\draw [fill=blue] (1,-1.5) circle (2pt);
\end{axis}\end{tikzpicture}
\vspace{-6cm}
\ew

\ms

On a :

$$~a=3>0~\text{donc}~f'(x)=(3x^2+9x-12)\less 0~\text{pour}~x\in\left[-4~;~1\right]$$

\ms

- \ul{Tableau de variations de $f$}

\cimg{8cm}{img/05}

On a :

$f(-4)=(-4)^3+\dfrac{9}{2}\times(-4)^2-12\times(-4)+5=61$

$f(1)=(1)^3+\dfrac{9}{2}\times(1)^2-12\times(1)+5=\dfrac{-3}{2}$

## Extremum d'une fonction

\theoreme

Soit $f$ définie et dérivable sur $I$ et $f'$ sa dérivée.

Si $~f'~$ s'**annule et change de signe** en $~x=c~$ de $~I~$ alors $~f~$ admet un **extremum local** en $x=c$.

\rem Extremum $=$ minimum ou maximum

\ms

\bw{r}{6cm}\cimg{6cm}{img/07.png}\ew

\exemple

Soit $f$ définie sur $\R$ par $f(x)=5x^2-3x+4$

Pour tout $x\in\R$, on a : $~f'(x)=10x-3$

Et $f'(x)=0~$ pour $~x=\frac{3}{10}$

On a : $f\left(\frac{3}{10}\right)=\frac{71}{20}$

$f$ admet donc un **minimum** en $x=\frac{3}{10}$ égal à $\left(\frac{71}{20}\right)$.

\newpage

## Position relative de deux courbes

\exemple

\ms

Soit $f$ et $g$ deux fonctions définies sur $\left[2~;~+\infty\right[$ par :

- $f(x)=x^3$
- $g(x)=-5x+18$

\ms

L'étude de la position relative de $\Cf$ et de $\Cg$ revient à étudier le signe de la différence $f(x)-g(x)$

\ms

On pose : $h(x)=f(x)-g(x)=x^3+5x-18$

Pour tout $x$ de $\left[2~;~+\infty\right[$, on a : $h'(x)=3x^2+5$

\ms

$h'$ est une fonction du 2$^{nd}$ degré :

- $a=3$ , $b=0$ et $c=5$
- $\Delta=b^2-4ac=0^2-4\times 3\times 5=-60\less 0$

Donc $h'(x)$ est du signe de $a=3>0$

\ms

$h'(x)>0 \Rarr h$ est strictement **croissante** sur $\left[2~;~+\infty\right[$

\cimg{4cm}{img/08}

\ms

De plus, on a : $h(2)=(2)^3+5\times (2)-18=0$

D'après le tableau de variations, on a $h(x)\ge 0$.

\ms

Donc, pour tout $x\in\left[2~;+\infty\right[$, on a :

$$h(x)\ge 0~\Lrarr~f(x)-g(x)\ge 0~\Lrarr~f(x)\ge g(x)$$

On en déduit que $\Cf$ est **au-dessus** de $\Cg$ sur $x\in\left[2~;+\infty\right[$.

\ms

\cimg{14cm}{img/09.png}
