import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import axios from "axios";
//import { FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
  const { googleSignIn} = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    console.log("clicked");
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          photo: result.user?.photoURL,
          role: "user",
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate("/");
        });
      })
      .catch((error) => console.log(error));
  };
 

  return (
    <div className="flex flex-col gap-3">
      <div>
        
        <button
          onClick={handleGoogleLogin}
          style={{
            background:
              "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
          }}
          className="cursor-pointer border-2 font-bold  text-sky-50 border-sky-900  w-2/3 py-2 normal rounded-xl hover:secondary-bg   items-center justify-center  transition-all flex mx-auto text-center"
          type=""
        >
          {" "}
          Login with Google{" "}
        </button>
      </div>
      
    </div>
  );
};

export default SocialLogin;
