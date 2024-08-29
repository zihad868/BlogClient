import { useForm } from "react-hook-form";
import signUp from "../../../assets/Authentication/signUp.jpg";
import { Link, json, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../../../utils";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { password, password2, image } = data;
    if (password !== password2) {
      return handleError("Passwords do not match");
    }

    // Upload Image
    const formData = new FormData();
    formData.append("image", image[0]);

    const imgbbURL = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMAGE_BB_API
    }`;
    try {
      const response = await fetch(imgbbURL, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      const imageUrl = result?.data?.display_url;

      if (!imageUrl) {
        return handleError("Image upload failed");
      }

      const { name, email, password } = data;
      const signupData = { name, email, password, image: imageUrl };

      try {
        const signupResponse = await fetch(
          `${import.meta.env.VITE_BACKEND_API}/auth/signup`,
          {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(signupData)
          }
        );

        const result = await signupResponse.json();
        
        console.log(result)
        const {message, success} = result;

        if(success){
          handleSuccess(message)
          setTimeout(() => {
          navigate('/authentication/signin')
        }, 4000);
        }
        if(success === false){
          handleError(message)
        }
        
      } catch (error) {
        console.log('Please try again')
      }
    } catch (error) {
      return handleError("Internal Server Error");
    }
  };

  return (
    <>
      <h1 className="text-center text-2xl font-bold text-sky-400 mt-8">
        Sign-up Now
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 m-5">
        <div>
          <img src={signUp} alt="" />
        </div>

        <div className="mt-15">
          <div className="text-xl text-center text-gray-500 uppercase mt-8">
            Signup with email and password
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
                className="input input-bordered"
              />
              <p className="mt-2">
                {errors.name && (
                  <span className="text-red-400">Name field is required</span>
                )}
              </p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-400">Email field is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
                className="input input-bordered"
              />
              {errors.password && (
                <span className="text-red-400">Password field is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                {...register("password2", { required: true })}
                className="input input-bordered"
              />
              {errors.password2 && (
                <span className="text-red-400">
                  Confirm Password field is required
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Upload Image</span>
              </label>
              <input
                type="file"
                className="file:border file:border-solid ..."
                {...register("image", { required: true })}
              />
              {errors.image && (
                <span className="text-red-400">Image field is required</span>
              )}
            </div>

            <input
              className="font-bold px-2 py-1 bg-sky-400 mt-3 rounded-lg w-full hover:bg-slate-400"
              type="submit"
            />
          </form>
          <div>
            <p>
              Already have an account? Please{" "}
              <Link to="/authentication/signin" className="text-primary mt-2">
                Signin
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signup;
