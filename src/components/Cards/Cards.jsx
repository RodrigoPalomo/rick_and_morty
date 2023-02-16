import Card from '../Card/Card';
import './Cards.css';

export default function Cards(props) {
   const { characters } = props;

   return (
   <div className='container-main-cards'>
   <div className='container-cards'>
      {
         characters.map(({ name, species, gender, image }, index) => {
            return <Card
               key={index}
               name={name}
               gender={gender}
               species={species}
               image={image}
               onClose={() => window.alert("Emulamos que se cierra la card")}
            />
         })
      }
   </div>
   </div>
   );
}
