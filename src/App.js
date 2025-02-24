 import { useState } from 'react';
 import CategoryFilter from './components/CategoryFilter';
 import PlantList from './components/PlantList';
 import './styles/App.css';

 const App = () => {
  const categories = ["Plantes d'intérieur", "Plantes d'extérieur", "Succulents"];
  const plants = [
    {id: 1, name: 'Aloe Vera', category: 'Succulents' },
    {id: 2, name: 'Ficus', category: "Plantes d'intérieur" },
    {id: 3, name: 'Lavande', category: "Plantes d'extérieur" },
  ]

  const [selectedCategory, setSelectedCategory] = useState(null);

  return(
      <div className='app-container'>
          <CategoryFilter categories={ categories } onFilterChange={setSelectedCategory} />
          <PlantList plants={plants} selectedCategory={selectedCategory} />
      </div>
    );
 }

 export default App
