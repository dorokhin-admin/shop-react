import React, {useState} from 'react';

const HeaderProfile = () => {
    const [ProfileIsOpen, setProfileIsOpen] = useState(false)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [telephone, setTelephone] = useState('');

    const handleLogin =async () => {
        const res = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
        })

        const data = await res.json();
        console.log("LOGIN:", data);
        if(res.ok){
            setProfileIsOpen(false)
        }
    };

    const handleRegister =async () => {
        const res = await fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password, telephone}),
        })
        const data = await res.json();
        console.log("REGISTER:", data);
        if(res.ok){
            setProfileIsOpen(false)
        }
    }

    const handleTelephone =async () => {
        const res = await fetch('http://localhost:3001/telephone', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({telephone}),
        })
        const data = await res.json();
        console.log("telephone:", data);
        if(res.ok){
            setProfileIsOpen(false)
        }
    }
    return (
        <>
        <button className='header__profile'
                onClick={() => setProfileIsOpen(prev => !prev)}
        >
            {/*<img src="/IMAGES/avatar.png"  alt="avatar"/>*/}
            <span className="header__profile-name">Вход</span>
            <img src="/IMAGES/chevron-down.png" alt="down"/>
        </button>
        {ProfileIsOpen && (
            <div className="header__profile-overlay">
                    <div className={`header__profile-auth ${ProfileIsOpen ? 'active' : ''}`}
                onClick={(e) => e.stopPropagation()}
                >
                <button className="cross-block"
                        onClick={() => setProfileIsOpen(false)}
                >
                    <svg className='cross' width="13" height="13" viewBox="0 0 13 13">
                    <line x1="2" y1="2" x2="11" y2="11" stroke="black" strokeWidth="2"/>
                    <line x1="11" y1="2" x2="2" y2="11" stroke="black" strokeWidth="2"/>
                     </svg>
                </button>
                <div className="header__profile-header-block">
                    <h3 className="header__profile-header">Вход</h3>
                    <div className="header__profile-header-block-telephone">
                        <p className="header__profile-telephone">Телефон</p>
                        <input type="telephone" className="header__profile-input"
                                placeholder='+7 771 378 15 78'
                                value={telephone}
                                onChange={(e) => setTelephone(e.target.value)}
                        />
                    </div>
                    <button className="header__profile-inn"
                            onClick={handleLogin}
                    >
                        Вход
                    </button>
                    <div className="header__profile-footer">
                        <button className="header__profile-signUP"
                                onClick={handleRegister}
                        >Регистрация</button>
                        <button className="header__profile-Forgot">Забыли пароль?</button>
                    </div>
                </div>
                </div>
            </div>
    )
}
</>
)
    ;
};

export default HeaderProfile;