'use client'
import Image from 'next/image'
import { useState, useEffect } from "react";
import { VscDeviceCamera } from "react-icons/vsc";

export default function AgregarPage() {
  const [image, setImage] = useState(null);

  const handleCapture = async () => {
    try {
      const mediaDevices = navigator.mediaDevices;
      const stream = await mediaDevices.getUserMedia({ video: true });
      const videoTrack = stream.getVideoTracks()[0];
      const imageCapture = new ImageCapture(videoTrack);
      const photoBlob = await imageCapture.takePhoto();
      const imageUrl = URL.createObjectURL(photoBlob);
      setImage(imageUrl);
      stream.getVideoTracks()[0].stop();
    } catch (error) {
      console.error("Error capturing photo:", error);
    }
  };

  return (
    <div className='flex justify-center flex-col items-center gap-y-4 mt-6'>
      {image ?
        <img src={image} alt="Imagen" className='flex cursor-pointer h-40 w-52 border border-slate-500 bg-slate-50 justify-center items-center text-4xl text-slate-300' />
        :<button name='capture' onClick={handleCapture} className='flex cursor-pointer h-40 w-52 border border-slate-500 bg-slate-50 justify-center items-center text-4xl text-slate-300'>
          <VscDeviceCamera />
        </button>
      }
      <div className='flex flex-col gap-2'>
        <label htmlFor="">Municipio</label>
        <input type="text" className='rounded p-1 bg-slate-50' />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor="">Parroquia</label>
        <input type="text" className='rounded p-1 bg-slate-50' />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor="">Sector</label>
        <input type="text" className='rounded p-1 bg-slate-50' />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor="">Ubicación</label>
        <input type="text" className='rounded p-1 bg-slate-50' />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor="">Descripción</label>
        <input type="text" className='rounded p-1 bg-slate-50' />
      </div>
    </div>
  )
}
