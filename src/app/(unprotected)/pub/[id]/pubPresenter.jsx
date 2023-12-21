'use client'

// Third party library imports
import { observer } from "mobx-react-lite";

// Local imports from project
import DetailedPubView from "./pubView.jsx";

export default observer(
    function DetailedPub(props) {
        return <DetailedPubView event={props.event}/>;
    }
);
