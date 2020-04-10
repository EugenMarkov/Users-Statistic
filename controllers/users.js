const db = require("../db/database.js");
const moment = require("moment");

exports.getUsers = (req, res, next) => {
  const page = +req.query.page;
  const perPage = +req.query.perPage;
  if (!Number.isSafeInteger(page) || page <= 0 || !Number.isSafeInteger(perPage) || perPage <= 0) {
    res.status(400).json({"error": "Query data is not valid"});
    return;
  }

  const sql = `SELECT DISTINCT users.id, first_name, last_name, email, gender, ip_address,
  (SELECT sum(clicks) FROM statistic WHERE users.id=statistic.user_id) AS total_clicks,
  (SELECT sum(page_views) FROM statistic WHERE users.id=statistic.user_id) AS total_page_views
   from users LEFT OUTER JOIN statistic ON users.id=statistic.user_id 
   WHERE users.id > ${page*perPage - perPage} LIMIT ${perPage}` ;

  db.all(sql, [], (err, rows) => {
    if(err) {
      res.status(400).json({"error":err.message});
      return;
    }
    res.json({
      "message":"success",
      "users":rows
    })
  });
};

exports.getUser=(req, res, next) => {
  const id = +req.params.id;
  const startDate = req.query.start;
  const endDate = req.query.end;

  if (id <= 0 || id > 1000 || !Number.isSafeInteger(id) ) {
    res.status(400).json({"error": `${id} is not valid`});
    return;
  }

  if (!moment(startDate,"YYYY-MM-DD").isValid() || !moment(endDate,"YYYY-MM-DD").isValid()) {
    res.status(400).json({"error": `Date is not valid`});
    return;
  }

  const sql = `SELECT user_id, date, page_views, clicks, first_name, last_name from statistic LEFT OUTER JOIN
               users ON statistic.user_id = users.id WHERE user_id = ${id} 
               AND date BETWEEN "${startDate}" AND "${endDate}" `;

  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({"error":err.message});
      return;
    }
    res.json({
      "message":"success",
      "userData":rows
    })
  });
};