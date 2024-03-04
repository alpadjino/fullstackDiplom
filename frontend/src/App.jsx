
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom"

import { Main } from "./pages/MainPage";
import { Friends } from "./pages/FriendsPage/FriendsPage";
import { News } from "./pages/NewsPage/NewsPage";
import { NotFoundPage } from './pages/NotFoundPage';
import { Settings } from "./pages/SettingsPage";
import { Sidebar } from './components/Sidebar/Sidebar';
import { Navbar } from './components/Navbar/Navbar';
import { Messenger } from './pages/MessengerPage/MessengerPage';
import { ChakraProvider } from '@chakra-ui/react';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';


function App() {
  return (
    <ChakraProvider>
      <Sidebar />
      <Navbar />

      <Routes>
        <Route exact path="/" element={<RegisterPage />} />

        <Route path="/main" element={<Main />} />

        <Route path="/friends" element={<Friends />} />

        <Route path="/news" element={<News />} />

        <Route path="/messenger" element={<Messenger />} />

        <Route path="/settings" element={<Settings />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
