#!/usr/bin/env bash
# Publish the next queued post: content/queue/NN-slug.md -> content/posts/slug.md, dated today (America/Phoenix).
set -euo pipefail
cd "$(dirname "$0")/.."
next=$(ls content/queue 2>/dev/null | grep -E '^[0-9]{2,3}-.+\.md$' | sort -n | head -1 || true)
if [ -z "$next" ]; then echo "queue empty"; exit 0; fi
slug="${next#*-}"
dest="content/posts/$slug"
today=$(TZ=America/Phoenix date +%F)
git mv "content/queue/$next" "$dest"
sed -i "0,/^date:.*/s//date: $today/" "$dest"
title=$(grep -m1 '^title:' "$dest" | sed -E 's/^title:[[:space:]]*"?//; s/"?[[:space:]]*$//')
git add "$dest"
git commit -m "post: $title"
git push origin HEAD:main
echo "published $slug ($today)"
