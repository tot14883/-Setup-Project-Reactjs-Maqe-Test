import { ReactNode, MouseEvent } from 'react';
import '../../styles/base.css';

type CardProps = {
	children: ReactNode,
	customClassName?: string,
	onClick: (e: MouseEvent<HTMLElement>) => void,
}

const Card = ({children, customClassName, onClick}: CardProps) => {
	return (
		<div className={`card ${customClassName}`} onClick={onClick}>
			 {children}
		</div>
	)
}

export default Card;
