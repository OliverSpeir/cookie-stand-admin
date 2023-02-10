import CookieStandTable from "./ReportTable";
import CookieStandForm from "./CreateForm";
import Footer from "./Footer";
import useResource from '../../hooks/useResource';

export default function CookieStandAdmin() {

    const { resources, deleteResource } = useResource();

    return (
    <>
            <CookieStandForm />
            <CookieStandTable stands={resources || []} deleteStand={deleteResource} />
            <Footer locations={resources || []} />
   </>
    );
}