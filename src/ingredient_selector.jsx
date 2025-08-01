

export default function IngredientSelector({ array, icon }) {

    const randomItem = array[Math.floor(Math.random() * array.length)];


    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            minWidth: '120px',
        }}>
            <img src={icon} alt="" width={32} />
            <p>
                {randomItem}
            </p>

        </div>
    )
}