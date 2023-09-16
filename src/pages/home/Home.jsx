import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Featured from '../../components/featured/Featured';
import MailList from '../../components/mailList/MailList';
import PropertyList from '../../components/propertyList/PropertyList';
import './home.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle"> </h1>
      Browse by Property Type
      <PropertyList/>
       <MailList/>
      </div>
    </div>
  );
};

export default Home
