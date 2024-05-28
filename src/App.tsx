import * as Feat from '@/features';
import { AppProvider } from '@/providers/AppProvider';

import './App.css';

function App() {
  return (
    <AppProvider>
      <Feat.Home />
    </AppProvider>
  );
}

export default App;
