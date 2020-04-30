/* Dependencies */
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

/* Components */
import Task from '../../src/components/task'

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() })

describe('task', () => {
  it('should render a row with the task information', () => {
    const wrapper = shallow(<Task id="25" title="Title of the task" description="body of the task"></Task>)
    const task = wrapper.find('th')
    expect(task).toHaveLength(1)
    expect(task.text()).toEqual('25')
  })
})
