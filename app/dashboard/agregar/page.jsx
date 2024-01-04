'use client'
import Image from 'next/image'
import { useState, useEffect,useRef } from "react";
import { VscDeviceCamera } from "react-icons/vsc";

export default function AgregarPage() {
  const videoRef = useRef(null);

  const [image, setImage] = useState(null);
  const [cont, setCont] = useState(false);


  const startCamera = async () => {
    try {
      setImage(null);
      setCont(true);
      const mediaDevices = navigator.mediaDevices;
      const stream = await mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Error starting camera:", error);
      setCont(false);
    }
  };
  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());
    videoRef.current.srcObject = null;
  };

  const capturePhoto = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0);
    const imageUrl = canvas.toDataURL("image/jpeg");
    setImage(imageUrl);
    setCont(false);
    stopCamera();
  };

  return (
    <div className='flex justify-center flex-col items-center gap-y-4 mt-6'>
      {cont &&
        <video onClick={capturePhoto}
          ref={videoRef}
          autoPlay
          className="w-52 h-40"
          style={{ border: "1px solid #888" }}
        />
      }
      {(!image && cont== false) &&
        <button name='capture' onClick={startCamera} className='flex cursor-pointer h-40 w-52 border border-slate-500 bg-slate-50 justify-center items-center text-4xl text-slate-300'>
          <VscDeviceCamera />
        </button>
      }
      {image!=null &&
        <img src={image} alt="Imagen" onClick={startCamera} className='flex cursor-pointer h-40 w-52 border border-slate-500 bg-slate-50 justify-center items-center text-4xl text-slate-300' />
      
      }
      {/* {
        <button name='capture' onClick={startCamera} className='flex cursor-pointer h-40 w-52 border border-slate-500 bg-slate-50 justify-center items-center text-4xl text-slate-300'>
          <VscDeviceCamera />
        </button>
      } */}
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
