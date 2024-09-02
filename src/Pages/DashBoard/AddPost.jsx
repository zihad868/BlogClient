import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useUser from "../../UseHook/useUser";

const AddPost = () => {
  const [userObj, isLoading, error] = useUser();
  const {userInformation: user } = userObj;

  console.log(user);

  return (
    <div className="">
      <div>
        <SectionTitle header={"Add Post"} content={"This"} />
      </div>
      <div></div>
    </div>
  );
};

export default AddPost;
