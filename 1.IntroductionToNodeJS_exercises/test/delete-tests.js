/**
 * Created by boris on 6/3/2017.
 */
// storageObj={}
function deleteProperties (obj) {
    for(let i in obj){
        delete obj[i]
    }
}
const storageObj = require('../storage').storageObj;
const deleteFunc = require('../storage').delete;
const expect = require('chai').expect;
describe('Testing delete()',()=>{
    after(()=>{
        deleteProperties(storageObj)
    })
    describe('Valid inputs',()=>{
        it('should delete value if key exists',()=>{
            storageObj.ivan='pesho'
            deleteFunc('ivan')
            expect(storageObj.ivan).to.be.undefined
        })
    })
    describe('Invalid inputs',()=>{
        it('should throw an Error if key is not a string',()=>{
            expect(()=>{deleteFunc(4)}).to.throw
        })
        it('should throw an Error if key doesn\'t exist',()=>{
            expect(()=>{deleteFunc('kolio')}).to.throw
        })
    })
})