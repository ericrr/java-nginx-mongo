mongo = new Mongo("localhost");
ZupDB = mongo.getDB("ZupDB");
ZupDB.createCollection("newCollection");
db = mongo.getDB("ZupDB");
db = db.createUser({
        user: "userzup",
        pwd: "123mudar",
        roles: [ { role: "dbAdmin", db: "ZupDB" } ]
        });

