import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

const GankList = (props) => {
  return (
    <div>
      {props.data.map((e) => {
        if(props.type === 1) {
          return <img style={{width: '100%'}} src={e.url} alt="img"/>
        }
        if(props.type === 2 || 3 || 4) {
          return (
            <div className="listItem">
              <h4>{e.desc}</h4>
            </div>
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