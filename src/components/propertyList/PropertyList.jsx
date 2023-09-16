import './propertyList.css'

const PropertyList = () => {
  return (
    <div className="pList">
       <div className="pListItem">
        <img src="src\images\hotels.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Hotels</h1>
            <h2>225 available</h2>
        </div>
        </div> 

        <div className="pListItem">
        <img src="src\images\apartment.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Apartments</h1>
            <h2>99 available</h2>
        </div>
        </div> 

        <div className="pListItem">
        <img src="src\images\resort.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Resorts</h1>
            <h2>82 available</h2>
        </div>
        </div> 

        <div className="pListItem">
        <img src="src\images\villa.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Villas</h1>
            <h2>50 available</h2>
        </div>
        </div> 

        <div className="pListItem">
        <img src="src\images\cabin.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Cabins</h1>
            <h2>10 available</h2>
        </div>
        </div> 


    </div>
  )
}

export default PropertyList
