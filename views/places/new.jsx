const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1> 
                <form method="POST" action="/places">
                    <div>
                        <lable htmlFor="name">Place Name</lable>
                        <input id="name" name="name" required/>
                    </div>
                    <div>
                        <lable htmlFor="pic">Picture</lable>
                        <input type= 'url' id="pic" name="pic" />
                    </div>
                    <div>
                        <lable htmlFor="city">City</lable>
                        <input id="city" name="city" />
                    </div>
                    <div>
                        <lable htmlFor="state">State</lable>
                        <input id="state" name="state" />
                    </div>
                    <div>
                        <lable htmlFor="cuisine">Cuisines</lable>
                        <input id="cuisine" name="cuisine" required/>
                    </div>
                    <div>
                        <input type='submit' value='Add Place' />
                    </div>
                </form>  
            </main>
        </Def>
    )
}

module.exports = new_form
