import { Link } from "react-router-dom";

const UpdateProfile = () => {
    return (
        <div>
            <div className="flex flex-row gap-8">
                {/* user information */}
                <div >
                    {/* left side */}
                    <div >
                        <img src='https://i.ibb.co/NKsXwgk/tengyart-g-Cfw-D2qb8v-Y-unsplash.jpg' alt="" className="md:w-[120px] md:h-[120px] w-[100px] h-[100px]  rounded-full  bg-gradient-to-r p-[4px] from-teal-400 via-sky-100 to-sky-600 object-cover " />
                    </div>
                    <div>
                        <h1 className=" text-sm font-semibold text-blue-300">Ishrat Jahan</h1>
                        <p className=" text-sm text-blue-300">Ishrat@gmail.com</p>
                    </div>
                    <div>
                        <Link to={'applyTrainerForm'}><button className="btn btn-sm mt-3">Apply to be a trainer</button></Link>
                    </div>
                </div>
                {/* right side */}
                <div className="w-2/3 ">
                    <div className="flex flex-row justify-evenly   items-center">
                        <h1 className="text-2xl p-4 w-full font-bold text-left from-sky-600  via-sky-200 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">My Profile</h1>
                        {/*  <button
               type="submit"
               className="text-white   my-3 bg-sky-50 hover:bg-sky-50focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  "
               style={{
                 background:
                   "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
               }}
             >
               Update
             </button> */}
                        <label
                            htmlFor="my_modal_7"
                            className=" rounded-full px-4 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm ml-10 transition-all duration-150 ease-in-out"
                        >
                            Update
                        </label>

                        {/* Put this part before </body> tag */}
                        <input
                            type="checkbox"
                            id="my_modal_7"
                            className="modal-toggle"
                        />
                        <div className="modal" role="dialog" style={{ padding: "100px" }}>
                            <div className="modal-box p-2 rounded-lg " >
                                <div className="flex flex-col py-5 rounded-lg   items-center justify-center" style={{
                                    background:
                                        "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
                                }}>
                                    <form className="max-w-[70%] mx-auto  ">
                                        <div className="flex lg:flex-row my-5  md:flex-row flex-col gap-10 items-center">
                                            <div className="relative z-0 w-full  group">
                                                <input
                                                    type="text"
                                                    name="title" value={'Nipi'}
                                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-50 peer"
                                                    placeholder=" "
                                                    required
                                                />
                                                <label className="peer-focus:font-medium absolute text-sm text-sky-50  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                                    Full Name
                                                </label>
                                            </div>
                                            <div className="relative z-0 w-full  group">
                                                <input
                                                    type="text"
                                                    name="title" value={'ishrat12@gmail.com'}
                                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-50 peer"
                                                    placeholder=" "
                                                    required
                                                />
                                                <label className="peer-focus:font-medium absolute text-sm text-sky-50  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                                    Email
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex lg:flex-row   md:flex-row flex-col gap-10 items-center py-10">
                                            <div className="relative z-0 w-full mb-5 group">
                                                <input
                                                    type="text"
                                                    name="title" value={'01823468392'}
                                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-50 peer"
                                                    placeholder=" "
                                                    required
                                                />
                                                <label className="peer-focus:font-medium absolute text-sm text-sky-50  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                                    Phone Number
                                                </label>
                                            </div>
                                            <div className="relative z-0 w-full mb-5 group">
                                                <input
                                                    type="text"
                                                    name="title" value={'Experience'}
                                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-50 peer"
                                                    placeholder=" "
                                                    required
                                                />
                                                <label className="peer-focus:font-medium absolute text-sm text-sky-50  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                                    Experience
                                                </label>
                                            </div>
                                        </div>




                                    </form>
                                    <button className="text-white border border-white hover:scale-125 transition-all ease-in-out my-3 bg-sky-50 hover:bg-sky-50focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  "
                                        style={{
                                            background:
                                                "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
                                        }}>Update</button>
                                </div>

                            </div>
                            <label className="modal-backdrop" htmlFor="my_modal_7">
                                Close
                            </label>
                        </div>
                    </div>
                    <div className="h-[1px]  w-full bg-gradient-to-tr from-teal-400 via-sky-100 to-sky-600"> </div>
                    <div className="text-sky-200 font-semibold">
                        {/*   <div className="flex lg:flex-row md:flex-row flex-col gap-12 ">
               <label className="form-control w-full max-w-xs peer-focus:font-medium absolute text-sm text-sky-50  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
               <div className="label">
                 <span className="label-text  text-sky-200 font-semibold">Full Name</span>
                
               </div>
               <input type="text" name="name" placeholder="Full Name" className="input input-bordered w-full max-w-xs" />
              
             </label>
               <label className="form-control w-full max-w-xs">
               <div className="label">
                 <span className="label-text text-sky-200 font-semibold">Email</span>
                
               </div>
               <input type="text" name="name" placeholder="Email" className="input input-bordered w-full max-w-xs" />
              
             </label>
               </div>
               <div className="flex lg:flex-row md:flex-row flex-col gap-12 ">
               <label className="form-control w-full max-w-xs">
               <div className="label">
                 <span className="label-text text-sky-200 font-semibold">Role</span>
                
               </div>
               <input type="text" name="name" placeholder="Role" className="input input-bordered w-full max-w-xs" />
              
             </label>
               <label className="form-control w-full max-w-xs">
               <div className="label">
                 <span className="label-text text-sky-200 font-semibold">Mobile Number</span>
                
               </div>
               <input type="text" name="name" placeholder="Mobile Number" className="input input-bordered w-full max-w-xs" />
              
             </label>
               </div> */}
                        <form className="max-w-[70%] mx-auto">
                            <div className="flex lg:flex-row my-5 md:flex-row flex-col gap-10 items-center">
                                <div className="relative z-0 w-full  group">
                                    <input
                                        type="text"
                                        name="title" value={'Nipi'}
                                        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-50 peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label className="peer-focus:font-medium absolute text-sm text-sky-50  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Full Name
                                    </label>
                                </div>
                                <div className="relative z-0 w-full  group">
                                    <input
                                        type="text"
                                        name="title" value={'ishrat12@gmail.com'}
                                        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-50 peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label className="peer-focus:font-medium absolute text-sm text-sky-50  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Email
                                    </label>
                                </div>
                            </div>
                            <div className="flex lg:flex-row  md:flex-row flex-col gap-10 items-center my-5">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input
                                        type="text"
                                        name="title" value={'01823468392'}
                                        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-50 peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label className="peer-focus:font-medium absolute text-sm text-sky-50  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Phone Number
                                    </label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input
                                        type="text"
                                        name="title" value={'Experience'}
                                        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-50 peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label className="peer-focus:font-medium absolute text-sm text-sky-50  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Experience
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;