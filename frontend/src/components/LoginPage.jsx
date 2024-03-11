import "../style/LoginPage.scss";
import LoginPageFooter from "./footer";
const LoginPage = () => {
    return (
        <>
            <div className="login-container">
                <div className="login-content">
                    <div className="left-content">
                        <div className="logo"><img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" /></div>
                        <div className="message">
                            Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.
                        </div>
                    </div>
                    <div className="right-content">
                        <div className="login">
                            <input type="inputtext" name='email' id="email" placeholder="Email hoặc số điện thoại" />
                            <input type="inputtext" name="password" id='password' placeholder="Mật khẩu" />
                            <button className="login-btn">Đăng nhập</button>
                            <div className="forget-password">Quên mật khẩu ?</div>
                            <hr />
                            <button className="create-acc-btn">Tạo tại khoản mới</button>
                        </div>
                        <div className="note"><b>Tạo Trang</b> dành cho người nổi tiếng, thương hiệu hoặc doanh nghiệp.</div>
                    </div>
                </div>
                <div className="footer">
                    <LoginPageFooter />
                </div>
            </div>
        </>
    )
}

export default LoginPage;