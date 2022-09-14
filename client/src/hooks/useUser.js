const { useContext } = require("react")
const { default: UserContext } = require("../Context/UserContext")


const useUser = () => {
    const { user } = useContext(UserContext);
    return user;
}

export default useUser;