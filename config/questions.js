exports.start_Q = [
    {
        name: "id",
        type: "input",
        message: "What item ID would you like to purchase?",
        validate: function(val){
            return !isNaN(val)
        }
    },
    {
        name: "amount",
        type: "input",
        mesage: "How many would you like to purchase?",
        validate: function(val){
            return !isNaN(val)
        }
    }
]

exports.more_Q = [
]

