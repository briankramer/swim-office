const keys = require("./keys")

// Express App Setup
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(bodyParser.json())

// Postgres Client Setup
const { Pool } = require("pg")
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort
})

pgClient.on("error", () => console.log("Lost PG connection"))

pgClient
    .query("CREATE TABLE IF NOT EXISTS practice (" +
        "session INT, " +
        "grouping INT, " +
        "reps INT, " +
        "distance INT, " +
        "interval INT, " +
        "intensity VARCHAR(10)" +
        ")")
    .catch(err => console.log(err))

// Express route handlers

app.get("/", (req, res) => {
    console.log(keys)
    res.send(keys)
})

app.get("/practice/all", async (req, res) => {
    console.log(keys)
    await pgClient.query("INSERT INTO practice ( " +
        " session, grouping, reps, distance, interval, intensity )" +
        " VALUES ( 1, 1, 2, 3, 4, 'red' )")
    const values = await pgClient.query("SELECT * FROM practice")
    res.send(values.rows)
})

app.listen(5000, err => {
    console.log("Listening")
})
