'use client'

import DetailedPubView from "../views/detailedPubView.jsx";
import { observer } from "mobx-react-lite";

export default observer(
    function DetailedPub(props) {
        return <DetailedPubView event={props.event}/>;
    }
);
