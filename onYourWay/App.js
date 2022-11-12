import "react-native-gesture-handler";
import StackNavigator from "./app/navigation/StackNavigator/StackNavigator";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StackNavigator />
    </QueryClientProvider>
  );
}
