var fs = require('fs');

var file = "resources/tokens.db";
var exists = fs.existsSync(file);

if(!exists){
    console.log("DB not found ... creating new one");
    fs.openSync(file, "w");
}

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);

db.serialize(function() {
    if (!exists) {
        db.run("CREATE TABLE activate_token (token varchar(255), used tinyint)");
        var stmt = db.prepare("INSERT INTO activate_token VALUES ('asdfaskdfnvas', 0)");
        stmt.run();
        stmt.finalize();
    }

    //db.each("SELECT token FROM activate_token", function(err, row) { console.log(row.token); });

});

db.close();