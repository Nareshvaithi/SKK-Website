import { useState } from "react";
import { MdVideoSettings } from "react-icons/md";
const EditBannerVideo = ()=>{
    const [openbannervideo,setOpenBannerVideo] = useState(false);
    return(
        <>
        <div>
            <div className="flex flex-wrap justify-evenly pt-5">
            <div className="bg-white border border-gray-300 shadow-md shadow-gray-200 rounded-lg transition-all duration-500 px-7 py-5 text-black flex items-center gap-3">
                    <div className="rounded-full p-3 bg-red-900 text-white">
                        <MdVideoSettings size={30}/>
                    </div>
                    <div className="py-2">
                        <p className="text-lg">Banner video</p>
                        <button onClick={()=>{setOpenBannerVideo(true)}} className="bg-blue-300 text-white px-4 py-1 rounded-md mt-3">Edit</button>
                    </div>
                </div>
                <div className="bg-white border border-gray-300 shadow-md shadow-gray-200 rounded-lg transition-all duration-500 px-7 py-5 text-black flex items-center gap-3">
                    <div className="rounded-full p-3 bg-red-900 text-white">
                        <MdVideoSettings size={30}/>
                    </div>
                    <div className="py-2">
                        <p className="text-lg">Banner video</p>
                        <button className="bg-blue-300 text-white px-4 py-1 rounded-md mt-3">Edit</button>
                    </div>
                </div>
                <div className="bg-white border border-gray-300 shadow-md shadow-gray-200 rounded-lg transition-all duration-500 px-7 py-5 text-black flex items-center gap-3">
                    <div className="rounded-full p-3 bg-red-900 text-white">
                        <MdVideoSettings size={30}/>
                    </div>
                    <div className="py-2">
                        <p className="text-lg">Banner video</p>
                        <button className="bg-blue-300 text-white px-4 py-1 rounded-md mt-3">Edit</button>
                    </div>
                </div>
                <div className="bg-white border border-gray-300 shadow-md shadow-gray-200 rounded-lg transition-all duration-500 px-7 py-5 text-black flex items-center gap-3">
                    <div className="rounded-full p-3 bg-red-900 text-white">
                        <MdVideoSettings size={30}/>
                    </div>
                    <div className="py-2">
                        <p className="text-lg">Banner video</p>
                        <button className="bg-blue-300 text-white px-4 py-1 rounded-md mt-3">Edit</button>
                    </div>
                </div>
            </div>
        </div>
       {openbannervideo && <div className="flex justify-center items-center">
            <div className="bg-white w-[600px] rounded-xl p-5">
                <form action="">
                <div className="mb-4">
                <label
                  htmlFor="videoName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter Youtube video Name 
                </label>
                <input
                  type="text"
                  id="videoName"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="videoName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter Youtube video embed link 
                </label>
                <input
                  type="text"
                  id="videoName"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
                    <div className="flex justify-end gap-5">
                        <button onClick={()=>setOpenBannerVideo(false)} className="bg-white rounded-xl border border-gray-400 px-3 py-2 hover:bg-black/10">cancel</button>
                        <button className="bg-green-600 hover:bg-green-400 text-white px-3 py-2 rounded-xl">save</button>
                    </div>
                </form>
            </div>
        </div>}
        </>
    )
}


export default EditBannerVideo;