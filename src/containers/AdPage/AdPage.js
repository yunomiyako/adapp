import { connect } from 'react-redux'
import AdPage from '../../components/AdPage/AdPage'
import {
	onChangeTitle,
	onChangeDescription,
} from "../../actions/AdCreate"

const handleClick = (dispatch) => {
	const url = 'https://z98adm64i2.execute-api.ap-northeast-1.amazonaws.com/adApp/justReturnAdData';
	fetch(url, {
		method:'GET'
	})
	.then((response) => response.json())
	.then((json) => {
		dispatch(onChangeTitle(json.title));
		dispatch(onChangeDescription(json.text));
	})
	.catch((error) => {
	});
}

const handleClickU = (dispatch) => {
	const url = 'https://z98adm64i2.execute-api.ap-northeast-1.amazonaws.com/adApp/select2';
	fetch(url, {
		method:'GET'
	})
	.then((response) => response.json())
	.then((json) => {
		dispatch(onChangeTitle('id:' + json[0][0]));
		dispatch(onChangeDescription('name:' + json[0][1]));
	})
	.catch((error) => {
	});
}

function mapStateToProps(state){
	window.console.log(state.AdCreateInfo.title);
	return {
		title: state.AdCreateInfo.title,
		description: state.AdCreateInfo.description,
		image: state.AdCreateInfo.image,
	};
}
function mapDispatchToProps(dispatch) {
 	return {
 		handleClick: () => handleClick(dispatch),
 		handleClickU: () => handleClickU(dispatch),
 	};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdPage);