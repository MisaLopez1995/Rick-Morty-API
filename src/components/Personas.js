import React from "react"

export default function Personas(props) {
    //console.log(props);
    const {characters} = props;
    console.log (characters);
    return (
      <div className='chacters'>
        <h1>Personajes</h1>
        <span className='back-home'>Home</span>
        <div className='container-characters'>
            {characters.map((characters, index) => (
                <div className='character-container' key={index}>
                    <img src={characters.image} alt={characters.name}/>
                    <div>
                    <h3>{characters.name}</h3>
                    
                    <h6>
                        {characters.status === 'Alive' ? (
                        
                        <>
                        <span className='alive'>Vivo</span>
                        </>    
                        ):(
                        <>
                        <span className='dead'>Muerto</span>
                        </>
                        )}

                        </h6>

                        <p>
                            <span className='tex-grey'>Episodios:</span>
                            <span> {characters.episode.length}</span>
                        </p>

                        <p>
                            <span className='tex-grey'>Especie:</span>
                            <span>{characters.species}</span>
                        </p>


                </div>
                </div>



            )
            )}

        </div>


      </div>
    )
  }