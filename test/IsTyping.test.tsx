import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import IsTyping from '../src/Components/IsTyping'

configure({ adapter: new Adapter() })

describe('<IsTyipng/>', () => {
    it('should render 4 span without children', () => {
        const wrapper = shallow(<IsTyping/>)
        expect(wrapper.find('span')).toHaveLength(4)
    })
    it('should render 5 span with children ', () => {
        const wrapper= shallow(<IsTyping>Hello</IsTyping>)
        expect(wrapper.find('span')).toHaveLength(5)
    })
})
