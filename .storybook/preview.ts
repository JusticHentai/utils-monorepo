import { Preview } from '@storybook/react-vite'

/** @type { import('@storybook/react-vite').Preview } */
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
