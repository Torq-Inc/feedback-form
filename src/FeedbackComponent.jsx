import React, {useEffect, useRef, useState} from 'react';
import './FeedbackPage.css'; // Custom styles for the feedback page
import mixpanel from "mixpanel-browser";
import Success from "./Success";
import {useLocation} from "react-router-dom";


const FeedbackComponent = () => {
    const [feedback, setFeedback] = useState();
    const [reason, setReason] = useState("");
    const textAreaRef = useRef();
    const [success, setSuccess] = useState(false);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    useEffect(() => {
        console.log(id);
        if (id && id !== "") {
            mixpanel.identify(id)
            mixpanel.track("Uninstall")
        }
    }, [id])

    function feedbackHandler(e) {
        setFeedback(e)
    }

    function onChangeHandler() {
        setReason(textAreaRef.current.value);
    }

    function onSubmitHandler(e) {
        e.preventDefault();
        console.log(reason);
        mixpanel.track("Uninstall", {
            rating: feedback,
            reason: reason
        })

        window.close()
        setSuccess(true)
        setTimeout(() => {
            window.open("https://www.torq.live", "_self")
        }, 800)
    }

    return (
        <>
            {!success && <form className="container">
                <h1 className="heading">Give feedback</h1>
                <p className="para">How was your experience with us?</p>

                <div className="feedback-level">
                    <div className={feedback === "terrible" ? "level selected" : "level"}
                         onClick={() => feedbackHandler("terrible")}>
                        <i className="lar la-sad-tear"></i>
                    </div>
                    <div className={feedback === "sad" ? "level selected" : "level"}
                         onClick={() => feedbackHandler("sad")}>
                        <i className="las la-frown"></i>
                    </div>
                    <div className={feedback === "normal" ? "level selected" : "level"}
                         onClick={() => feedbackHandler("normal")}>
                        <i className="lar la-meh"></i>
                    </div>
                    <div className={feedback === "good" ? "level selected" : "level"}
                         onClick={() => feedbackHandler("good")}>
                        <i className="lar la-smile"></i>
                    </div>
                    <div className={feedback === "great" ? "level selected" : "level"}
                         onClick={() => feedbackHandler("great")}>
                        <i className="lar la-grin"></i>
                    </div>
                </div>

                <div className="feedback-msg">
                    <p className="para">
                        What are the main reasons for your rating?
                    </p>
                    <textarea ref={textAreaRef} onChange={onChangeHandler}></textarea>
                </div>


                <div className="buttons">
                    <a onClick={onSubmitHandler}>Submit</a>
                </div>
            </form>}
            {success && <Success/>}</>
    );
};

export default FeedbackComponent;
