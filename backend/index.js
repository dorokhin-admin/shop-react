import express from "express";
import cors from "cors";
import { readDB, writeDB } from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

/* =========================
   🛒 CART API
========================= */

// ➕ добавить в корзину
app.post("/cart", (req, res) => {
    const db = readDB();

    const newItem = {
        id: Date.now().toString(),
        ...req.body
    };

    db.cart.push(newItem);

    writeDB(db);

    res.json(newItem);
});

// 🔼 обновить (plus / minus / quantity)
app.patch("/cart/:id", (req, res) => {
    const db = readDB();
    const id = req.params.id;

    db.cart = db.cart.map(item =>
        item.id === id
            ? { ...item, ...req.body }
            : item
    );

    writeDB(db);

    res.json({ ok: true });
});

// ❌ удалить 1 товар
app.delete("/cart/:id", (req, res) => {
    const db = readDB();
    const id = req.params.id;

    db.cart = db.cart.filter(item => item.id !== id);

    writeDB(db);

    res.json({ ok: true });
});

// ❌ удалить несколько товаров
app.post("/cart/delete-many", (req, res) => {
    const db = readDB();
    const { ids } = req.body;

    db.cart = db.cart.filter(item => !ids.includes(item.id));

    writeDB(db);

    res.json({ ok: true });
});

/* =========================
   📦 ITEMS
========================= */

app.get("/items", (req, res) => {
    const db = readDB();
    res.json(db.items);
});

/* =========================
   👤 USERS (заготовка)
========================= */

app.post("/register", (req, res) => {
    const db = readDB();

    const newUser = {
        id: Date.now().toString(),
        ...req.body
    };

    db.users.push(newUser);

    writeDB(db);

    res.json(newUser);
});

app.post("/login", (req, res) => {
    const db = readDB();

    const { telephone } = req.body;

    const user = db.users.find(u => u.telephone === telephone);

    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
});

/* =========================
   🚀 START SERVER
========================= */

app.listen(3001, () => {
    console.log("Server started on http://localhost:3001");
});