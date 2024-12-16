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
import Drama from './Drama';
import Dance from './Dance';
import FilmStudies from './FilmStudies';
import Music from './Music';
import PE from './PE';
import SportsStudies from './SportsStudies';

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
  'drama': Drama,
  'dance': Dance,
  'film-studies': FilmStudies,
  'music': Music,
  'pe': PE,
  'sports-studies': SportsStudies,
  
};

export default subjectMapping;
