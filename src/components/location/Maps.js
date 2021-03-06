import { GoogleApiWrapper, Map, Marker, InfoWindow } from "google-maps-react";
import React, { Component, Fragment } from "react";
import axios from 'axios';

// 로그인 게시판 끝나고 클러스터 다시 해볼 예정
// import { Map, Marker, TileLayer } from 'react-leaflet';
// import MarkerClusterGroup from 'react-leaflet-markercluster';

class Maps extends Component {
  state = {
    stores: [],
    value1: "",
    value2: "",
    url: "/api/locations",
    location_datas: []
  };

  componentDidMount() {
    this.getDatas();
  }

  getDatas = async() => {
    const location_datas = await axios.get(this.state.url);
    this.setState({ location_datas: location_datas.data });
  };

  addMarkers = async (e, aug, geoData) => {
    const {stores} = this.state;
    let stateData = stores;
    let latLng;
    latLng = {latitude : geoData.latLng.lat(), longitude : geoData.latLng.lng()};
    stateData.push(latLng);
    await this.setState({
      stores: stateData,
      value1: geoData.latLng.lat(),
      value2: geoData.latLng.lng()
    });
    document.getElementsByName("location_lat")[0].value = this.state.value1;
    console.log('value1', this.state.value1);
    document.getElementsByName("location_lng")[0].value = this.state.value2;
    console.log('value2', this.state.value2);
  }

  //맵을 클릭했을 때 그 위치(좌표)에 마커 표시됨.
  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index} 
          position={{ lat: store.latitude, lng: store.longitude }}
          onClick={() => this.removeMarkers(index)}
        />
      )
    });
  }
  
  //홈페이지 들어왔을 때 모든 마커 load
  displayMarkersAll = () => {
    return this.state.location_datas.map((location, index) => {
      return (
        <Marker
            key={index}
            id={index} 
            position={{ lat: location.location_lat, lng: location.location_lng }}
            onClick={() => this.visibleInfoWindow(index)}
        />
      )
    })
  }

  //마커 infomation 비저빌리티 함수
  visibleInfoWindow = async (i) => {
    const {location_datas} = this.state;
    let stateData = location_datas;
    stateData[i].bool = !stateData[i].bool
    await this.setState({
      location_datas: stateData
    })
  };

  //마커를 눌렀을 때 팝업뜨면서 상세메세지 뜨는거
  displayInfoWindows = () => {
    return this.state.location_datas.map((location, index) => {
      return (
        <InfoWindow
          key={index}
          visible={location.bool}
          content={location.location_name}
          position={{ lat: location.location_lat, lng: location.location_lng }} 
          onClose={()=>this.visibleInfoWindow(index)}
        >
        </InfoWindow>
      );
    })
  }
  
  //클릭 했을 때 마커 삭제함 EX) 추가하려고 클릭했지만 변심으로 제거하려고 할 때 그대로 마커 누르면 제거됨
  removeMarkers = async (i) => {
    const {stores} = this.state;
    let stateData = stores;
    stateData.splice(i,1);
    await this.setState({
      stores: stateData
    })
  }
 
  render() {
      const mapStyles = {
        width: '60%',
        height: '100%',
      }
      return (
        <Fragment>
          <Map className="markercluster-map"
            google = {this.props.google} 
            zoom={7}
            style={mapStyles}
            initialCenter= {{
              lat: 36,
              lng: 128
            }}
            onClick={this.addMarkers}
          >

          {this.displayMarkers()}
          {this.displayMarkersAll()}
          {this.displayInfoWindows()}
        </Map>
      </Fragment>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyA8Acop1PDTra-V8pBC19IzMSNhqvP9Z20'
})(Maps);
// export default Maps;