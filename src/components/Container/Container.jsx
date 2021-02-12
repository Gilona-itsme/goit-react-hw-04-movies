import React from 'react';
import PropTypes from 'prop-types';


const styles = {
  //width: 1170,
    marginLeft: 'auto',
   marginRight: 'auto',
  paddingLeft: 15,
  paddingRight: 15,
}

const Container = ({children}) => {
    return (
        <div style={styles}>
            {children}
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.node
    
};

export default Container;