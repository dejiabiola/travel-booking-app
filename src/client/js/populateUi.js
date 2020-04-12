import { prepareResultSection } from './helpers';



export const populateUi = function(trip) {
  const resultSection = document.getElementById('result_section');
  prepareResultSection(resultSection)
}