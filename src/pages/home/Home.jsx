import './home.css'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Featured from '../components/featured/Featured'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured />
        <Featured/>
      </div>
      
    </div>
  );
};

export default Home
