// import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Index from '../pages/index.vue'

describe('Index', () => {
  let cmp, vm

  beforeEach(() => {
    cmp = Vue.extend(Index)

    vm = new cmp({
      data: {
        sessions: ['Test Session'],
      },
    }).$mount()
  })

  it('equals sessions to ["Test Sessions"]', () => {
    expect(vm.sessions).toEqual(['Test Session'])
  })

  it('has the expected html structure', () => {
    expect(vm.$el).toMatchSnapshot()
  })
})
