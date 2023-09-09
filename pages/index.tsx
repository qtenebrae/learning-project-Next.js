import { Button, Htag, Input, P, Rating, Tag, Textarea } from '@/components';
import { withLayout } from '@/layout/Layout';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
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
			<Input placeholder="тест" />
			<Textarea placeholder="тест" />
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{
			firstCategory,
		},
	);

	return {
		props: {
			menu,
			firstCategory,
		},
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
