import { extendTheme, theme as base } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: `Open Sans, ${base.fonts?.heading}`,
    body: `Open Sans, ${base.fonts?.body}`
  },
  components: {
    Button: {
      variants: {
        primary: {
          color: 'white',
          bg: { sm:'#020202', xl:'#0051FF'},
          borderRadius: '6px',
          h: '32px',
          w:'130px'
        },
        secondary: {
          h: '24px',
          w: '121px',
          color: 'white',
          bg: '#7B5BE4',
          border: '6px',
          fontSize: '14px',
          fontWeight: 'semibold',
          justifyItems: 'center',
          position: 'absolute',
          right: '38%',
          cursor: 'default'
        }
      }
    }
  },
});
