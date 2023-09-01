import { Button, Htag, P, Rating, Tag } from '@/components';
import { useEffect, useState } from 'react';

export default function Home(): JSX.Element {
	const [counter, setCounter] = useState<number>(0);

	useEffect(() => {
		console.log('Counter - ' + counter);
	});

	const [rating, setRating] = useState<number>(4);

	return (
		<>
			<Htag tag="h1">Курсы по Photoshop {counter}</Htag>
			<Button appearance="primary" arrow="right" onClick={() => setCounter((x) => x + 1)}>
				Кнопка
			</Button>
			<Button appearance="ghost" arrow="down">
				Кнопка
			</Button>
			<P size="s">Тестовый текст</P>
			<P>Тестовый текст</P>
			<P size="l">Тестовый текст</P>
			<Tag size="s">Тег</Tag>
			<Tag size="s" color="red">
				Тег
			</Tag>
			<Tag size="s" color="green">
				Тег
			</Tag>
			<Tag size="m" color="primary">
				Тег
			</Tag>
			<Tag size="m" color="gray">
				Тег
			</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />
		</>
	);
}
