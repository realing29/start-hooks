import React from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (Component) => (params) => {
    const isAuth = localStorage.getItem("auth") === "token";

    const onLogOut = () => {
        localStorage.removeItem("auth");
        window.location.reload();
    };
    const onLogin = () => {
        localStorage.setItem("auth", "token");
        window.location.reload();
    };
    return (
        <CardWrapper>
            <Component
                {...params}
                onLogOut={onLogOut}
                onLogin={onLogin}
                isAuth={isAuth}
            />
        </CardWrapper>
    );
};

export default withFunctions;
