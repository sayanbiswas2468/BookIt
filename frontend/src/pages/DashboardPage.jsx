import FromTo from "../components/FromTo";
import Header from "../components/Header";
import { useAuthStore } from "../store/authStore";

const DashboardPage = () => {
    const { user, logout } = useAuthStore();

    const handleLogout = () => {
        logout();
    };

    return (
        <div
            className="bg-cover bg-center bg-no-repeat h-screen justify-center"
<<<<<<< HEAD
            style={{ backgroundImage: `url('../../assets/images/TrainImg.jpeg')` }}
=======
            style={{ backgroundImage: `url('../../assets/images/TrainImg.jpg')` }}
            
>>>>>>> b601b808f445c4220f683aa1a8c7cfda08b5b419
        >
            <Header />
            <FromTo />
        </div>
    );
};

export default DashboardPage;
