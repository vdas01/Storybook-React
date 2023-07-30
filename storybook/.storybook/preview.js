/** @type { import('@storybook/react').Preview } */
// import {ThemeProvider,theme,CSSReset,Box} from "@chakra-ui/core";
// import { Story } from "@storybook/blocks";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    // options:{
    //       storySort : (a,b) => 
    //       a[1].kind === b[1].kind ? 0 : a[1].id.localCompare(b[1].id,undefined,{})
    // },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

// export const decorators = [
//   (story) => 
//   <ThemeProvider theme={theme}>
//       <CSSReset/>
//       <Box m='4'>
//         <Story/>
//       </Box>
//   </ThemeProvider> 
// ]

export default preview;
