import Art from './Art';
import History from './History';
import Math from './Math';
import DesignAndTech from './DesignAndTech';
import FoodAndNutrition from './FoodAndNutri'
import Textiles from './Textiles'
import EnterpriseAndMarketing from './EnterpriseAndMarketing'
import Computing from './Computing'
import Geography from './Geography';
import ClassCiv from './ClassCiv';
import MFL from './MFL';

const subjectMapping = {
  art: Art,
  history: History,
  math: Math,
  'design-and-technology': DesignAndTech,
  'food-preparation-and-nutrition': FoodAndNutrition,
  textiles: Textiles,
  'enterprise-and-marketing': EnterpriseAndMarketing,
  computing: Computing,
  'geography': Geography,
  'classical-civilisation': ClassCiv,
  'mfl': MFL,
  
};

export default subjectMapping;
