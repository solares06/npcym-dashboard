import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import DummyPage from './pages/DummyPage';

function AppLayout() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="p-8">
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path=":pageName" element={<DummyPage />} />
      </Route>
    </Routes>
  );
}

export default App;