import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FeedbackComponent from "./FeedbackComponent";

import mixpanel from "mixpanel-browser"
import {useEffect} from "react";
mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN, {
    api_host: process.env.REACT_APP_MIXPANEL_API_HOST,
    debug: true,
    ignore_dnt:true
});


function FeedbackRoute() {

    return <FeedbackComponent />;
}

function App() {
    return (
        <Router>
            <Routes>

                <Route path="/feedback" element={<FeedbackComponent/>}/>
                {/*<Route path="/feedback/:id" element={<FeedbackComponent/>}/>*/}

            </Routes>
        </Router>
    );
}

export default App;
