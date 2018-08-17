import React from "react"
import Breakpoint from "./breakpoint.jsx"
export default function TabletBreakpoint(props) {
 return (
 <Breakpoint name='tablet'>
 {props.children}
 </Breakpoint>
 );
}