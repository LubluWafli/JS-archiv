import './App.css';
import React, { useEffect, useState } from "react";


export default function App() {
  const foxUrl = 'https://randomfox.ca/floof/';
  const dogUrl = 'https://random.dog/woof.json'
  const [img, setImg] = useState();
  const [url, setUrl] = useState();

  const fetchImage = async () => {
    const res = await fetch(url).then(res => res.json());
    let imgUrl = '';
    if (url === 'https://random.dog/woof.json')
    {
      imgUrl = res.url;
      if (imgUrl.slice(-1) === '4')
      {
        fetchImage();
      }
    }
    else
    {
      imgUrl = res.image;
    }

    setImg(imgUrl);
  };
  const handleUrlChange = (event) => {
    setUrl(event.target.value);
    fetchImage();
  }
    useEffect(() => {
      fetchImage();
    }, []);

  return (
    <>
    <div>
      <button value={dogUrl} onClick={handleUrlChange}>Dog</button>
      <button value={foxUrl} onClick={handleUrlChange}>Fox</button>
    </div>

    <img id='img1'width={250} height={250} src={img} alt="icons" />
    </>
  );
}
