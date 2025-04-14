import { useNavigate } from 'react-router';

const SingleAssetPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1 onClick={() => navigate(-1)}>Go Back</h1>
        </div>
    );
};

export default SingleAssetPage;
