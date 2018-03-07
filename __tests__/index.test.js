import React from "react"
import Mobile from "is-mobile"
import Enzyme, { render, shallow,mount } from 'enzyme'
import { expect } from 'chai'

import ComponentName from "../src"

describe('<ComponentName/>', () => {
    it('render a <ComponentName/> components', () => {
        const wrapper = mount(<ComponentName />)
        expect(wrapper.find(".title")).to.have.length(1)
    })
})