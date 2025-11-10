import {Link} from 'react-router-dom';

export const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard Page</h1>
            <Link to="/login">Go to Login</Link>
        </div>
    );
}
export default Dashboard;