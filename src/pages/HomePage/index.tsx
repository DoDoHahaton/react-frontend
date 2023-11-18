import { Styled } from "./styled";


function HomePage() {
	if (localStorage.getItem('inn') && localStorage.getItem('password') && localStorage.getItem('isAuthed')) {
		return (
			<Styled.HomePage>
				<Styled.INNText>ИНН: {localStorage.getItem('inn')}</Styled.INNText>
				<Styled.BalanceText>Баланс: 0 ₽</Styled.BalanceText>

				<Styled.SectionButtons>
					<Styled.SendMoneyButton>Отправить деньги</Styled.SendMoneyButton>
					<Styled.ReceiveMoneyButton>Получить деньги</Styled.ReceiveMoneyButton>
				</Styled.SectionButtons>
			</Styled.HomePage>
		)
	} else {
		window.location.pathname = '/auth'
		return (<></>)
	}
}


export default HomePage