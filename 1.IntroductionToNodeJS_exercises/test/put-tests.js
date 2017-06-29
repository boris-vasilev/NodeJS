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
const putFunc = require('../storage').put;
const expect = require('chai').expect;
describe('Testing put()',()=>{
    after(()=>{
        deleteProperties(storageObj)
    })
    describe('Valid input',()=>{
        afterEach(function () {
            deleteProperties(storageObj)
        })
        it('should add ivan->"pesho" to storage',()=>{
            putFunc('ivan','pesho')
            expect(storageObj['ivan']).to.be.equal('pesho')
        })
        it('should add ivan->undefined to storage',()=>{
            putFunc('ivan')
            expect(storageObj.ivan).to.be.undefined
        })
        it('should add ivan->4 to storage',()=>{
            putFunc('ivan',4)
            expect(storageObj.ivan).to.be.equal(4)
        })
    })
    describe('Invalid input',()=>{
        afterEach(()=>{
            deleteProperties(storageObj)
        })
        it('should throw an Error if key is not a string',()=>{
            expect(()=>{putFunc(5,'ivan')}).to.throw(Error)
        })
        it('should throw an Error if key already exists',()=>{
            storageObj.ivan = 'dragan'
            expect(()=>{putFunc('ivan','pesho')}).to.throw(Error)
        })
    })
})