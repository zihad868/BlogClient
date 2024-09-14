import { Controller, useForm } from "react-hook-form";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useUser from "../../UseHook/useUser";
import { handleError, handleSuccess } from "../../utils";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import useAxiosSecure from "../../UseHook/useAxiosSecure";

import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [userObj, isLoading, error] = useUser();
  const { userInformation: user } = userObj;
  const navigate = useNavigate();

  const axiosSecure = useAxiosSecure();

  // console.log(user);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { image, image2, title, description, category } = data;

    if (!navigator.onLine) {
      handleError(
        "No internet connection. Please check your connection and try again."
      );
      return;
    }

    try {
      let imgURL = "";
      let imgURL2 = "";

      // Upload 1st Image
      const formData = new FormData();
      formData.append("image", image[0]);
      if (image?.length) {
        const response = await fetch(`${import.meta.env.VITE_IMAGEBB_API}`, {
          method: "POST",
          body: formData,
        });

        const result = await response.json();
        const imageLink = result?.data?.display_url;
        imgURL = imageLink;
      }

      // Upload 2nd Image
      const formData2 = new FormData();
      formData2.append("image", image2[0]);
      if (image2?.length) {
        const response = await fetch(`${import.meta.env.VITE_IMAGEBB_API}`, {
          method: "POST",
          body: formData2,
        });

        const result = await response.json();
        const imageLink = result?.data?.display_url;
        imgURL2 = imageLink;
      }

      const postInfo = {
        authName: user?.name,
        authEmail: user?.email,
        authImg: user?.image,
        title,
        description,
        category
      };

      if(imgURL){
         postInfo.postImg = imgURL;
      }

      if(imgURL2){
        postInfo.postImg2 = imgURL2;
      }

      const res = await axiosSecure.post(`/api/post/`, postInfo);

      if (res?.data?.success) {
        handleSuccess("Create Post Success");
        setTimeout(()=> {
          navigate('/');
        }, 2000)
      }else{
        handleError('Create Post Failed');
      }
      console.log("image-->", imgURL, imgURL2);
    } catch (error) {
      console.log("Error->", error);
      handleError(error.message || "Internal Server Error");
    }
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
      <ToastContainer />
    </div>
  );
};

export default AddPost;
