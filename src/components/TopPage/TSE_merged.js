import ToppageShowExample from "./Toppage_show_example"
import ToppageShowExample2 from "./Toppage_show_example2"
import React , {Component}  from "react"



class TSCMerged extends Component {

	render() {
        
		if(this.props.reverse){
			return(

				<div >
					<ToppageShowExample exampleAds = {this.props.exampleAds} loading = {this.props.loading} />
				</div>

			)
    
		}else{
			return(
				<div > 
					<ToppageShowExample2 exampleAds = {this.props.exampleAds} loading = {this.props.loading}/>
				</div>
			)

		}


	}

}export default TSCMerged