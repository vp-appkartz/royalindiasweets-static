import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Mithai from './pages/Mithai';
import Menu from './pages/Menu';
import Banquet from './pages/Banquet';
import Contact from './pages/Contact';
import Order from './pages/Order';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mithai" element={<Mithai />} />
          <Route path="menu" element={<Menu />} />
          <Route path="banquet" element={<Banquet />} />
          <Route path="contact" element={<Contact />} />
          <Route path="order" element={<Order />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
