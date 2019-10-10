const connection = require('./config/connection');
const inquirer = require('inquirer');
const {
    // Q_byId,
    Q_byName
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
    this.SellItem = function (id, amount) {
        const sqlQry = `UPDATE ??
                        SET ?
                        WHERE ?`
        connection.query(sqlQry, [
            this.table_name,
            {
                stock_quantity: amount
            }, {
                item_id: id
            }
        ], function (err) {
            if (err) throw err;
        })
    }
}

function GetItemFromID(arr, id) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].item_id === parseInt(id)) {
            return arr[i]
        }
    }
    return false
}

function GetItemFromName(arr, name) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].product_name === name) {
            return arr[i]
        }
    }
    return false
}

function GetItemNameList(arr) {
    let idArr = [];
    for (var i = 0; i < arr.length; i++) {
        idArr.push(arr[i].product_name)
    }
    return idArr;
}

function Start(table) {
    const Products = new Table(table);

    Products.GetDatabase(async function (dbData) {
        console.table(dbData)
        // Products.printDB(dbData);
        Q_byName[0].choices = GetItemNameList(dbData);

        let {
            name,
            amount
        } = await inquirer.prompt(Q_byName);

        const {
            stock_quantity,
            item_id
        } = GetItemFromName(dbData, name);

        // let {
        //     id,
        //     amount
        // } = await inquirer.prompt(start_Q);
        //const item = GetItemFromID(dbData, id);

        amount = parseInt(amount);

        if (stock_quantity < amount) {
            console.log("Insufficient Quantity")
        } else {
            Products.SellItem(item_id, stock_quantity - amount)
        }
        Start("products");


        // console.log(id, amount);

        // connection.query("SELECT * FROM products WHERE item_id=?", [id], function (err, result) {
        //     if (err) throw err;
        //     // console.log(result);
        //     // console.log(result[0].stock_quantity);
        //     if (amount > result[0].stock_quantity) {
        //         console.log("Insufficient Quantity!")
        //     } else {
        //         console.log("Thanks for your purchase!");
        //         var newAmount = (result[0].stock_quantity - amount);
        //         console.log()
        //         connection.query("UPDATE products SET ? WHERE ?", [{
        //             stock_quantity: newAmount
        //         }, {
        //             item_id: id
        //         }])
        //     }
        //     Start("products");
        // })

    })

}