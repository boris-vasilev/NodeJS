/**
 * Created by boris on 6/3/2017.
 */
const storageObj = require('../storage').storageObj;
const save = require('../storage').save;
const expect = require('chai').expect;
const fs = require('fs')
describe('Testing save()',()=>{
    it('should save the object to disk',()=>{
        storageObj.ivan='pesho'
        storageObj.stefan='pesho'
        storageObj.gosho='pesho'
        save()
        // console.log(fs.readFileSync('./data/storage.dat','utf8'))
        // console.log(JSON.stringify(storageObj))
        expect(fs.readFileSync('./data/storage.dat','utf8')).to.be.equal(JSON.stringify(storageObj))
    })
})