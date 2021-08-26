const { expect } = require('chai');
const {getDataFromUrl} = require('../support/serviceHelper');
const validator = require('jsonschema');

describe('testing jsonplaceholder.com website', async()=>{

    
    it('verify an http status code', async ()=>{
        const getedData = await getDataFromUrl();
        const responceStatusCode = getedData.status
        expect(responceStatusCode).to.equal(200);
    });

    it('verify an http response header', async ()=>{
        const getedData = await getDataFromUrl();
        expect(getedData.headers['content-type']).to.exist;
        expect(getedData.headers['content-type']).to.be.equal('application/json; charset=utf-8');
    });

    it('verify an http response body', async ()=> {
        const getedData = await getDataFromUrl();
        expect(getedData.data.length).to.be.equal(10)
    })



})