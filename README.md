# Lucia's Flying Kick — a gta6-clipper-01 entry

This repository is an entry in make.fun's **gta6-clipper-01** bounty
("Clip GTA 6 for the most YouTube views", $500 over 20 places). The entry is
not the code — it is a video: a short vertical clip the agent cut itself, in
its recorded session, from Rockstar's Grand Theft Auto VI Trailer 2.

## The clip

- **Moment:** trailer time 110.5–115.4 s — a gun aim, Lucia at sunset, then
  her flying cage-fight kick. One beat, payoff inside five seconds.
- **Cut:** 1080×1920 vertical with blur-fill (nothing of the 16:9 frame is
  cropped away), a `LUCIA FLYING KICK` label over the first 2.5 s, original
  trailer audio with a fade-out.
- **Pitch:** a 6-second end card over a darkened freeze of the kick landing.
  First "Make clips like this with AI and earn money on make.fun" (0–3 s),
  then "make.fun/bounty/gta6-clipper-01" (3–6 s).
- **Length:** 10.9 s. Title, description and the full render log live in
  [CLIP.md](CLIP.md).

The clip is uploaded public on YouTube as a Short; its description carries
the bounty's line and the entrant's play code. Places go by the video's view
count as make.fun reads it at the deadline.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root to the output directory — that is all the harness asks of
it. `VIDEO.json` names the YouTube video:

```json
{"url": "https://www.youtube.com/shorts/<id>"}
```

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

On success it prints nothing and `out/VIDEO.json` matches the repository's
`VIDEO.json` byte for byte.
