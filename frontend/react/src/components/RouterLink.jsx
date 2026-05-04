const RouterLink = (props) => {
    const {
        to,//наш адрес
        children,
        ...rest///все остальные сущности и свойства которые передадим
    } = props;

    const handleClick = (e) => {
        e.preventDefault();
        window.history.pushState({}, '', to);//для изменения url страницы без перезагрузки
        window.dispatchEvent(new PopStateEvent('popstate'));//тригерим попстейт чтобы наш роутер узнал что путь изменился и обновил свое сост
    }

    return (
        <a href={to} onClick={handleClick} {...rest}>
            {children}
        </a>
    )
}

export default RouterLink;