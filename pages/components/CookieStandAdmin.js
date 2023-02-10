import CookieStandTable from "./ReportTable";
import CookieStandForm from "./CreateForm";
import Footer from "./Footer";
import useResource from '../../hooks/useResource';

export default function CookieStandAdmin() {

    const { resources, deleteResource } = useResource();

    return (
        <>  <main>
            <CookieStandForm />
            <CookieStandTable stands={resources || []} deleteStand={deleteResource} />
            {/* <CreateForm newStandHandler={newStandHandler} />
        {stands.length > 0 ? (
          <ReportTable stands={stands} />
        ) : (
          <h1>report coming soon</h1>
        )} */}
            </main>
            <footer>
            <Footer locations={stands.length} />
            </footer>
        </>
    );
}