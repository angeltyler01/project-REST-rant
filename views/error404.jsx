const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                  <img src="https://place-puppy.com/public-images/index-page/image7/210x135-lg.jpg" alt="Playful Beagle dog laying on the floor."/>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
