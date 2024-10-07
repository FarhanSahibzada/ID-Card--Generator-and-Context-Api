import React, { useEffect, useReducer, useRef, useState } from 'react'
import { useNavigate, useParams, } from 'react-router-dom'
import studendata from '../data/Students.json'
import domtoimage from 'dom-to-image';

function Card() {
  const navigate = useNavigate();
  const { name } = useParams()
  const data = studendata.students;
  const datafilter = data.filter((student) => name.toLowerCase()
    == student.name.toLowerCase());
  const item = datafilter[0];
  const [ids, setid] = useState(0);
  const ref = useRef(null);

  const handledownloadbtn = () => {
    const node = ref.current; 

    domtoimage.toPng(node)
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = `${item.name}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error) {
        console.error('Error capturing image!', error);
      });
  }
  return ( 
    <div className="min-h-screen flex flex-col justify-center items-center  bg-gray-200">
      <button className=' absolute top-20 left-6  bg-blue-500 text-white py-2 
      px-4 font-bold rounded-full hover:bg-blue-400 duration-200'
        onClick={() => {
          navigate(-1)
        }}
      >back</button>

      <div className="bg-white shadow-lg rounded-lg w-80 min-h-96 p-6 relative overflow-hidden"
        ref={ref}
      >
        <div className="absolute -top-8 -left-8 w-32 h-44 bg-green-500 rounded-full opacity-50 "></div>
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-lg">
            <img
              src={item?.image}
              alt="Your Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center text-gray-800">{item?.name}</h1>
        <p className="text-center text-gray-600 font-semibold">{item?.currentBatch}</p>

        <div className="mt-4">
          <p className="text-gray-600"><span className="font-semibold me-2">ID:</span>{item?.id}</p>
          <p className="text-gray-600"><span className="font-semibold me-2">FatherName:</span>{item?.fatherName}</p>
          <p className="text-gray-600"><span className="font-semibold me-2">Phone:</span>{item?.contactNumber}</p>
          <p className="text-gray-600"><span className="font-semibold me-2">Email:</span>{item?.gmail}</p>
        </div>
      </div>
      <div className=' mt-4 '>
        <button className='bg-blue-500 text-white py-2 
      px-4 font-bold rounded-full hover:bg-blue-400 duration-200'
          onClick={handledownloadbtn}
        >Download Card</button>
      </div>
    </div>
  )
}

export default Card