import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Featured from '../../components/featured/Featured';
import './home.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured/>
      </div>
      
    </div>
  );
};

export default Home
