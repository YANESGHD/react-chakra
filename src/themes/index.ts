import { extendTheme, theme as base } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: `Open Sans, ${base.fonts?.heading}`,
    body: `Open Sans, ${base.fonts?.body}`,
  },
  components: {
    Button: {
      variants: {
        primary: {
          maxHeight: '32px',
          maxWidth: '130px',
          color: 'white',
          bg: { base: '#020202', xl: '#0051FF' },
          borderRadius: '6px',
        },
        badge: {
          h: '24px',
          w: '121px',
          color: 'white',
          bg: '#7B5BE4',
          border: '6px',
          fontSize: '14px',
          fontWeight: 'semibold',
          justifyItems: 'center',
          position: 'absolute',
          right: ['20%', '25%', '38%'],
          cursor: 'default',
        },
      },
    },
  },
});
