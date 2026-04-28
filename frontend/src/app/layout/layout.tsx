import { Outlet } from "react-router";
import Header from "../../widgets/header/header";

export default function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}
