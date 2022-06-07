const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className='inactive'>
    No Comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not Yet Rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = sumRatings / data.place.comments.length
    rating = (
      <h3>
        {Math.round(averageRating)} stars
      </h3>
    )
  }
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className=" border col-sm-4">
          <h2 className="rant">{c.rant ? 'Rant!': 'Rave!'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
  return (
      <Def>
        <main>
          <div className='row'>
            <div className='col-sm-6'>
              <img src={data.place.image} alt={data.place.name}></img>
              <h3>Locted in {data.place.city}, {data.place.state}</h3>
            </div>
            <div className='col-sm-5'>
              <h1>{data.place.name}</h1>
              <h2> Ratings:</h2>
              <div className='text-muted'>
                <h4>{rating}</h4>
              </div>
              <h2>Description</h2>
              <h4>{data.place.showEstablished()}</h4>
              <h5>Serving {data.place.cuisines}</h5>
              <div className='col'> 
                <a href={`/places/${data.place._id}/edit`} className="btn btn-warning col-sm-3"> Edit </a>  
                <form method="POST" action={`/places/${data.place._id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger col-sm-3">Delete</button>
                </form> 
              </div>
            </div>
            <div>
              <h2>Comments:</h2>
              <div className='row'>{comments}</div>
              <form className='form-inline' method="POST" action={`/places/${data.place._id}/comment`}>
                <div className="form-group">
                  <lable>Got Your Own Rant or Rave?</lable>
                  <textarea className="form-control" type= 'string' name='content' rows='5'/>
                </div>
                <div className='row'>
                  <div className="form-group col-sm-6">
                    <lable htmlFor="name">Your Name</lable>
                    <input className="form-control" type='string' name='author' required/>
                  </div>
                  <div className="form-group col-sm-3">
                    <lable htmlFor="rating"> Star Rating </lable>
                    <input type='range' name="stars" required/>
                  </div>
                  <div className="checkbox col-sm-3">
                    <label> Rant </label>
                    <input name="rant" type="checkbox" className='form'/> 
                  </div>
                    <input className="btn btn-primary" type="submit" value="Add comment" />
                  </div>
                </form>  
              </div>
            </div>
          </main>
        </Def>
    )
}

module.exports = show