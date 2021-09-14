import logo from './logo.svg';
import './App.css';
import Style from './App.module.scss';
import LandingPage from './container/landingPage';

function App() {
  return (
   
      <div className={Style.app}>
     
     <LandingPage/>

      
     <div className={Style.bottomContainer}>
             <p>جميع الحقوق محفوظة</p>
        </div>
    </div>
   
  );
}

export default App;
