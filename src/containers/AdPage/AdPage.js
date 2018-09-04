import { connect } from "react-redux"
import AdPage from "../../components/AdPage/AdPage"
import {
	onChangeTitle,
} from "../../actions/AdCreate"
import {
	fetchExampleData
} from "../../actions/AdPage"

const handleClick = (dispatch) => {
	dispatch(fetchExampleData())
}

const handleClickU = (dispatch) => {
	const url = "https://z98adm64i2.execute-api.ap-northeast-1.amazonaws.com/adApp/select2"
	fetch(url, {
		method:"GET"
	})
		.then((response) => response.json()).then((json) => {
			dispatch(onChangeTitle("id:" + json[0][0]))
		})
		.catch((error) => {
			window.console.log(error)
		})
}

function mapStateToProps(state){
	window.console.log(state.AdCreateInfo.title)
	return {
		title: state.AdCreateInfo.title,
		description: state.AdCreateInfo.description,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		handleClick: () => handleClick(dispatch),
		handleClickU: () => handleClickU(dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AdPage)
