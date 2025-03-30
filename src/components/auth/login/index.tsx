import Greeting from './Greeting.tsx';

import cl from './style.module.css';

const LoginPage = () => {
    const name = 'Alex';
    return (
        <div className={cl.title}>
            <h1>LoginPage</h1>
            <Greeting name={name} />
        </div>
    );
};

export default LoginPage;
