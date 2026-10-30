---
title: "Monarch Shield Ships: Catch Unguarded x402 Payments in CI"
date: 2026-07-30
tldr: "Monarch Shield is now a CI linter. It scans JS and TS for x402 v2 client calls that can pay without a policy check and fails the build. It runs locally with no account and no API key, and outputs JSON or SARIF."
tags: [x402, Security, Open Source]
---

## The Bug

The official x402 v2 Fetch quickstart can create a payment with no app-level policy check.

Copy it, ship it, and your agent pays whatever it's asked to.

## The Fix

`npx @monarch-shield/x402 doctor --ci --strict`

Doctor fails any file where a paid client path has no recognized abort or deny return.

Add an `onBeforePaymentCreation` hook that aborts over a spend limit and it passes.

## What Doesn't Pass

- Hooks that only log.
- Hooks registered after the paid call.
- Abort branches that can never run.
- Hooks on a different client.
- Lookalike guards.

If the analysis can't finish, it fails closed.

## Where It Runs

Locally. No account. No API key.

JSON for CI. SARIF for code scanning. A GitHub Action for pull requests.

## Honest Limits

It checks a single file and follows its imports.

It doesn't prove your policy is correct, and it doesn't claim to cover all of x402.

It catches the bug that costs you $10,000 while you sleep.

Security is a feature. 🛡️
