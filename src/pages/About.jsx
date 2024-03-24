import RedBtn from '../components/RedBtn'
import GreenBtn from '../components/GreenBtn'
import { NavLink } from "react-router-dom";
import Carousel from '../components/carousel/Carousel'
import Header from '../components/header/Header'
import Title from '../components/Title'
import Footer from '../components/Footer';
import banner1 from '../assets/images/banner-1.jpg'
import banner2 from '../assets/images/banner-2.jpg'
import banner3 from '../assets/images/banner-3.jpg'
import imagesNav from '../assets/images/images.png'
import slider1 from '../assets/images/slider-img1.jpg'
import slider2 from '../assets/images/slider-img2.jpg'
import slider3 from '../assets/images/slider-img3.jpg'
import row from '../assets/images/row-bot-bg.jpg'
function About() {
  const images = [banner1,banner2,banner3]
  const links = [
    'Duis autem vel eum iriure dolor',
    'Hendrerit in vulputate velit esse molestie',
    'Consequat vel illum dolore',
    'Feugiat nulla facilisis at vero eros',
    'Accumsan et iusto odio dignissim qui',
    'Blandit praesent luptatum azril',
    'Delenit augue duis dolore te feugait']
  return (
    <>
      <Header imagesNav={imagesNav}/>
      <Title row={row}/>
      <Carousel slider1={slider1} slider2={slider2} slider3={slider3}/>
      <div className='bg-[#F2F2F2]'>
        <div className='containerr mx-auto el-center gap-3 flex-wrap pt-[75px] '>
          {images.map((img, index) => (
            <div key={index} className='el-center bg-white p-2 lg:flex-1 min-w-[300px] max-w-[350px] max-h-[200px]'>
              <img className='w-full h-full ' src={img} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className='bg-[#F2F2F2] py-[40px]'>
        <div className='containerr flex flex-col-reverse lg:flex-row justify-center items-center mx-auto gap-[40px] lg:h-[370px]'>
          <div className="flex justify-between items-center flex-col gap-[15px] lg:flex-2 h-full lg:items-start">
            <h3 className='pb-5 text-[30px] '>Our services</h3>
            {links.map((link,index) => (
              <div key={index} className='el-center gap-[15px]'>
                <span className='bg-orng rounded-full w-[10px] h-[10px] hidden lg:block'></span>
                <a className='hover:text-tx text-[#A27F7F] hover:underline  text-sm' href="">{link}</a>
              </div>
            ))}
            <RedBtn text={"Read More"} />
          </div>
          <div className='flex justify-between items-center flex-col gap-[20px] lg:flex-1 h-full lg:items-start'>
            <h3 className='pb-5 text-[30px] '>About the Catering</h3>
            <p className='text-green-400 text-center lg:text-start text-sm'>Catering is one of free website templates created by TemplateMonster.com team. This website template is optimized for 1280X1024 screen resolution. It is also XHTML & CSS valid.</p>
            <p className='text-[#A27F7F] text-center lg:text-start text-sm'>This Catering Template goes with two packages – with PSD source files and without them. PSD source files are available for free for the registered members of TemplatesMonster.com. The basic package (without PSD source) is available for anyone without registration.</p>
            <p className='text-[#A27F7F] text-center lg:text-start text-sm'>This website template has several pages: <span className='hover:underline'><NavLink to='/'>About</NavLink></span>, <span className='hover:underline'><NavLink to='/menu'>Menu</NavLink></span>
            , <span className='hover:underline'><NavLink to='/catalogue'>Catalogue</NavLink></span>, <span className='hover:underline'><NavLink to='/shipping'>Shipping</NavLink></span>
            , <span className='hover:underline'><NavLink to='/FAQ'>FAQ</NavLink></span>, <span className='hover:underline'><NavLink to='/contact'></NavLink>Contact</span> (note that contact us form – doesn’t work).
            </p>
            <GreenBtn text={"Read More"}/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About