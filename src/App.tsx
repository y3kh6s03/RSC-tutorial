import { main } from './App.style';
import Button from './common/button/button';
import Content, { SportLeague } from './common/content/content';
import { useState } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './utils/query-client.ts';

function App() {
  const [sportsLeagues, setSportsLeagues] = useState<SportLeague[]>([]);
  return (
    <div css={main}>
      <QueryClientProvider client={queryClient}>
        <Button
          sportsLeagues={sportsLeagues}
          setSportsLeagues={setSportsLeagues}
        />
        <Content sportsLeagues={sportsLeagues} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
