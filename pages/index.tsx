import { Button, Htag, P, Rating, Tag } from '@/components';
import { withLayout } from '@/layout/Layout';
import { useEffect, useState } from 'react';

function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(4);

	return (
		<>
			<Htag tag="h1">Курсы по Photoshop</Htag>
			<Button appearance="primary" arrow="right">
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

export default withLayout(Home);
