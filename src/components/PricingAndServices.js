
import SectionTitle from "./SectionTitle";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { ReverseArrowStyled, Content, ArrowStyled } from "./styles/General.styled"
import SlideShowPicContainer from "./SlideShowPicContainer";
function PricingAndServices(){
    // SearchFlats();
    const {t , i18n} = useTranslation();
    i18n.changeLanguage("hu");
return(
    <div>
        <Content>
        <SectionTitle header={t('SectionTwoHeader')} number={2} />  
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr"} }>
        <ArrowStyled/>
        <SlideShowPicContainer></SlideShowPicContainer>
        <ReverseArrowStyled/>
        </div>
        </Content>
    </div>
);}


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
