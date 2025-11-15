import Banner from '../components/banner'
import Forms from '../components/forms'
import DeleteForms from '../components/deleteForms'
import Panel from '../components/panel'

function Admin () {
    return (
        <>
            <Banner/>
            <Forms></Forms>
            <DeleteForms></DeleteForms>
            <Panel></Panel>
        </>
    );
}

export default Admin;