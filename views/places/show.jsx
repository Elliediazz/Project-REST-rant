const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className='inactive'>
    No Comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
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
                <h1>{data.place.name}</h1>
                <img src={data.place.pic} alt={data.place.name}></img>
                <h3>
                  Locted in {data.place.city}, {data.place.state}
                </h3>
              </div>
              <div className='col-sm-5'>
                <h3> Ratings:</h3>
                <div>
                  <h4>Not Rated</h4>
                </div>
                <h3>
                  Description
                </h3>
                <h4>
                  {data.place.showEstablished()}
                </h4>
                <h5>
                  Serving {data.place.cuisines}
                </h5>
                <a href={`/places/${data.place._id}/edit`} className="btn btn-warning"> 
                  Edit
                </a>  
                <form method="POST" action={`/places/${data.place._id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </form> 
              </div>
              <div>
                <h2>Comments:</h2>
                <div className='row'>
                  {comments}
                </div>
                <form className='form-inline' method="POST" action={`/places/${data.place._id}/comment`}>
                    <div className="form-group">
                        <lable>Content</lable>
                        <textarea 
                            className="form-control" 
                            type= 'string' 
                            name='content'
                            rows='5'/>
                    </div>
                  <div className='row'>
                    <div className="form-group col-sm-6">
                        <lable htmlFor="name">Your Name</lable>
                        <input 
                            className="form-control" 
                            type='string'
                            name='author'
                            required/>
                    </div>
                    <div className="form-group col-sm-3">
                        <lable htmlFor="rating"> Star Rating </lable>
                        <input 
                            type='range'
                            name="stars" 
                            required/>
                    </div>
                    <div class="checkbox col-sm-3">
                        <label> Rant </label>
                          <input  
                            name="rant"
                            type="checkbox"/> 
                    </div>
                        <input 
                            className="btn btn-primary" 
                            type="submit" 
                            value="Add comment" />
                  </div>
                </form>  
              </div>
            </div>
          </main>
        </Def>
    )
}

module.exports = show