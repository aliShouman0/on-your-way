import "react-native-gesture-handler";
import StackNavigator from "./app/navigation/StackNavigator/StackNavigator";
import { QueryClient, QueryClientProvider } from "react-query";
import { RootSiblingParent } from "react-native-root-siblings";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <RootSiblingParent>
      <QueryClientProvider client={queryClient}>
        <StackNavigator />
      </QueryClientProvider>
    </RootSiblingParent>
  );
}
