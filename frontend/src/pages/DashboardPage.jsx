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
            style={{ backgroundImage: `url('../../assets/images/TrainImg.jpeg')` }}
            
        >
            <Header />
            <FromTo />
        </div>
    );
};

export default DashboardPage;
