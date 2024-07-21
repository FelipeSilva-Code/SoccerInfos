import React, { useEffect, useState } from "react";

interface imgData {
    src: string,
    width: number
}

export default function LazyImage({ src , width } : imgData) {
    const [isIntersecting, setIntersecting] = useState(false);
    const imgRef = React.useRef();
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        {
          rootMargin: '50px',
          threshold: 0.1,
        }
      );
  
      if (imgRef.current) {
        observer.observe(imgRef.current);
      }
  
      return () => {
        if (imgRef.current) {
          observer.unobserve(imgRef.current);
        }
      };
    }, []);
  
    return (
      <img
        ref={imgRef}
        width={width}
        src={isIntersecting ? src : ''}
        loading="lazy"
        alt=""
      />
    );
  }