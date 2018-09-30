import React from "react"
import { Image } from "semantic-ui-react"

const ImageGroupSize = (srcs) =>  {
	const images = srcs.map(src => {
		return <Image key={src} src={src} />
	})
	return (
		<Image.Group size='small'>
			{images}
		</Image.Group>
	)
}

export default ImageGroupSize