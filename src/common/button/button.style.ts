import { css } from '@emotion/react';

export const button = css({
  width: '20rem',
  height: '4rem',
  backgroundColor: 'slategray',
  color: '#fff',
  border: 'none',
  borderRadius: '50px',

  '&:hover': {
    backgroundColor: 'lightslategray',
  },
});
