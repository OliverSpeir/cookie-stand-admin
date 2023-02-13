import ReportTable from "./ReportTable";
import CreateForm from "./CreateForm";
import Footer from "./Footer";
import useResource from '../../hooks/useResource';

export default function CookieStandAdmin() {

    const { resources, deleteResource } = useResource();

    return (
    <>
            <CreateForm />
            <ReportTable stands={resources || []} deleteStand={deleteResource} />
            <Footer locations={resources || []} />
   </>
    );
}