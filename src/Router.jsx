import {useEffect, useState} from "react";

export const useRoute = () => {//хук
    const [path, setPath] = useState(window.location.pathname)

    useEffect(() => {
        const onLocationChange = () => {
            setPath(window.location.pathname)
        }

        window.addEventListener('popstate', onLocationChange)//сработает при монтировании компонента где будет использован компонент useRoute

        return () => {
            window.removeEventListener('popstate', onLocationChange)
        }//перед разимонтированием компонента в DOM
    }, [])

    return path//для понимания на каком url адресе сейчас находимся
}

const Router = (props) => {//компонент
    const { routes } = props//в {} path - обьект с путями с соответствующими им компонентами страниц
    const path = useRoute()//так получаем актуальный путь
    const Page = routes[path] ?? routes['*']//обращаемся к routes по ключу path, а в * должна находится ссылка на страницу с 404

    return <Page />// в </> так тк в сущности Page будет храниться ссылка на компонент определенной страницы
}

export default Router