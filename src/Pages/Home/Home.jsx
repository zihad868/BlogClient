import { useContext } from "react";
import { UserContext } from "../../Provider/AuthProvider";

const Home = () => {
    const {email, loading} = useContext(UserContext)

    console.log(email, loading)
    return (
        <div>
            <h3 className="">Home</h3>
        </div>
    );
};

export default Home;