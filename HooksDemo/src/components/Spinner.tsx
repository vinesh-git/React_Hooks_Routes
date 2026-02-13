//create a spinner component
import './Spinner.css';

type SpinnerProps = {
    isLoading: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ isLoading }) => {
    if (!isLoading) return null;

    return (
        <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
        </div>
    );
}

export default Spinner;

