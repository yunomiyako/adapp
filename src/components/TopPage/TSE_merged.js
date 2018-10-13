import Toppage_show_example from "./Toppage_show_example"
import Toppage_show_example2 from "./Toppage_show_example2"
import React , {Component}  from "react"



class TSC_merged extends Component {
	constructor(props) {
		super(props)

	}



	render() {
        
		if(this.props.reverse){
			return(

				<div >
					<Toppage_show_example exampleAds = {this.props.exampleAds} loading = {this.props.loading} />
				</div>

			)
    
		}else{
			return(
				<div > 
					<Toppage_show_example2 exampleAds = {this.props.exampleAds} loading = {this.props.loading}/>
				</div>
			)

		}


	}

}export default TSC_merged