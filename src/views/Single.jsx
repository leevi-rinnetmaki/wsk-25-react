import React from 'react'
import PropTypes from 'prop-types'

const Single = item => {
  return (
    <>
        (item.media_type.includes('video') ? (
        <video controls src={item.filename} alt={item.title} />;
    ) : (
        <img src={item.filename} alt={item.title} />
    ));
    <img src={item.filename} alt={item.title} />
    <h3>Mihnuen Tïttelï!</h3>
    <p>{item.description}</p>
    </>
  )
}

Single.propTypes = {}

export default Single