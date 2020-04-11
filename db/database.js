const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const usersFromJSON = require("./users");
const statisticFromJSON = require("./users_statistic");

const DBSOURCE = path.resolve(__dirname, "usersAndStatisticDB.sqlite");

let db = new sqlite3.Database(DBSOURCE, err => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");

    db.exec("PRAGMA foreign_keys = ON;", function(error)  {
      if (error){
        console.error("Pragma statement didn't work.")
      } else {
        console.log("Foreign Key Enforcement is on.")
      }
    });

    db.run(
      `CREATE TABLE users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name text, 
            last_name text, 
            email text UNIQUE,
            gender text, 
            ip_address text
            ) `,
      err => {
        if (err) {
          console.log("Users already created");
          console.log(err);
        } else {
          const insertUsers =
            "INSERT INTO users (id, first_name, last_name, email, gender, ip_address) VALUES (?,?,?,?,?,?)";
          usersFromJSON.forEach((item, index) => {
            db.run(insertUsers, [item.id, item.first_name, item.last_name, item.email, item.gender, item.ip_address], err => {
              if (err) {
                return console.log(err.message);
              }
              });
          });
        }
      }
    );
    db.run(
      `CREATE TABLE statistic (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      date TEXT NOT NULL,
      page_views INTEGER NOT NULL,
      clicks INTEGER NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id)
  ) `,
      err => {
        if (err) {
          console.log("Statistic already created");
          console.log(err);
        } else {
          const insertUsersStatistic =
            "INSERT INTO statistic (user_id, date, page_views, clicks) VALUES (?,?,?,?)";
          statisticFromJSON.forEach((item, index) => {
            db.run(insertUsersStatistic, [item.user_id, item.date, item.page_views, item.clicks],(err)=> {
              if (err) {
                return console.log(err.message);
              }
              });
          });
        }
      }
    );
  }
});


module.exports = db;
