// =====================================================================
//  USE TES MOTS : le contenu du jeu
//  Modifie ce fichier pour ajouter tes phrases, photos et vidéos.
//  - Phrases à trous : mets ___ (au moins 2 tirets bas) là où va la réponse.
//  - Photos / vidéos : dépose-les simplement dans le dossier "medias/"
//    (sous-dossiers acceptés). Le jeu les trouve tout seul, pas besoin
//    de les lister ici. Vidéos conseillées : 5 à 15 s, en .mp4 (H.264).
//  Tu peux aussi glisser des fichiers directement sur l'écran d'accueil
//  du jeu, sans toucher à ce fichier (ils restent sur ton ordi).
// =====================================================================

window.CONTENU = {
  // Seulement si le jeu est sur GitHub Pages AVEC un nom de domaine perso :
  // indique le dépôt, ex. "cyprienvincent/use-tes-mots". Sinon, laisse vide.
  github: "",

  // (facultatif) médias en plus, hors du dossier medias/ ou sur un autre site
  videos: [
    // "medias/clip-01.mp4",
  ],

  photos: [
    // "medias/photo-01.jpg",
  ],

  // Questions de la manche finale « The Final Countdown » (3 tirées au hasard).
  // Laisse vide pour utiliser la liste intégrée au jeu.
  finale: [
    // "Un mauvais nom pour un chien",
  ],

  phrases: [
    "Le pire truc à dire lors d'un premier rendez-vous : « ___ »",
    "Mon GPS vient de me dire : « Dans 200 mètres, ___ »",
    "Nouveau parfum de chips au supermarché : ___",
    "Ce qu'on trouve vraiment au fond du sac de Mary Poppins : ___",
    "La vraie raison pour laquelle les dinosaures ont disparu : ___",
    "Le message à ne surtout pas envoyer sur le groupe de la famille : « ___ »",
    "Le nom de ma future salle de sport : ___",
    "Le coach de la salle m'a regardé et m'a dit : « ___ »",
    "Mon talent caché, que personne ne connaît : ___",
    "La phrase qu'on ne veut jamais entendre chez le dentiste : « ___ »",
    "Le pire nom pour un bateau : ___",
    "Ce que les chats pensent vraiment quand ils nous fixent : « ___ »",
    "Nouvelle épreuve aux Jeux olympiques : ___",
    "Le titre de mon autobiographie : ___",
    "Ce qui est écrit en tout petit en bas de mon contrat de travail : « ___ »",
    "Le pire cadeau à offrir à sa belle-mère : ___",
    "Si les plantes pouvaient parler, elles diraient d'abord : « ___ »",
    "Le nouveau super-héros français : Captain ___",
    "Le pire moment pour éternuer : ___",
    "Le vrai secret de la recette de mamie : ___",
    "Sur Minecraft, j'ai construit ___ et je n'en suis pas fier.",
    "Le shooting a mal tourné quand le modèle a dit : « ___ »",
    "Mon horoscope du jour : « Aujourd'hui, ___ »",
    "La réplique culte du prochain blockbuster français : « ___ »",
    "Ce qu'il y a vraiment dans le Triangle des Bermudes : ___",
    "Le pire endroit pour une demande en mariage : ___",
    "La notification que je redoute le plus : « ___ »",
    "Un slogan parfait pour une marque de chaussettes : « ___ »",
    "Ce que le Père Noël fait le reste de l'année : ___",
    "La première loi que je voterais si j'étais roi de France : ___",
    "Le nom du groupe de rap de ma grand-mère : ___",
    "L'excuse parfaite pour arriver en retard au travail : « ___ »",
    "Le pire conseil de drague : « ___ »",
    "La chose la plus bizarre qu'on peut trouver dans un frigo : ___",
    "La nouvelle appli qui va cartonner : une appli pour ___",
    "Le pire nom de Wi-Fi à afficher pour ses voisins : ___",
    "Ce que les extraterrestres ont dit en découvrant la Terre : « ___ »",
    "Le menu secret du fast-food du coin : ___",
    "Ce que je dis à mon reflet chaque matin : « ___ »",
    "Le pire thème pour un mariage : ___",
    "La dernière recherche Google de mon voisin : « ___ »",
    "Une phrase à ne jamais dire à un photographe : « ___ »",
  ],

  // ===================================================================
  //  MODE ADULTE 🔞 (à cocher dans les réglages avant de lancer)
  //  Remplace les phrases à trous et les questions de la finale.
  // ===================================================================
  phrasesAdulte: [
    "Le pire truc à crier au moment le plus chaud : « ___ »",
    "Ce qu'il ne faut jamais dire juste après : « ___ »",
    "Mon surnom secret au lit : ___",
    "Le nouveau jouet pour adultes qui va cartonner : ___",
    "La vraie raison pour laquelle mes voisins tapent au mur : ___",
    "Le pire endroit pour un moment intime : ___",
    "Ma technique de drague imparable : « ___ »",
    "Ce que j'ai trouvé en ouvrant la table de chevet de mes parents : ___",
    "Le message que j'ai envoyé à la mauvaise personne à 2h du matin : « ___ »",
    "Le titre du film coquin inspiré de ma vie : ___",
    "La position secrète que personne ne connaît : « la ___ »",
    "Le pire fantasme à avouer à sa belle-mère : ___",
    "Mon ex m'a quitté parce que j'étais trop ___",
    "Ce qui est écrit sur mon profil de site de rencontre : « ___ »",
    "La phrase la moins sexy du monde : « ___ »",
    "Le safe word le plus ridicule : « ___ »",
    "Le nom de ma future marque de lingerie : ___",
    "Ce que pense vraiment mon lit de moi : « ___ »",
    "Le pire bruit à faire pendant un câlin : ___",
    "La vraie raison pour laquelle je suis rentré(e) à 6h du matin : ___",
    "Mon premier rendez-vous a mal tourné quand j'ai sorti : ___",
    "Le nouveau parfum pour séduire à coup sûr : « Eau de ___ »",
    "Ce qu'on trouve dans l'historique de navigation de mon coloc : ___",
    "Le pire moment pour que ta mère appelle : ___",
    "Un bon slogan pour une marque de préservatifs : « ___ »",
    "La 51e nuance de Grey : ___",
    "Ce que j'ai crié au réveil après une soirée trop arrosée : « ___ »",
    "Mon talent caché qui rend fou/folle : ___",
    "La raison pour laquelle on m'a sorti(e) du sauna : ___",
    "La pire chose à dire en enlevant son pantalon : « ___ »",
    "Le pire emoji à envoyer après une première nuit : ___",
    "Ce que je cache sous mon lit : ___",
  ],

  finaleAdulte: [
    "Le pire nom pour un sex-toy",
    "Une phrase de drague qui ne marchera jamais",
    "Ce qu'il ne faut pas dire après une première nuit",
    "Le pire endroit pour un premier baiser",
    "Une raison de quitter quelqu'un en plein câlin",
    "Le pire fantasme possible",
    "Un mauvais nom pour un club libertin",
    "Ce que ton lit raconterait s'il pouvait parler",
    "Le pire déguisement pour une soirée coquine",
    "Une excuse pour ne pas rappeler après un date",
    "La pire musique pour une nuit romantique",
    "Le pire texto à envoyer à son crush",
    "Un talent qui n'impressionne personne au lit",
    "Le pire mot pour décrire un bisou",
    "Ce que pensent vraiment tes voisins de toi",
    "Une appli de rencontre pour un public très spécial",
    "La pire chose à trouver dans le lit d'un inconnu",
    "Un nom de film coquin pour les retraités",
  ],
};
