import AppHeader from '@/components/AppHeader.vue'
import { mount } from '@vue/test-utils'

//created test suite you shouldn't have describe block if you work with only one test
describe('AppHeader', () => {
  // set up test 1
  test('If user is not logged in, do not show logout button', () => {
    // mount component using vue test utils
    const wrapper = mount(AppHeader)
    // define our first assertion
    expect(wrapper.find('button').isVisible()).toBe(false)
  })
  // set up test 2
  test('If user is not logged in, show logout button', async () => {
    // mount component using vue test utils
    const wrapper = mount(AppHeader)
    //set the data for the second condition
    await wrapper.setData({ loggedIn: true })
    // define our second assertion
    expect(wrapper.find('button').isVisible()).toBe(true)
  })
})