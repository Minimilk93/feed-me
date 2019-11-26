import React from 'react'

const Header = () => {
    return (
        <>
            <header className="header-bar" id="js-page-head">
                <div className="header-bar__left">
                    <a
                        id="burger-nav-button"
                        className="header-bar__nav"
                        href="#"
                    >
                        <i
                            className="i"
                            data-char=""
                            data-char-open=""
                            data-char-closed=""
                            title="A–Z"
                        ></i>
                    </a>
                </div>

                <div className="header-bar__logo">
                    <a href="/">
                        <img
                            alt="Sky Bet logo"
                            src="//bet.sbgcdn.com/static/mbet/img/content/logos/skybet-mobile-logo.png"
                        />
                    </a>
                </div>
                <div className="header-bar__right ">
                    <a
                        href="https://www.skybet.com/secure/identity/m/register/step-1/mskybet?dl=1&amp;urlconsumer=https://m.skybet.com"
                        rel="myaccount"
                        className="js-register header-bar__join"
                        target="SkyBetAccount"
                    >
                        Join
                    </a>
                    <a
                        href="https://www.skybet.com/secure/identity/m/login/mskybet?urlconsumer=https://m.skybet.com&amp;dl=1"
                        rel="myaccount"
                        className="js-login header-bar__log-in"
                        target="SkyBetAccount"
                    >
                        Log in
                    </a>
                </div>
            </header>
        </>
    )
}

export default Header
