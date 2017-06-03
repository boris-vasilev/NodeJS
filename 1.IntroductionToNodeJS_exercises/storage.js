/**
 * Created by boris on 6/3/2017.
 */
const fs = require('fs')
let storageObj={}
function put(key,value){
    if(typeof key !=='string'){
        throw new Error('Wrong key input')
    }
    if(storageObj.hasOwnProperty(key)){
        throw new Error('Key already exists')
    }
    storageObj[key]=value
}
function get(key){
    if(typeof key !=='string'){
        throw new Error('Wrong key input')
    }
    if(!storageObj.hasOwnProperty(key)){
        throw new Error('Key doesn\'t exist')
    }
    return storageObj[key]
}
function update(key,value){
    if(typeof key !=='string'){
        throw new Error('Wrong key input')
    }
    if(!storageObj.hasOwnProperty(key)){
        throw new Error('Key doesn\'t exist')
    }
    storageObj[key]=value
}
function deleteKey(key){
    if(typeof key !=='string'){
        throw new Error('Wrong key input')
    }
    if(!storageObj.hasOwnProperty(key)){
        throw new Error('Key doesn\'t exist')
    }
    //delete is very slow so let's use another method
    storageObj[key]=undefined;
    //now it is undefined but can be seen with for...in so we make iterable false
    Object.defineProperty(storageObj,key,{iterable:false})
}
function clear(){
    storageObj={}
}
function save(){
    fs.writeFile('./data/storage.dat',JSON.stringify(storageObj),(err)=>{
        if(err){
            console.log(err)
        }
    })
}
function load(){
    return fs.readFileSync('./data/storage.dat','utf8')
}
// storageObj.prototype.put =put
// storageObj.prototype.get =get
// storageObj.prototype.update =update
// storageObj.prototype.delete =deleteKey
// storageObj.prototype.clear =clear
// storageObj.prototype.save =save
// storageObj.prototype.load =load
// module.exports=storageObj
module.exports={
    storageObj,
    put,
    get,
    update,
    delete:deleteKey,
    clear,
    save,
    load
}