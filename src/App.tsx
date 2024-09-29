import { QueryClientProvider } from '@tanstack/react-query';
import { app } from './App.style';
import Button from './common/button/button';
import { queryClient } from './utils/query-client';

function App() {
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
