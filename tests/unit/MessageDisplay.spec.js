import MessageDisplay from '@/components/MessageDisplay'
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/axios'
import flushPromises from 'flush-promises'

jest.mock('@/services/axios')

beforeEach(() => {
  jest.clearAllMocks()
})

describe('MessageDisplay', () => {
  it('Calls getMessage and displays message', async () => {
    const mockMessage = 'Hello from the db!'
    getMessage.mockResolvedValueOnce({ text: mockMessage }) // mock the API call
    const wrapper = mount(MessageDisplay)
    await flushPromises() // wait for promise to resolve
    expect(getMessage).toHaveBeenCalledTimes(1) // check that call happened once
    const message = wrapper.find('[data-testid="message"]').text() // check that component displays message
    expect(message).toEqual(mockMessage)
  })

  it('Displays an error when getMessage call fails', async () => {
    const mockError = 'Oops! Something went wrong.'
    getMessage.mockRejectedValueOnce(mockError) // mock the failed API call
    const wrapper = mount(MessageDisplay)

    await flushPromises() // wait for promise to resolve
    expect(getMessage).toHaveBeenCalledTimes(1)// check that call happened once
    const displayedError = wrapper.find('[data-testid="message-error"]').text()
    expect(displayedError).toEqual(mockError)// check that component displays error
  })
})