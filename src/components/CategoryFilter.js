import { useState } from 'react';
import '../styles/CategoryFilter.css'
const CategoryFilter = ({ categories, onFilterChange }) => {
	const [selectedCategory, setSelectedCategory] = useState(null)

	const handleCategoryClick = (category) => {
		const newCategory = category === selectedCategory ? null : category;
		setSelectedCategory(newCategory);
		onFilterChange(newCategory);
	};

	return(
		<div className='category-filter'>
			<h3>Filtrer par Categorie</h3>
			<div className='buttons-container'>
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