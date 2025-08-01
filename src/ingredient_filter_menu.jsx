import { Checkbox, Collapse } from 'antd';
const { Panel } = Collapse;

function IngredientFilterMenu({ title, ingredients, selected, onChange }) {
    return (
        <Collapse>
            <Panel header={title} key={title}>
                <Checkbox.Group
                    style={{ display: 'flex', flexDirection: 'column', gap: 4 }}
                    value={selected}
                    onChange={onChange}
                >
                    {ingredients.map((item) => (
                        <Checkbox key={item} value={item}>
                            {item}
                        </Checkbox>
                    ))}
                </Checkbox.Group>
            </Panel>
        </Collapse>
    );
}

export default IngredientFilterMenu;
