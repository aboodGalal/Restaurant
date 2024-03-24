import Header from '../components/header/Header'
import Title from '../components/Title'
import Footer from '../components/Footer'
import Map from '../components/Map'
import GreenBtn from '../components/GreenBtn'

function Contact() {
  return (
    <>
      <Header />
      <Title />
      <div className="bg-[#F2F2F2]">
        <div className="containerr mx-auto flex flex-col md:flex-row gap-[50px] py-[40px]">
          <div className="flex flex-col gap-[10px] lg:w-1/3 text-center lg:text-left">
            <h2 className='text-lg'>Our Contacts</h2>
            <Map h={'200px'}/>
            <p>USA 8901 Marmora Rd, Glasgow</p>
            <div className="flex justify-between items-center">
              <p className='text-gray-800'>Freephone:</p>
              <p className='text-gray-600'>+1 800 559 6580</p>
            </div>
            <div className="flex justify-between items-center">
              <p className='text-gray-800'>Telephone:</p>
              <p className='text-gray-600'>+1 800 603 6035</p>
            </div>
            <div className="flex justify-between items-center">
              <p className='text-gray-800'>Fax:</p>
              <p className='text-gray-600'>+1 800 889 9898</p>
            </div>
            <div className="flex justify-between items-center">
              <p className='text-gray-800'>Email:</p>
              <a className='text-tx underline hover:no-underline' href="">mail@demolink.org</a>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] lg:w-2/3 text-center lg:text-left">
            <h2 className='text-lg'>Contact Form</h2>
            <form>
              <div className="flex gap-[10px] items-center mb-5">
                <label className='text-gray-600' htmlFor="fname">Your Name:</label>
                <input className='h-[15px] hover:outline-none w-60%' type="text" id="fname" name="fname" />
              </div>
              <div className="flex gap-[10px] items-center mb-5">
                <label className='text-gray-600' htmlFor="email">Your Email:</label>
                <input className='h-[15px] hover:outline-none w-60%' type="email" id="lname" name="email" />
              </div>
              <div className="flex gap-[10px] items-start mb-5">
                <label className='text-gray-600' htmlFor="message">Last name:</label>
                <textarea className='hover:outline-none' id="message" name="message" placeholder="Write something.." style={{ height: '200px', width: "70%" }} defaultValue={""} />
              </div>
              <div className="flex items-center gap-[10px]">
                <GreenBtn text={'Clear'} />
                <GreenBtn text={'Send'} />
              </div>
            </form>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact