import Styles from "../src/styles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#4c5b84'
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <>
      <Styles />
      <Story />
    </>
  )
];