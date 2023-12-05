import '../../styles/base.css';

type CardTitleProps = {
	imgUrl: string,
	authorName: string,
	postedOn: string,
	customClassName?: string,
}

const CardTitle = ({imgUrl, authorName, postedOn, customClassName}: CardTitleProps) => {
	return (
		<div className={`card-title ${customClassName}`} >
			<img  src={imgUrl} className="image-avatar" />
			<label className="highlight">{authorName}</label>
			<label className="posted">{postedOn}</label>
		</div>
	)
}

export default CardTitle;
