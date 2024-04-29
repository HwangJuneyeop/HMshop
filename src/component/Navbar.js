import React from 'react'

import { FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { BiLogInCircle } from "react-icons/bi";
import { Container } from 'react-bootstrap';
import {useAuthContext} from '../hooks/useAuthContext'
import {useLogout} from '../hooks/useLogout'

const Navbar = () => {
    const { user } = useAuthContext();
    const { logout } = useLogout();
    const menuList = [
        'Women',
        'Men',
        'Baby',
        'Kids',
        'H&M HOME',
        'Sport',
        'Sale',
        '지속가능성'
    ]

    const navigate = useNavigate();

    const search = (event) => {
        if (event.key === "Enter") {
            let keyword = event.target.value;
            //리액트에서 input의 값을 읽어올 때는 event.target.value
            //url에 keyword를 넘겨줌
            navigate(`/?q=${keyword}`)
        }
    }

    return (
        <Container>
            <div className="login_section">
                {/* 로그인이 되어있지 않은 경우 */}
                {
                    !user && (
                        <ul className='login_area'>
                            <li><Link to='/login'>{FaRegUser} 로그인</Link></li>
                            <li><Link to='/signup'>{BiLogInCircle} 회원가입</Link></li>
                        </ul>
                    )
                }

                {/* 로그인이 되어있는 경우 */}
                {
                    user && (
                        <ul className='login_area'>
                            <li><strong>환영합니다. {user.displayName}
                            </strong></li>
                            <li>
                                <button type="button" onClick={logout}>
                                    로그아웃
                                </button>
                            </li>
                        </ul>
                    )
                }
            </div>
            <div className='logo_section'>
                <h1 className='logo'>
                    <Link to='/'>
                        <img src="https://www2.hm.com/hm-logo.png" alt="로고" />
                    </Link>
                </h1>
            </div>
            <div className="gnb_section">
                <ul className='gnb'>
                    {menuList.map((menu, index) => (
                        <li key={index}>{menu}</li>
                    ))}
                </ul>
                <div className="search_area">
                    <label htmlFor="seach" className='search_box'>
                        <IoIosSearch size='20' />
                        <input type="text" id="search" placeholder='제품검색'
                            onKeyDown={(event) => search(event)} />
                    </label>
                </div>
            </div>
        </Container>
    )
}

export default Navbar