import React , {Component}  from "react"
import { connect } from "react-redux"
import "./AdCreatePage.css"
import { submitInformation } from "../../actions";

class AdCreatePage extends Component {
	static defaultProps =  {info : { title : "" , text : "あああ"}};

	handleSubmit = (event) => {
		event.preventDefault();
		const info = {title : event.target.title.value , text : event.target.text.value}
		this.props.dispatch(submitInformation(info));
	}

	renderConfirm() {
		let title = this.props.title
		if(title) {
			return (<div>タイトル : {this.props.title}</div>);
		} else {
			return
		}
	}


	render() {
		return (
			<div className="AdCreatePage">
				<form onSubmit={this.handleSubmit}>
					<fieldset>
						<legend>広告の情報</legend>
						タイトル : <input type="text" name="title" size="20"/>
						テキスト : <input type="text" name="text" size="40"/>
					</fieldset>
					<input type="submit" value="送信"/>
				</form>
				{this.renderConfirm()}
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log(state)
  return {
    title: state.AdInformation.info.title,
    text: state.AdInformation.info.text
  };
}

export default connect(mapStateToProps , null)(AdCreatePage)
