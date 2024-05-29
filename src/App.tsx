import '@mantine/core/styles.css';

import { AppProvider } from '@/providers/AppProvider';
import { Home } from '@/routes/Home';

import './App.css';

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
