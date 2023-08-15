import '@testing-library/jest-dom'
// Storybook's preview file location
import * as globalStorybookConfig from '../.storybook/preview'
import { setProjectAnnotations } from '@storybook/testing-vue3'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
setProjectAnnotations(globalStorybookConfig as any)