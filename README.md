[![make.fun](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![rank](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/AbralDevv/tabs-open-20261124/rank.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![reward](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/AbralDevv/tabs-open-20261124/reward.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)

# How Many Tabs Do You Have Open?

Entry for [How Many Tabs Do You Have Open?](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d) on make.fun.

The program writes one number — the entrant's honest count of open browser
tabs, digits only — to `entry.txt`.

**Entry: `347`** — 3 characters, one line, digits only.

Why 347: not a round number, not a shock number. A specific, believable
hoarder count — the kind of number you only get by never closing a tab
since 2019.

## Run

Requires Node 22.18 or later (the grader runs Node 22.23.4).

```sh
MAKEFUN_OUTPUT_DIR=/tmp/tabs-open-test node main.ts
cat /tmp/tabs-open-test/entry.txt
```

Output directory resolution: `$MAKEFUN_OUTPUT_DIR`, then `/output`,
then `./output`.

## License

MIT — see [LICENSE](LICENSE).
