import { Button, Htag, P } from '@/components';

export default function Home(): JSX.Element {
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
		</>
	);
}
