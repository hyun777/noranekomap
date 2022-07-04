import StyledDiv from './style';
import GoogleMapReact from 'google-map-react';

function Map() {
  return (
    <StyledDiv>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_MAP_ID as string }}
        defaultCenter={{
          lat: 35.16471304367261,
          lng: 136.86826450858632,
        }}
        defaultZoom={15}
      ></GoogleMapReact>
    </StyledDiv>
  );
}

export default Map;
