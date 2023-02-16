import Card from '../Card/Card';
import './Cards.css';

export default function Cards(props) {
   const { characters } = props;

   return (
   <div className='container-main-cards'>
   <div className='container-cards'>
      {/* {
         characters.map(({ name, species, gender, image }, index) => {
            return <Card
               key={index}
               name={name}
               gender={gender}
               species={species}
               image={image}
               onClose={props.onClose}
            />
         })
      } */}
      {characters ? (
					characters.map((character) => (
						<Card
							key={character.id}
							id={character.id}
							name={character.name}
							species={character.species}
							gender={character.gender}
							image={character.image}
							status={character.status}
							onClose={props.onClose}
						/>
					))
				) : (
					<h3>No hay persoanjes</h3>
				)}
   </div>
   </div>
   );
}
