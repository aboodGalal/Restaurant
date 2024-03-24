import Header from '../components/header/Header'
import Title from '/src/components/Title.jsx'
import Footer from '/src/components/Footer.jsx'
import RedBtn from '../components/RedBtn'
import GreenBtn from '../components/GreenBtn'
import { useState } from 'react'
import links from '../Links'

function Menu() {
  const [left, setLeft] = useState('left-[0px]');

  const chLeft = (a) => {
    if (a === '0') {
      setLeft('left-[0px]');
    } else if (a === '140') {
      setLeft('left-[-140px]');
    } else if (a === '280') {
      setLeft('left-[-280px]');
    } else if (a === '420') {
      setLeft('left-[-420px]');
    } else if (a === '560') {
      setLeft('left-[-560px]');
    } else if (a === '700') {
      setLeft('left-[-700px]');
    } else if (a === '840') {
      setLeft('left-[-840px]');
    } else if (a === '980') {
      setLeft('left-[-980px]');
    }
    else if (a === '1120') {
      setLeft('left-[-1120px]');
    }
    else if (a === '1260') {
      setLeft('left-[-1260px]');
    }
  };


 
  return (
    <>
      <Header />
      <Title />
      <div className='bg-[#F2F2F2]'>
        <div className="containerr flex flex-col lg:flex-row py-[30px] mx-auto gap-[40px]">
          <div className="left flex-1 flex flex-col gap-[40px]">
            <div className="flex flex-col h-fit items-center lg:items-start gap-[15px]">
              <h3 className='mb-[15px] self-center lg:self-start text-[25px]'>Special Offer</h3>
              <div className="flex gap-[20px] flex-col md:flex-row">
                <img className='h-[100px] w-[200px]' src="src/assets/images/page2-img1.jpg" alt="" />
                <div className="flex flex-col w-[210px] text-gray-700 text-sm text-center md:text-start">
                  <h4>Nam liber tempor cusoluta</h4>
                  <p>Nobis eleifend option congue nihil imperdiet doming quod mazim placerat facer possim orem ipsum dolor sit consectetuer.</p>
                </div>
              </div>
              <RedBtn text="Read More" />
            </div>
            <div className="tble flex flex-col">
              <h3 className='mb-[15px] self-center lg:self-start text-[25px]'>Our Best Menus</h3>
              <div className="relative w-[100%] h-[500px] overflow-hidden">
                <div className={`grid grid-cols-10 grid-rows-3 gap-[10px] w-[1400px] text-sm absolute duration-1000 ${left} top-0`}>
                  {links.map((link,index) => (
                    <div key={index} className="flex flex-col gap-[5px] w-[100px] text-sm">
                      <img className='h-full' src={link.img} alt="" />
                      <p>Nam liber tempor</p>
                      <p>{link.price}</p>
                    </div>
                  ))}
                  {links.slice(0, 11).map((link,index) => (
                    <div key={index} className="flex flex-col gap-[5px] w-[100px] text-sm">
                      <img className='h-full' src={link.img} alt="" />
                      <p>Nam liber tempor</p>
                      <p>{link.price}</p>
                    </div>
                  ))}

                </div>
              </div>

              <div className='flex items-center mx-auto justify-center'>
                <button onClick={() => chLeft('0')} className='text-tx text-sm m-[10px] hover:text-gray-900'>1</button>
                <button onClick={() => chLeft('140')} className='text-tx text-sm m-[10px] hover:text-gray-900'>2</button>
                <button onClick={() => chLeft('280')} className='text-tx text-sm m-[10px] hover:text-gray-900'>3</button>
                <button onClick={() => chLeft('420')} className='text-tx text-sm m-[10px] hover:text-gray-900'>4</button>
                <button onClick={() => chLeft('560')} className='text-tx text-sm m-[10px] hover:text-gray-900'>5</button>
                <button onClick={() => chLeft('700')} className='text-tx text-sm m-[10px] hover:text-gray-900'>6</button>
                <button onClick={() => chLeft('840')} className='text-tx text-sm m-[10px] hover:text-gray-900'>7</button>
                <button onClick={() => chLeft('980')} className='text-tx text-sm m-[10px] hover:text-gray-900 '>8</button>
                <button onClick={() => chLeft('1120')} className='text-tx text-sm m-[10px] hover:text-gray-900 md:hidden'>9</button>
                <button onClick={() => chLeft('1260')} className='text-tx text-sm m-[10px] hover:text-gray-900 md:hidden'>10</button>
              </div>
            </div>
          </div>
          <div className="right flex-1 flex flex-col justify-betwee">
            <h2 className='mb-[15px] self-center lg:self-start text-[25px]'>Price List</h2>
            {links.map((lnk, index) => (
              <div key={index} className="flex justify-between items-center text-gray-600 text-sm flex-col md:flex-row">
                <div className="flex items-center my-[10px]">
                  <span className='bg-[#AECC03] rounded-full hidden md:block w-[7px] h-[7px] mr-[10px]'></span>
                  <a className='hover:underline hover:text-[#AECC03] text-center md:text-start' href="">{lnk.link}</a>
                </div>
                <span >{lnk.price}</span>
              </div>
            ))}

            <div className="flex flex-col">
              <GreenBtn text={'Read More'} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Menu