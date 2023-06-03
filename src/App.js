import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FeedbackComponent from "./FeedbackComponent";

import mixpanel from "mixpanel-browser"

mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN, {
    api_host: process.env.REACT_APP_MIXPANEL_API_HOST,
    debug: true,
    ignore_dnt:true
});


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/feedback/" element={<FeedbackComponent/>}/>
            </Routes>
        </Router>
    );
}

export default App;
