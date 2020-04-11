const db = require("../db/database.js");
const moment = require("moment");

exports.getUsers = (req, res, next) => {
  const page = +req.query.page;
  const perPage = +req.query.perPage;
  if (!Number.isSafeInteger(page) || page <= 0 || !Number.isSafeInteger(perPage) || perPage <= 0) {
    res.status(400).json({ "error": "Query data is not valid" });
    return;
  }

  const sql = `SELECT DISTINCT users.id, first_name, last_name, email, gender, ip_address,
  (SELECT sum(clicks) FROM statistic WHERE users.id=statistic.user_id) AS total_clicks,
  (SELECT sum(page_views) FROM statistic WHERE users.id=statistic.user_id) AS total_page_views
   from users LEFT OUTER JOIN statistic ON users.id=statistic.user_id 
   WHERE users.id > ${page * perPage - perPage} LIMIT ${perPage}`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({
      "message": "success",
      "users": rows,
    });
  });
};

exports.getUser = (req, res, next) => {
  const id = +req.params.id;
  const startDate = req.query.start;
  const endDate = req.query.end;

  if (id <= 0 || id > 1000 || !Number.isSafeInteger(id)) {
    res.status(400).json({ "error": `Id #${id} is not valid` });
    return;
  }

  if (!moment(startDate, "YYYY-MM-DD").isValid() || !moment(endDate, "YYYY-MM-DD").isValid()) {
    res.status(400).json({ "error": `Date is not valid` });
    return;
  }

  const sql = `SELECT statistic.date, statistic.page_views, statistic.clicks, users.first_name, users.last_name
               from users INNER JOIN statistic ON statistic.user_id = users.id WHERE users.id = ${id} 
               AND date BETWEEN "${startDate}" AND "${endDate}" `;

  const end = moment(endDate);
  const start = moment(startDate);

  const days = end.diff(start, "days");

  const statistic = [];
  for (let index = 0; index <= days; index++) {
    statistic.push({
      date: moment(startDate).add(index, "days").format("YYYY-MM-DD"),
      clicks: 0,
      page_views: 0,
      first_name: "",
      last_name: "",
    });
  }

  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }

    statistic.forEach(stat => {
      rows.forEach(row => {
        if (stat.date === row.date) {
          stat.clicks = row.clicks;
          stat.page_views = row.page_views;
        }
        stat.first_name = row.first_name;
        stat.last_name = row.last_name;
      });
    });

    if (rows.length) {
      res.json({
        "message": "success",
        "userStatistic": statistic,
      });
    } else {
      db.all(`SELECT users.first_name, users.last_name  from users WHERE users.id = ${id}`, [], (err, rows) => {
        if (err) {
          res.status(400).json({ "error": err.message });
          return;
        }
        statistic.forEach(stat => {
          rows.forEach(row => {
            stat.first_name = row.first_name;
            stat.last_name = row.last_name;
          });
        });

        res.json({
          "message": "success",
          "userStatistic": statistic,
        });
      });
    }
  });
};