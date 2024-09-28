import { useRouteError } from "react-router-dom";

const ErrorComponent = ()=>{
    const err = useRouteError();
    console.log(err);
    return (
        <>
            <div className="error-component">
                <h1>
                    {/* Opps!! Somthing went Wrong! 😑 */}
                    Error {err.status}: Page {err.statusText}
                </h1>
            </div>
        </>
    )
}

export default ErrorComponent;