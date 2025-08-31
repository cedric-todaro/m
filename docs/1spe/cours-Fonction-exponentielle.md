---
title: "Fonction exponentielle"
classe: 1^spé^
toc: true
---

# Définition de la fonction exponentielle

## Définition

\definition

\bw{r}{5cm}\vspace{2cm}\cimg{5cm}{img/calc01}\vspace{-1cm}\ew

Il existe une unique fonction $f$ dérivable sur $\R$ telle que :

$$\boxed{f'=f}\quad\text{et}\quad \boxed{f(0)=1}$$

Cette fonction s'appelle **fonction exponentielle** et se note $\exp$.

\prop $\qquad\exp(0)=1$

\rem Il est possible d'observer l'allure de la courbe représentative de la fonction exponentielle à l'aide de la calculatrice.

La fonction exponentielle est **croissante**.

Et sa croissance est très rapide : $\quad\exp(21)>1~000~000~000$.

Pour des valeurs de $x$ de **plus en plus grandes**, la fonction exponentielle prend des valeurs de **plus en plus grandes**.

\prop

La fonction exponentielle est **strictement positive** sur $\R$.

# Étude de la fonction exponentielle

## Dérivabilité

La fonction exponentielle est dérivable sur $\R$ et

$$\boxed{\Big(\exp{(x)}\Big)'=\exp{(x)}}$$

\newpage

## Variations

La fonction exponentielle est **strictement croissante** sur $\R$.

En effet, $\Big(\exp{(x)}\Big)'>0$ car $\Big(\exp{(x)}\Big)'=\exp{(x)}>0$.

\ms

- \ul{Tableau de variations de $f(x)=\exp{(x)}$}

\ms

\cimg{6cm}{img/02}

## Courbe représentative

- \ul{Tableau de valeurs de $f(x)=\exp(x)$}

$$
\def\arraystretch{1.4}\begin{array}{|c|c|c|c|c|c|c|c|}\hline
x & -3 & -2 & -1 & 0 & 1 & 2 & 3\\ \hline
f(x)=\exp(x) & 0.049 & 0.135 & 0.367 & 1 & 2.718 & 7.389 & 20.08\\ \hline
\end{array}
$$

- \ul{Représentation graphique}

\ms

\begin{center}
\begin{tikzpicture}[line cap=round,line join=round,>=triangle 45,x=1.0cm,y=1.0cm]
\begin{axis}[x=1.83cm,y=0.8cm,axis lines=middle,ymajorgrids=true,xmajorgrids=true,xmin=-3.5,xmax=2.5,ymin=-0.5,ymax=8.5,xtick={-3.0,-2.0,...,2.0},ytick={-2,-1,...,8},]
\draw[samples=50,line width=1.5pt,domain=-3.5:2.5,smooth,variable=\x,red] plot ({\x}, { \fpeval{ exp( (\x) ) } });
\draw [fill=black] (-3.,0.049787068367863944) circle (2.0pt);
\draw [fill=black] (-2.,0.1353352832366127) circle (2.0pt);
\draw [fill=black] (-1.,0.36787944117144233) circle (2.0pt);
\draw [fill=black] (0.,1.) circle (2.0pt);
\draw [fill=black] (1.,2.718281828459045) circle (2.0pt);
\draw [fill=black] (2.,7.38905609893065) circle (2.0pt);
\end{axis}
\end{tikzpicture}
\end{center}

## Relation fonctionnelle

\theoreme$^{\text{\faHeart}}$

Pour tous réels $x$ et $y$, on a :

$$\boxed{\exp{(x\mathbf{+}y)}=\exp{(x)}\mathbf{\times}\exp{y}}$$

\rem Cette formule permet de transformer **une somme** en **produit** et réciproquement.

\prop \ul{Relation fonctionnelle$^{\text{\faHeart}}$}

Pour tous réels $x$ et $y$, on a :

1. $\boxed{\exp{(-x)}=\dfrac{1}{\exp{(x)}}}\qquad\qquad$ ou $\quad\exp{(x)}\times\exp{(-x)}=1$
2. $\boxed{\exp{(x-y)}=\dfrac{\exp{(x)}}{\exp{(y)}}}$
3. $\boxed{\exp(nx)=\left(\exp{(x)}\right)^n}\qquad$ avec $n\in\mathbb{N}$

\newpage

\demo \ul{prop.1 et 2}

\ms

1. $~$

$\qquad\quad\exp{(x)}\times\exp(-x)=\exp\Big(x+(-x)\Big)=\exp{(0)}=1$

2. $~$

$\qquad\quad\begin{aligned}\exp{(x-y)}&=\exp{\Big(x+(-y)\Big)}\\~&=\exp{(x)}\times\exp{(-y)}\\~&=\exp{(x)}\times\frac{1}{\exp{(y)}}\\~&=\frac{\exp{(x)}}{\exp{(y)}}\end{aligned}$

## Le nombre $e$

\definition

L'image de $1$ par la fonction exponentielle est notée $e$.

\bw{r}{5cm}\vspace{-1cm}\cimg{5cm}{img/03}\ew

$$\exp{(1)}=e$$

\ms

**\ul{Nouvelle notation :}** $\quad\exp{(x)}=\exp(x\times 1)=\Big(\exp{(1)}\Big)^x =e^x$

\bw{r}{5cm}\vspace{-1cm}Comme $\pi$, le nombre $e$ est un nombre **irrationnel**, c'est à dire qu'il s'écrit avec un nombre infini de décimales sans suite logique. Ses premières décimales sont :\par\noindent$e \approx 2.718~281~828\ldots$
\vspace{-5cm}\ew

On note, pour tout $x\in\R$, $~\boxed{\exp{(x)}=e^x}$

\prop

Pour tous réels $x$ et $y$, on a :

\def\arraystretch{1.7}\begin{tabular}{|rl|}\hline
Valeurs remarquables & $~e^0=1\quad$ et $\quad e^1=e$\\ \hline
Signe et dérivée & $~e^x>0\quad$ et $\quad (e^x)'=e^x$\\ \hline
Exp. d'une somme & $~e^{(x+y)}=e^x\times e^y$\\ \hline
Exp. d'une différence & $~e^{(x-y)}=\frac{e^x}{e^y}\quad$ et $\quad e^{(-x)}=\frac{1}{e^x}$\\ \hline
Puissance d'une exp. & $~{(e^x)}^{n}=e^{nx}\quad$ avec $~n\in\mathbb{N}$.\\ \hline
\end{tabular}

## Méthode : Dériver une fonction exponentielle

- $f(x)=4x-3e^x$

On a $\quad \left(4x\right)'=4\quad$ et $\quad\left(e^x\right)'=e^x$

Donc $\quad f'(x)=4-3e^x$

---

- $g(x)=(x-1)e^x\qquad = u\times v\quad$ avec $\begin{cases}u=(x-1)& u'=1\\v=e^x&v'=e^x\end{cases}$

On a $\quad g'(x)=u'v+uv'=(1\times e^x)+(x-1)e^x=e^x+xe^x-e^x$

Donc $\quad g'(x)=xe^x$

---

- $h(x)=\dfrac{e^x}{x}\qquad =\dfrac{u}{v}\quad$ avec $\begin{cases}u=e^x& u'=e^x\\v=x&v'=1\end{cases}$

On a $\quad h'(x)=\dfrac{u'v+uv'}{v^2}=\dfrac{xe^x+e^x}{x^2}$

Donc $\quad h'(x)=\dfrac{(x+1)e^x}{x^2}$

## Méthode : Simplifier les écritures

$\begin{aligned}
A=\dfrac{e^{7}\times e^{-4}}{e^{-5}}\qquad&=\dfrac{e^{7+(-4)}}{e^{-5}}\\
                                         ~&=\dfrac{e^{3}}{e^{-5}}=e^{3-(-5)}=e^{8}\\
\end{aligned}$

\newpage

$\begin{aligned}
B={(e^5)}^{-6}\times e^{-3}\qquad&=e^{5\times (-6)}\times e^{-3}\\
                                 ~&=e^{-30}\times e^{-3}~=e^{-33}
\end{aligned}$

---

$\begin{aligned}
C=\dfrac{1}{\left(e^{-3}\right)^2}+\dfrac{{(e^4)}^{-1}}{e^2\times e^{-6}}\qquad&=\dfrac{1}{e^{-6}}+\dfrac{e^{-4}}{e^{-4}}\\
                                                                              ~&=e^{6}+1
\end{aligned}$

---

$\begin{aligned}
D=\dfrac{{\left(e^{2x}\right)}^3}{e^{(3x+1)}\times e^{(-x-1)}}\qquad&=\dfrac{e^{6x}}{e^{(3x+1-x-1)}}\\
                                                                   ~&=\dfrac{e^{6x}}{e^{2x}}~=e^{6x-2x}~=e^{4x}
\end{aligned}$

## Méthode : Résoudre une équation ou une inéquation

\prop

Pour tous réels $a$ et $b$, on a :

- $e^a=e^b\quad\Lrarr\quad a=b$
- $e^a\less e^b\quad\Lrarr\quad a\less b$

\exemple

- Résoudre dans $\R$ l'équation : $\quad e^{(x^2-3)}-e^{(-2x)}=0$

$$
\begin{aligned}
e^{(x^2-3)}-e^{(-2x)}=0\quad&\Lrarr\quad e^{(x^2-3)}=e^{(-2x)}\\
                       \quad&\Lrarr\quad x^2-3=-2x\\
                       \quad&\Lrarr\quad x^2+2x-3=0\quad~\Rightarrow\Delta=b^2-4ac=16\\
                       \quad&\Lrarr\quad
                                        \begin{cases}
                                          x_1=\dfrac{-2-\sqrt{16}}{2\times 1}=-3\\
                                          x_2=\dfrac{-2+\sqrt{16}}{2\times 1}=1
                                        \end{cases}
                                        \quad\Lrarr\boxed{S=\left\{-3~;~1\right\}}\\
\end{aligned}
$$

- Résoudre dans $\R$ l'inéquation : $\quad e^{(4x-1)}\ge 1$

$$
\begin{aligned}
e^{(4x-1)}\ge 1 \quad&\Lrarr\quad e^{(4x-1)}\ge e^{0}\\
                 \quad&\Lrarr\quad 4x-1\ge 0\\
                 \quad&\Lrarr\quad 4x\ge 1\\
                 \quad&\Lrarr\quad x\ge \dfrac{1}{4}\quad\Lrarr\quad\boxed{S=\left[\frac{1}{4}~;~+\infty\right[}\\
\end{aligned}
$$

## Méthode : Étudier une fonction exponentielle

Soit $f$ la fonction définie sur $\R$ par $f(x)=(x+1)e^x$.

\ms

- \ul{Calcul de $f'(x)$}

$f(x)=(x+1)e^x\quad=u\times v\qquad$ avec $\begin{cases}u=x+1\quad&u'=1\\v=e^x\quad&v'=e^x\end{cases}$

On a :

$$f'(x)=u'v+uv'\quad=(1\times e^x)+(x+1)e^x\qquad\rarr\boxed{f'(x)=(x+2)e^x}$$

\ms

- \ul{Signe de $f'(x)$}

Pour tout $x\in\R$, on a : $\quad e^x>0\quad$ donc $f'(x)$ est du signe de $x+2$.

$$f'(x)>0\quad\Lrarr\quad x+2>0\quad\Lrarr\quad x>(-2)$$

\newpage

- \ul{Tableau de variations de $f$}

\bw{r}{5cm}\vspace{-4cm}Calcul de la valeur du minimum: $\quad f(\mtc{red}{-2})=(\mtc{red}{-2}+1)e^{\mtc{red}{-2}}=-e^{-2}$\ew

\cimg{6cm}{img/04.png}

\ms

- \ul{Équation de la tangente à $\Cf$ au point d'abscisse $x=0$}

\ms

$f(0)=(0+1)\times e^0=1\quad$ et $\quad f'(0)=(0+2)\times e^0=2$

\ms

Une équation de la tangente à $\Cf$ en $x=0$ est :

$$y=f'(0)(x-0)+f(0)\quad\Lrarr\quad y=2x+1$$

\ms

- \ul{Courbe représentative de $f$}

  \begin{center}
  \begin{tikzpicture}[line cap=round,line join=round,>=triangle 45]
  \begin{axis}[x=1.5cm,y=1.5cm,axis lines=middle,ymajorgrids=true,xmajorgrids=true,xmin=-4.5,xmax=2.5,ymin=-1.5,ymax=3.5,xtick={-5.0,-4.0,...,3.0},ytick={-2.0,-1.0,...,3.0},]
  \draw[line width=1.5pt,color=blue,smooth,samples=100,domain=-4.5:2.5] plot(\x,\fpeval{((\x)+1)/(1/exp(\x))});
  \draw [line width=2.0pt,dash pattern=on 3pt off 5pt,domain=-4.5:2.5] plot(\x,{1+(\x)/0.5});
  \draw [fill=red] (-2,\fpeval{-exp(-2)}) circle (2.0pt);
  \draw [fill=red] (0,1) circle (2.0pt);
  \end{axis}\end{tikzpicture}
  \end{center}

# Exponentielle et suite géométrique

## Rappel et propriété

**\ul{Rappel :}**

Une suite géométrique de raison $q$ et de 1$^{er}$ terme $u_0$ a pour terme général :

$$u_n=u_0\times q^n$$

\prop

Pour tout $n\in\mathbb{N}$ et tout $a\in\R$, on a : $~e^{na}={(e^a)}^{n}=1\times {(e^a)}^{n}$.

Donc la suite $(e^{na})$ est une suite géométrique de raison $e^a$ et de 1$^{er}$ terme $1$.

## Méthode : Déterminer une suite géométrique comprenant une exponentielle

- $u_n=e^{4n}\qquad=1\times {\left(e^4\right)}^n$

$(u_n)$ est une suite géométrique de raison $e^4$ et de 1$^\text{er}$ terme $~1$

---

- $v_n=2e^{-3n}\qquad=2\times {\left(e^{-3}\right)}^n$

$(v_n)$ est une suite géométrique de raison $e^{-3}$ et de 1$^\text{er}$ terme $~2$

---

- $w_n=-{e}^{\left(\frac{n}{3}\right)}\qquad=-1\times {\left({e}^{\frac{1}{3}}\right)}^n$

$(w_n)$ est une suite géométrique de raison $\left({e}^{\frac{1}{3}}\right)$ et de 1$^\text{er}$ terme $~(-1)$

\newpage

- $z_n=e^{(2n-1)}\qquad=e^{2n}\times e^{(-1)}=e^{(-1)}\times {\left(e^{2}\right)}^n$

$(z_n)$ est une suite géométrique de raison $\left({e}^{2}\right)$ et de 1$^\text{er}$ terme $~e^{(-1)}$

---

- Terme général d'une suite géométrique de raison $\left(\frac{1}{e}\right)$ et de premier terme $3$.

$a_n=a_0\times q^n\qquad\Lrarr\qquad a_n=3\times \left(\frac{1}{e}\right)^n=3{\left(e^{-1}\right)}^n=3e^{-n}$

# Fonctions de la forme $~t\mapsto e^{kt}$

## Variations de $~t\mapsto e^{kt}$

\prop

\bw{r}{5cm}\vspace{-1cm}
$\begin{array}{|c|c|}\hline
f(x) & f'(x)\\ \hline \hline
e^{(x)}  & e^{(x)}\\ \hline
e^{(ax)}  & a\times e^{(ax)}\\ \hline
\end{array}$
\ew

La fonction $t\mapsto e^{kt}$, avec $k\in\R-{0}$, est dérivable sur $\R$.

Sa dérivée est la fonction $~t\mapsto k\times e^{kt}$

\demo

On rappelle que la dérivée de $~t\mapsto g(at+b)$ est $~t\mapsto a\times g'(at+b)$.

En considérant $\quad g(t)=e^t$, $a=k$ et $b=0$

On a : $\quad\left(e^{kt}\right)'=k\times e^{kt}$.

**\ul{Ex. :}**

Soit $\quad f(t)=e^{(-4t)}\quad$ alors $\quad f'(t)=-4e^{(-4t)}$.

\prop

- Si $k > 0$ : la fonction $~t\mapsto e^{kt}$ est strictement **croissante**.
- Si $k \less  0$ : la fonction $~t\mapsto e^{kt}$ est strictement **décroissante**.

\demo

On a : $\left(e^{kt}\right)'=ke^{kt}$

Or, $~e^{kt}>0~$ pour tout réel $~t~$ et tout entier relatif $k$ non nul.

Donc le signe de la dérivée $~t\mapsto ke^{kt}$ dépend du signe de $k$.

- Si $(k\ge 0)$ alors $\left(ke^{kt}\ge 0\right)$ donc $~t\mapsto e^{kt}$ est **croissante**.
- Si $(k\le 0)$ alors $\left(ke^{kt}\le 0\right)$ donc $~t\mapsto e^{kt}$ est **décroissante**.

## Représentation graphique de $~t\mapsto e^{kt}$

\cimg{16cm}{img/06}

\newpage

## Méthode : Étudier $t\mapsto e^{kt}$ dans une situation concrète

Suite à une infection, le nombre de bactéries contenues dans un organisme en fonction du temps (en heures) peut être modélisé par la fonction $f$ définie sur $[0~;~10]$ et telle que :

$$f'(t)=0.14\times f(t)$$

---

- Montrer que la fonction $f$ définie sur $[0~;~10]$ par $f(t)=Ae^{0.14t}$ convient.

$$\begin{aligned}
f(t)=Ae^{0.14t}\quad&\Lrarr f'(t)=A\times 0.14\times e^{0.14t}\\
\quad&\Lrarr f'(t)=0.14\times \mtc{blue}{A\times e^{0.14t}}\\
\quad&\Lrarr f'(t)=0.14\times \mtc{blue}{f(t)}
\end{aligned}$$

$f$ définie sur $[0~;~10]$ par $f(t)=Ae^{0.14t}$ vérifie l'égalité :

$$f'(t)=0.14\times f(t)$$

---

- On suppose que $f(0)=50~000$. Déterminer $A$.

$$f(0)=A\times e^{(0.14\times 0)}=A\times e^0=A$$

Donc, si $\quad f(0)=50~000\quad$, on a $\quad A=50~000$.

Une expression de la fonction $f$ est donc : $\quad f(t)=50~000\times e^{0.14t}$

---

- Déterminer les variations de $f$ sur $[0~;~10]$.

\ms

Comme $k=0.14>0$, on en déduit que $~t\mapsto e^{0.14t}$ est **croissante** sur $[0~;~10]$.

Il en est de même pour la fonction $f(t)=50~000\times e^{0.14t}$.

---

- À l'aide de la calculatrice :
  - Donner un arrondi (au millier près) du nombre de bactéries après $3$h puis $5$h$30$.
  - Déterminer au bout de combien de temps le nombre de bactéries a-t-il doublé.

\ms

\bw{r}{6cm}\cimg{6cm}{img/07}\ew

$f(3)=50~000\times e^{(0.14\times 3)}=50~000\times e^{0.42}\approx 76~000$

$f(5.5)=50~000\times e^{(0.14\times5.5)}=50~000\times e^{0.77}\approx 108~000$

\ms

Après $3$h, l'organisme contient environ $76~000$ bactéries.

Après $5$h$30$, l'organisme contient environ $108~000$ bactéries.

\ms

Le nombre de bactéries a doublé à partir de $100~000$ bactéries, soit au bout d'environ $5$h.
