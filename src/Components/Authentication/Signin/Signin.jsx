import { useForm } from "react-hook-form";
import signIn from "../../../assets/Authentication/login.jpg";
import { Link } from "react-router-dom";

const Signin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <h1 className="text-center text-2xl font-bold text-sky-400 mt-8">
        Sign-In Now
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 m-5">
        <div className="-mt-7">
          <img src={signIn} alt="" />
        </div>

        <div className="mt-15">
          <div className="text-xl text-center text-gray-500 uppercase mt-8">
             Please Signin
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control lg:mt-10">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
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


            <input
              className="font-bold px-2 py-1 bg-sky-400 mt-3 rounded-lg w-full hover:bg-slate-400"
              type="submit"
            />
          </form>
          <div>
            <p>
              You don't have an account? Please{" "}
              <Link to="/authentication/signup" className="text-primary mt-2">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
