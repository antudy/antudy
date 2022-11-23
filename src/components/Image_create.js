import React from 'react';
import { Image, useWindowDimensions } from "react-native";
import propTypes from 'prop-types';

const Image_create = ({ url }) => {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

  return (
      <Image source={{ uri: url }} style={styles.container} width={width/2}/>
  );
};

const styles = {
  container: {
    backgroundColor: "#F3F3F3",
    marginTop: 10,
    paddingBottom: 110,
    marginLeft: 30,
    marginRight: 10,
    borderWidth: 2,
    borderRadius: 10,

  },
};

Image.propTypes={
    uri: propTypes.string,
    imageStyle: propTypes.object,
};

export default Image_create;
