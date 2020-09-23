import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Button from '../src/Components/Button'

configure({ adapter: new Adapter() })

describe('<Button/>', () => {
    it('should rende a button with "button" className ', () => {
        const wrapper = shallow(<Button/>)
        expect(wrapper.equals(<button className="button"/>)).toEqual(true)
    })
})