import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import ProductDashboard from "./components/ProductDashboard";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ProductDashboard />
    </QueryClientProvider>
  );
}

export default App;
