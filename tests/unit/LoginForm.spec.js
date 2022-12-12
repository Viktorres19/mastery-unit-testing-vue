import LoginForm from '@/components/LoginForm.vue'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
  it('emits an event with a user data payload', () => {
    const wrapper = mount(LoginForm)
    const input = wrapper.find('input[type="text"]') // 1. Find text input
    input.setValue('Viktor Lukyanchenkov') // 2. Set value for text input
    wrapper.trigger('submit') // 3. Simulate form submission
    const formSubmittedCalls = wrapper.emitted('formSubmitted') // 4. Assert event has been emitted
    expect(formSubmittedCalls).toHaveLength(1)
    const expectedPayload = { name: 'Viktor Lukyanchenkov' }// 5. Assert payload is correct
    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(expectedPayload)
  })
})