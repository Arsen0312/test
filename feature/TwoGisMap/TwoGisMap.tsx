"use client"

import { load } from '@2gis/mapgl';
import { useEffect } from "react";
import { Map } from "@2gis/mapgl/global";
import MapWrapper from "@/feature/TwoGisMap/MapWrapper";

export const TwoGisMap = () => {
    useEffect(() => {
        let map: Map | null = null;
        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [74.6122, 42.8746],
                zoom: 13,
                key: process.env.twoGisKey,
            });
        });

        return () => {
            if (map) {
                map.destroy();
            }
        };
    }, []);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <MapWrapper />
        </div>
    );
};
