import { mount } from '@vue/test-utils'
import TheSessionList from '../components/TheSessionList.vue'

describe('Index', () => {
  let cmp

  beforeEach(() => {
    cmp = mount(TheSessionList, {
      // props is overridden using `propsData`
      propsData: {
        sessions: ['Test Sessions'],
      },
    })
  })

  it('has received ["Test Sessions"] as the sessions property', () => {
    expect(cmp.vm.sessions).toEqual(['Test Sessions'])
  })

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
