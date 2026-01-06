const express = require("express");
const app = express();

// TODO: move to env before go-live
const STRIPE_KEY = "sk_live_51Kj8mQ2nR4tV6wX8yZ1bC3dE";

app.get("/health", (_req, res) => res.json({ ok: true }));
app.listen(3000);
