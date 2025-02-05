import React from 'react';
import useWhyDidYouUpdate from 'ahooks/lib/useWhyDidYouUpdate';


type CategoriesProps = {
  value: number;
  onChangeCategory: (i: number) => void;
  // getCategories?: (categories: string[]) => void;
};

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const Categories: React.FC<CategoriesProps> = React.memo(
    ({ value, onChangeCategory }) => {
        useWhyDidYouUpdate('Categories', { value, onChangeCategory })
        // getCategories?.(categories);

        return (
            <div className="categories">
                <ul>
                    {
                        categories.map((categoryName, i) => (
                            <li
                                key={i}
                                onClick={() => onChangeCategory(i)}
                                className={value === i ? "active" : ''}>
                                {categoryName}
                            </li>
                        ))}
                </ul>
            </div>
        )
    }
)
  export default Categories;