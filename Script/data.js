const fs=require("fs")
const addData=(id,fname,lname,age,city)=>{
    const allData=loadData()
    allData.push({
        id:id,
        fname:fname,
        lname:lname,
        age:age,
        city:city
    })
    saveAllData(allData)
}
loadData=()=>{
    try{
        const dataJSON=fs.readFileSync("data.json").toString()
        return JSON.parse(dataJSON)
    }catch{
        return []
    }
}
saveAllData=(allData)=>{
    const dataJSON=JSON.stringify(allData)
    fs.writeFileSync("data.json",dataJSON)
}


const updateData=(id,fname,lname,age,city)=>{
    const allData=loadData()
    allData.forEach((obj)=>{
        if(obj.id === id){
            return (obj.fname=fname,obj.lname=lname,obj.age=age,obj.city=city)
        } 
    })
    saveAllData(allData)
}

module.exports={
    addData,
    updateData
}