import { connect } from "react-redux"
import AdCreatePage from "../../components/AdCreatePage/AdCreatePage"
import {
	onChangeTitle,
	onChangeDescription,
	onSetImage,
	onSetReturnType
} from "../../actions/AdCreate"

function mapStateToProps(state){
	window.console.log(state.AdCreateInfo.title)
	return {
		title: state.AdCreateInfo.title,
		description: state.AdCreateInfo.description,
		image: state.AdCreateInfo.image,
		returnType:state.AdCreateInfo.returnType
	}
}
function mapDispatchToProps(dispatch) {
	return {
		onChangeTitle : (value) => dispatch(onChangeTitle(value)) ,
		onChangeDescription : (value) => dispatch(onChangeDescription(value)),
		onSetImage : (image) => dispatch(onSetImage(image)),
		onSetReturnType: (id) => dispatch(onSetReturnType(id))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AdCreatePage)
