import React, {Fragment} from 'react'

const Membre = ({nom, children, age, hideName}) => {
    return(
        <Fragment>
        <h2 style={{ 
            backgroundColor: age < 10 ? 'gold' : 'black',
            color: age < 10 ? 'black' : 'white' }}> 
            Membre de la famille:{nom.toUpperCase()}: {age}
        </h2>
        <button onClick={hideName}>Anonyme</button>
        { children ? <p>{children}</p>: <Fragment/>}
        
        </Fragment>
    )
}

export default Membre;