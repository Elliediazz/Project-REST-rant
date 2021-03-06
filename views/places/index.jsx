const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div className='col-sm-6'>
          <h2>
            <a href={`/places/${place._id}`}>
              {place.name}
            </a>
          </h2>
          <p className='text-center'>
            {place.cuisines}
          </p>
          <img src={place.image} alt={place.name}></img>
          <p className='text'>
            Located in {place.city}, {place.state}
          </p>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>PLACES TO RANT ABOUT</h1>
              <div className='row'>
                {placesFormatted}
              </div>
          </main>
      </Def>
  )
  }

  
module.exports = index

  