import * as React from 'react'
import { mount } from 'enzyme'
import About from '../../src/components/about'
const chai = require('chai')
const expect = chai.expect

describe('About component', () => {
  it('should render without throwing an error', function () {
    const wrap = mount(<About />)
    expect(wrap.find('p').text()).to.equal('About me')
  })
})
