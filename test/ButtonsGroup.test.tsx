import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ButtonsGroup from '../src/Components/ButtonsGroup'
import Button from '../src/Components/Button'

configure({ adapter: new Adapter() })

describe('<ButtonsGroup>', () => {
    it("should render five <Button/> elements", () => {
        const wrapper = shallow(<ButtonsGroup/>)
        expect(wrapper.find(Button)).toHaveLength(5)
    })
})

