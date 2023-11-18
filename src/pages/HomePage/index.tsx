import { Styled } from "./styled";
import './styled.scss'

// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

import { FiSend } from "react-icons/fi";
import { IoQrCodeOutline } from "react-icons/io5";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ModalWindow } from "../../components/ModalWindow";
import axios from "axios";


function HomePage() {
	const [modalActive, setModalActive] = useState(true)
	const [balance, setBalance] = useState(0)

	axios.post('https://90b4-94-141-125-224.ngrok-free.app/balance', {inn: localStorage.getItem('inn'), password: localStorage.getItem('password')})
		.then(response => console.log(setBalance(response.data.balance)))

	if (localStorage.getItem('inn') && localStorage.getItem('password') && localStorage.getItem('isAuthed')) {
		return (
			<Styled.Wrapper>
				<Styled.HomePage>
					<Styled.INNText>ИНН: {localStorage.getItem('inn')}</Styled.INNText>
					<Styled.BalanceText>Баланс: {balance} ₽</Styled.BalanceText>

					<Styled.SectionButtons>
						<Styled.SendMoneyButton className='open-btn' onClick={() => setModalActive(true)}><FiSend color='white' size='2rem' />Отправить деньги</Styled.SendMoneyButton>

						<Styled.ReceiveMoneyButton><IoQrCodeOutline color='white' size='2rem' />Получить деньги</Styled.ReceiveMoneyButton>
					</Styled.SectionButtons>

					<ModalWindow active={modalActive} setActive={setModalActive} />
				</Styled.HomePage>
			</Styled.Wrapper>
		)
	} else {
		// TODO: change to useNavigate
		window.location.pathname = '/auth'
		return (<></>)
	}
}


export default HomePage