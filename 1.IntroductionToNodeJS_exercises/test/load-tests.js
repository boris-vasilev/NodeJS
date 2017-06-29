/**
 * Created by boris on 6/3/2017.
 */
const storageObj = require('../storage').storageObj;
const load = require('../storage').load;
// const save = require('../storage').save;
const expect = require('chai').expect;
const fs = require('fs')
describe('Testing load()',()=>{
    it('should return correct file output',()=>{
        storageObj.ivan='pesho'
        storageObj.stefan='pesho'
        storageObj.gosho='pesho'
        fs.writeFileSync('./data/storage.dat',JSON.stringify(storageObj))
        expect(load()).to.be.equal(JSON.stringify(storageObj))

    })
})