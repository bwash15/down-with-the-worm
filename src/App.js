import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import Main from './components/Main';
const queryClient = new QueryClient();
function App() {

  return (
    <QueryClientProvider client={ queryClient }>
      <Main />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
