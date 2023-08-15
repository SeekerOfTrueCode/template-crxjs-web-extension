import type { Meta, StoryObj } from '@storybook/vue3'
// import { within, userEvent } from '@storybook/testing-library'

import HelloDiv from './index.vue'

const meta = {
  /* 👇 The title prop is optional.
             * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
             * to learn how to generate automatic titles
             */
  title: 'components/hello-div',
  component: HelloDiv,
  render: (args: unknown) => ({
    components: { HelloDiv },
    setup() {
      return { args }
    },
    template: '<hello-div :msg="args.msg" />'
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    // size: { control: 'select', options: ['small', 'medium', 'large'] },
    // backgroundColor: { control: 'color' },
    // onClick: { action: 'clicked' }
  },
  args: { msg: 'test' } // default value
} satisfies Meta<typeof HelloDiv>

export default meta
type Story = StoryObj<typeof meta>;

export const DisplayMessage: Story = {
  args: {
    msg: 'Display test'
  }
  //   play: async ({ canvasElement }: any) => {
  //     const canvas = within(canvasElement)
  //     const loginButton = await canvas.getByText('button', { name: /Display test/i })
  //     await userEvent.click(loginButton)
  //   }
}

