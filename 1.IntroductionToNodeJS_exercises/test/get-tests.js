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
const get = require('../storage').get;
const expect = require('chai').expect;
describe('Testing get()',()=>{
    after(()=>{
        deleteProperties(storageObj)
    })
    describe('Valid inputs',()=>{
        it('should return value if key exists',()=>{
            storageObj.ivan='pesho'
            expect(get('ivan')).to.be.equal('pesho')
        })
    })
    describe('Invalid inputs',()=>{
        it('should throw an Error if key is not a string',()=>{
            expect(()=>{get(4)}).to.throw
        })
        it('should throw an Error if key doesn\'t exist',()=>{
            expect(()=>{get('kolio')}).to.throw
        })
    })
})