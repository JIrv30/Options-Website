import Art from './Art';
import History from './History';
import Math from './Math';
import DesignAndTech from './DesignAndTech';
import FoodAndNutrition from './FoodAndNutri'
import Textiles from './Textiles'

const subjectMapping = {
  art: Art,
  history: History,
  math: Math,
  'design-and-technology': DesignAndTech,
  'food-preparation-and-nutrition': FoodAndNutrition,
  textiles: Textiles
  
};

export default subjectMapping;
