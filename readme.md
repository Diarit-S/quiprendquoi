##### Lancement du projet

- Lancer `npm install`
- Lancer une première fois `npm run sass` *Mon environnement n'a pas apprécié l'ajout de la commande dans `npm run start`*
- Lancer `npm run start`
- Ecouter sur le port `3566`

#### Améliorations du projet

L'amélioration du projet proposé ici va de pair avec la section **[29.b](https://github.com/bcalou/quiprendquoi-front/blob/master/doc/02_move_fast_dont_break_things.md#29b---rafra%C3%AEchissement-automatique)** *(Rafraîchissement automatique)* du support du TP compris dans la *poursuite en autonomie*. 

Il est en effet très pertinent de rafraichir la liste des items d'un évènement, néanmoins, le processus de rafraichissement n'est peut être pas nécessaire lorsque l'application ou la page web tourne en tâche de fond. (Pendant que l'utilisateur regarde des [vidéos de chats](https://www.youtube.com/watch?v=wZZ7oFKsKzY).. par exemple).

Ainsi, j'ai pensé qu'il était intéressant d'exploiter l'API **[Page Visibility](https://developer.mozilla.org/fr/docs/Web/API/Page_Visibility_API)** qui permet de savoir lorsque l'utilisateur est face à une page web, ou est en train d'interagir avec. 

Le processus de rafraichissement est alors en marche uniquement lorsque l'utilisateur se trouve "sur" la page qui utilise le rafraichissement. 

La performance est ainsi amélioré, évitant la relance vers une API externe toutes les 5 secondes si la page n'est pas utilisée.

```javascript
    setInterval(() => {
      if (!document.hidden) {
        fetch(`${apiUrl}/party/${party._id}`)
          .then(res => {...
```

[Voir le fichier concerné](scripts/partys.js)



## Article personnel

### Sujet : Vers un monde de PWA ?

On le sait, la plupart des utilisateurs de l'internet et du web utilisent aujourd'hui leur smartphones. Beaucoup d'entreprises proposent leur services au travers d'applications mobiles sur ces smartphones et doivent adapter leur applications aux différents environnements (iOS, android ... etc).  

Le développement et le maintien de ces applications à un coût considérable en terme de temps et d'argent, dans la mesure où elles sont développés plusieurs fois, avec des équipes spécialisés dans chaque environnements. 

On est alors en droit de se demander si les applications natives, développés avec différents langages pour s'adapter aux différents environnements, ne vont pas disparaître, au profit des applications web progressives ou PWA. 

D'abord, définissons une PWA. 

En quelques mots, une PWA est une application web responsive, qui s'adapte donc aux différents contextes et environnements, et qui, comme les applications natives, peut être installée sur le terminal qui l'utilise.

Elle peut être lancé par une grande variété de navigateur qui prennent en charge les PWA. C'est le cas des plus utilisés (Chrome, Safari...).

Les avantages que peuvent en tirer les entreprises sont donc multiples : 

- Le développement d'une seul application pour l'ensemble des plateforme mobiles.

- Puisque responsive et étant avant tout un site web, la PWA fait également guise de site web (donc pas besoin de développer un site web en plus)

- Progressive, elle permet donc de fonctionner, même de manière minimale, quelque soit l'environnement de l'utilisateur.

- Référencé par les moteurs de recherche

  

Les utilisateurs peuvent également y voir des avantages certains (dont peuvent profiter également les entreprises):

- Fonctionnement en partie hors ligne

- Pas de téléchargement de l'ensemble des ressources d'un coup, donc rapide à installer et à utiliser.

- Facilement partageable (via url)

  

Avec tout cela, tout le monde devrait passer exclusivement aux PWAs ?

A l'heure actuelle, il n'est pas encore possible de répondre aisément un grand oui...

En effet, malgré les multiples avantages de la PWA, il n'est pas encore question d'abandonner les applications natives. 

Le premier point, et pas des moindre, qu'il faut soulever ici, c'est la confiance que les utilisateurs veulent bien attribuer a cette application, qui n'en est pas une, mais en fait si, mais ....

Etant donnée qu'une PWA n'est pas installable depuis les stores d'applications classiques,  il peut régner une certaine répulsion quant à l'installation d'une application depuis le navigateur. 

Par ailleurs même si la PWA tourne en https, la sécurité des applications natives est renforcée notamment par les multiples tests que leur imposent les stores. 

Un autre point important est que les PWA n'ont pas encore accès à l'ensemble des fonctionnalités des mobiles  même si la tendance est à la prise en charge progressive de l'ensemble des fonctionnalités. 



Les PWA s'imposent donc comme la nouvelle technologie qui va faciliter le développement et la mise en circulation des applications. 

Viendra peut-être le jour ou elle aura prit le pas sur les applications natives. Pour l'instant néanmoins, les applications natives on encore de beaux jours devant eux. 

 



 



