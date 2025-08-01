import './App.css';
import { useState } from 'react';

import sandwichImage from '../src/assets/hand-drawn-flat-design-vietnamese-food-illustration.png';
import breadIcon from '../src/assets/bread_15537253.png';
import meetIcon from '../src/assets/steak_18384963.png';
import veggieIcon from '../src/assets/vegetable_9862079.png';
import cheeseIcon from '../src/assets/cheese_18384914.png';
import sauceIcon from '../src/assets/sauce_12585483.png';
import peanutIcon from '../src/assets/peanuts_18385009.png';

import IngredientSelector from './ingredient_selector';
import IngredientFilterMenu from './ingredient_filter_menu';
import { Button, Modal } from 'antd';

import { breads, sauces, meats, veggies, cheeses, extras } from '../src/ingredients';

function App() {
    const [filterModalOpen, setFilterModalOpen] = useState(false);

    const [filters, setFilters] = useState({
        bread: [...breads],
        cheese: [...cheeses],
        meat: [...meats],
        veggies: [...veggies],
        sauces: [...sauces],
        extras: [...extras]
    });

    // New state: store the generated sandwich ingredients
    const [generatedSandwich, setGeneratedSandwich] = useState({
        bread: '-',
        cheese: '-',
        meat: '-',
        veggies: '-',
        sauces: '-',
        extras: '-'
    });

    const updateFilter = (category, selectedItems) => {
        setFilters(prev => ({
            ...prev,
            [category]: selectedItems
        }));
    };

    // Utility: pick a random item from an array or return null if empty
    function getRandomItem(arr) {
        if (!arr || arr.length === 0) return null;
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // Generate sandwich only when button is pressed
    const generateSandwich = () => {
        setGeneratedSandwich({
            bread: getRandomItem(filters.bread),
            cheese: getRandomItem(filters.cheese),
            meat: getRandomItem(filters.meat),
            veggies: getRandomItem(filters.veggies),
            sauces: getRandomItem(filters.sauces),
            extras: getRandomItem(filters.extras),
        });
    };

    return (
        <div className="App">
            <img src={sandwichImage} alt="" width={360} />

            <Button color='green' variant='solid' onClick={() => setFilterModalOpen(true)}>
                Customize Ingredients
            </Button>

            <div className='ingredients-container'>
                {/* Show only the generated sandwich ingredients */}
                {generatedSandwich.bread && <IngredientSelector array={[generatedSandwich.bread]} icon={breadIcon} />}
                {generatedSandwich.cheese && <IngredientSelector array={[generatedSandwich.cheese]} icon={cheeseIcon} />}
                {generatedSandwich.meat && <IngredientSelector array={[generatedSandwich.meat]} icon={meetIcon} />}
                {generatedSandwich.veggies && <IngredientSelector array={[generatedSandwich.veggies]} icon={veggieIcon} />}
                {generatedSandwich.sauces && <IngredientSelector array={[generatedSandwich.sauces]} icon={sauceIcon} />}
                {generatedSandwich.extras && <IngredientSelector array={[generatedSandwich.extras]} icon={peanutIcon} />}
            </div>

            <Button color='primary' variant='solid' onClick={generateSandwich}>
                Generate
            </Button>

            <Modal
                title="🧩 Customize Your Ingredients"
                open={filterModalOpen}
                onCancel={() => setFilterModalOpen(false)}
                footer={[
                    <Button key="close" type="primary" onClick={() => setFilterModalOpen(false)}>
                        Done
                    </Button>
                ]}
            >
                <div className="filters-container">
                    <IngredientFilterMenu
                        title="Bread"
                        ingredients={breads}
                        selected={filters.bread}
                        onChange={(val) => updateFilter('bread', val)}
                    />
                    <IngredientFilterMenu
                        title="Cheese"
                        ingredients={cheeses}
                        selected={filters.cheese}
                        onChange={(val) => updateFilter('cheese', val)}
                    />
                    <IngredientFilterMenu
                        title="Meat"
                        ingredients={meats}
                        selected={filters.meat}
                        onChange={(val) => updateFilter('meat', val)}
                    />
                    <IngredientFilterMenu
                        title="Veggies"
                        ingredients={veggies}
                        selected={filters.veggies}
                        onChange={(val) => updateFilter('veggies', val)}
                    />
                    <IngredientFilterMenu
                        title="Sauces"
                        ingredients={sauces}
                        selected={filters.sauces}
                        onChange={(val) => updateFilter('sauces', val)}
                    />
                    <IngredientFilterMenu
                        title="Extras"
                        ingredients={extras}
                        selected={filters.extras}
                        onChange={(val) => updateFilter('extras', val)}
                    />
                </div>
            </Modal>
        </div>
    );
}

export default App;
