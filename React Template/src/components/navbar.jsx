import * as t from "./helper";

function Navbar({sample}) {
    return (
        <>
            <h1 className="bg-primary">{t.email}</h1>
            {t.help()}
        </>
    );
};




export default Navbar;