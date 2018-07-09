import { connect } from "react-redux"
import AdCreatePage from "../../components/AdCreatePage/AdCreatePage"
import {
	onChangeTitle,
	onChangeDescription,
	onSetImage,
	onSetReturnType ,
	onChangeReturnText,
	onChangePictures,
	onChangeReturnPictures,
	onClickSubmit,
	postTest
} from "../../actions/AdCreate"

function mapStateToProps(state){
	window.console.log(state.AdCreateInfo.title)
	return {
		title: state.AdCreateInfo.title,
		description: state.AdCreateInfo.description,
		image: state.AdCreateInfo.image,
		returnType:state.AdCreateInfo.returnType,
		adImages : state.AdCreateInfo.adImages,
		returnImages : state.AdCreateInfo.adImages,
	}
}
function mapDispatchToProps(dispatch) {
	return {
		onChangeTitle : (value) => dispatch(onChangeTitle(value)) ,
		onChangeDescription : (value) => dispatch(onChangeDescription(value)),
		onSetImage : (image) => dispatch(onSetImage(image)),
		onSetReturnType: (id) => dispatch(onSetReturnType(id)),
		onChangeReturnText : (text) => dispatch(onChangeReturnText(text)),
		onChangePictures : (pictures) => dispatch(onChangePictures(pictures)),
		onChangeReturnPictures : (pictures) => dispatch(onChangeReturnPictures(pictures)),
		onClickSubmit : () => dispatch(onClickSubmit()),
		postTest : () => dispatch(postTest()),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AdCreatePage)
