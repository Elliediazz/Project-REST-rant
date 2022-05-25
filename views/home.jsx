const React = require ('react')
const Def = require ('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-rant</h1>
                <div>
                    <img src= '/images/PancakeStack.jpg' alt='Pancake Stack'></img>
                </div>
                <div>
                    Photo by <a href="https://unsplash.com/photos/eeqbbemH9-c?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Chad Montano</a> on <a href="unsplash.com">Unsplash</a>
                </div>
                <div>
                    <a href="/places">
                        <button className="btn btn-primary">Places Page</button>
                    </a>
                </div>

            </main>
        </Def>
    )
}

module.exports = home