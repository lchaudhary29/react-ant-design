import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { EmployeeCreator, EmployeeEditor, EmployeeList, Layout } from './components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<EmployeeList />} />
          <Route path="add" element={<EmployeeCreator />} />
          <Route path="update/:id" element={<EmployeeEditor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
