import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';

const strore = createStore(rootReducer);

export default strore;
