import sinonChai from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';
import chai from 'chai';
import React from 'react'

const expect = chai.expect;
chai.use(sinonChai);
chai.use(chaiEnzyme());

export {
    expect
};
