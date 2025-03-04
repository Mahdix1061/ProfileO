import './App.css';
import MainLayout from "./Layouts/MainLayout";
import AppBar from "./Component/AppBar/AppBar";
import MainContent from "./Component/MainContent/MainContent";

function App() {
  return (
    <MainLayout>
      <AppBar/>
        <MainContent/>
    </MainLayout>
  );
}

export default App;
