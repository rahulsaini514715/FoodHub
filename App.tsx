// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { NavigationContainer } from '@react-navigation/native';
// import { navigationRef, setIsNavigationReady } from './src/navigation/Navigation';
// import RootNavigator from './src/navigation/navigators/RootNavigator';
// import './global.css'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// function App() {

//   const queryClient = new QueryClient({
//     defaultOptions: {
//       queries: {
//         retry: 1,
//         staleTime: 5 * 60 * 1000
//       }
//     }
//   })

//   return (
//     <SafeAreaProvider>
//       <QueryClientProvider client={queryClient}>
//         <NavigationContainer ref={navigationRef} onReady={setIsNavigationReady}>
//           <RootNavigator />
//         </NavigationContainer>
//       </QueryClientProvider>
//     </SafeAreaProvider>
//   );
// }

// export default App;



import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef, setIsNavigationReady } from './src/navigation/Navigation';
import RootNavigator from './src/navigation/navigators/RootNavigator';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './global.css';

/* ✅ Create once, outside component */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer
          ref={navigationRef}
          onReady={setIsNavigationReady}
        >
          <RootNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

export default App;



