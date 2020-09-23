import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Input from '../src/Components/Input'

configure({ adapter: new Adapter() })

describe('<Input/>', () => {
    it("should render an input with 'input' className", () => {
        const wrapper = shallow(<Input/>)
        expect(wrapper.equals(<input className="input"/>))
    })
})
