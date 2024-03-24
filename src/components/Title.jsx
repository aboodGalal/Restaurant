
function Title({row}) {
  return (
    <div className="relative el-center h-[100px]">
        <img className="absolute left-0 top-0 w-full h-full z-[-1]" src={row} alt="" />
        <h1 className="text-md md:text-[30px] text-white z-10">Welcome in <span className="text-main">Our Restaurant</span></h1>
    </div>
  )
}

export default Title