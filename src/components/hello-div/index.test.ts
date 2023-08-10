import { mount } from '@vue/test-utils'
import HelloDiv from './index.vue'
// import { it, expect } from 'vitest'


it('Testing HelloDiv component props', async () => {
  const wrapper = mount(HelloDiv, { props: { msg: 'Hello' } })
  expect(wrapper.find('div').text()).toContain('Hello')
})