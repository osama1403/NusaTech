import { ReactElement } from "react"
const Circles = (): ReactElement => {
  return (
    <div className=" flex items-center justify-center rounded-full relative w-[400px] h-[400px] bg-[#3D0B67] ">
      <div className=" flex items-center justify-center rounded-full absolute w-[307px] h-[307px] bg-[#460E73] ">
        <div className="w-[230px] h-[230px] rounded-full bg-[#511780]" />
      </div>
    </div>
  )

}
export default Circles