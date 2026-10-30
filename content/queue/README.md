# Post queue (unpublished)

Files are numbered oldest-story-first. A scheduler publishes one per hour by moving the
lowest-numbered `NN-slug.md` into `content/posts/` (the slug is the filename without NN-/date prefixes).
Nothing in this folder is built or published, except the next post's title, which shows as "Next up" on the home page.
