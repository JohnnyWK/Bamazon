const connection = require('./config/connection');
const inquirer = require('inquirer');
const {
    start_Q,
    more_Q
} = require('./config/questions')

Start("products");

function Table(table_name) {
    this.table_name = table_name;
    this.table_data = {};
    this.GetDatabase = function (cb) {
        const sqlQry = `SELECT * FROM ??`;
        const data = [this.table_name];

        connection.query(sqlQry, data, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }
    this.printDB = function () {
        console.table(this.table_data)
    }
}

function Start(table) {
    const Products = new Table(table);

    Products.GetDatabase(async function (dbData) {
        console.table(dbData)
        // Products.printDB(dbData);

        const { id, amount} = await inquirer.prompt(start_Q);
        // console.log(id, amount);

        connection.query("SELECT * FROM products WHERE item_id=?", [id], function(err, result){
            if(err) throw err;
            // console.log(result);
            // console.log(result[0].stock_quantity);
            if (amount > result[0].stock_quantity){
                console.log("Insufficient Quantity!")
            } else{
                console.log("Thanks for your purchase!");
                var newAmount = (result[0].stock_quantity - amount);
                console.log()
                connection.query("UPDATE products SET ? WHERE ?", [{stock_quantity: newAmount}, {item_id: id}])
            }
            Start("products");
        }
        )

    })
    
}





