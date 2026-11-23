#!/bin/sh
# ---------------------------------------------------------------------
#  USE TES MOTS : génère medias/liste.json à partir du dossier medias/
#  (photos et vidéos, sous-dossiers compris).
#  - Netlify le lance tout seul (voir netlify.toml).
#  - À la main : ouvre le Terminal dans ce dossier et tape  sh lister-medias.sh
# ---------------------------------------------------------------------
cd "$(dirname "$0")" || exit 1
mkdir -p medias

liste() {
  find medias -type f ! -name '.*' \( "$@" \) | LC_ALL=C sort \
  | sed 's/\\/\\\\/g; s/"/\\"/g' \
  | awk 'BEGIN{ORS=""} { if (NR > 1) print ",\n"; print "    \"" $0 "\"" } END { if (NR) print "\n" }'
}

PHOTOS=$(liste -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' -o -iname '*.gif' -o -iname '*.webp' -o -iname '*.avif')
VIDEOS=$(liste -iname '*.mp4' -o -iname '*.webm' -o -iname '*.mov' -o -iname '*.m4v')

printf '{\n  "photos": [\n%s\n  ],\n  "videos": [\n%s\n  ]\n}\n' "$PHOTOS" "$VIDEOS" > medias/liste.json

NP=$(printf '%s' "$PHOTOS" | grep -c '"')
NV=$(printf '%s' "$VIDEOS" | grep -c '"')
echo "medias/liste.json : $NP photo(s), $NV vidéo(s)"
