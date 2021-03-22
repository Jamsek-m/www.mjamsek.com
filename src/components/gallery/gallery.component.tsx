import React, { useRef } from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

import {
    galleryComponent,
    bullet
} from "./gallery.module.scss";

interface GalleryProps {
    images: string[];
}

export const Gallery = (props: GalleryProps) => {
    const { images } = props;
    if (!images || images.length === 0) {
        throw new TypeError("Gallery expects string array of length greater than 0!");
    }
    
    const imageItems: ReactImageGalleryItem[] = images.map(image => {
        return {
            original: image,
            thumbnail: image,
            bulletClass: bullet,
        };
    });
    
    const galleryRef = useRef<ImageGallery>(null);
    
    // TODO decide whether to keep fullscreen
    /*
    const toggleFullscreen = () => {
        if (galleryRef && galleryRef.current) {
            galleryRef.current.fullScreen();
        }
    };
    */
    
    return (
        <ImageGallery
            ref={galleryRef}
            additionalClass={galleryComponent}
            items={imageItems}
            showPlayButton={false}
            showFullscreenButton={false}
            showThumbnails={false}
            slideDuration={1000}
            slideInterval={5000}
            showBullets={true}
            autoPlay={true}
        />
    );
};
