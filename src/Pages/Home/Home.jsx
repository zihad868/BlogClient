import { useContext } from "react";
import { UserContext } from "../../Provider/AuthProvider";
import { UserProvider } from "../../Provider/profileProvider"; // Import UserProvider

const Home = () => {
  const { email, loading } = useContext(UserContext); // Optional: Get email and loading state from AuthProvider
  const { user, isLoading, isError } = useContext(UserProvider); // Access user data from UserProvider

  // Handle loading and error states

  console.log(user, isLoading, isError);
  if (isLoading) {
    return <div>Loading user data...</div>;
  }

  if (isError) {
    return <div>Error fetching user data.</div>;
  }

  // Display user information when available
  return (
    <div>
      <h3 className="">Home</h3>
      {user && (
        <div>
          <p>Name: {user.userInformation?.name}</p>
          <p>Email: {user.userInformation?.email}</p>
          <p>Role: {user.userInformation?.role}</p>
          <img src={user.userInformation?.image} alt="User" />
        </div>
      )}
    </div>
  );
};

export default Home;
