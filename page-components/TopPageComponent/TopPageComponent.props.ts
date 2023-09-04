import { ProductModel } from '@/interfaces/product.interface';
import { TopLevelCategory, TopPageModel } from '@/interfaces/toppage.interface';

export interface TopPageComponentProps {
	firstCategory: TopLevelCategory;
	page: TopPageModel;
	products: ProductModel[];
}
