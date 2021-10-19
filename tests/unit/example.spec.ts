import { shallowMount } from '@vue/test-utils'
import Homepang from '@/components/Home.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Homepang, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
