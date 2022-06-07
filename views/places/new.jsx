const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1> 
                <form method="POST" action="/places">
                    <div className='row d-flex justify-content-center'>
                    <div className="form-group col-md-8">
                        <lable htmlFor="name">Place Name</lable>
                        <input 
                            className="form-control" 
                            id="name" 
                            name="name" 
                            required/>
                    </div>
                    <div className="form-group col-md-8">
                        <lable htmlFor="pic">Picture</lable>
                        <input 
                            className="form-control" 
                            type= 'url' 
                            id="pic" 
                            name="pic" />
                    </div>
                    <div className="form-group col-md-8">
                        <lable htmlFor="city">City</lable>
                        <input 
                            className="form-control" 
                            id="city" 
                            name="city" />
                    </div>
                    <div className="form-group col-md-8">
                        <lable htmlFor="state">State</lable>
                        <input 
                            className="form-control" 
                            id="state" 
                            name="state" />
                    </div>
                    <div className="form-group col-md-8">
                        <lable htmlFor="cuisines">Cuisines</lable>
                        <input 
                            className="form-control" 
                            id="cuisines" 
                            name="cuisines" 
                            required/>
                    </div>
                    <div className="form-group col-md-8">
                        <label htmlFor="founded">Year Founded</label>
                        <input 
                            type= "number"
                            className="form-control" 
                            id="founded" 
                            name="founded"
                            //value= {new Date.getFullYear()} why is this not working??
                            />
                    </div>
                        <input 
                            className="btn btn-primary" 
                            type="submit" 
                            value="Add Place" />
                </div>
                </form>  
            </main>
        </Def>
    )
}

module.exports = new_form``
