const React = require('react')
const Def = require('../default')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${data.place._id}?_method=PUT`}>
                <div className="row">
                    <div className="form-group col-sm-6">
                        <lable htmlFor="name">Place Name</lable>
                        <input 
                            className="form-control" 
                            id="name" 
                            name="name" 
                            value= {data.place.name} 
                            required/>
                    </div>
                    <div className="form-group col-sm-6">
                        <lable htmlFor="image">Picture</lable>
                        <input 
                            className="form-control" 
                            type= 'url' 
                            id="image" 
                            name="image" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-6">
                        <lable htmlFor="city">City</lable>
                        <input 
                            className="form-control" 
                            id="city" 
                            name="city" />
                    </div>
                    <div className="form-group col-sm-6">
                        <lable htmlFor="state">State</lable>
                        <input 
                            className="form-control" 
                            id="state" 
                            name="state" />
                    </div>
                    <div className="form-group col-sm-6">
                        <lable htmlFor="founded">Founded</lable>
                        <input 
                            className="form-control" 
                            id="founded" 
                            name="founded"
                            value= {data.place.founded} />
                    </div>
                </div>
                    <div className="form-group">
                        <lable htmlFor="cuisines">Cuisines</lable>
                        <input 
                            className="form-control" 
                            id="cuisines" 
                            name="cuisines" 
                            required/>
                    </div>
                    <div>
                        <input 
                            className="btn btn-primary" 
                            type="submit" 
                            value="Update Place" />
                    </div>
                </form>  
          </main>
        </Def>
    )
}

module.exports = edit_form
