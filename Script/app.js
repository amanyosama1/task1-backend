const fs=require("fs")
const data=require("./data")
const yargs = require("yargs")

yargs.command({
    command:"update",
    describe:"update data found",
    builder:{
        id:{
            describe:"id of the updated data",
            demandOption:true,
            type:"string"
        },
        fname:{
            describe:"first name of the updated data",
            demandOption:true,
            type:"string"
        },
        lname:{
            describe:"last name of the updated data",
            demandOption:true,
            type:"string"
        }
    },
    handler:(x)=>{
        data.updateData(x.id,x.fname,x.lname,x.age,x.city)
    }
})

yargs.command({
    command:"add",
    describe:"add new item",
    builder:{
        id:{
            describe:"id of the added data",
            demandOption:true,
            type:"string"
        },
        fname:{
            describe:"first name of the added data",
            demandOption:false,
            type:"string"
        },
        lname:{
            describe:"last name of the added data",
            demandOption:false,
            type:"string"
        },
        age:{
            describe:"age of the added data",
            demandOption:false,
            type:"string"
        },
        city:{
            describe:"city of the added data",
            demandOption:false,
            type:"string"
        }
    },
    handler:(x)=>{
        data.addData(x.id,x.fname,x.lname,x.age,x.city)
    }
})
yargs.parse()