const connection = require('./config/connection');
const inquirer = require('inquirer');
const {
    QM_options,
    QM_choices
} = require('./config/questions')


async function Start(){
    let { task } = await inquirer.prompt(QM_options);
    switch(task){
        case QM_choices[0]:
            return ViewProducts();
        case QM_choices[1]:
            return ViewLowInventory();
        case QM_choices[2]:
            return AddInventory();
        case QM_choices[3]:
            return AddNewProduct();
    }
}