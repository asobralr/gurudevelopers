'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { FaPlayCircle } from "react-icons/fa";
import { FaCirclePause } from "react-icons/fa6";

const ThumbArea = ({ video, image }) => {
   // Estado para controlar si el video está reproduciéndose
  const [isPlaying, setIsPlaying] = useState(false);

  // Ref para la etiqueta de video
  const videoRef = useRef(null);

  // Manejador de clic en algún lugar del componente
  const handleComponentClick = () => {
    // Obtén la referencia a la etiqueta de video
    const videoElement = videoRef.current;

    // Cambia el estado de reproducción
    if (isPlaying) {
      videoElement.pause();
    } else {
      videoElement.play();
    }

    // Actualiza el estado
    setIsPlaying(!isPlaying);
  };

  const handleVideoEnded = () => {
    // Puedes realizar acciones específicas cuando el video llega al final
    // Reiniciar el video al principio
    const videoElement = videoRef.current;
    videoElement.currentTime = 0;

    // Actualizar el estado a false
    setIsPlaying(false);
  };

  console.log({ video, image })
  if (video) {
    return <div className='pd-thumb-area'>
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div className='pd-thumb container_video'>
            <video src={video} width='100%' ref={videoRef} onEnded={handleVideoEnded}/>
            <div className={`${!isPlaying ? 'disabled_video' : 'enabled_video'} background_video`} >
                {!isPlaying ? <FaPlayCircle onClick={handleComponentClick}/> : <FaCirclePause onClick={handleComponentClick}/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  }

  if (image) {
    return (
      <div className='pd-thumb-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='pd-thumb'>
                <Image src={image} alt='theme-pure' />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default ThumbArea
