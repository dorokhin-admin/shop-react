import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="footer-content">
                        <div className="logo">
                            <img src="/IMAGES/logo.png" alt="" className="logo"/>
                        </div>
                        <ul className="footer-list">
                            <li><a href="#">О компании</a></li>
                            <li><a href="#">Контакты</a></li>
                            <li><a href="#">Вакансии</a></li>
                            <li><a href="#">Статьи</a></li>
                            <li><a href="#">Политика обработки персональных данных</a></li>
                        </ul>
                        <div className="social">
                            <div className="inst">
                                <img src="/IMAGES/instagram.png" alt=""/>
                            </div>
                            <div className="vk">
                                <img src="/IMAGES/vkontakte.png" alt=""/>
                            </div>
                            <div className="facebook">
                                <img src="/IMAGES/facebook.png" alt=""/>
                            </div>
                            <div className="odnoklassnig">
                                <img src="/IMAGES/ok.png" alt=""/>
                            </div>
                            <div className="telephone">
                                <img src="/IMAGES/telephone.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;