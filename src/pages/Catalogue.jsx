import Header from '../components/header/Header'
import Title from '../components/Title'
import Footer from '../components/Footer'
import {useState} from 'react'
import page2_1 from '../assets/images/page2-img1.jpg'
import page2_2 from '../assets/images/page2-img2.jpg'
import page2_3 from '../assets/images/page2-img3.jpg'
import page2_4 from '../assets/images/page2-img4.jpg'
import page2_5 from '../assets/images/page2-img5.jpg'
import page2_6 from '../assets/images/page2-img6.jpg'
import page2_7 from '../assets/images/page2-img7.jpg'
import page2_8 from '../assets/images/page2-img8.jpg'
import page2_9 from '../assets/images/page2-img9.jpg'
import page2_10 from '../assets/images/page2-img10.jpg'
import imagesNav from '../assets/images/images.png'
import row from '../assets/images/row-bot-bg.jpg'


function Catalogue() {
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
      <Header imagesNav={imagesNav}/>
      <Title row={row}/>
      <div className='bg-[#F2F2F2]'>
        <div className="containerr mx-auto">
        <div className="tble flex flex-col">
              <h3 className='mb-[15px] self-center lg:self-start text-[25px]'>Our Best Menus</h3>
              <div className="relative w-[100%] h-[500px] overflow-hidden">
                <div className={`grid grid-cols-10 grid-rows-3 gap-[10px] w-[1400px] text-sm absolute duration-1000 ${left} top-0`}>
                  <div className="flex flex-col gap-[5px] w-[100px] text-sm">
                    <img className='h-full' src={page2_1} alt="" />
                    <p>Nam liber tempor</p>
                    <p>(price $12.95)</p>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[100px] text-sm">
                    <img className='h-full' src={page2_2} alt="" />
                    <p>Nam liber tempor</p>
                    <p>(price $12.95)</p>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[100px] text-sm">
                    <img className='h-full' src={page2_8} alt="" />
                    <p>Nam liber tempor</p>
                    <p>(price $12.95)</p>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[100px] text-sm">
                    <img className='h-full' src={page2_3} alt="" />
                    <p>Nam liber tempor</p>
                    <p>(price $12.95)</p>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[100px] text-sm">
                    <img className='h-full' src={page2_10} alt="" />
                    <p>Nam liber tempor</p>
                    <p>(price $12.95)</p>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[100px] text-sm">
                    <img className='h-full' src={page2_1} alt="" />
                    <p>Nam liber tempor</p>
                    <p>(price $12.95)</p>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[100px] text-sm">
                    <img className='h-full' src={page2_7} alt="" />
                    <p>Nam liber tempor</p>
                    <p>(price $12.95)</p>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[100px] text-sm">
                    <img className='h-full' src={page2_2} alt="" />
                    <p>Nam liber tempor</p>
                    <p>(price $12.95)</p>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[100px] text-sm">
                    <img className='h-full' src={page2_9} alt="" />
                    <p>Nam liber tempor</p>
                    <p>(price $12.95)</p>
                  </div>

                  <div className="flex flex-col gap-[5px] w-[100px] text-sm">
                    <img className='h-full' src={page2_5} alt="" />
                    <p>Nam liber tempor</p>
                    <p>(price $12.95)</p>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[100px] text-sm">
                    <img className='h-full' src={page2_7} alt="" />
                    <p>Nam liber tempor</p>
                    <p>(price $12.95)</p>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[100px] text-sm">
                    <img className='h-full' src={page2_2} alt="" />
                    <p>Nam liber tempor</p>
                    <p>(price $12.95)</p>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[100px] text-sm">
                    <img className='h-full' src={page2_3} alt="" />
                    <p>Nam liber tempor</p>
                    <p>(price $12.95)</p>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[100px] text-sm">
                    <img className='h-full' src={page2_4} alt="" />
                    <p>Nam liber tempor</p>
                    <p>(price $12.95)</p>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[100px] text-sm">
                    <img className='h-full' src={page2_5} alt="" />
                    <p>Nam liber tempor</p>
                    <p>(price $12.95)</p>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[100px] text-sm">
                    <img className='h-full' src={page2_6} alt="" />
                    <p>Nam liber tempor</p>
                    <p>(price $12.95)</p>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[100px] text-sm">
                    <img className='h-full' src={page2_2} alt="" />
                    <p>Nam liber tempor</p>
                    <p>(price $12.95)</p>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[100px] text-sm">
                    <img className='h-full' src={page2_1} alt="" />
                    <p>Nam liber tempor</p>
                    <p>(price $12.95)</p>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[100px] text-sm">
                    <img className='h-full' src={page2_4} alt="" />
                    <p>Nam liber tempor</p>
                    <p>(price $12.95)</p>
                  </div>

                  <div className="flex flex-col gap-[5px] w-[100px] text-sm">
                    <img className='h-full' src={page2_9} alt="" />
                    <p>Nam liber tempor</p>
                    <p>(price $12.95)</p>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[100px] text-sm">
                    <img className='h-full' src={page2_10} alt="" />
                    <p>Nam liber tempor</p>
                    <p>(price $12.95)</p>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[100px] text-sm">
                    <img className='h-full' src={page2_1} alt="" />
                    <p>Nam liber tempor</p>
                    <p>(price $12.95)</p>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[100px] text-sm">
                    <img className='h-full' src={page2_3} alt="" />
                    <p>Nam liber tempor</p>
                    <p>(price $12.95)</p>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[100px] text-sm">
                    <img className='h-full' src={page2_6} alt="" />
                    <p>Nam liber tempor</p>
                    <p>(price $12.95)</p>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[100px] text-sm">
                    <img className='h-full' src={page2_2} alt="" />
                    <p>Nam liber tempor</p>
                    <p>(price $12.95)</p>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[100px] text-sm">
                    <img className='h-full' src={page2_6} alt="" />
                    <p>Nam liber tempor</p>
                    <p>(price $12.95)</p>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[100px] text-sm">
                    <img className='h-full' src={page2_2} alt="" />
                    <p>Nam liber tempor</p>
                    <p>(price $12.95)</p>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[100px] text-sm">
                    <img className='h-full' src={page2_3} alt="" />
                    <p>Nam liber tempor</p>
                    <p>(price $12.95)</p>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[100px] text-sm">
                    <img className='h-full' src={page2_4} alt="" />
                    <p>Nam liber tempor</p>
                    <p>(price $12.95)</p>
                  </div>

                  <div className="flex flex-col gap-[5px] w-[100px] text-sm">
                    <img className='h-full' src={page2_10} alt="" />
                    <p>Nam liber tempor</p>
                    <p>(price $12.95)</p>
                  </div>

                </div>
              </div>
              <div className='flex items-center mx-auto justify-center'>
                <button onClick={() => chLeft('0')} className='text-tx text-sm m-[10px] hover:text-gray-900'>1</button>
                <button onClick={() => chLeft('140')} className='text-tx text-sm m-[10px] hover:text-gray-900'>2</button>
                <button onClick={() => chLeft('280')} className='text-tx text-sm m-[10px] hover:text-gray-900'>3</button>
                <button onClick={() => chLeft('420')} className='text-tx text-sm m-[10px] hover:text-gray-900'>4</button>
                <button onClick={() => chLeft('560')} className='text-tx text-sm m-[10px] hover:text-gray-900'>5</button>
                <button onClick={() => chLeft('700')} className='text-tx text-sm m-[10px] hover:text-gray-900 lg:hidden'>6</button>
                <button onClick={() => chLeft('840')} className='text-tx text-sm m-[10px] hover:text-gray-900 lg:hidden'>7</button>
                <button onClick={() => chLeft('980')} className='text-tx text-sm m-[10px] hover:text-gray-900 md:hidden'>8</button>
                <button onClick={() => chLeft('1120')} className='text-tx text-sm m-[10px] hover:text-gray-900 md:hidden'>9</button>
              </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Catalogue