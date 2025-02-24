
const PlantList = ({ plants, selectedCategory }) => {
	const filteredPlants = selectedCategory 
		? plants.filter((plant) => plant.category === selectedCategory)
		: plants;

		return(
			<div>
				<h3>Liste des plantes</h3>
				<ul>
				{filteredPlants.map((plant) => (
						<li key={plant.id}>{plant.name}</li>
					))}
				</ul>
			</div>
			);
};

export default PlantList;