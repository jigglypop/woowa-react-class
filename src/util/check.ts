// import { redux } from ".."
// import AuthContainer from "../components/Auth/AuthContainer/AuthContainer"
// import Header from "../components/Header/Header"
// import Home from "../components/Home/Home"
// import MenuContainer from "../components/Menu/MenuContainer/MenuContainer"
// import Product from '../components/Product/Product/Product'
// import { checkApi } from "../requests/auth"
import cache from "./cache";

const check = () => {
    // 토큰 받기
    const token = cache.get('token')
    // 리덕스 체크, 상태바꾸기 함수
    const ChangeState = (_id: string, profileImage: string) => {
    }

    // 토큰 없으면 헤더 처리, auth창 닫기
    if (!token) {
        ChangeState('', '');
    }
    // 있으면 헤더 처리

}

export default check