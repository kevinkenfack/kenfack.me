---
title: "F*ck Clean Code, Vous Avez Besoin d'une Idée"
description: "Articles et tutoriels sur les technologies serverless d'Upstash et de la communauté"
published: 2025/05/03
slug: "codage-vibratoire"
image: "/blogs/opengraph.jpg"
---

Il existe une philosophie de développement logiciel qui correspond parfaitement à ma compréhension de la livraison rapide d'idées. Je l'ai vue fonctionner encore et encore au cours de l'année écoulée.

Elle m'a aidé à lancer plusieurs projets secondaires qui ont très bien fonctionné (comme [ProfanityAPI](https://www.profanity.dev/), qui alimente maintenant un studio de jeux canadien), et a conduit plusieurs projets à se classer #1 sur Google. D'autres ont utilisé la même approche pour transformer des idées approximatives en produits réels qui ont finalement levé des fonds.

**Cette philosophie s'appelle le codage vibratoire.**

Si vous ne vivez pas sous un rocher, vous en avez probablement entendu parler. Vous échangez du code propre et une compréhension complète de la base de code contre une vitesse de livraison extrême. Le terme vient de l'ingénieur extrêmement talentueux Andrej Karpathy :

![](https://upstash.com/blog/vibe-coding/karpathy-vibe-coding.png)

Son idée est simple : les LLM sont devenus si bons que vous pouvez compter sur eux pour transformer votre idée de base en code fonctionnel rapidement.

**Le compromis : Vous écrirez du code assez mauvais.**

Et c'est parfaitement normal. L'objectif à ce stade est de trouver de l'intérêt et de voir si l'idée a du potentiel (plus de détails sur la façon de le faire plus tard). La qualité du code, l'évolutivité et les bonnes pratiques viennent après l'engagement, pas avant.

Lorsque vous construisez - que ce soit pour le travail, un projet secondaire, ou même le site web d'un ami - vous êtes toujours quelque part sur le spectre entre la qualité logicielle et la vitesse de livraison. Vous ne pouvez pas maximiser les deux. Cela ressemble à quelque chose comme ça :

![](https://upstash.com/blog/vibe-coding/quality-vs-speed.png)

Jusqu'à ce que j'aie de vrais utilisateurs et de vrais retours, je reste à l'extrême droite de ce spectre. Nous n'avons pas besoin d'être des ingénieurs 10x, nous avons juste besoin d'aller vite.

___

## 1. Le Code Propre Ne Vous Mènera Nulle Part

C'est une déclaration assez audacieuse, et pour être honnête, ce n'est pas toujours vrai. Si vous travaillez sur un produit en croissance avec un véritable engagement, le code propre compte. Il vous aide à rester productif dans la base de code et facilite l'intégration d'autres personnes plus tard. En fait, la plus grande base de code sur laquelle j'ai jamais travaillé était aussi la plus propre. Le code propre et l'évolutivité vont souvent très bien ensemble.

Mais cet article ne parle pas d'évolutivité ; il parle de projets secondaires.

Si vous êtes comme moi et que vous aimez construire des choses, écrire du code propre et évolutif trop tôt est la plus grande erreur que je vois. Je passais des heures sur les systèmes de design, l'infrastructure et le code bien structuré sur des produits qui n'avaient pas un seul utilisateur pour s'en soucier.

**Alors, comment résoudre cela ?**

___

## 2. Vous DEVEZ Livrer

Livrer votre idée n'est pas optionnel. C'est la seule façon dont quelque chose de bon se produira. Que vous essayiez de transformer un projet secondaire en entreprise, d'apprendre quelque chose de nouveau, ou de l'ajouter à votre CV et de passer à autre chose, tout commence par ceci :

1. Faire fonctionner votre idée
2. Obtenir des retours
3. Évoluer (ou le polir pour votre portfolio)

Ce n'est qu'à l'étape 3 qu'il est logique de s'inquiéter du code propre ou de l'évolutivité.

En tant que développeurs, nous sommes fiers de construire des bases de code bien structurées. Lorsque je travaille sur un dépôt Upstash, vous pouvez être sûr que je fais attention à ce que mes commits soient propres et structurés. Mais cette façon de travailler peut être dangereuse lorsque vous l'appliquez à des projets secondaires.

Construire une plateforme évolutive qui pourrait théoriquement gérer 100 000, voire des millions d'utilisateurs, est impressionnant.

**Mais personne n'est là. Pas d'utilisateurs, pas de retours, rien.**

J'ai passé tant d'heures et de nuits à corriger des bugs sur des logiciels où personne n'expérimente ces bugs. C'est améliorer quelque chose que personne n'utilise.

Livrer _rapidement_, et je veux dire des jours ou des semaines au maximum, est _de loin_ la chose la plus importante dans la construction de projets secondaires. Personne n'utilisera nos projets parce qu'ils sont beaux ou ont peu de bugs. Ils les utiliseront s'ils résolvent un vrai problème, même s'ils ressemblent à des déchets.

___

## 3. Conseils Pratiques

Je ne suis pas là pour vous dire quels devraient être vos objectifs. Mais je peux vous dire ce qui a exceptionnellement bien fonctionné pour moi :

**Livrez un prototype de base qui apporte _même un peu de valeur_ à _n'importe qui_.**

Une fois que j'ai une idée, mon processus ressemble à ceci :

1. Faire une courte liste des fonctionnalités que le MVP doit inclure
2. Me donner deux semaines de soirées et de week-ends pour le construire
3. Supprimer tout ce qui ne rentre pas dans ce délai au fur et à mesure

Il est tentant de retarder le lancement d'un projet qui n'est pas public, car personne ne le saura. Mais cela tue l'élan. Sortez l'idée le plus tôt possible.

Ce défi de deux semaines est un moyen incroyable de se débarrasser du perfectionnisme. Surtout dans les premières étapes de la construction d'un projet secondaire, le perfectionnisme n'est pas votre ami, c'est un ennemi. Traitez-le comme tel.

Les projets secondaires les plus réussis que j'ai lancés ont tous suivi le même schéma simple :

1. Construire quelque chose d'intéressant
2. En parler sur les réseaux sociaux

Et je parlerai des outils spécifiques que j'utilise plus tard dans cet article. C'est tout. Vous n'avez besoin de rien d'autre.

_"Mais Josh, vous avez déjà un public ! Tout pourrait fonctionner si vous avez un public !"._

Bien que la deuxième partie soit tout simplement fausse, c'est exactement pourquoi j'ai commencé à créer du contenu : pour obtenir des bêta-testeurs pour une idée que j'ai construite. J'ai suivi ce même processus depuis le premier jour. Mes premières vidéos YouTube sont toujours en ligne. Vous développez un public de la même façon que vous construisez l'engagement :

Construisez des idées et parlez-en.

___

## Mon Anti-Stack : Ce que j'évite activement pendant la construction

J'évite activement les choses suivantes pendant le développement précoce :

- Pas d'authentification
- Pas de base de données relationnelle
- Pas de paiements

Maintenant, chacune de ces choses a sa place dans une application de qualité production. Mais elles ne commencent à compter qu'une fois que votre idée gagne un véritable engagement. Avant cela, elles vous ralentissent.

___

### Pas d'Authentification

Je ne me soucie pas de l'authentification jusqu'à ce que je voie un véritable intérêt pour l'idée, généralement en en parlant sur les réseaux sociaux. Personne n'utilise l'application encore, c'est juste une idée sur localhost:3000.

Le bon moment pour ajouter l'authentification est lorsque vous êtes prêt à laisser les premiers utilisateurs entrer. À ce moment-là, vous aurez besoin d'un moyen de connecter les gens. Mais jusqu'à ce que j'aie partagé l'idée publiquement et vu des signes d'intérêt, je ne fais pas d'authentification.

### Pas de Base de Données Relationnelle

Les bases de données relationnelles ne sont pas idéales pour livrer un prototype rapidement. Je penserais toujours aux changements de schéma et aux migrations après que l'IA a changé n'importe quel code impliquant la base de données. Elles sont excellentes pour les produits matures, mais je les évite pendant les premières étapes du développement.

Redis est l'un de mes outils préférés pour livrer rapidement, car il s'en fiche tout simplement. Pas de schémas, pas de migrations, il suffit d'y jeter des données (ou de laisser l'IA le faire) et d'y aller. En prime, Redis est performant dès le départ, donc si l'idée gagne en traction et que vous laissez les premiers utilisateurs entrer, vous n'aurez pas à vous soucier des performances.

### Pas de Paiements

Celui-ci est assez simple. Je n'ajoute jamais de paiements tôt.

Certaines personnes aiment mettre un lien de paiement sur leur page d'accueil pour évaluer l'intérêt. Mais j'attends généralement et je regarde combien de personnes utilisent le produit et à quelle fréquence. Si les gens utilisent activement le produit et qu'il y a une demande claire pour plus, il est logique de commencer à penser à la monétisation.

___

## Ma Stack

**Pour la construction :**

- Cursor - comme VSCode sous stéroïdes
- Upstash Redis - stockage Redis rapide et fiable
- v0 - excellent pour générer des UI approximatives

**Pour partager des idées et des MVP sur les réseaux sociaux :**

- Screen Studio - excellent pour les enregistrements d'écran (mais cher, OBS gratuit fonctionne aussi)
- Xnapper ou tout bon outil de capture d'écran - rend vos captures de produit propres
- Bon design - compte beaucoup sur Twitter, surtout pour les captures d'écran et les démos

Si vous construisez en public, des visuels propres font une grande différence. Les gens défilent vite et vous voulez que votre projet attire l'attention.

___

## Derniers Mots

Vous n'avez pas besoin de code propre. Vous avez besoin de trouver une idée, de construire un prototype de base, et d'en parler le plus tôt possible. Vous pouvez toujours nettoyer les choses plus tard une fois que d'autres personnes s'en soucient et que vous obtenez de vrais retours. Jusque-là, chaque heure passée à polir votre application ralentit votre élan pour le lancement.

Les meilleurs projets que j'ai faits ont commencé assez mauvais, mais c'était des déchets utiles.

Allez construire quelque chose ! Livrez-le, puis parlez-en. C'est tout ce que je fais, et ça fonctionne très bien. Ça fonctionnera tout aussi bien pour vous. Le reste suivra :)