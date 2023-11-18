import { Styled } from "./styled";

import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

import { Link } from "react-router-dom";


export function Footer() {
	return (
		<Styled.Footer>
			<Link to='/homepage'>
				<IoHome color='black' size='1.5em'/>
			</Link>
			<Link to='/account'>
				<FaUser color='black' size='1.5em' />
			</Link>
		</Styled.Footer>
	)
}