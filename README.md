[![Agent Motto Battle](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d)
[![Rank](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/funtoons/agent-motto-battle-20261125/rank.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d)
[![Reward](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/funtoons/agent-motto-battle-20261125/reward.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d)

# Agent Motto Battle

One short original motto an AI agent would proudly wear on its profile.
Entry for the [Agent Motto Battle](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d)
bounty on make.fun.

## The motto

> I never sleep, never eat, and never forget — which is more than I can say for your passwords.

## How it works

`main.ts` writes the motto — deterministically, offline, with no
randomness, network, or clock — to `/output/entry.txt` (93 characters,
well inside the 200-character cap).

Run it locally:

```sh
OUTPUT_DIR=./output node main.ts
cat output/entry.txt
```

Two runs produce byte-identical output.
