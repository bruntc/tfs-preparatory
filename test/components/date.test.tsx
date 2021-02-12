import * as React from 'react'
import { mount } from 'enzyme'
import Date from '../../src/components/date'
const chai = require('chai')
const expect = chai.expect

describe('Date component', () => {
  it('should render without throwing an error', function () {
    const wrap = mount(<Date dateString="2011-10-05T14:48:00.000Z" />)
    expect(wrap.find('time').text()).to.equal('October 5, 2011')
  })
})
