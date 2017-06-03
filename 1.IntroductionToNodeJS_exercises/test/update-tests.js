/**
 * Created by boris on 6/3/2017.
 */
// let storageObj={}
function deleteProperties (obj) {
    for(let i in obj){
        delete obj[i]
    }
}
const storageObj = require('../storage').storageObj;
const update = require('../storage').update;
const expect = require('chai').expect;
describe('Testing update()',()=>{
    after(()=>{
        deleteProperties(storageObj)
    })
    describe('Valid inputs',()=>{
        it('should update value if key exists',()=>{
            storageObj.ivan='pesho'
            update('ivan','asd')
            expect(storageObj.ivan).to.be.equal('asd')
        })
    })
    describe('Invalid inputs',()=>{
        it('should throw an Error if key is not a string',()=>{
            expect(()=>{update(4)}).to.throw
        })
        it('should throw an Error if key doesn\'t exist',()=>{
            expect(()=>{update('kolio')}).to.throw
        })
    })
})