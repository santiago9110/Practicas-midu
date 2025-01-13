/* eslint-disable react/prop-types */

import { Square } from './Square'


export const Winner = ({winner,resetGame}) => {
    if(winner==null)return
  return (
    <section>
     
      <section className="winner">
        <div className="text">
          <h2>{
              winner===false ? "Empate" : "gano"
            }
          </h2>

          <header className="win">
            {winner && <Square>{winner}</Square>}

          </header>
          <footer>
            <button onClick={resetGame}>empezar de nuevo</button>
          </footer>

        </div>

      </section>
    
  </section>
  )
}
