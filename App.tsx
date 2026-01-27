import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef, setIsNavigationReady } from './src/navigation/Navigation';
import RootNavigator from './src/navigation/navigators/RootNavigator';
import './global.css'
function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef} onReady={setIsNavigationReady}>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
