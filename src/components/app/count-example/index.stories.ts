import type { Meta, StoryObj } from '@storybook/vue3'
import CountExample from './index.vue'

const meta = {
  title: 'app-components/count-example',
  component: CountExample,
  render: (args: unknown) => ({
    components: { CountExample },
    setup() {
      return { args }
    },
    template: '<suspense><count-example /></suspense>'
  }),
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof CountExample>

export default meta
type Story = StoryObj<typeof meta>;

export const Display: Story = {
  args: {}
  //   play: async ({ canvasElement }: any) => {
  //     const canvas = within(canvasElement)
  //     const loginButton = await canvas.getByText('button', { name: /Display test/i })
  //     await userEvent.click(loginButton)
  //   }
}

