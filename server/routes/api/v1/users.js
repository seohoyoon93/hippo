const express = require("express");
const Pool = require("pg").Pool;
const uuidv4 = require("uuid/v4");

const router = express.Router();

// Should have this in seperate config file
const pool = new Pool({
  user: "2easy",
  host: "localhost",
  database: "hippodb",
  password: "2easy",
  port: 5432
});

// Get user settings
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

// Update user settings
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const lang = req.body.lang;
  const goal = req.body.goal;
  const notification = req.body.notification;
  const notiStartTime = req.body.notification_start_time;
  const notiEndTime = req.body.notification_end_time;
  const notiPeriod = req.body.notification_period;
  const unit = req.body.unit;
  const height = req.body.height;
  const weight = req.body.weight;

  if (lang !== undefined) {
    updateSetting("lang", lang, id, res);
  }

  if (goal !== undefined) {
    const goalValue = parseInt(goal);
    updateSetting("goal", goalValue, id, res);
  }

  if (notification !== undefined) {
    const allowed_notification = notification === "true";
    updateSetting("allowed_notification", notification, id, res);
  }

  if (notiStartTime !== undefined) {
    const notiStartTimeValue = parseInt(notiStartTime);
    updateSetting("notification_start_time", notiStartTimeValue, id, res);
  }

  if (notiEndTime !== undefined) {
    const notiEndTimeValue = parseInt(notiEndTime);
    updateSetting("notification_end_time", notiEndTimeValue, id, res);
  }

  if (notiPeriod !== undefined) {
    const notiPeriodValue = parseInt(notiPeriod);
    updateSetting("notification_period", notiPeriodValue, id, res);
  }

  if (unit !== undefined) {
    updateSetting("unit", unit, id, res);
  }

  if (height !== undefined) {
    const heightValue = parseInt(height);
    updateSetting("height", heightValue, id, res);
  }

  if (weight !== undefined) {
    const weightValue = parseInt(weight);
    updateSetting("weight", weightValue, id, res);
  }
});

const updateSetting = (row, value, id, res) => {
  pool.query(
    `UPDATE users SET ${row} = $1 WHERE id = $2`,
    [value, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`User modified with ID: ${id}`);
      return;
    }
  );
};

// Create user
router.post("/", (req, res) => {
  const {
    unit,
    height,
    weight,
    gender,
    training,
    goal,
    lang,
    device_id,
    allowed_notification,
    notification_start_time,
    notification_end_time,
    notification_period
  } = req.body;

  const uuid = uuidv4();

  pool.query(
    "INSERT INTO users (uuid, unit, height, weight, gender, training, goal, lang, device_id, allowed_notification, notification_start_time, notification_end_time, notification_period) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING uuid",
    [
      uuid,
      unit,
      height,
      weight,
      gender,
      training,
      goal,
      lang,
      device_id,
      allowed_notification,
      notification_start_time,
      notification_end_time,
      notification_period
    ],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(201).send(result.rows[0].uuid);
    }
  );
});

module.exports = router;
