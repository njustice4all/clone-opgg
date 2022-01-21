import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { configureStore } from './store';
import HomeTemplate from 'components/templates/Home';
import SummonerTemplate from 'components/templates/Summoner';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeTemplate />} />
          <Route path="/summoner/:userName" element={<SummonerTemplate />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
