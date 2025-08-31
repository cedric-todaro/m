---
title: Probabilité conditionnelle
classe: 1^spé^
toc: true
---

# Rappels de 2$^\text{nde}$

## Vocabulaire

\bw{r}{5cm}\vspace{-2cm}\cimg{5cm}{img/01.png}\ew

Quelques petits mots de vocabulaire

- \ul{Expérience aléatoire :} "Lancer la roue et noter le gain"
- \ul{Une issue :} $50$ ; $1000$ ou $\text{Jackpot}$ ...
- \ul{Univers :} L'ensemble des issues possibles
  $$\Omega = \left\{\text{Lose} ; 50 ; 100 ; 200 ; 300 ; 500 ; 700 ; 1000 ; \text{Jackpot}\right\}$$
- \ul{Événement :} Un ensemble d'issues
  $$A :  \text{Obtenir - de 450}~\Lrarr~A = \left\{\text{Lose} ; 50 ; 100 ; 200 ; 300 \right\}$$

## Probabilité de d'un événement

- \ul{Probabilité d'un événement :} Somme de la probabilité des issues qui le composent.

$$
\begin{aligned}
p(A)&=p(\text{Lose}) +p(50) +p(100) +p(200) +p(300)\\
   ~&=\frac{1}{12} +\frac{2}{12} +\frac{1}{12} +\frac{3}{12} +\frac{1}{12}\\
   ~&=\frac{8}{12}=\frac{2}{3}\\
\end{aligned}
$$

- \ul{Équiprobabilité :}Égalité de la proba. de chaque issues

  - Ce n'est pas le cas ici $\rarr p(50)\neq p(1000)$

- \ul{La somme des proba. des issues $=1$}
  - La roue s'arrêtera forcement sur un secteur
    $$p(\text{Lose}) +p(50) +\dots +p(1000)+p(\text{Jackpot})=1$$

## Loi de probabilité

|  Issue |      Lose      |       50       |      100       |      200       | $\ldots$ |      1000      |    Jackpot     |
| -----: | :------------: | :------------: | :------------: | :------------: | :------: | :------------: | :------------: |
| Proba. | $\frac{1}{12}$ | $\frac{2}{12}$ | $\frac{1}{12}$ | $\frac{3}{12}$ | $\ldots$ | $\frac{1}{12}$ | $\frac{1}{12}$ |

\newpage

## Événement contraire et intersection/union d'événements

- \ul{Événement contraire :} $\boxed{p\pa{\overline{A}}=1-p(A)}$

  - Si $\quad p(A)=\frac{2}{3}\quad$ alors $\quad p\pa{\overline{A}}=\frac{1}{3}$

- \ul{Intersection :} $A \cap B$

  - C'est l'événement $A$ **et** $B$

- i\ul{Union (ou réunion) :} $A \cup B$
  - C'est l'événement $A$ **ou** $B$

$$\boxed{p(A \cup B)=p(A) + p(B) - p(A \cap B)}$$

\ms

\exemple On tire au hasard une carte dans une jeu de $32$ cartes.

\bw{r}{6cm}\vspace{-1cm}\cimg{6cm}{img/02.png}\ew

On considère les événements suivants :

- $A$ : "La carte tirée est une figure"
  - $A:\left\{J\spade;Q\spade;\dots;Q\heart;K\heart\right\}$
- $B$ : "La carte tirée est de couleur noire"
  - $B:\left\{7\spade;8\spade;\dots;K\club;A\club\right\}$

On a :

- $p(A)=\frac{12}{32}=\frac{3}{8}\quad$ et $\quad p(B)=\frac{16}{32}=\frac{1}{2}$

On a :

- $A\cap B$ : "la carte est une figure **et** noire"
  - $A\cap B : \left\{J\spade;Q\spade;K\spade;J\club;Q\club;K\club\right\}$
  - $p(A\cap B)=\frac{6}{32}$
- $A\cup B$ : "la carte est une figure **ou** noire"
  - $A\cup B : \left\{7\spade;8\spade;\dots;J\heart;\dots;A\club\right\}$

$$
\def\arraystretch{2}
\begin{array}{rlll}
p(A\cup B)&=p(A)&+p(B)&-p(A\cap B)\\
~&=\dfrac{12}{32}&+\dfrac{16}{32}&-\dfrac{6}{32}\qquad\qquad=\dfrac{22}{32}
\end{array}
$$

# Probabilité conditionnelle : définition et propriétés

## Définition : Probabilité conditionnelle

\definition

Soit $A$ et $B$ deux événements avec $p(A)\neq 0$.

On appelle \fbox{"\textbf{probabilité conditionnelle} de $B$ sachant $A$"}, la probabilité que l'événement $B$ se réalise sachant que l'événement $A$ est réalisé.

\ms

Elle est notée $p_A(B)$ et est définie par :

$$\boxed{p_A(B)=\dfrac{p(A\cap B)}{p(A)}}$$

\exemple

On tire une carte dans une jeu de $32$ cartes.

On considère les événements suivants :

- $A$ : "La carte tirée est un $\spade$" $\quad\rarr p(A)=\frac{8}{32}$
- $B$ : "La carte tirée est un $K$" $\quad\rarr p(B)=\frac{4}{32}$

On a $~A\cap B$ : "La carte est le $K\spade$"

$$p(A\cap B)=\frac{1}{32}$$

\newpage

La probabilité que la carte soit un $K$ **sachant que** l'on a tiré un $\spade$ est :

$$p_A(B)=\dfrac{p(A\cap B)}{p(A)}\quad=\dfrac{~\frac{1}{32}~}{~\frac{8}{32}~}\quad=\dfrac{1}{8}$$

On peut retrouver intuitivement ce résultat.

En effet, **sachant que** le résultat est un $\spade$, on a $1$ chance sur $8$ d'obtenir le $K$.

\ms

\exemple

Un sac contient $50$ boules, dont $20$ boules **rouges** et $30$ boules **noires**, où il est marqué soit "Gagné" ou soit "Perdu".

- Sur $15$ boules **rouges**, il est marqué Gagné.
- Sur $9$ boules **noires**, il est marqué Gagné.

On tire au hasard une boule dans le sac.

- Soit $R$ l'événement : "On tire une boule rouge"
  - $p(R)=\dfrac{20}{50}=0.4$
- Soit $G$ l'événement : "On tire une boule marquée Gagné"
  - $p(G)=\dfrac{15+9}{50}=\dfrac{24}{50}=0.48$

On a :

- $R\cap G$ : "On tire une boule rouge **et** marquée Gagné"
  - $p(R\cap G)=\dfrac{15}{50}=0.3$

Donc la probabilité qu'on tire une boule marquée Gagné **sachant qu**'elle est rouge est :

$$p_R(G)=\dfrac{p(R\cap G)}{p(R)}\quad=\dfrac{0.3}{0.4}\quad=0.75\qquad\qquad\pa{=\dfrac{15}{20}}$$

**Sachant que** le résultat est une boule rouge, on a $15$ chances sur $20$ qu'il soit marqué Gagné.

## Propriétés

\prop

Soit $A$ et $B$, deux événements avec $p(A)\neq 0$

- $\boxed{0\le P_A(B)\le 1}$
- $\boxed{P_A\pa{\overline{B}}=1-P_A(B)}$
- $\boxed{P(A\cap B)=P_A(B)\times P(A)}$

# Arbre pondéré et tableau

## Utilisation d'un arbre pondéré pour modéliser une situation

\exemple

Un sac contient $50$ boules, dont $20$ boules **rouges** et $30$ boules **noires**, où il est marqué soit "Gagné" ou soit "Perdu".

- Sur $15$ rouges, il est marqué Gagné.
- Sur $9$ noires, il est marqué Gagné.

\ms

Soit $\quad R$ : "On tire une boule rouge"$\quad G$ : "On tire une boule marquée Gagné"

\newpage

L'expérience aléatoire peut être schématisée par un arbre pondéré (ou arbre de probabilité)

\ms

\cimg{14cm}{img/03.png}

\ms

**\ul{Règle n°1 :}** La somme des probabilités des branches issues d'un même noeud est égale à 1.

$P(R)+P\pa{\overline{R}}=1~\rarr$ "Soit on tire une boule rouge, soit une noire"

\cimg{2cm}{img/04.png}

\ms

**\ul{Règle n°2 :}** La probabilité d'une "feuille" (extrémité d'un chemin) est égale au **produit** des probabilités du chemin aboutissant à cette feuille.

On considère la feuille $R\cap G$.

$$
\def\arraystretch{1.2}\begin{array}{rllll}
P(R\cap G)&=&P(R)&\times&P_R(G)\\
~&=&0.4&\times&0.75\quad=0.3
\end{array}
$$

\cimg{7cm}{img/05.png}

\newpage

**\ul{Règle n°3 : Probabilités totales}**

La probabilité d'un événement associé à plusieurs "feuilles" est égale à la **somme** des probabilités de chacune de ces "feuilles".

$G$ : "On tire une boule marquée Gagné" est associé aux feuilles $R\cap G$ et $R\cap \overline{G}$

$P(G)=P(G\cap R)+P\pa{G\cap \overline{R}} = 0.3+0.48 = 0.18$

\ms

\cimg{13cm}{img/06.png}

\ms

\methode \ul{Calculer la probabilité d'un événement associé à plusieurs feuilles}

\bw{r}{4cm}\cimg{35mm}{img/07.png}\ew

\ms

Dans une classe , il y a $65\%$ de filles et un tiers des filles portent les cheveux courts ainsi que $4$ garçons sur $5$.

On choisit un élève au hasard dans cette classe. On note :

- $F$ : "l'élève choisi est une fille"
- $L$ : "l'élève choisi a les cheveux longs"

\ms

Calculons $P(L)$

On a :

- $P(F\cap L) = P(F)\times P_F(L) = 0.65\times\frac{2}{3}$ > $\rarr$ "Filles aux cheveux longs"
- $P\pa{\overline{F}\cap L} = P\pa{\overline{F}}\times P_{\overline{F}}(L) = 0.35\times\frac{1}{5}$ > $\rarr$ "Garçons aux cheveux longs"

Donc

$$
\def\arraystretch{1.7}
\begin{array}{rllll}
P(L)&=&P(F\cap L)&+&P\pa{\overline{F}\cap L}\\
~&=&0.65\times\frac{2}{3}&+&0.35\times\frac{1}{5}\\
\end{array}
$$

\ms

\cimg{16cm}{img/08.png}

\newpage

## Utilisation d'un tableau de probabilité/effectifs pour modéliser une situation

\exemple

Dans une classe de $32$ élèves, il y a $15$ garçons et $28$ demi-pensionnaires. $12$ garçons sont demi-pensionnaires.

\begin{center}
\begin{tabular}{|c|c|c|c|}\hline
\rule[-3mm]{0mm}{8mm}~ & \quad $D$\quad & \quad$\overline{D}$\quad & TOTAL\\ \hline
\rule[-3mm]{0mm}{8mm}$G$ & $12$ & \textcolor{red}{$3$} & $15$ \\ \hline
\rule[-3mm]{0mm}{8mm}$F$ & \textcolor{red}{$16$} & \textcolor{red}{$1$} & \textcolor{red}{$17$} \\ \hline
\rule[-3mm]{0mm}{8mm}TOTAL & $28$ & \textcolor{red}{$4$} & $32$ \\ \hline
\end{tabular}
\end{center}

- \ul{Probabilités simples :}

$$P(G\cap D)=\frac{12}{32}\qquad P\pa{F\cap\overline{D}}=\frac{1}{32}\qquad P(G)=\frac{15}{32}$$

\ms

- \ul{Probabilités conditionnelles :}

$$P_G(D)=\frac{12}{15}\qquad P_{\overline{D}}(F)=\frac{1}{4}\qquad P_G\pa{\overline{D}}=\frac{3}{15}$$

\ms

On peut établir un **tableau de probabilités**

\begin{center}
\begin{tabular}{|c|c|c|c|}\hline
\rule[-3mm]{0mm}{8mm}~ & \quad $D$\quad &\quad$\overline{D}$\quad&TOTAL\\ \hline
\rule[-3mm]{0mm}{8mm}$G$ & $\frac{12}{32}$ & $\frac{3}{32}$ & $\frac{15}{32}$ \\ \hline
\rule[-3mm]{0mm}{8mm}$F$ & $\frac{16}{32}$ & $\frac{1}{32}$ & $\frac{17}{32}$ \\ \hline
\rule[-3mm]{0mm}{8mm}TOTAL & $\frac{28}{32}$ & $\frac{4}{32}$ & $\frac{32}{32}=1$ \\ \hline
\end{tabular}
\end{center}

On a :

$$P_G(D)=\frac{P(G\cap D)}{P(G)}\quad=\frac{~\frac{12}{32}~}{\frac{15}{32}}\quad=\frac{12}{15}$$

# Indépendance

## Définition : Indépendance de 2 événements

\definition

On dit que deux évènements $A$ et $B$ (de probabilité non nulle) sont **indépendants** lorsque :

\ms

\begin{center}\fbox{$A$ et $B$ indépendants $\Lrarr~P(A\cap B)=P(A)\times P(B)$}\end{center}

\ms

\rem

$P(A\cap B)=P(A)\times P(B)~$ est vrai **UNIQUEMENT** si $A$ et $B$ sont indépendants.

\ms

\rem

\begin{center}\fbox{$A$ et $B$ indépendants $\Lrarr~P_A(B)=P(B)~\text{ ou }~P_B(A)=P(A)$}\end{center}

\ms

**\ul{Preuve :}**

$A$ et $B$ indépendants $\Rarr~P(A\cap B)=P(A)\times P(B)$

Donc

$$
\begin{aligned}
 P_A(B)&=\frac{P(A\cap B)}{P(A)}\\
 ~&=\frac{P(A)\times P(B)}{P(A)}\quad=P(B)\\
 \end{aligned}
$$

\newpage

\exemple

On tire une carte dans une jeu de $32$ cartes.

\bw{r}{7cm}\cimg{5cm}{img/02.png}\ew

On considère les événements suivants :

- $A$ : "La carte tirée est un $\spade$"
  $\quad\rarr P(A)=\dfrac{8}{32}=\dfrac{1}{4}$
- $B$ : "La carte tirée est un $K$"
  $\quad\rarr P(B)=\dfrac{4}{32}=\dfrac{1}{8}$
- $~A\cap B$ : "La carte est le $K\spade$"
  $\quad\rarr P(A\cap B)=\dfrac{1}{32}$

On constate que :

$$P(A)\times P(B)=\frac{1}{4}\times\frac{1}{8}=\frac{1}{32}=P(A\cap B)$$

Donc $~A~$ et $~B~$ sont indépendants.

## Répétition d'expérience aléatoires et indépendantes à l'aide d'un arbre

\methode \ul{Représenter la répétition d'expériences identiques et indépendantes dans un arbre}

\bw{r}{3cm}\cimg{3cm}{img/09.png}\ew

\ms

Une urne contient $3$ boules blanches et $2$ boules rouges. On tire au hasard une boule et **on la remet dans l'urne** et on répète l'expérience **deux fois** de suite.

Soit

- $A$ : "Tirer une boule blanche" $\quad\rarr P(A)=\dfrac{3}{5}=0.6$
- $B$ : "Tirer une boule rouge" $\quad\rarr P(B)=\dfrac{2}{5}=0.4$

\ms

On peut représenter la situation par un arbre.

\ms

\cimg{9cm}{img/10.png}

\ms

Soit :

- $E_1$ : "Obtenir 2 blanches"
  - $P(E_1)=P(A;A)=0.36$
    \ms
- $E_2$ : "Obtenir 1 blanche et 1 rouge"
  - $P(E_2)=P(A;B)+P(B;A)=0.24+0.24=0.48$
    \ms
- $E_3$ : "Obtenir **au moins** 1 blanche"
  - $P(E_3)=P(E_1)+P(E_2)=0.36+0.48=0.84$
  - ou $P(E_3)=1-P(B;B)=1-0.16=0.84$

\ms

\rem Pour une expérience dont **le nombre d'issues ou le nombre de répétition est supérieur à 2**, le principe reste le même.
