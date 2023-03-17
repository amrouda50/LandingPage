
import SectionTitle from "./SectionTitle";
import axios from "axios";
import { ReverseArrowStyled, Content, ArrowStyled } from "./styles/General.styled"
import SlideShowPicContainer from "./SlideShowPicContainer";
import { ServicesContainer , PricingContainer } from "./styles/PricingAndServices.styled"
import { useTranslation } from "react-i18next";
import { Line } from "./styles/PricingAndServices.styled";

const SlideEventHandler = (event) =>{
console.log(event)
}
function PricingAndServices(){
    // SearchFlats(); 
    const {t , i18n} = useTranslation();
    i18n.changeLanguage("hu");
    const SharedApartments = [
        {peopleCount:"2" , price:"350-500" , currency:"$"},
        {peopleCount:"3" , price:"400-600" , currency:"$"},
        {peopleCount:"4" , price:"280-400" , currency:"$"},
        {peopleCount:"4+" , price:"200-350" , currency:"$"},
    ];
return(
    <div>
        <Content>
        <SectionTitle header={t('SectionTwoHeader')} number={2} />  
        <ServicesContainer >
        <ArrowStyled onClick={SlideEventHandler}/>
        <SlideShowPicContainer></SlideShowPicContainer>
        <ReverseArrowStyled onClick={SlideEventHandler}/>
        </ServicesContainer>

        <PricingContainer>
          <Line color="red">

          </Line>
        </PricingContainer>
        </Content>
    </div>
);}

// api request should be handled in the separate file. You can use hooks pattern to fetch them 
async function SearchFlats(){
    const options = {
        method: 'GET',
        url: 'https://airbnb13.p.rapidapi.com/search-location',
        params: {
          location: 'Budapest',
          checkin: '2023-03-13',
          checkout: '2024-03-13',
          adults: '1',
          children: '0',
          infants: '0',
          page: '1',
          currency: 'USD'
        },
        headers: {
          'X-RapidAPI-Key': 'c6c1766badmsh0a31e8b26f63fa7p164fc6jsna2a1700d7fbc',
          'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
        }
      };
    const flats = await axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    }); 
    return flats;
} 



export default PricingAndServices;
