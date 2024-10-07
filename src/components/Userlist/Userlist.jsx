import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';
import Usetheme from '../Theme';


function Userlist() {
  const navigate = useNavigate();
  const data = useLoaderData();

  const { thememode, darkmode, lightmode } = Usetheme();
  const handletheme = (e) => {
    const themestatus = e.currentTarget.checked;
    if (themestatus) darkmode()
    else lightmode() 
  }

  return (
    <div className='px-4  flex flex-col duration-300  dark:bg-black/[0.80] dark:text-white '>
      <div className='text-right flex gap-2  justify-end pt-3 '> 
        <p className='font-semibold'>Theme</p>
        <input type="checkbox" className="toggle "
          checked={thememode == 'dark'}
          onChange={handletheme}
        />
      </div>
      {data.map((item, index) => (
        <div key={index} className='py-4 flex  gap-3 px-4 border-b-2 transform hover:scale-[1.2]
         hover:shadow-2xl hover:px-28 cursor-pointer border-slate-600 dark:border-slate-100 '
          onClick={() => navigate(`Card/${item.name}`)}
        >
          <div className='w-14 h-14 sm:w-20 sm:h-20'>
            <img src={item.image} alt="" className=' rounded-lg w-full h-full object-cover' />
          </div>
          <div>
            <h2 className='font-bold text-base'> {item.name} </h2>
            <h2 className='font-bold text-sm sm:text-base'> {item.gmail} </h2>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Userlist;

