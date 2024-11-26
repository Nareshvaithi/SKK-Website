import { MdVideoSettings } from "react-icons/md";
const EditBannerVideo = ()=>{
    return(
        <div>
            <div className="flex flex-wrap justify-evenly pt-5">
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
            <div className="fixed">dd</div>
        </div>
    )
}


export default EditBannerVideo;