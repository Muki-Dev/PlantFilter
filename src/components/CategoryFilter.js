import { useState } from 'react';

const CategoryFilter = ({ categories, onFilterChange }) => {
	const [selectedCategory, setSelectedCategory] = useState(null)

	const handleCategoryClick = (category) => {
		const newCategory = category === selectedCategory ? null : category;
		setSelectedCategory(newCategory);
		onFilterChange(newCategory);
	};

	return(
		<div>
			<h3>Filtrer par Categorie</h3>
			<div>
				{
					categories.map((category) => (
						<button 
						key={category}
						onClick={() => handleCategoryClick(category)}
						className={category === selectedCategory ? "active" : ""}
						>
						{category}
						</button>
						))
				}
			</div>
		</div>
		)
} 

export default CategoryFilter;