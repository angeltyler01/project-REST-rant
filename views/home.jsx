const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                  <img src="/css/images/icecream.jpg" alt="Srawberry and vanilla icecream cone." />
                  <div>
                  Photo by <a href="https://unsplash.com/@sadswim?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">ian dooley</a> on <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
                  </div>
              </div>
              <a href="/places">
             <button className="btn-primary">Places Page</button>
            </a>

          </main>
      </Def>
    )
  }
  

module.exports = home

