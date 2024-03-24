import Header from '../components/header/Header'
import Title from '../components/Title'
import Footer from '../components/Footer'
import Map from '../components/Map'
import imagesNav from '../assets/images/images.png'


function Shipping() {
  return (
    <>
      <Header imagesNav={imagesNav}/>
      <Title />
      <div className='bg-[#F2F2F2]'>
        <div className='containerr flex flex-col lg:flex-row gap-[70px] mx-auto py-[30px]'>
          <div className="flex flex-col gap-[35px] lg:w-[33%] w-full">
            <div className="flex flex-col gap-[20px] text-[13px]">
              <h3 className='text-black text-lg text-center lg:text-left'>Standard Shipping Rates</h3>
              <div className="flex flex-col gap-5 text-gray-700">
                <div className="flex justify-between items-center">
                  <p className='text-gray-900'>Order</p>
                  <p className='text-gray-900'>Rate</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Duis autem vel eum iriure dolor</p>
                  <p>$12.95</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Hendrerit in vulputate velit</p>
                  <p>$15.50</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Esse molestie consequatvel</p>
                  <p>$9.95</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Illum dolore eu feugiat</p>
                  <p>$19.25</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Nulla facilisis at vero eros et</p>
                  <p>$12.95</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Accumsan et iusto odio dignissim</p>
                  <p>$15.50</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Qui blandit praesent luptatum</p>
                  <p>$9.95</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[20px] text-[13px]">
              <h3 className='text-black text-lg text-center lg:text-left'>Standard Shipping Rates</h3>
              <div className="flex flex-col gap-5 text-gray-700">
                <div className="flex justify-between items-center">
                  <p className='text-gray-900'>Order</p>
                  <p className='text-gray-900'>Rate</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Duis autem vel eum iriure dolor</p>
                  <p>$12.95</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Hendrerit in vulputate velit</p>
                  <p>$15.50</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Esse molestie consequatvel</p>
                  <p>$9.95</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Illum dolore eu feugiat</p>
                  <p>$19.25</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Nulla facilisis at vero eros et</p>
                  <p>$12.95</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Accumsan et iusto odio dignissim</p>
                  <p>$15.50</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Qui blandit praesent luptatum</p>
                  <p>$9.95</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[15px] w-full lg:w-[65%] text-sm text-center lg:text-left text-gray-700">
            <h3 className='text-black text-lg'>Shipping in</h3>
            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
            <Map h={'400px'}/>
            <h3 className='text-black text-lg'>Last Minute Gift Ideas</h3>
            <p className='text-green-500'>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt magna aliquyam eratsed diam voluptua vero eos et accusam et justo duo dolores et ea rebum.</p>
            <p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Shipping