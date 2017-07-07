import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

const GankList = (props) => {
  return (
    <div>
      {props.data.map((e) => {
        if(props.type === 1) {
          return <img key={e._id} style={{width: '100%'}} src={e.url} alt="img"/>
        }
        if(props.type === 2 || 3 || 4) {
          return (
            <a key={e._id} href={e.url}>
              <div className="listItem" style={{color: '#333'}}>
                <h4>{e.desc}</h4>
              </div>
            </a>
          );
        }
        return false
      })}
    </div>
  )
}

GankList.propTypes = {
  data: PropTypes.array,
  type: PropTypes.number
}

export default GankList