import './featured.css'
const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItems">
        <img 
        src="https://cf.bstatic.com/xdata/images/city/square250/619763.webp?k=3bfc62a779df5b92694287e9fc0b82d795f93700ddf8887d66f3191ee745dcc5&o="
        alt="" 
        className="featuredImg" />
        <div className="featuredTitles">
          <h1>Tokyo</h1>
          <h2>1124 hotels</h2>
        </div>
        
      </div>
      <div className="featuredItems">
        <img 
        src="https://cf.bstatic.com/xdata/images/city/square250/971332.webp?k=557e806783551455aa9f68b4180bef64ba3dac7cd2c0c4f268c1bfdbdbc01f83&o="
        alt="" 
        className="featuredImg" />
        <div className="featuredTitles">
          <h1>Kyoto</h1>
          <h2>612 hotels</h2>
        </div>
        
      </div>
      <div className="featuredItems">
        <img 
        src="https://cf.bstatic.com/xdata/images/city/square250/619709.webp?k=31126b21ebbe0b19bc7721867fc25e874124ba3a4b95d173b0661dae601b5018&o="
        alt="" 
        className="featuredImg" />
        <div className="featuredTitles">
          <h1>Osaka</h1>
          <h2>725 hotels</h2>
        </div>
        
      </div>
      <div className="featuredItems">
        <img 
        src="https://cf.bstatic.com/xdata/images/region/square250/50347.webp?k=699700f8d6b226da3240ec5d7ee8e42b04116c30ba582c8db2429f9e67186f0c&o="
        alt="" 
        className="featuredImg" />
        <div className="featuredTitles">
          <h1>Okinawa</h1>
          <h2>93 properties</h2>
        </div>
        
      </div>
    </div>
  )
}

export default Featured
