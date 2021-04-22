import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ClassNav from './ClassNav';
import Announcement from './Announcement';
import Discussion from './Discussion';

const ClassView = () => {
    
    const current  = global.config.navcls;

    return (
        <>
        <ClassNav />
        {current == "Announcement" ? <Announcement/> : current == "Discussion" ? <Discussion/> : <h1>hello</h1>}
        </>
        
        
    );
}

export default ClassView;