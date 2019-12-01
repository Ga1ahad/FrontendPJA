import React, { Component, useState, useCallback } from 'react'
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";




export default function Wardrobe() {
    
const [currentImage, setCurrentImage] = useState(0);
const [viewerIsOpen, setViewerIsOpen] = useState(false);

const openLightbox = useCallback((event, { photo, index }) => {
  setCurrentImage(index);
  setViewerIsOpen(true);
}, []);

const closeLightbox = () => {
  setCurrentImage(0);
  setViewerIsOpen(false);
};
    return (
      <div className="area-2">
                    <h1>T-Shirts</h1>

      <div className="area-1">
        
            <Gallery photos={photos} onClick={openLightbox} />
                <ModalGateway>
                  {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                      <Carousel
                        currentIndex={currentImage}
                        views={photos.map(x => ({
                          ...x,
                          srcset: x.srcSet,
                          caption: x.title
                        }))}
                      />
                    </Modal>
                  ) : null}
                </ModalGateway>
        </div>
          
          

        <h1>Shirts</h1>

        <div className="area-1">
        
        <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={photos.map(x => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
    </div>

        </div>
    )
}
