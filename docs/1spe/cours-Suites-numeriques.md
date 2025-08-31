---
title: Suites numériques
classe: 1^spé^
toc: true
---

# Définition

\exemple On considère une liste de nombres impairs : $1, 3, 5, 7, \dots$

On note $u_{n}$ l'ensemble des "éléments" de cette suite de nombres tel que :
$$u_0=1\quad ;\quad u_1=3\quad ;\quad u_2=5\quad ;\quad u_3=7 , \ldots$$

On a ainsi défini une **suite numérique**.
On peut lui associer une fonction définie sur $\N$ par $u$ :

$$
\begin{array}{ccc}
\N&\mapsto&\R\\
n&\mapsto&u(n)=u_{n}
\end{array}
$$

## Définition : Suite numérique

\definition

Une **suite numérique** $(u_{n})$ est une liste **indexée** de nombres réels telle qu'à tout nombre entier $n$ on associe un nombre réel noté $u_{n}$.

$u_{n}$ est appelé **le terme de rang** $n$ de cette suite (ou d'indice $n$).

\exemple

$$
\def\arraystretch{1.6}\begin{array}{|c|c|c|c|c|c|c|c|c|}\hline
n   & 0   & 1   & 2   & 3   & 4   & 5   & 6    & \ldots\\ \hline
u_n & 0.1 & 0.1 & 0.2 & 0.3 & 0.5 & 0.8 & -1.3 & \ldots\\ \hline
\end{array}
$$

Le terme de **rang** $5$ est $u_5$ et il vaut $0.8$. $\quad$ on note $~u_5=0.8$

\newpage

## Définition : Suite numérique définie "explicitement"

\bw{r}{5cm}\cimg{5cm}{img/01a}\ew

\definition

Lorsque l'on définie une suite "explicite", chaque terme de la suite est exprimé en fonction de $n$ et **indépendamment des termes précédents**.

\ms

\exemple

Pour tout $n$ de $\N$, on donne : $~u_{n}=2\times \mtc{red}{n}$

$$
\begin{array}{rclcl}
u_{\mtc{red}{0}} &=& 2 \times \mtc{red}{0} &=& 0\\
u_{\mtc{red}{1}} &=& 2 \times \mtc{red}{1} &=& 2\\
u_{\mtc{red}{2}} &=& 2 \times \mtc{red}{2} &=& 4\\
u_{\mtc{red}{3}} &=& 2 \times \mtc{red}{3} &=& \ldots
\end{array}
$$

\ms

\exemple

Pour tout $n$ de $\N$, on donne : $~v_n=3\mtc{red}{n}^2-1$

Les premiers termes de cette suite sont donc :

$$
\begin{array}{rclcl}
v_{\mtc{red}{0}} &=& 3 \times \mtc{red}{0}^2 - 1 & = & -1\\
v_{\mtc{red}{1}} &=& 3 \times \mtc{red}{1}^2 - 1 & = & 2\\
v_{\mtc{red}{2}} &=& 3 \times \mtc{red}{2}^2 - 1 & = & 11\\
v_{\mtc{red}{3}} &=& 3 \times \mtc{red}{3}^2 - 1 & = & \ldots
\end{array}
$$

\ms

\rem $\qquad\boxed{\text{Explicite}\quad\Rightarrow\quad\text{En fonction de }\mtc{red}{n}}$

## Définition : Suite numérique "récurrentes"

\definition

Lorsqu'on génère une suite par une **relation de récurrence**, chaque terme de la suite s'obtient à partir d'un (ou plusieurs) terme(s) précédent(s).

\ms

\exemple

On définit la suite $(u_{n})$ par :

$u_0 = 5\quad$ et chaque terme est le **triple** de son précédent

Les premiers termes de cette suite sont donc :

$$
\begin{array}{rclclcl}
\mtc{red}{u_0} &=& \mtc{red}{5} &~&~&~&~\\
\mtc{blue}{u_1} &=& 3\times \mtc{red}{u_0} &=& 3\times \mtc{red}{5}  &=& \mtc{blue}{15}\\
\mtc{violet}{u_2} &=& 3\times \mtc{blue}{u_1} &=& 3\times \mtc{blue}{15} &=& \mtc{violet}{45}
\end{array}
$$

De façon générale, on peut noter : $\quad\boxed{u_{n+1}=3\times u_{n}}$

\ms

\exemple

On définit la suite $(v_n)$ par :

$v_0 = 3\quad$ et pour tout $n$ de $\N$, $\quad v_{n+1}=4\times v_n-6$

Les premiers termes de cette suite sont donc :

$$
\begin{array}{rclclcl}
\mtc{red}{v_0} &=& \mtc{red}{3}\\
\mtc{blue}{v_1} &=& 4\times\mtc{red}{v_0}-6 &=& 4\times \mtc{red}{3}  - 6 &=& \mtc{blue}{6}\\
\mtc{violet}{v_2} &=& 4\times\mtc{blue}{v_1}-6 &=& 4\times \mtc{blue}{6}  - 6 &=& \mtc{violet}{18}\\
\mtc{ForestGreen}{v_3} &=& 4\times\mtc{violet}{v_2}-6 &=& 4\times \mtc{violet}{18} - 6 &=& \mtc{ForestGreen}{66}\\
\end{array}
$$

\ms

\rem $\qquad\boxed{\text{Récurrente}\quad\Rightarrow\quad u_{n+1}~\text{ en fonction de }~u_{n}}$

\newpage

## Représentation graphique d'une suite

\prop

Dans un repère du plan, on représente une suite par un **nuage de points** de coordonnées $(n ; u_{n})$.

\ms

\exemple

\bw{r}{8cm}\cimg{8cm}{img/02tt.png}\vspace{-1cm}\ew

Pour tout $\mtc{red}{n}$ de $\N$, on donne : $\quad u_{n}= \dfrac{\mtc{red}{n}^2}{2} - 3$

- Tableau de valeurs des termes de la suite :

$$
\def\arraystretch{1.6}\begin{array}{|c|c|c|c|c|c|c|c|c|c|c}\hline
\mtc{red}{n}    & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8&\ldots\\ \hline
u_{\mtc{red}{n}}  & -3 & -2.5 & \mtc{blue}{-1} & 1.5 & \mtc{ForestGreen}{5} & 9.5 & 15 & 21.5 & 29&\ldots\\ \hline
\end{array}
$$

On a, par exemple :

$$u_{\mtc{red}{2}}=\frac{\mtc{red}{2}^2}{2}-3 =2-3 = \mtc{blue}{-1}\quad\text{ et }\quad u_{\mtc{red}{4}}=\frac{\mtc{red}{4}^2}{2}-3 = 8-3 = \mtc{ForestGreen}{5}$$

$$
\def\arraystretch{1.6}\begin{array}{|c|c|c|c|c|c|c|c|c|c|}\hline
\text{Point} & P_1 & P_2 & P_3 & P_4 & P_5 & P_6 & P_7 & P_8&P_9\\ \hline
x=\mtc{red}{n}    & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8\\ \hline
y=u_{\mtc{red}{n}}  & -3 & -2.5 & -1 & 1.5 & 5 & 9.5 & 15 & 21.5 & 29\\ \hline
\end{array}
$$

# Suites arithmétiques / géométriques

## Définition : Suites arithmétiques

Une suite $u_{n}$ est une suite **arithmétique** s'il existe un nombre $r$ tel que, pour tout entier $n$, on a :

$$\boxed{u_{n+1}=u_{n}+\mtc{ForestGreen}{r}}$$

Le nombre $\mtc{ForestGreen}{r}$ est appelé **raison** de la suite.

\rem

$$\quad\boxed{\text{Suite arithmétique}~\Rightarrow~\text{On \underline{\textbf{ajoute}} toujours la même quantité}}$$

\ms

\cimg{16cm}{img/03}

\newpage

\exemple

$u_0=10$ et $r=3$

Considérons une suite définie par : $\quad u_{n+1}=u_{n}-3\quad\text{et}\quad u_0=10$

$(u_n)$ est une **suite arithmétique** de raison $(-3)$ et de terme initial $10$

$$
\begin{array}{rclclcl}
\mtc{red}{u_0}&=& \mtc{red}{10}  &~&~\\
\mtc{ForestGreen}{u_1}&=& \mtc{red}{u_0}-3=& \mtc{red}{10}-3&=&\mtc{ForestGreen}{7}\\
\mtc{blue}{u_2}&=& \mtc{ForestGreen}{u_1}-3 =& \mtc{ForestGreen}{7}-3&=&\mtc{blue}{4}\\
\mtc{violet}{u_3}&=& \ldots&~&~
\end{array}
$$

## Propriété : Variation d'une suite arithmétique

Soit $(u_{n})$ est une suite **arithmétique** de raison $\mtc{ForestGreen}{r}$

- si $~r>0~$ alors la suite $~(u_{n})~$ est **croissante**.
- si $~r=0~$ alors la suite $~(u_{n})~$ est **constante**.
- si $~r\less 0~$ alors la suite $~(u_{n})~$ est **décroissante**.

\ms

\exemple

Soit $(u_{n})$ définie sur $\N$ par $\quad u_{n+1}=u_{n}-4~$ et $~u_0=5$

$(u_{n})$ est une **suite arithmétique** de raison $~r=(-4)\less 0~$ donc **décroissante**

## Représentation graphique d'une suite arithmétique

Les points de la représentation graphique d'une **suite arithmétique** sont **alignés**.

\ms

\exemple

On a représenté la suite **arithmétique** de raison $(-0.5)$ et de terme initial $4$.

$$
\def\arraystretch{1.6}
\begin{array}{|c|c|c|c|c|c|c|c|c}\hline
u_0 & u_1 & u_2 & u_3 & u_4 & u_5 & u_6 & u_7 & \ldots\\ \hline
  4 & 3.5 &  3  & 2.5 &  2  & 1.5 &  1  & 0.5 & \ldots\\ \hline
\end{array}
$$

\ms

\cimg{12cm}{img/04.png}

\newpage

## Propriété : Terme général d'une suite arithmétique

\prop

Soit $u_{n}$, une suite **arithmétique** de raison $r$. On a :

$$\boxed{u_{n}=u_0+n\times r}$$

\ms

\cimg{14cm}{img/05.png}

\ms

\rem $\boxed{u_{n}=u_{\mtc{blue}{1}}+(n-\mtc{blue}{1})\times r}$

\ms

\exemple

Considérons une suite définie par : $\quad u_{n+1}=u_{n}-3\quad\text{et}\quad u_0=10$

$(u_n)$ est une **suite arithmétique** de raison $r=(-3)$

$$
\def\arraystretch{1.8}\begin{array}{|c|c|c|c|c|c|c|c|c|c}\hline
n & 0 & 1 & 2 & 3 & 4 & 5 & 6 & \mtc{red}{7} & \ldots\\ \hline
u_n &10 & 7 & 4 & 1 & (-2) & (-5) & (-8) & (-11) & \ldots\\ \hline
\end{array}
$$

On a :

$$u_n=u_0+n\times r\quad\Lrarr\quad \boxed{u_n=10-3n}$$

Avec cette expression : $\quad u_{\mtc{red}{7}}=\quad 10-3\times \mtc{red}{7}\quad=10-21\quad=(-11)$

---

\ms

\cimg{18cm}{img/06.png}

\newpage

## Définition : Suites géométriques

\definition

Une suite $u_{n}$ est une suite **géométrique** s'il existe un nombre $q$, **strictement positif**, tel que, pour tout entier $n$, on a :

$$\boxed{u_{n+1}=u_{n}\times \mtc{blue}{q}}$$

Le nombre $\mtc{blue}{q}$ est appelé **raison** de la suite.

\ms

\rem

$$\quad\boxed{\text{Suite géométrique}~\Rightarrow~\text{On \underline{\textbf{multiple}} toujours par la même quantité positive}}$$

\cimg{16cm}{img/07}

\exemple

$u_0=2$ et $q=7$

Considérons une suite définie par : $\quad u_{n+1}=0.5\times u_{n}\quad\text{et}\quad u_0=100$

$(u_n)$ est une **suite géométrique** de raison $r=0.5$

$$
\def\arraystretch{1.8}
\begin{array}{|c|c|c|c|c|c|c|c}\hline
n & 0 & 1 & 2 & 3 & 4 & 5 & \ldots\\ \hline
u_n & 100 & 50 & 25 & 12.5 & 6.25 & 3.125 &  \ldots\\ \hline
\end{array}
$$

## Propriété : Variation d'une suite géométrique

\prop

Soit $(u_{n})$ est une suite **géométrique** de raison $\mtc{blue}{q}$. Le sens de variation de $u_n$ dépend de **la valeur** de $\mtc{blue}{q}$ et du **signe** de $u_0$.

|       **Cas $u_0 > 0$**       |                               |     **Cas $u_0\less 0$**      |                               |
| :---------------------------: | :---------------------------: | :---------------------------: | :---------------------------: |
|       $0\less q\less 1$       |             $q>1$             |       $0\less q\less 1$       |             $q>1$             |
|      $u_n$ décroissante       |       $u_n$ croissante        |       $u_n$ croissante        |      $u_n$ décroissante       |
| ![](img/08a.png){width=3.5cm} | ![](img/08b.png){width=3.5cm} | ![](img/08c.png){width=3.5cm} | ![](img/08d.png){width=3.5cm} |

\newpage

\exemple

Soit $(u_{n})$ définie sur $\N$ par $\quad u_{n+1}=u_{n}\times 0.8~$ et $~u_0=1~500$

$(u_{n})$ est une **suite géométrique** de raison $~q=0.8$

Donc $(u_{n})$ est **décroissante** car $q=0.8\less 1$ et $u_0=1~500$ positif

$$
\def\arraystretch{1.8}
\begin{array}{|c|c|c|c|c|c|c|c}\hline
n & 0 & 1 & 2 & 3 & 4 & 5 & \ldots\\ \hline
u_n & 1~500 & 1~200 & 960 & 768 & 614.4 & 491.52 &  \ldots\\ \hline
\end{array}
$$

## Représentation graphique d'une suite géométrique

Les points de la représentation graphique d'une **suite géométrique** ne sont pas **alignés**.

\exemple On a représenté la suite **géométrique** de raison $0.5$ et de terme initial $5$.

$$u_{n+1}=0.5\times u_{n}\quad\text{et}\quad u_0=5$$

$$
\def\arraystretch{1.8}\begin{array}{|c|c|c|c|c|c}\hline
u_0 & u_1 & u_2  & u_3   & u_4    & \ldots\\ \hline
5   & 2.5 & 1.25 & 0.625 & 0.3125 & \ldots\\ \hline
\end{array}
$$

\cimg{8cm}{img/09}

## Propriété : Terme général d'une suite géométrique

\prop

Soit $u_{n}$, une suite **géométrique** de raison $q$. On a :

$$\boxed{u_{n}=u_0\times q^{n}}$$

\ms

\cimg{16cm}{img/10}

\ms

\rem $\boxed{u_{n}=u_{\mtc{blue}{1}}\times q^{(n-\mtc{blue}{1})}}$

\newpage

\exemple

Considérons une suite définie par : $\quad u_{n+1}=u_{n}\times 0.25\quad\text{et}\quad u_0=100$

$(u_n)$ est une **suite géométrique** de raison $q=0.25$

$$
\def\arraystretch{1.8}\begin{array}{|c|c|c|c|c|c|c|c|c|c}\hline
n   & 0   & 1  & 2    & 3      & 4        & 5            & 6            & \mtc{red}{7} & \ldots\\ \hline
u_n & 100 & 25 & 6.25 & 1.5625 & 0.390625 & 0.0976\ldots & 0.0244\ldots & 0.0061\ldots & \ldots\\ \hline
\end{array}
$$

On a :

$$\quad u_n=u_0\times q^{n}\quad\Lrarr\quad u_n=100\times 0.25^{n}$$

Avec cette expression : $\quad u_{\mtc{red}{7}}=\quad 100\times 0.25^{\mtc{red}{7}}\quad\approx 0.0061$

---

\ms

\cimg{17cm}{img/10a.png}

# Sens de variation d'une suite numérique

## Définition : Sens de variation d'une suite numérique

Soit un entier $p$ et une suite numérique $(u_n)$

- $(u_{n})$ est **\fbox{croissante}** à partir du rang $p$ signifie que pour $n\ge p$, on a :
  $$\boxed{u_{n+1}\ge u_{n}}$$

- $(u_{n})$ est **\fbox{décroissante}** à partir du rang $p$ signifie que pour $n\ge p$, on a :
  $$\boxed{u_{n+1}\le u_{n}}$$

\newpage

\exemple Dans cet exemple, $~(u_n)~$ est croissante $\quad$ (à partir de $n=3$)

\cimg{16cm}{img/11.png}

\ms

\methode \ul{Étudier les variations d'une suite (1)}

\ms

On peut étudier le **signe** de $(u_{n+1}-u_{n})$

- Si $(u_{n+1} - u_{n}) > 0$ alors $u_{n}$ est **croissante**
- Si $(u_{n+1} - u_{n}) \less  0$ alors $u_{n}$ est **décroissante**

\exemple

Pour tout $n\in\N$, on donne la suite $(u_{n})$ définie par : $u_{n}=n^2-4n+4$

$u_{n+1}$ c'est lorsque l'on remplace $n$ par $n+1$ :

$$
\begin{aligned}
u_{n+1}&=(n+1)^2-4(n+1)+4\\
&=(n^2+2n+1) -(4n+4)+4\\
&=n^2-2n+1
\end{aligned}
$$

Donc :

$$
\begin{aligned}
u_{n+1} - u_{n} &= (n^2-2n+1)\quad - \quad(n^2-4n+4)\\
&= n^2-n^2-2n+4n+1-4\\
&= 2n-3
\end{aligned}
$$

\ms

Signe de $~(u_{n+1} - u_{n})$

$$
\def\arraystretch{1.2}\begin{array}{rclc}
(u_{n+1}-u_{n})\ge 0&\Lrarr&2n-3\ge 0\\
&\Lrarr&2n\ge 3\\
&\Lrarr&n\ge \frac{3}{2}\quad\Lrarr n\ge2
\end{array}
$$

Ainsi pour $~n\ge 2~$ (n est entier), on a $~(u_{n+1}-u_{n})\ge 0$.

\ms

On en déduit qu'à partir du rang $2$ la suite $(u_{n})$ est **croissante**.

\methode \ul{Étudier les variations d'une suite (2)}

On peut étudier $\left(\frac{u_{n+1}}{u_{n}}\right)$

- Si $\left(\frac{u_{n+1}}{u_{n}}\right) > 1$ alors $u_{n}$ est **croissante**
- Si $\left(\frac{u_{n+1}}{u_{n}}\right) \less  1$ alors $u_{n}$ est **décroissante**

## Propriété : Sens de variation de $~u_{n}=f(n)$

Soit une fonction $f$ définie sur $\left[0 ; +\infty\right[$ et $(u_{n})$ définie sur $\N$ par $u_{n}=f(n)$.
Soit un entier $p$.

- Si $f$ est **croissante** sur $\left[p ; +\infty\right[$, alors $(u_{n})$ est **croissante** à partir du rang $p$
- Si $f$ est **décroissante** sur $\left[p ; +\infty\right[$, alors $(u_{n})$ est **décroissante** à partir du rang $p$

\rem La réciproque de cette propriété est \textbf{fausse}.

\ms

\methode \ul{Étudier les variations d'une suite à l'aide de la fonction associée}

\ms

Étudions le sens de variation de $u_{n}=n^2-n+1$

On a $~u_{n}=f(n)\quad$ avec $\quad f(x)=x^2-x+1~$ (fonction du 2nd degré)

Le minimum de $f$ est atteint pour $~x=\dfrac{(-b)}{2a}=\dfrac{-(-1)}{(2\times 1)}=\dfrac{1}{2}~$ et $~a=1>0$

\ms

\cimg{12cm}{img/12}

\ms

Conclusion : $\quad u_{n}$ est **croissante** pour $n\ge 1$

# Somme des termes consécutifs

## Cas d'une suite arithmétique

\prop \ul{Somme de $1$ à $n$}

$n$ est un entier naturel non nul alors on a :

$$\boxed{1+2+3+\ldots+n=\dfrac{n(n+1)}{2}}$$

\bw{r}{4cm}\vspace{-4cm}
\cimg{4cm}{img/14}
\begin{center}Carl Friedrich Gauss (1777-1855)\end{center}
\ew

\exemple $\quad1+2+3+\ldots+100\quad=\frac{100\times 101}{2}\quad=5050$

\ms

\methode \ul{Calculer la somme des termes d'une suite arithmétique}

\ms

Calculons $~S=33+36+39+\ldots+267\quad$ Suite arithmétique de raison $=3$

$$
\def\arraystretch{1.3}\begin{array}{rcl}
S&=&33+36+39\ldots+267\\
 &=&3\times \mtc{blue}{(11+12+13\ldots+89)}\\
 &=&3\times \left(\mtc{ForestGreen}{(1+2+3+\ldots+89)}-\mtc{red}{(1+2+3+\ldots+10)}\right)\\
 &=&3\times \left(\mtc{ForestGreen}{\frac{89\times 90}{2}}-\mtc{red}{\frac{10\times 11}{2}}\right)\quad=11~850
\end{array}
$$

$$
\begin{array}{|c|}
\begin{array}{lcr}\larr~\quad\qquad\qquad~\mtc{ForestGreen}{\text{somme de 1 à 89}}~\qquad\qquad\quad~\rarr\end{array}                                   \\
\begin{array}{l|r}\larr\mtc{red}{\text{somme de 1 à 10}}\rarr&\larr\mtc{blue}{\text{somme de 11 à 89}}\rarr\end{array}\\
\begin{array}{lr}\begin{array}{ccccc}~1&~2&\ldots&~9&10\end{array}&\begin{array}{ccccc}11&12&\ldots&88&89\end{array}\end{array}
\end{array}
$$

\ms

\demo

$$
\def\arraystretch{1.2}\begin{array}{rccccccccccccc}
&S&=&1&+&2&+&3&+&\ldots&+&(n-1)&+&n\\
+&S&=&n&+&(n-1)&+&(n-2)&+&\ldots&+&2&+&1\\ \hline
~&2S&=&(n+1)&+&(n+1)&+&(n+1)&+&\ldots&+&(n+1)&+&(n+1)\\
\end{array}
$$

Donc :

$$2S=n\times (n+1)\quad\Lrarr\quad S=\dfrac{n(n+1)}{2}$$

\newpage

## Cas d'une suite géométrique

\prop \ul{Somme de $~1+q^1+q^2+\ldots+q^n$}

\ms

Soient $n$ est un entier naturel non nul et $q$ un réel différent de $1$ alors on a :

$$\boxed{1+q+q^2+q^3+...+q^n= \frac{1-q^{n+1}}{1-q}}$$


\rem C'est la somme des $(n+1)$ premiers termes d'une suite **géométrique** de raison $q$ et de premier terme $1$.

\ms

\methode Calculer la somme des termes d'une suite géométrique

\ms

Calculons la somme S suivante :

$$S=1+3+3^2+\ldots+3^{13}$$

Avec la propriété : $\quad q=3\quad\text{et}\quad n=13$

$$S=\quad 1+3+3^2+\ldots+3^{13}\quad=\frac{1-3^{14}}{1-3}\quad=2\times (3^{14}-1)\quad=2~391~484$$

\demo

$$
\def\arraystretch{1.3}\begin{array}{ccccccccccccc}
S&=&1&+&q&+&q^2&+&...&+&q^n&~&~\\
qS&=&~&~&q&+&q^2&+&...&+&q^n&+&q^{n+1}\\ \hline
S-qS&=&1&+&0&+&0&+&...&+&0&-&q^{n+1}\\
\end{array}
$$

On a donc :

$$
\def\arraystretch{2}\begin{array}{rcl}
S-qS=1-q^{n+1}&\Lrarr&S(1-q)=1-q^{n+1}\\
            ~&\Lrarr&S=\dfrac{1-q^{n+1}}{1-q}
\end{array}
$$
