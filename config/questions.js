exports.Q_byId = [{
        name: "id",
        type: "input",
        message: "What item ID would you like to purchase?",
        validate: function (val) {
            return !isNaN(val)
        }
    },
    {
        name: "amount",
        type: "input",
        mesage: "How many would you like to purchase?",
        validate: function (val) {
            return !isNaN(val)
        }
    }
]

exports.Q_byName = [{
        name: "name",
        type: "rawlist",
        message: "What item would you like to purchase?",
        choices: []
    },
    {
        name: "amount",
        type: "input",
        mesage: "How many would you like to purchase?",
        validate: function (val) {
            return !isNaN(val)
        }
    }
]

const QM_choices = ["View Products for sale", "View low inventory", "Add item to inventory", "Add new product to inventory"];
exports.QM_choices = QM_choices;
exports.QM_options = {
    name: "task",
    type: "rawlist",
    message: "What would you like to do?",
    choices: QM_choices
}