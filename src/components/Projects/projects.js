import React from 'react';

export default [{
  name: 'SARGE',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        SARGE 
      </div>
      <div className='portfolio-item__desc'>
      Weight Tracker for Powerlifters and Crossfitters 
      </div>
      <div className='portfolio-item__icon'>
        <i className ="fab fa-node-js"></i>
        <i class="fab fa-react"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/kmj217/Project3"><i class="fab fa-github"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://guarded-oasis-99226.herokuapp.com/"><i class="fas fa-link"></i></a>
      </div>
    </div>
  )
}, {
    name: 'Octocat',
    render: (
      <div className='portfolio-item'>
        <div className='portfolio-item__title'>
          Octocat Game 
        </div>
        <div className='portfolio-item__desc'>
          Memory Game featuring Octocat!
        </div>
        <div className='portfolio-item__icon'>
        Weight Tracker for Powerlifters and Crossfitters 
        </div>
        <div className='portfolio-item__links'>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/kalargent/clicking-with-marnie"><i class="fab fa-github"></i></a>
          <a target="_blank" rel="noopener noreferrer" href="https://kalargent.github.io/clicking-with-marnie/"><i class="fas fa-link"></i></a>
        </div>
      </div>
    )
  }
]