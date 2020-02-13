import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

/* import API_KEY */
import API_KEY from './ApiKey';

export class MapContainer extends Component {

    render() {

        const style = {
            width: '100%',
            height: '100%'
        }

        const { props } = this,
            { mapStyles } = props;

        return (
            <Map google={this.props.google}
                style={style}
                styles={mapStyles}
                initialCenter={{
                    lat: 52.657528,
                    lng: 19.067381
                }}
                bootstrapURLKeys={{
                    key: 'AIzaSyBeLP67ELrmDuLC_4jWKFt4eYiiHRM-HoY',
                    language: 'PL',
                    region: 'PL',
                }}
                zoom={14}
            >

                <Marker onClick={this.onMarkerClick}
                    name={'APE Piotr Wysocki'}
                    position={{ lat: 52.654980, lng: 19.085620 }}
                />

                <Marker onClick={this.onMarkerClick}
                    name={'Warsztat - obsługa klienta'}
                    position={{ lat: 52.663023, lng: 19.061508 }}
                />

            </Map>
        );
    }
}

MapContainer.defaultProps = {
    mapStyles: [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#fcf5f5"
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#60191a"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#bdbdbd"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#eeeeee"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ecb7b8"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#60191a"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#f0c6c7"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#a72c2f"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#df8688"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#60191a"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#f3d1d2"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#d05154"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dd7779"
                }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#eeeeee"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#bedae9"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#60191a"
                }
            ]
        }
    ]
}

export default GoogleApiWrapper({
    apiKey: (API_KEY)
})(MapContainer)