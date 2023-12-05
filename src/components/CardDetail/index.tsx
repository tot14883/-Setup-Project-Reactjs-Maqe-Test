import '../../styles/base.css';

type CardDetailProps = {
	imgUrl: string,
	title: string,
	description: string,
	customClassName?: string,
}

const CardDetail = ({imgUrl, title, description, customClassName}: CardDetailProps) => {
	return (
		<div className={`card-body ${customClassName}`}>
			<img src={imgUrl} width="250" height="250"/>
			<div className="card-detail">
				<h3>{title}</h3>
				<label>{description}</label>
			</div>
		</div>
	)
}

export default CardDetail;
