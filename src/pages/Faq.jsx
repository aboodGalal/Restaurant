import Header from '../components/header/Header'
import Title from '../components/Title'
import Footer from '../components/Footer'

function Faq() {
  return (
    <>
    <Header />
    <Title />
    <div className="bg-[#F2F2F2]">
      <div className="containerr flex flex-col mx-auto gap-[20px] text-center md:text-start py-[20px]">
        <h1 className='text-lg'>Frequently Asked Questions</h1>
        <div className="flex gap-[10px] items-start">
          <span className='w-[8px] h-[8px] rounded-full bg-tx mt-1 hidden md:block'></span>
          <div className="flex flex-col w-full gap-[15px] text-sm">
            <a className='hover:text-tx hover:underline text-gray-800' href="">Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</a>
            <p className='text-gray-600'>Sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
          </div>
        </div>
        <div className="flex gap-[10px] items-start">
          <span className='w-[8px] h-[8px] rounded-full bg-tx mt-1 hidden md:block'></span>
          <div className="flex flex-col w-full gap-[15px] text-sm">
            <a className='hover:text-tx hover:underline text-gray-800' href="">Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</a>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</p>
          </div>
        </div>
        <div className="flex gap-[10px] items-start">
          <span className='w-[8px] h-[8px] rounded-full bg-tx mt-1 hidden md:block'></span>
          <div className="flex flex-col w-full gap-[15px] text-sm">
            <a className='hover:text-tx hover:underline text-gray-800' href="">Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</a>
            <p className='text-gray-600'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.</p>
          </div>
        </div>
        <div className="flex gap-[10px] items-start">
          <span className='w-[8px] h-[8px] rounded-full bg-tx mt-1 hidden md:block'></span>
          <div className="flex flex-col w-full gap-[15px] text-sm">
            <a className='hover:text-tx hover:underline text-gray-800' href="">Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</a>
            <p className='text-gray-600'>Vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.</p>
          </div>
        </div>
        <div className="flex gap-[10px] items-start">
          <span className='w-[8px] h-[8px] rounded-full bg-tx mt-1 hidden md:block'></span>
          <div className="flex flex-col w-full gap-[15px] text-sm">
            <a className='hover:text-tx hover:underline text-gray-800' href="">Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</a>
            <p className='text-gray-600'>Et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default Faq