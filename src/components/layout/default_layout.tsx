import { NavBar } from "../shared/nav/Nav";

const DefaultLayout = ({children}: any) => {
    return (
        <>
            <NavBar />
            {children}
            hello
        </>
    );
}

export default DefaultLayout;