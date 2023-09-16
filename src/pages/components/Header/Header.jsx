
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendar, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import { useState } from 'react';

const Header = () => {
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);
  return (
    <div className='header'>
        <div className="headerContainer">
      <div className="headerList">
        <div className="headerListItem active">
        <FontAwesomeIcon icon={faBed} />
        <span> Stays</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faPlane} />
        <span> Flights</span>
        </div><div className="headerListItem">
        <FontAwesomeIcon icon={faCar} />
        <span> Car rentals</span>
        </div><div className="headerListItem">
        <FontAwesomeIcon icon={faBed} />
        <span> Attractions</span>
        </div>  
        <div className="headerListItem">
        <FontAwesomeIcon icon={faTaxi} />
        <span> Airport Taxis</span>
        </div>
</div>
        <h1 className='headerTitle'>A lifetime of discounts? Crazy</h1>
        <p className="headerDesc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil illo aliquid repudiandae autem error consequuntur distinctio quisquam! Nam ab perspiciatis quas velit repellat nisi, consectetur rerum molestiae eum eaque provident.
        </p>
        <button className="headerBtn">Sign in /  Register</button>
        <div className="headerSearch">
            <div className="headerSearchItem">
        <FontAwesomeIcon icon={faBed} className='headerIcon' />
        <input type="text" 
        placeholder='Where are you going?'
        className='headerSearchInput' />
        </div>

        <div className="headerSearchItem">
        <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
        <span className='headerSearchText'> from till when</span>
        </div> <div className="headerSearchItem">
        <FontAwesomeIcon icon={faPerson} className='headerIcon' />
        <span className='headerSearchText'> 0 adults 0 children 1 room</span>
        </div>
        <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
        </div>
        </div>
      </div>

    </div>
    
  )
}

export default Header
