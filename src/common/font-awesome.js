import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleLeft, faPlus, faSearch, faCamera, faEllipsisH, faTimes
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faAngleLeft, faPlus, faSearch, faCamera, faEllipsisH, faTimes
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
