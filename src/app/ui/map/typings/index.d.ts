declare namespace wa.map {
    interface IMapPosition {
        lat: number,
        lng: number
    }
    interface IMarker {
        position: IMapPosition,
        infotext: string
    }
    interface InfoWindow extends google.maps.InfoWindow {
        map: google.maps.Map;
    }
}