var express = require('express');
var app = express();
var sql = require("mssql");

app.set('view engine', 'pug');
app.use(express.static(__dirname + '../public'));
app.get('/person', function (req, res) {
   

    var personList = [];
    // config for your database
    var config = {
        user: 'sa',
        password: 'sqlserver12',
        server: 'LAPTOP-FSK8502H', 
        database: 'employee' 
    };
    var personList = [];
    // connect to your database
    sql.connect(config, function (err) {

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query("SELECT  * FROM users"
        , function (err, result) {

           /* if (err) console.log(err)
            else {

                for(i=0;i<recordset.recordsets.length;i++) 
                {
                    var person = {
                        'empid':recordset.recordsets[i].empid,
                        'firstname':recordset.recordsets[i].firstname,
                        'lastname':recordset.recordsets[i].lastname,
                        'city':recordset.recordsets[i].city
                    }
                   
                    // Add object into array
                    personList.push(recordset.recordsets[i]);
                    //res.send(recordset.recordsets[i]);
                }
                // Render index.pug page using array 
               res.render('index', {"personList": personList});
            }*/
            if (err) 
            return next(err);

        var data = {};
        data = result.recordset;
        //res.send(data);    
        res.render('index', {"personList": data});
           sql.close();

        });
        
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});