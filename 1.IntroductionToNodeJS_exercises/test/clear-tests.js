// /**
//  * Created by boris on 6/3/2017.
//  */
// // storageObj={}
// function deleteProperties (obj) {
//     for(let i in obj){
//         delete obj[i]
//     }
// }
// const storageObj = require('../storage').storageObj;
// const clear = require('../storage').clear;
// const expect = require('chai').expect;
// describe('Testing get()',()=>{
//     after(()=>{
//         deleteProperties(storageObj)
//     })
//         it('should clear the object',()=> {
//             storageObj.ivan = 'pesho'
//             storageObj.kolio = 'pesho'
//             clear()
//             expect(storageObj).to.be.equal({})
//         })
// })