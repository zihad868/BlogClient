import { Controller, useForm } from "react-hook-form";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useUser from "../../UseHook/useUser";
import Select from "react-select";

const options = [
  { value: "javascript", label: "JavaScript" },
  { value: "react", label: "React" },
  { value: "python", label: "Python" },
  { value: "django", label: "Django" },
  { value: "flask", label: "Flask" },
  { value: "ruby", label: "Ruby" },
];

const AddPost = () => {
  const [userObj, isLoading, error] = useUser();
  const { userInformation: user } = userObj;

  // console.log(user);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("data-->", data);
  };

  return (
    <div>
      <div className="mt-12">
        <SectionTitle header="Add Post" />
      </div>
      <div className="border-2 p-4 ml-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600"
              htmlFor="title"
            >
              Post Title
            </label>
            <input
              className="input input-bordered w-full"
              placeholder="Post Title"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="text-red-500">Title field is required</span>
            )}
          </div>

          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600"
              htmlFor="description"
            >
              Post Description
            </label>
            <textarea
              className="textarea textarea-bordered textarea-lg w-full max-w-full"
              placeholder="Post Description"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="text-red-500">
                Description field is required
              </span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Select Category</span>
            </label>
            <select className="border-2" {...register("category")}>
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
              <option value="Python">Python</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Upload Image</span>
            </label>
            <input
              type="file"
              className="file:border file:border-solid"
              {...register("image")}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Upload Another Image</span>
            </label>
            <input
              type="file"
              className="file:border file:border-solid"
              {...register("image2")}
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="btn w-full px-6 py-3 text-sm font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-purple-600 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
