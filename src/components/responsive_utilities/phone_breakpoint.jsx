import React from "react"
import Breakpoint from "./breakpoint.jsx"
export default function PhoneBreakpoint(props) {
 return (
 <Breakpoint name= 'phone'>
 {props.children}
 </Breakpoint>
 );
}
