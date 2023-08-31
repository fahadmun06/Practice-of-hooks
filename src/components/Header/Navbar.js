import { Link } from 'react-router-dom'



export default function Navbar() {

    // const handleLogout = () => {
    //     signOut(auth)
    //         .then(() => {
    //             message.success("Signout successful")
    //             dispatch({ type: "SET_LOGGED_OUT" })
    //         })
    //         .catch(err => {
    //             message.error("Signout not successful")
    //         })
    // }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
                <div className="container">
                    <Link className="navbar-brand" to='/'>Logo</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/about'>About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/hooks" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Hooks
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/hooks/useState">Use State</Link></li>
                                    <li><Link className="dropdown-item" to="/hooks/useEffect">Use Effect</Link></li>
                                    <li><Link className="dropdown-item" to="/hooks/useRef">Use Ref</Link></li>
                                    <li><Link className="dropdown-item" to="/hooks/useMemo">Use Memo</Link></li>
                                    <li><Link className="dropdown-item" to="/hooks/useContext">Use Context</Link></li>
                                    <li><Link className="dropdown-item" to="/hooks/useReducer">Use Reducer</Link></li>
                                </ul>
                            </li>
                        </ul>
                        {/* <li className="nav-item"> */}
                            <button className='btn btn-info btn-sm'><Link className="nav-link" to='/auth/login'>Login</Link></button>
                        {/* </li> */}
                    </div>
                </div>
            </nav>
        </>
    )
}
