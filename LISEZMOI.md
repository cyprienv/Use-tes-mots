# USE TES MOTS

Jeu de répliques façon *Use Your Words* : un grand écran, de 2 à 12 joueurs sur téléphone, 3 modes de jeu (Légende vidéo, La Une, Phrase à trous), plus une manche finale « The Final Countdown » (3 questions rapides, votes x2), activable dans les réglages. Ses questions se personnalisent dans `contenu.js` (liste `finale`).

## Fichiers
- `index.html` : tout le jeu (écran hôte + téléphones).
- `contenu.js` : tes phrases à trous (et quelques réglages facultatifs).
- `medias/` : ta banque de photos et de vidéos (sous-dossiers acceptés). Le jeu trouve les fichiers tout seul.
- `sons/` : (facultatif) tes propres musiques, voir plus bas.
- `lister-medias.sh` et `netlify.toml` : génèrent la liste des médias quand le jeu est sur Netlify.

## Le mettre en ligne (obligatoire pour jouer avec les téléphones)
**GitHub Pages (recommandé avec une banque de médias)** : crée un dépôt public, envoie tout le dossier, puis **Settings → Pages → Source : Deploy from a branch → `main` / `(root)` → Save**. Le jeu demande lui-même à GitHub la liste des fichiers de `medias/` : tu n'as rien d'autre à faire. Si tu utilises un nom de domaine perso, indique le dépôt dans `contenu.js` (ligne `github:`).

**Netlify relié à GitHub** : **Add new site → Import an existing project → GitHub** puis choisis le dépôt. Le fichier `netlify.toml` génère la liste des médias à chaque mise en ligne.

**Netlify Drop (glisser-déposer)** : avant de glisser le dossier sur app.netlify.com/drop, génère la liste à la main. Ouvre le Terminal dans le dossier du jeu et tape `sh lister-medias.sh`. Refais-le chaque fois que tu ajoutes des médias.

Ouvrir `index.html` en double-clic ne suffit pas : les téléphones ne pourraient pas l'atteindre.

## Jouer
1. Sur la télé ou l'ordi : ouvre le site, puis clique sur **Créer une partie**.
2. Sur les téléphones : scannez le QR code, ou ouvrez le site, cliquez sur **Rejoindre** et tapez le code à 4 lettres.
3. Lance la partie. Sur l'écran principal, la touche Espace (ou →) fait passer les révélations plus vite.

Pour tester seul, utilise le bouton **+ Ajouter un bot**.

- **Retirer un joueur** : clique sur le ✕ à côté de son nom. Dans l'accueil, il est toujours visible ; en pleine partie, il apparaît au survol des noms en bas de l'écran.
- **Revenir dans la partie** : le code reste affiché en haut de l'écran. Un joueur qui a quitté par erreur rouvre le site, tape le code et **le même pseudo** : il retrouve sa place et son score.
- **Son** : bouton 🔊 en bas à gauche, ou touche **M** pour couper ou remettre le son.

## Ajouter du contenu
- **Pour une soirée** : glisse tes photos et vidéos sur l'écran d'accueil du jeu. Elles restent sur ton ordi, rien n'est envoyé en ligne.
- **De façon permanente** : dépose les fichiers dans `medias/`, puis remets le jeu en ligne. L'écran d'accueil affiche combien de fichiers il a trouvés.
- **Formats acceptés** : .jpg, .png, .gif, .webp, .avif pour les photos ; .mp4, .webm, .mov, .m4v pour les vidéos. Pour les vidéos, préfère le .mp4 en H.264 : les .mov d'iPhone (HEVC) ne passent pas sur tous les écrans.
- **Phrases à trous** : ajoute une ligne dans `contenu.js`, avec `___` à la place du trou.

## Musiques
Le jeu génère sa propre bande-son. Pour mettre tes musiques à la place, dépose des fichiers .mp3 dans `sons/` avec exactement ces noms : `lobby.mp3` (accueil), `ecrire.mp3`, `voter.mp3`, `revelation.mp3`, `scores.mp3`, `final.mp3`. Elles tournent en boucle. Tu peux n'en remplacer que certaines : les autres restent générées.

## Comment ça marche
Les téléphones se connectent directement à l'écran principal, en pair-à-pair grâce à PeerJS : il n'y a aucun serveur à gérer. Il faut juste une connexion internet pour que les appareils se trouvent. Sur certains réseaux très verrouillés (Wi-Fi d'entreprise ou d'école), la connexion peut échouer ; dans ce cas, un partage de connexion 4G/5G règle le problème.
