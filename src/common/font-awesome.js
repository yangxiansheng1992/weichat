import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleLeft, faPlus, faSearch, faCamera, faEllipsisH
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faAngleLeft, faPlus, faSearch, faCamera, faEllipsisH
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
