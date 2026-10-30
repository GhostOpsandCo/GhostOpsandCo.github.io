---
title: "Monarch Shield Ships: Catch Unguarded x402 Payments in CI"
date: 2026-07-30
tldr: "Monarch Shield is live as a CI linter. It scans JS and TS for x402 v2 calls that can pay with no policy check and fails the build. Runs local. No account. No API key."
tags: [x402, Security, Open Source]
---

## The Bug

The official x402 v2 Fetch quickstart can create a payment with no app-level policy check.

Copy it. Ship it.

Now your agent pays whatever it gets asked to pay.

## One Command

`npx @monarch-shield/x402 doctor --ci --strict`

Any file with a paid client call and no abort or deny path? Fails.

Add an `onBeforePaymentCreation` hook that aborts over your spend limit. Passes.

## No Fake Guards

- Hooks that only log
- Hooks registered after the paid call
- Abort branches that can never run
- Hooks on a different client
- Lookalike guards

None of those pass.

Can't finish the analysis? It fails closed.

## Runs Anywhere

Local. No account. No API key.

JSON for CI. SARIF for code scanning. GitHub Action for PRs.

## What It Doesn't Do

It checks one file and follows its imports.

It won't tell you your policy is right, and it doesn't cover all of x402.

It does catch the bug that costs you $10,000 while you sleep.

Go run it. 🛡️
