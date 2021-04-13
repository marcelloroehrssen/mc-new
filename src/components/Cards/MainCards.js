import React from "react";
import {Card} from "react-bootstrap";
import Link from "next/link";

const MainCards = ({children, href}) => (<>
    <Link href={href}>
        <Card.Link href={"ciapa te"}>
            {children}
        </Card.Link>
    </Link>
</>)

export default MainCards;